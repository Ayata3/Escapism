import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
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
    // TODO: altテキストを渡す
    <GatsbyImage
      image={image.node.childImageSharp.gatsbyImageData}
      className={addClassName}
      alt={'alt text'}
    />
  )
}

export default Image
