import React, { memo } from 'react'
import { Col, Collapse, Divider, Layout, Row } from 'antd'
import {
  AppleStore,
  MinhaSky,
  PlayStore,
  SkyLogo
} from '@/presentation/components/icons'
import {
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined
} from '@ant-design/icons'
import { headerBackgroundColor } from '@/presentation/components/colors'

const { Footer } = Layout
const { Panel } = Collapse

const CustomFooter: React.FC = () => {
  return (
    <>
      <Footer>
        <Row align="middle">
          <Col>
            <SkyLogo />
          </Col>
          <Col
            xs={{ offset: 6 }}
            sm={{ offset: 10 }}
            md={{ offset: 14 }}
            lg={{ offset: 16 }}
            xl={{ offset: 18 }}
            xxl={{ offset: 19 }}
          >
            <FacebookOutlined
              style={{ fontSize: '36px', marginRight: '8px' }}
            />
          </Col>
          <Col>
            <TwitterOutlined style={{ fontSize: '36px', marginRight: '8px' }} />
          </Col>
          <Col>
            <YoutubeOutlined style={{ fontSize: '36px', marginRight: '8px' }} />
          </Col>
          <Col>
            <InstagramOutlined style={{ fontSize: '36px' }} />
          </Col>
        </Row>
        <Divider />
        <Row justify="center">
          <Col
            xs={{ span: 2 }}
            md={{ span: 1 }}
            lg={{ span: 1 }}
            xxl={{ span: 1 }}
          >
            <MinhaSky />
          </Col>
          <Col
            xs={{ span: 18, offset: 3 }}
            md={{ span: 12, offset: 2 }}
            lg={{ span: 7, offset: 1 }}
            xxl={{ span: 8, offset: 1 }}
          >
            <p>
              <strong>Baixe no seu celular o app Minha SKY e divirta-se</strong>
            </p>
            <Row>
              <Col>
                <PlayStore />
              </Col>
              <Col>
                <AppleStore />
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 4 }}
            lg={{ span: 5, offset: 2 }}
            xxl={{ span: 5, offset: 1 }}
          >
            <Collapse
              defaultActiveKey={['1']}
              bordered={false}
              accordion={false}
            >
              <Panel
                style={{ backgroundColor: headerBackgroundColor }}
                header="Sobre"
                showArrow={false}
                key="1"
              >
                <p>Nossa história</p>
                <p>Imprensa</p>
                <p>Prêmios conquistados</p>
                <p>Trabalhe com a gente</p>
                <p>Promoção</p>
              </Panel>
            </Collapse>
            <Collapse
              defaultActiveKey={['1']}
              bordered={false}
              accordion={false}
            >
              <Panel
                style={{ backgroundColor: headerBackgroundColor }}
                header="Ajuda"
                showArrow={false}
                key="1"
              >
                <p>Central de ajuda</p>
                <p>Manuais</p>
              </Panel>
            </Collapse>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 4, offset: 1 }}
            lg={{ span: 5, offset: 3 }}
            xxl={{ span: 5, offset: 3 }}
          >
            <Collapse
              defaultActiveKey={['1']}
              bordered={false}
              accordion={false}
            >
              <Panel
                style={{ backgroundColor: headerBackgroundColor }}
                header="Nossas responsabilidades"
                showArrow={false}
                key="1"
              >
                <p>Conselho aos usuários</p>
                <p>Pesquisa Anatel</p>
                <p>Relatórios de transparência</p>
                <p>Responsabilidade Social</p>
                <p>Acessibilidade</p>
              </Panel>
            </Collapse>
            <Collapse
              defaultActiveKey={['1']}
              bordered={false}
              accordion={false}
            >
              <Panel
                style={{ backgroundColor: headerBackgroundColor }}
                header="SKY Empresas"
                showArrow={false}
                key="1"
              ></Panel>
            </Collapse>
          </Col>
        </Row>

        <Row style={{ marginTop: '32px' }} justify="center">
          <Col offset={1}>
            <p>Política de Privacidade</p>
          </Col>
          <Col offset={1}>
            <p>|</p>
          </Col>
          <Col offset={1}>
            <p>Contratos gerais</p>
          </Col>
          <Col offset={1}>
            <p>|</p>
          </Col>
          <Col offset={1}>
            <p>Contratos Pré-pago</p>
          </Col>
          <Col offset={1}>
            <p>|</p>
          </Col>
          <Col offset={1}>
            <p>Cancelamento</p>
          </Col>
          <Col offset={1}>
            <p>|</p>
          </Col>
          <Col offset={1}>
            <p>Ouvidoria</p>
          </Col>
          <Col offset={1}>
            <p>|</p>
          </Col>
          <Col offset={1}>
            <p>Consumidor.gov</p>
          </Col>
        </Row>
        <Row>
          <p>
            ® Todos os direitos reservados 2018. Todas as marcas SKY e qualquer
            propriedade intelectual inserida nelas são de propriedade da SKY
            Internacional AG e usadas pela SKY Serviços de Banda Larga LTDA.
            mediante licença.
          </p>
        </Row>
      </Footer>
    </>
  )
}

export default memo(CustomFooter)
