import React from 'react'

import Form from '../components/Form'

const formData = {
  fields: [
    {
      labelData: {
        content: 'label for input 1: '
      },
      inputData: {

      }
    },
    {
      labelData: {
        content: 'label for input 2: '
      },
      inputData: {

      }
    }
  ]
}

const DummyForm = ({}) => (
  <div>
    <h2>Dummy Form</h2>
    <Form formData={formData}/>
  </div>
)

export default DummyForm