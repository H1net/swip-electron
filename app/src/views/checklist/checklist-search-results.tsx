import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface Checklist {
  key: number
  reapitid: string
  address: string
  office: string
  clc: string
  landreg: boolean
  landregNamesReapit: boolean
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
    title: 'Team',
    children: [
      {
        title: 'Office',
        dataIndex: 'office',
        key: 'office',
        width: 110,
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
        title: 'CLC',
        dataIndex: 'clc',
        key: 'clc',
        width: 120,
      },
    ],
  },
  {
    title: 'Pre-Marketing',
    children: [
      {
        title: 'LandReg',
        children: [
          {
            title: 'Title saved',
            dataIndex: 'landreg',
            key: 'landreg',
            width: 80,
            filters: [
              {
                text: 'Incomplete',
                value: 'Incomplete',
              },
              {
                text: 'Filed',
                value: 'Filed',
              },
            ],
            onFilter: (value, record: Checklist) => record.office.indexOf(value) === 0,
          },
          {
            title: 'Names match Reapit',
            dataIndex: 'landregNamesReapit',
            key: 'landregNamesReapit',
            width: 80,
            filters: [
              {
                text: 'Match',
                value: 'Incomplete',
              },
              {
                text: 'Filed',
                value: 'Filed',
              },
            ],
            onFilter: (value, record: Checklist) => record.office.indexOf(value) === 0,
          },
        ],
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
    clc: 'Sowud Jahelp-Mi',
    landreg: true,
    landregNamesReapit: true,
  })
}

export const Checklists = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      size="middle"
      scroll={{ x: 'calc(800px + 50%)', y: 500 }}
    />
  )
}
