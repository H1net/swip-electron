import * as React from 'react'
import { Button, Input, Spin, Card } from 'antd'

import { withStore } from '@/src/components'
import { AdvancedSearchForm } from './checklist-search-form'
import { Checklists } from './checklist-search-results'

interface ChecklistProps extends PageProps, StoreProps {
  count: StoreStates['count']
  countAlias: StoreStates['count']
}

declare interface ChecklistState {
  resData: queryTestInfoUsingGET.Response | {}
  loading: boolean
  createWindowLoading: boolean
  asyncDispatchLoading: boolean
}

/**
 * ChecklistProps 是组件的 props 类型声明
 * ChecklistState 是组件的 state 类型声明
 * props 和 state 的默认值需要单独声明
 */

@withStore(['count', { countAlias: 'count' }])
export default class Checklist extends React.Component<ChecklistProps, ChecklistState> {
  // state 初始化
  state: ChecklistState = {
    resData: {},
    loading: false,
    createWindowLoading: false,
    asyncDispatchLoading: false,
  }

  // 构造函数
  constructor(props: ChecklistProps) {
    super(props)
  }

  componentDidMount() {
    console.log(this)
  }

  render() {
    const { resData, loading, createWindowLoading, asyncDispatchLoading } = this.state
    const { count: reduxCount, countAlias } = this.props
    return (
      <div className="layout-padding">
        <Card title="Lettings Checklist Search" className="mb-16">
          <AdvancedSearchForm />
        </Card>
        <Card title="Lettings Checklist Results" className="mb-16">
          <Checklists />
        </Card>
      </div>
    )
  }

  asyncDispatch = (dispatch: Dispatch) => {
    return new Promise(resolve => {
      this.setState({ asyncDispatchLoading: true })
      setTimeout(() => {
        const { count } = this.props
        dispatch({ type: 'ACTION_ADD_COUNT', data: count + 1 })
        this.setState({ asyncDispatchLoading: false })
        resolve()
      }, 1000)
    })
  }

  openNewWindow = () => {
    this.setState({ createWindowLoading: true })
    $tools.createWindow('Checklist').finally(() => this.setState({ createWindowLoading: false }))
  }

  requestTest() {
    this.setState({ loading: true })
    $api
      .queryTestInfo({})
      .then(resData => {
        this.setState({ resData })
      })
      .finally(() => this.setState({ loading: false }))
  }

  requestTestError() {
    this.setState({ loading: true })
    $api
      .queryTestInfoError({})
      .catch(resData => {
        this.setState({ resData })
      })
      .finally(() => this.setState({ loading: false }))
  }

  requestTestErrorModal() {
    this.setState({ loading: true })
    $api
      .queryTestInfoError({}, { errorType: 'modal' })
      .catch(resData => {
        this.setState({ resData })
      })
      .finally(() => this.setState({ loading: false }))
  }
} // class Checklist end
