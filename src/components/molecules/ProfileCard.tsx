import React from 'react'
import Section from '../atoms/Section'
import BorderBottom from '../atoms/BorderBottom'
import ProfileIcon from '../atoms/ProfileIcon'

const ProfileCard: React.FC = ({ children }) => {
  return (
    <div className="bg-orange-400 py-8 px-6 md:px-32 lg:px-48 xl:px-64">
      <div className="container mx-auto lg:px-8 xl:px-24">
        <BorderBottom>
          <Section
            sectionName={'Profile'}
            sectionSubName={'プロフィール'}
            className={'text-white'}
          />
        </BorderBottom>
        <div className="grid grid-rows-4 grid-flow-col gap-0 mt-4 sm:w-auto md:w-auto">
          <div className="row-span-4">
            <ProfileIcon />
          </div>
          <h3 className="row-span-1 col-span-1 text-white font-medium text-xl lg:text-3xl xl:text-3xl -ml-6 md:ml-0 lg:ml-0 xl:ml-0">
            多口綾汰
          </h3>
          <p className="row-span-1 col-span-1 text-white text-xs lg:text-xl xl:text-xl -ml-6 md:ml-0 lg:ml-0 xl:ml-0">
            Webエンジニア / イラストレーター
          </p>
          <ul className="row-span-2 col-span-1 list-disc list-inside -mt-1 md:mt-0 lg:mt-0 xl:mt-0 -ml-6 md:ml-0 lg:ml-0 xl:ml-0">
            <li className="text-white text-xs lg:text-lg xl:text-lg">
              Twitter: @ayata_taguchi_
            </li>
            <li className="text-white text-xs lg:text-lg xl:text-lg">
              Pixiv: ayata3
            </li>
            <li className="text-white text-xs lg:text-lg xl:text-lg">
              E-mail: ayata.grobserver[at]gmail.com
            </li>
          </ul>
        </div>
        {children}
      </div>
    </div>
  )
}

export default ProfileCard
