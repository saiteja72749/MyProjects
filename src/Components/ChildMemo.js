import React from 'react'

export const ChildMemo = ({children,name}) => {
    console.log('Child Memo')
  return (
    <div>
      {children} {name}
    </div>
  )
}
export const MemoizedChildMemo=React.memo(ChildMemo)
