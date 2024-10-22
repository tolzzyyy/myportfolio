import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import { Buffer } from 'buffer';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import { HiOutlineStatusOffline } from 'react-icons/hi';
import { motion } from 'framer-motion';


// Spotify API and Endpoints
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = '50daf3bba757450a934e7b75f0b61e82';
const client_secret = 'e7cbb12adbe240c2997ff9c9cd06d99e';
const refresh_token = 'AQD5WSUkUwTXtw3GhqWE_9XiVV_EZ35MJd-wwiY-bL7bJ9MalXSct6CBbxN9uPO3sK-8q3PX6qHpbeZpQ1meEssMibvWzLtsLA8A7lpfewsk-2MMdOadanOgl0CXEzrsKEw';

// Function to generate an access token
export const getAccessToken = async (client_id, client_secret, refresh_token) => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

// Fetch the currently playing song
export const getNowPlaying = async () => {
    try {
        const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (response.status > 400) {
            throw new Error('Unable to Fetch Song');
        } else if (response.status === 204) {
            throw new Error('Currently Not Playing');
        }

        const song = await response.json();
        const albumImageUrl = song.item.album.images[0].url;
        const artist = song.item.artists.map((artist) => artist.name).join(', ');
        const isPlaying = song.is_playing;
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;
        const timePlayed = song.progress_ms;
        const timeTotal = song.item.duration_ms;
        const artistUrl = song.item.album.artists[0].external_urls.spotify;

        return {
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
            timePlayed,
            timeTotal,
            artistUrl
        };
    } catch (error) {
        console.error('Error fetching currently playing song: ', error);
        return error.message.toString();
    }
};

const SpotifySoundBar = () => {
  const transition = {
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut",
    
  };

  return (
    <div className="flex space-x-[2px] items-center">
      {/* Bar 1 */}
      <motion.div
        className="w-1 h-[18px] bg-green-500"
        animate={{ scaleY: [0.6, 1.8, 0.4, 1] }}
        transition={{ ...transition, delay: 0.1 }}
      />
      {/* Bar 2 */}
      <motion.div
        className="w-1 h-[15px] bg-green-500"
        animate={{ scaleY: [0.4, 1.5, 0.3, 1] }}
        transition={{ ...transition, delay: 0.2 }}
      />
      {/* Bar 3 */}
      <motion.div
        className="w-1 h-[11px] bg-green-500"
        animate={{ scaleY: [0.6, 1, 0.5, 0.8] }}
        transition={{ ...transition, delay: 0.3 }}
      />
      {/* Bar 4 */}
      <motion.div
        className="w-1 h-[14px] bg-green-500"
        animate={{ scaleY: [0.7, 2, 0.6, 1.5] }}
        transition={{ ...transition, delay: 0.4 }}
      />
      {/* Bar 5 */}
      <motion.div
        className="w-1 h-[17px] bg-green-500"
        animate={{ scaleY: [0.5, 1.3, 0.7, 0.9] }}
        transition={{ ...transition, delay: 0.5 }}
      />
    </div>
  );
};

const Spotify = () => {
    const [nowPlaying, setNowPlaying] = useState(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            const data = await getNowPlaying();
            setNowPlaying(data);
        };

        setInterval(() => {
            fetchNowPlaying();
        }, 1000);
    }, []);

    let playerState = '';
    let secondsPlayed = 0, minutesPlayed = 0, secondsTotal = 0, minutesTotal = 0;
    let albumImageUrl = '';
    let title = '';
    let artist = '';

    if (nowPlaying != null && nowPlaying.title) {
        nowPlaying.isPlaying ? playerState = 'PLAY' : playerState = 'PAUSE';

        secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
        minutesPlayed = Math.floor(secondsPlayed / 60);
        secondsPlayed = secondsPlayed % 60;

        secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
        minutesTotal = Math.floor(secondsTotal / 60);
        secondsTotal = secondsTotal % 60;

        albumImageUrl = nowPlaying.albumImageUrl;
        title = nowPlaying.title;
        artist = nowPlaying.artist;
    } else if (nowPlaying === 'Currently Not Playing') {
        playerState = 'OFFLINE';
        title = 'User is';
        artist = 'currently Offline';
    } else {
        title = 'loading....';
        artist = '';
    }

    const pad = (n) => {
        return (n < 10) ? ("0" + n) : n;
    };

    return (
        <a style={{ textDecoration: 'none', color: 'black' }} href={playerState === 'PLAY' || playerState === 'PAUSE' ? nowPlaying.songUrl : ''}>
            <div className="nowPlayingCard flex flex-row items-center bg-gray-100 py-2 px-5 rounded-lg shadow-lg max-w-[450px] mx-auto">
                <div className="nowPlayingImage flex-shrink-0">
                    {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.songUrl}><img className="w-[100px] h-[100px] rounded-md" src={albumImageUrl} alt="Album" /></a> : ''}
                </div>
                <div id="nowPlayingDetails" className="ml-4 py-4 flex-1">
<div
  className={`nowPlayingTitle text-[15px] font-bold overflow-hidden ${
    title.length > 25 ? 'marquee-container' : 'truncate'
  }`}
>
                        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a className="text-black hover:text-blue-500" href={nowPlaying.songUrl}>{title}</a> : title}
                    </div>
                    <div className="nowPlayingArtist text-[12px] pt-2 text-gray-600">
                        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a className="text-gray-600 hover:text-blue-500" href={nowPlaying.artistUrl}>{artist}</a> : artist}
                    </div>
                    <div className="nowPlayingTime text-sm text-gray-500">
                        {pad(minutesPlayed)}:{pad(secondsPlayed)} / {pad(minutesTotal)}:{pad(secondsTotal)}
                    </div>
                </div>
                <div className="nowPlayingState ">
                    {playerState === 'PLAY' ? <SpotifySoundBar /> : playerState === 'PAUSE' ? <AiOutlinePauseCircle size={40} /> : playerState === 'OFFLINE' ? <HiOutlineStatusOffline size={40} /> : <BiErrorCircle size={40} />}
                </div>
            </div>
        </a>
    );
};

export default Spotify;
