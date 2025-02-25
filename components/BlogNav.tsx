'use client'
import data from '@/public/project-data.json';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Button } from 'aspect-ui/Button';
import { Tooltip, TooltipAction, TooltipContent } from 'aspect-ui/Tooltip';
import Link from 'next/link';

const BlogNav = ({ id }: { id: number }) => {
  const currentBlogId = id - 1;
  const isNext = currentBlogId < data.length - 1;
  const isPrev = currentBlogId > 0;
  const getSlug = (id: number) => {
    var slug = "";
    if (data[id].slug) {
      slug = data[id].slug;
    }
    return slug;
  }
  const nextLink = isNext ? `/projects/${getSlug(currentBlogId + 1)}` : '/projects';
  const prevLink = isPrev ? `/projects/${getSlug(currentBlogId - 1)}` : '/projects';
  return (
    <div className='flex justify-between w-full my-4 md:my-7 lg:my-10'>


      <Tooltip direction="top" reset arrowSize={8} arrowColor="#a9cdcf">
        <TooltipAction>
          {isPrev && <Button className="bg-transparent dark:bg-transparent hover:ring-2 hover:bg-transparent dark:hover:bg-transparent hover:ring-primaryColor hover:text-primaryColor dark:hover:text-primaryColor transition-all duration-200 ease-in-out" 
          // onClick={() => {
          //   router.push(prevLink)
          // }}
          ><Link href={prevLink} className='flex items-center gap-2 '><ChevronLeftIcon className='size-5' /> <span>Previous Project</span></Link></Button>}
        </TooltipAction>
        <TooltipContent className='text-body1 !text-[11px] rounded-lg border border-primaryColor bg-primaryColor text-white bg-opacity-10 px-4 py-2 text-center backdrop-blur-xl' reset>
          <p>
            {data[currentBlogId - 1]?.title}
          </p>
        </TooltipContent>
      </Tooltip>
      <Tooltip direction="top" arrowSize={8} arrowColor="#a9cdcf">
        <TooltipAction>
          {isNext && <Button className="bg-transparent dark:bg-transparent hover:ring-2 hover:bg-transparent dark:hover:bg-transparent hover:ring-primaryColor hover:text-primaryColor dark:hover:text-primaryColor transition-all duration-200 ease-in-out" 
          // onClick={() => {
          //   router.push(nextLink)
          // }}
          ><Link href={nextLink} className='flex items-center gap-2 '><span>Next Project</span> <ChevronRightIcon className='size-5' /></Link></Button>}
        </TooltipAction>
        <TooltipContent className='text-body1 !text-[11px] rounded-lg border border-primaryColor bg-primaryColor text-white bg-opacity-10 px-4 py-2 text-center backdrop-blur-xl' reset>
          <p>
            {data[currentBlogId + 1]?.title}
          </p>
        </TooltipContent>
      </Tooltip>

      {/* {isNext && <Button className="bg-transparent dark:bg-transparent hover:ring-2 hover:bg-transparent dark:hover:bg-transparent hover:ring-primaryColor hover:text-primaryColor dark:hover:text-primaryColor transition-all duration-200 ease-in-out"><a href={nextLink} className='flex items-center gap-2 '><span>Next Project</span> <ChevronRightIcon className='size-5' /></a></Button>} */}
    </div>
  )
}

export default BlogNav