import React from 'react'

export const ChildMemo2 = ({name}) => {
    const date=new Date()
    console.log('childmemo2')
  return (
    <div>
        Hello {name}. Time is {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
    </div>
  )
}
export const MemoizedChildMemo2 = React.memo(ChildMemo2)
