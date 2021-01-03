import React from 'react'
import { FlexColumn } from '../../styled-components'
import { SearchBar, ItemsList } from '../../components'
import './style.css'

const Content = () => {

  return (
    <div className="content-container">
      <FlexColumn>
        <SearchBar />
        <ItemsList />
      </FlexColumn>
    </div>
  )
}

export default Content

