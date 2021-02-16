import React, { useContext } from 'react'
import { MovieContext } from '@/presentation/components'
import { Button, Row } from 'antd'
import { StopOutlined } from '@ant-design/icons'

const Error: React.FC = () => {
  const { state, setState } = useContext(MovieContext)
  const reload = (): void => {
    setState({ movies: [], error: '', reload: !state.reload })
  }

  return (
    <Row justify="center" align="middle">
      <StopOutlined />
      <h2>Não foi possível carregar a lista de filmes</h2>

      <Button data-testid="reload" onClick={reload}>
        Tentar novamente
      </Button>
    </Row>
  )
}

export default Error
