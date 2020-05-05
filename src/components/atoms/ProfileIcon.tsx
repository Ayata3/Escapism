import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProfileIcon: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FetchProfileIcon {
      file(relativePath: { eq: "profile_icon.jpg" }) {
        childImageSharp {
          fixed(width: 92, height: 92, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="float-right mt-2 mr-8">
      <Img
        fixed={data.file.childImageSharp.fixed}
        className="rounded-full border-2 border-gray-100 bg-blue-700 h-24 w-24 lg:h-40 xl:h-40 lg:w-40 xl:w-40"
      />
    </div>
  )
}

export default ProfileIcon
