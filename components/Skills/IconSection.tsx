import React from 'react'
import Icon from './Icon'
import { FacebookIcon } from '../Icons'

import { oswald } from '@/app/fonts'

const IconSection = () => {
  return (
    <div className={`w-full pt-8 ${oswald.className}`}>
      <div className='flex items-center justify-around'>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-primaryColor pb-5'>Front End</span>
          <div className='flex gap-4 flex-wrap'>
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
            <Icon initialAnimation='top' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
          </div>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-primaryColor pb-5'>Back End</span>
          <div className='flex gap-4 flex-wrap'>
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='N' />
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
            <Icon initialAnimation='bottom' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
          </div>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap justify-center '>
        <Icon initialAnimation='top' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
        <Icon initialAnimation='top' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={60} text='abc' />
        <Icon initialAnimation='top' icon={<FacebookIcon className='w-10 aspect-square text-white' />} progress={90} text='abc' />
      </div>
    </div>
  )
}

export default IconSection