import React from 'react'
import Section from '../atoms/Section'
import Container from '../atoms/Container'
import BorderBottom from '../atoms/BorderBottom'

const Information: React.FC = ({ children }) => {
  return (
    <Container className={'bg-white'}>
      <Section
        sectionName={'Information'}
        sectionSubName={'インフォメーション'}
        className={'text-orange-400'}
      />
      <div className="text-gray-900 mx-8">
        <div className="my-4">
          <BorderBottom>
            <p className="lg:text-lg xl:text-lg font-semibold mb-2">
              ホームページをリニューアルしました
            </p>
            <p className="text-sm">
              ホームページをリニューアルしてみました。
            </p>
            <p className="text-sm text-right my-1">
              2020/04/04 23:12
            </p>
          </BorderBottom>
        </div>

        <div className="my-4">
          <BorderBottom>
            <p className="lg:text-lg xl:text-lg font-semibold mb-2">
              ホームページをリニューアルしました
            </p>
            <p className="text-sm">
              ホームページをリニューアルしてみました。
            </p>
            <p className="text-sm text-right my-1">
              2020/04/04 23:12
            </p>
          </BorderBottom>
        </div>
      </div>
      {children}
    </Container>
  )
}

export default Information
