import React from 'react'
import Lottie from 'lottie-react'
import loadingAnimation from '../assets/lottie/animation_lndrk5kn.json'

export const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie className='h-[100px]' animationData={loadingAnimation} />
    </div>
  )
}