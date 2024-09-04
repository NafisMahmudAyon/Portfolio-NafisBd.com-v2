'use client'

import React, { useState, useEffect } from 'react'

// import "../../../css/output.css"

interface ImageProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  src?: string
  alt: string
  imageCaption?: string
  captionEnabled?: boolean
  isLink?: boolean
  linkTo?: string
  target?: string
  lightBox?: boolean
  lightBoxImageSrc?: string
  lightBoxCaptionEnabled?: boolean
  lightBoxCaption?: string
  imageStyles?: string
  captionStyles?: string
  lightBoxStyles?: string
  lightBoxImageStyles?: string
  lightBoxCaptionStyles?: string
  closeButtonStyles?: string
  tagName?: string
  styles?: string
  lazyLoad?: boolean
}

export const Image: React.FC<ImageProps> = ({
  src = 'https://source.unsplash.com/random/600x600?nature=1',
  alt = 'Description of the image',
  imageCaption,
  captionEnabled,
  isLink,
  linkTo,
  target = '_self',
  lightBox,
  lightBoxImageSrc,
  lightBoxCaptionEnabled,
  lightBoxCaption,
  imageStyles = '',
  captionStyles = '',
  lightBoxStyles = '',
  lightBoxImageStyles = '',
  lightBoxCaptionStyles = '',
  closeButtonStyles = '',
  tagName,
  styles = '',
  lazyLoad,
  ...rest
}) => {
  let [customTag, setCustomTag]: any = useState(tagName || 'div')
  const CustomTag: any = customTag.toLowerCase()
  const [isOpen, setIsOpen] = useState(false)
  // const [lightboxSrc, setLightboxSrc] = useState("");

  useEffect(() => {
    if (isLink) {
      setCustomTag('a')
    } else {
      setCustomTag(tagName || 'div')
    }
  }, [isLink, tagName])

  const openLightbox = () => {
    // setLightboxSrc(src || "");
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  return (
    <CustomTag
      className={` ${styles} relative`}
      {...(isLink && {
        href: linkTo,
        target: target
      })}
    >
      <figure className='flex flex-col items-center'>
        <img
          className={` ${imageStyles} h-auto max-w-full`}
          src={src || 'https://source.unsplash.com/random/800x600?nature'}
          alt={alt || imageCaption}
          onClick={linkTo ? undefined : lightBox ? openLightbox : undefined}
          {...rest}
        />
        {captionEnabled && (
          <figcaption
            className={` ${captionStyles} text-gray-600 mt-2 text-sm`}
          >
            {imageCaption || alt || 'This is the caption for the image.'}
          </figcaption>
        )}
      </figure>
      {isOpen && (
        <div
          className={` ${lightBoxStyles} bg-black fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-auto bg-opacity-85`}
        >
          <div className='relative flex flex-col items-center p-3'>
            <button
              className={` ${closeButtonStyles} bg-red-500 text-black hover:bg-gray-200 absolute right-5 top-0 flex h-8 w-8 items-center justify-center rounded-full text-base`}
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={
                lightBoxImageSrc ||
                src ||
                'https://source.unsplash.com/random/800x600?nature'
              }
              alt={alt || 'lightbox'}
              className={` ${lightBoxImageStyles} w-full max-w-[95%] rounded-md`}
            />
            {lightBoxCaptionEnabled && (
              <figcaption
                className={` ${lightBoxCaptionStyles} text-gray-400 mt-2 text-center text-sm`}
              >
                {lightBoxCaption ||
                  imageCaption ||
                  alt ||
                  'This is the caption for the image.'}
              </figcaption>
            )}
          </div>
        </div>
      )}
    </CustomTag>
  )
}
