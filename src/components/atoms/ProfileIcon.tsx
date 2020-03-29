import React from 'react'
// import Img from 'gatsby-image'
// import { graphql } from 'gatsby'

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "profile_icon.jpg" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

const ProfileIcon: React.FC = () => {
  return (
    <div className="float-right mt-2 mr-8">
      <p className="rounded-full bg-blue-700 h-24 w-24 lg:h-40 xl:h-40 lg:w-40 xl:w-40">
        This is the profile icon
      </p>
      {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
    </div>
  )
}

export default ProfileIcon
