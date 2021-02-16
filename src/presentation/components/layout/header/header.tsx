import React, { memo } from 'react'
import { headerBackgroundColor } from '@/presentation/components/colors'
import { Col, Layout, Row, Typography, Menu } from 'antd'
import {
  Accessibility,
  DecreaseFont,
  Half,
  IncreaseFont,
  SkyLogo
} from '@/presentation/components/icons'
import {
  PlayCircleOutlined,
  MenuOutlined,
  UserOutlined,
  SearchOutlined
} from '@ant-design/icons'
const { Title } = Typography
const { Header } = Layout

const CustomHeader: React.FC = () => {
  return (
    <>
      <Header style={{ backgroundColor: headerBackgroundColor }}>
        <Row align="middle">
          <Col xl={4} lg={6} md={12} sm={20} xs={20}>
            <Title id="title-button" level={4}>
              <SkyLogo />
            </Title>
          </Col>
          <Col xl={20} lg={12} md={12} sm={4} xs={4}>
            <Menu
              theme="light"
              mode="horizontal"
              overflowedIndicator={<MenuOutlined />}
              style={{ backgroundColor: headerBackgroundColor }}
            >
              <Menu.Item key="item1">
                <Accessibility />
              </Menu.Item>
              <Menu.Item key={'item2'}>
                <Half />
              </Menu.Item>
              <Menu.Item key={'item3'}>
                <DecreaseFont />
              </Menu.Item>
              <Menu.Item key={'item4'}>
                <IncreaseFont />
              </Menu.Item>

              <Menu.Item key={'item5'} style={{ marginLeft: '10%' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    marginTop: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <PlayCircleOutlined
                    style={{ height: '32px', fontSize: '32px' }}
                  />
                  <p style={{ height: '32px', fontSize: '32px' }}>Play</p>
                </div>
              </Menu.Item>

              <Menu.Item
                key={'item6'}
                style={{
                  marginLeft: '10%'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    marginTop: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <UserOutlined style={{ height: '32px', fontSize: '32px' }} />
                  <p style={{ height: '32px', fontSize: '32px' }}>Entrar</p>
                </div>
              </Menu.Item>
              <Menu.Item key={'item7'}>
                <SearchOutlined style={{ height: '32px', fontSize: '32px' }} />
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </>
  )
}

export default memo(CustomHeader)
