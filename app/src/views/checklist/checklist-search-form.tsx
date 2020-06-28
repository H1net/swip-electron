import React, { useState } from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

export const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false)
  const [form] = Form.useForm()

  const getFields = () => {
    const count = expand ? 10 : 6
    const children = []

    children.push(
      <Col span={8} key="address">
        <Form.Item name="address" label="Address">
          <Input placeholder="type property here.." />
        </Form.Item>
      </Col>
    )
    children.push(
      <Col span={8} key="office">
        <Form.Item name="office" label="Office">
          <Input placeholder="select office" />
        </Form.Item>
      </Col>
    )
    children.push(
      <Col span={8} key="clc">
        <Form.Item name="clc" label="CLC">
          <Input placeholder="search CLC" />
        </Form.Item>
      </Col>
    )
    if (expand) {
      children.push(
        <Col span={8} key="landreg">
          <Form.Item name="landreg" label="Land Reg Filed">
            <Input placeholder="filter landreg" />
          </Form.Item>
        </Col>
      )
    }
    // for (let i = 0; i < count; i++) {
    //   children.push(
    //     <Col span={8} key={i}>
    //       <Form.Item
    //         name={`field-${i}`}
    //         label={`Field ${i}`}
    //         rules={[
    //           {
    //             required: true,
    //             message: 'Input something!',
    //           },
    //         ]}
    //       >
    //         <Input placeholder="placeholder" />
    //       </Form.Item>
    //     </Col>
    //   )
    // }
    return children
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form form={form} name="advanced_search" className="ant-advanced-search-form" onFinish={onFinish}>
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
            }}
          >
            Clear
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand)
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  )
}
