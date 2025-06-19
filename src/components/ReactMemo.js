import React from 'react'

const ReactMemo = React.memo(({todo}) => {
  return (
    <li>{todo}</li>
  )
})

export default ReactMemo;