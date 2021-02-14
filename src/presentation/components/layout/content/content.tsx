import React from 'react'
import { Col, Layout, Row } from 'antd'

const { Content } = Layout

const CustomContent: React.FC = (props) => {
  const { children } = { ...props }
  return (
    <>
      <Content style={{ marginTop: '48px', backgroundColor: '#FAFAFF' }}>
        <div
          style={{
            boxShadow: '10px 10px 10px #8e8e8e',
            backgroundColor: '#FFFFFF'
          }}
        >
          <Row justify="space-between" align="bottom">
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <h2
                style={{
                  textAlign: 'center',
                  borderBottom: '4px solid red',
                  margin: 0,
                  marginTop: '16px'
                }}
              >
                Filmes
              </h2>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <h2
                style={{
                  textAlign: 'center',
                  margin: 0,
                  marginTop: '16px'
                }}
              >
                Séries
              </h2>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <h2
                style={{
                  textAlign: 'center',
                  margin: 0,
                  marginTop: '16px'
                }}
              >
                Canais
              </h2>
            </Col>
          </Row>
        </div>
        {children}
      </Content>
    </>
  )
}

export default CustomContent
