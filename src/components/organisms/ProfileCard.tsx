import React from 'react'
import Section from '../atoms/Section'
import BorderBottom from '../atoms/BorderBottom'
import ProfileIcon from '../atoms/ProfileIcon'
import Container from '../atoms/Container'

const ProfileCard: React.FC = ({ children }) => {
  return (
    <Container className={'bg-orange-400'}>
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
            Twitter:{' '}
            <a
              href={'https://twitter.com/ayata_taguchi_'}
              target="_blank"
              rel="noopener noreferrer"
            >
              @ayata_taguchi_
            </a>
          </li>
          <li className="text-white text-xs lg:text-lg xl:text-lg">
            Pixiv:{' '}
            <a
              href={'https://www.pixiv.net/users/2457129'}
              target="_blank"
              rel="noopener noreferrer"
            >
              ayata3
            </a>
          </li>
          <li className="text-white text-xs lg:text-lg xl:text-lg">
            E-mail: ayata.grobserver[at]gmail.com
          </li>
        </ul>
      </div>
      {children}
    </Container>
  )
}

export default ProfileCard
