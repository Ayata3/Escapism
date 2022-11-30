import React from 'react'
import { HeadFC } from 'gatsby'

import ProfileTemplate from '../components/templates/ProfileTemplate'
import Metadata from '../components/atoms/Metadata'

const ProfilePage: React.FC = () => {
  return <ProfileTemplate />
}

export default ProfilePage

export const Head: HeadFC = () => (
  <Metadata
    title={'Profile'}
    description={
      'サークル「現実逃避跡地」で活動している多口綾汰のプロフィールです。'
    }
  />
)
