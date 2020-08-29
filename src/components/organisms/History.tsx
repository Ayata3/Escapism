import React from 'react'
import Section from '../atoms/Section'
import Container from '../atoms/Container'
import history from '../../data/history'

const History: React.FC = ({ children }) => {
  return (
    <Container className={'bg-white'}>
      <Section
        sectionName={'Background'}
        sectionSubName={'バックグラウンド'}
        className={'text-orange-400'}
      />
      <ul className="mt-4 text-gray-900">
        {history.map((data) => {
          return (
            <li
              className="grid grid-flow-row grid-cols-2 gap-0 sm:w-auto md:w-auto mb-2 text-xs lg:text-lg xl:text-lg"
              key={data.date}
            >
              <span className="col-span-1 text-right mr-8">
                {data.date}
              </span>
              <p className="col-span-1">{data.event}</p>
            </li>
          )
        })}
      </ul>
      {children}
    </Container>
  )
}

export default History
