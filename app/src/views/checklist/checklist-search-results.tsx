import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface Checklist {
  key: number
  reapitid: string
  address: string
  office: string
}

const columns: ColumnsType<Checklist> = [
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Office',
    dataIndex: 'office',
    key: 'office',
    width: 100,
    // fixed: 'left',
    filters: [
      {
        text: 'Manchester',
        value: 'Manchester',
      },
      {
        text: 'Birmingham',
        value: 'Birmingham',
      },
    ],
    // onFilter: (value, record: Checklist) => record.name.indexOf(value: any) === 0,
  },
  {
    title: 'ReapitID',
    dataIndex: 'reapitid',
    key: 'reapitid',
    width: 80,
    fixed: 'right',
  },
]

const data: Checklist[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    reapitid: 'MAN' + i + 1,
    address: 'Lake Park',
    office: 'Manchester',
  })
}

export const Checklists = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      size="middle"
      scroll={{ x: 'calc(700px + 50%)', y: 240 }}
    />
  )
}
