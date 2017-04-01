import React from 'react'

const Label = ({labelData}) => (
  <label htmlFor="" className={labelData.className} style={labelData.style}>
    { labelData.content }
  </label>
)

const Input = ({inputData}) => (
  <input type="text" className={inputData.className} style={inputData.style}/>
)

const Field = ({fieldData}) => (
  <p className={fieldData.className} style={fieldData.style}>
    <Label labelData={fieldData.labelData}/>
    <Input inputData={fieldData.inputData}/>
  </p>
)

const Form = ({formData}) => (
  <form action="" className={formData.className} style={formData.style}>
    <fieldset>
      <legend>{formData.legend}</legend>
      {
        formData.fields.map((field, index) => (
          <Field key={index} fieldData={field}/>
        ))
      }
    </fieldset>
  </form>
)

export default Form