import React from 'react'

const List = ({listData}) => (
  <ul id={listData.id} className={listData.className} style={listData.style}>
    {listData.elements.map((element, index) => (
      <li key={index} id={element.id} className={element.className} style={element.style}>
        {element.content}
      </li>
    ))}
  </ul>
)

export default List