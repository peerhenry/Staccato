import React from 'react'

const Trow = ({rowData, ElementSlug}) => (
  <tr className={rowData.className} style={rowData.style}>
    { rowData.cells.map((cell, index)=>(
      <ElementSlug key={index} style={cell.style}> {cell.content} </ElementSlug>
    ))}
  </tr>
)

const Tpart = ({Slug, ElementSlug, data}) => (
  <Slug className={data.className} style={data.style}>
    {
      data.rows.map((row, index)=> ( <Trow key={index} rowData={row} ElementSlug={ElementSlug}/> ))
    }
  </Slug>
)

const Table = ({tableData}) => (
  <table className={tableData.className} style={tableData.style}>
    { tableData.headerData ? ( <Tpart Slug={"thead"} ElementSlug={"th"} data={tableData.headerData}/> ) : null }
    { tableData.footerData ? ( <Tpart Slug={"tfoot"} ElementSlug={"td"} data={tableData.footerData}/> ) : null }
    { tableData.bodyData ? ( <Tpart Slug={"tbody"} ElementSlug={"td"} data={tableData.bodyData}/> ) : null }
  </table>
)

export default Table