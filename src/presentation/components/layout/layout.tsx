import React from 'react'
import { Layout } from 'antd'
import { Header } from '@/presentation/components/layout/header'
import { Content } from '@/presentation/components/layout/content'
import { Footer } from '@/presentation/components/layout/footer'

const CustomLayout: React.FC = (props) => {
  const { children } = { ...props }
  return (
    <>
      <Layout>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </>
  )
}

export default CustomLayout
