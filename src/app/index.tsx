import ReactDOM from 'react-dom'
import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
ReactDOM.render(
  <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  , document.getElementById('main'))
