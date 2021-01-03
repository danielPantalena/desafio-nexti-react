import React from 'react'
import { FlexColumn } from '../../styled-components'
import { SearchBar } from '../../components'
import './style.css'

const Content = () => {
  return (
    <div className="content-container">
      <FlexColumn>
        <SearchBar />
      </FlexColumn>
    </div>
  )
}

export default Content

