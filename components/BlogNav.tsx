import React from 'react'
import data from '@/public/project-data.json';
import { Button } from 'aspect-ui/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const BlogNav = ({id }: {id: number}) => {
    const currentBlogId = id-1;
    const isNext = currentBlogId < data.length - 1;
    const isPrev = currentBlogId > 0;
    const getSlug = (id: number) =>{
        var slug = "";
        if(data[id].slug){
            slug = data[id].slug;
        }
        return slug;
    }
    const nextLink = isNext ? `/projects/${getSlug(currentBlogId + 1)}` : '/projects';
    const prevLink = isPrev ? `/projects/${getSlug(currentBlogId - 1)}` : '/projects';
  return (
    <div className='flex justify-between w-full my-4 md:my-7 lg:my-10'>
        {isPrev && <Button className="bg-transparent dark:bg-transparent hover:ring-2 hover:bg-transparent dark:hover:bg-transparent hover:ring-primaryColor hover:text-primaryColor dark:hover:text-primaryColor transition-all duration-200 ease-in-out"><a href={prevLink} className='flex items-center gap-2 '><ChevronLeftIcon className='size-5' /> <span>Previous Project</span></a></Button>}
        {isNext && <Button className="bg-transparent dark:bg-transparent hover:ring-2 hover:bg-transparent dark:hover:bg-transparent hover:ring-primaryColor hover:text-primaryColor dark:hover:text-primaryColor transition-all duration-200 ease-in-out"><a href={nextLink} className='flex items-center gap-2 '><span>Next Project</span> <ChevronRightIcon className='size-5' /></a></Button>}
    </div>
  )
}

export default BlogNav