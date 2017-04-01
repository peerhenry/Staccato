import React from 'react'

import List from '../components/List'

const listData = {
  elements: [
    {
      content: 'element 1'
    },
    {
      content: 'element 2'
    }
  ]
}

const DummyList = ({}) => (
  <div>
    <h2>Dummy List</h2>
    <List listData={listData}/>
  </div>
)

export default DummyList