import React from 'react'
import {App} from './App'
import { configure, shallow, mount} from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('<App />', () => {
  it('should have a api status indicator', () => {
    const appComponent = mount(<App/>)
    const apiStatusWrapper = appComponent.find('.api-status')
    expect(apiStatusWrapper).toBeTruthy()
  })
  it('should show api active if isApiDown prop is false', () => {
    const appComponent = mount(<App/>)
    appComponent.setProps({isApiDown: false})
    const apiStatusWrapper = appComponent.find('.api-status')
    expect(apiStatusWrapper.contains(<span className="new badge blue" data-badge-caption="ODIN is active"></span>)).toBe(true)
  })
  it('should show api inactive if isApiDown prop is true', () => {
    const appComponent = mount(<App/>)
    appComponent.setProps({isApiDown: true})
    const apiStatusWrapper = appComponent.find('.api-status')
    expect(apiStatusWrapper.contains(<span className="new badge red" data-badge-caption="ODIN is inactive"></span>)).toBe(true)
  })
})