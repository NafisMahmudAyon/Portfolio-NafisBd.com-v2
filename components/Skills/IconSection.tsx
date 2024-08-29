import React from 'react'
import Icon from './Icon'
import { CSSIcon, ExpressIcon, FigmaIcon, GitHubIcon, GitIcon, HTMLIcon, JSIcon, MongoDBIcon, MySQLIcon, NetlifyIcon, NextJSIcon, NodeIcon, PHPIcon, PostgreSQLIcon, ReactIcon, TailwindIcon, TSIcon, VercelIcon, VSCodeIcon } from '../Icons'

import { oswald } from '@/app/fonts'

const IconSection = () => {
  return (
    <div className={`w-full pt-8 ${oswald.className}`}>
      <div className='flex items-center justify-around'>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-primaryColor pb-5'>Front End</span>
          <div className='flex gap-4 flex-wrap'>
            <Icon initialAnimation='bottom' icon={<HTMLIcon className='w-10 aspect-square ' />} progress={60} text='HTML' />
            <Icon initialAnimation='bottom' icon={<CSSIcon className='w-10 aspect-square ' />} progress={60} text='CSS' />
            <Icon initialAnimation='bottom' icon={<JSIcon className='w-10 aspect-square ' />} progress={60} text='JS' />
            <Icon initialAnimation='bottom' icon={<TSIcon className='w-10 aspect-square ' />} progress={60} text='TS' />
            <Icon initialAnimation='bottom' icon={<PHPIcon className='w-10 aspect-square ' />} progress={60} text='PHP' />
            <Icon initialAnimation='bottom' icon={<TailwindIcon className='w-10 aspect-square ' />} progress={60} text='Tailwind' />
            <Icon initialAnimation='bottom' icon={<ReactIcon className='w-10 aspect-square ' />} progress={60} text='React' />
            <Icon initialAnimation='top' icon={<NextJSIcon className='w-10 aspect-square ' />} progress={60} text='Next.js' />
          </div>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-primaryColor pb-5'>Back End</span>
          <div className='flex gap-4 flex-wrap'>
            <Icon initialAnimation='bottom' icon={<NodeIcon className='w-10 aspect-square ' />} progress={60} text='Node' />
            <Icon initialAnimation='bottom' icon={<ExpressIcon className='w-10 aspect-square ' />} progress={60} text='Express' />
            <Icon initialAnimation='bottom' icon={<MySQLIcon className='w-10 aspect-square ' />} progress={60} text='MySQL' />
            <Icon initialAnimation='bottom' icon={<PostgreSQLIcon className='w-10 aspect-square ' />} progress={60} text='PostgreSQL' />
            <Icon initialAnimation='bottom' icon={<MongoDBIcon className='w-10 aspect-square ' />} progress={60} text='MongoDB' />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col '>
        <span className='text-primaryColor pb-5'>Others</span>
        <div className='flex gap-4 flex-wrap'>
          <Icon initialAnimation='top' icon={<GitIcon className='w-10 aspect-square ' />} progress={60} text='git' />
          <Icon initialAnimation='top' icon={<GitHubIcon className='w-10 aspect-square ' />} progress={60} text='GitHub' />
          <Icon initialAnimation='top' icon={<NetlifyIcon className='w-10 aspect-square ' />} progress={90} text='Netlify' />
          <Icon initialAnimation='top' icon={<VercelIcon className='w-10 aspect-square ' />} progress={90} text='Vercel' />
          <Icon initialAnimation='top' icon={<FigmaIcon className='w-10 aspect-square ' />} progress={90} text='VS Code' />
          <Icon initialAnimation='top' icon={<VSCodeIcon className='w-10 aspect-square ' />} progress={90} text='Figma' />
        </div>
      </div>
    </div>
  )
}

export default IconSection