import React, { CSSProperties, useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import SanityPhoto from '../interfaces/SanityPhoto'

import { urlFor } from './client'
const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/

const decodeAssetId = (id: any) => {
  const [, assetId, dimensions, format] = pattern.exec(id) || []
  const [width, height] = dimensions.split('x').map((v: any) => parseInt(v, 10))

  return {
    assetId,
    dimensions: { width, height },
    format,
  }
}
export function SanityImage({
  image,
  className,
  height,
  width,
  style,
  alt,
}: {
  className?: string
  height?: number
  width?: number
  style?: CSSProperties
  image: SanityPhoto
  alt?: string
}) {
  const src = urlFor(image)
  if (!image || !src) {
    return (
      <div
        style={{
          width: width || 0,
          height: height || 0,
          backgroundColor: 'black',
        }}
      ></div>
    )
  }
  const altText = alt || ''
  const { dimensions } = decodeAssetId(image.asset._ref)
  return (
    <Image
      src={src}
      alt={altText}
      width={width || dimensions.width || 0}
      height={height || dimensions.height || 0}
      className={className}
      style={style}
    />
  )
}
