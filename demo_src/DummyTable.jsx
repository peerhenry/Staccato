import React from 'react'
import Table from '../components/table'

const tableData =
{
  id: 1,
  className: 'pure-table',
  style: {
    margin: 'auto',
    marginTop: '30px',
    marginBottom: '30px',
  },
  headerData: {
    rows: [
      {
        cells: [
          { content: 'header1' },
          { content: 'header2' },
          { content: 'header5' }
        ]
      }
    ]
  },
  footerData: {
    rows: [
      {
        cells: [
          { content: 'footer1' },
          { content: 'footer2' },
          { content: 'footer3' }
        ]
      }
    ]
  },
  bodyData: {
    rows: [
      {
        cells: [
          {
            content: 'yeah'
          },
          {
            content: 'row1 cell2'
          },
          {
            content: 'row1 cell3'
          }
        ]
      },
      {
        cells: [
          {
            content: 'row2 cell2'
          },
          {
            content: 'row2 cell2'
          },
          {
            content: 'row2 cell3'
          }
        ]
      }
    ]
  }
}

const DummyTable = ({}) => (
  <div>
    <h2>Dummy Table</h2>
    <Table tableData={tableData}/>
  </div>
)

export default DummyTable