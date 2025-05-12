import React from 'react'
import Footer from './Footer'

const SideQuest = () => {
  return (
    <div className='min-h-screen w-full max-w-[1640px]  mx-auto py-6 px-8 md:px-[80px]  flex flex-col'>
      <div className='flex-grow flex justify-center items-center'>
        <div className='py-6 w-full px-[80px]'>
          <div className='flex justify-center flex-col items-center'>
            <h1 className='md:text-[200px] text-[50px] tracking-[6px] md:tracking-[20px]'>4🫤4</h1>
            <div>
              <p className='text-center w-[300px]'>
                I'll have something for you soon just let me COOK
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SideQuest