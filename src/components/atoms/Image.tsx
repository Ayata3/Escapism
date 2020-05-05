import React from 'react'
import Img from 'gatsby-image'
import { FETCH_IMAGES } from '../../queries/images'

interface ImageProps {
  filename: string
  addClassName: string
}

const Image: React.FC<ImageProps> = ({
  filename,
  addClassName,
}) => {
  const images = FETCH_IMAGES()
  const image = images.edges.find((image: any) => {
    return image.node.relativePath.includes(filename)
  })
  return (
    <Img
      className={addClassName}
      sizes={image.node.childImageSharp.sizes}
    />
  )
}

export default Image
