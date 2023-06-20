import React from 'react'

export const ChildMemo3 = ({name,person}) => {
    // const date=new Date()
    console.log('ChildMemo3')
  return (
    <div>
        Hello {name} {person.fname} {person.lname}
    </div>
  )
}
export const MemoizedChildMemo3 = React.memo(ChildMemo3)
