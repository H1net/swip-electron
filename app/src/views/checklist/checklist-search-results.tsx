import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface Checklist {
  key: number
  reapitid: string
  address: string
  office: string
  item1: boolean
}

const columns: ColumnsType<Checklist> = [
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
    fixed: 'left',
  },
  {
    title: 'Office',
    dataIndex: 'office',
    key: 'office',
    width: 110,
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
    onFilter: (value, record: Checklist) => record.office.indexOf(value) === 0,
  },
  {
    title: 'Item 1',
    dataIndex: 'item1',
    key: 'item1',
    // width: 10,
    // fixed: 'left',
    filters: [
      {
        text: 'Incomplete',
        value: 'Incomplete',
      },
      {
        text: 'Complete',
        value: 'Complete',
      },
    ],
  },
  {
    title: 'ReapitID',
    dataIndex: 'reapitid',
    key: 'reapitid',
    width: 110,
    fixed: 'right',
  },
]

const data: Checklist[] = []
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    reapitid: 'MAN' + i + 1,
    address: i + ' Lake Park',
    office: 'Manchester',
    item1: false,
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
