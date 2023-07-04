import React from 'react'
import { Icon } from "react-icons/fa";
// import { IconContexts } from 'react-icons/lib';
import { Icon1 } from "react-icons/gi";

export const IconsReact = () => {
  return (
    <div>
      {/* <IconContexts.provider value={{color: 'blue',size:'5rem'}}> */}
        <Icon color='purple' size='10rem'/>
        <Icon1 color='purple' size='10rem'/>
      {/* </IconContexts.provider> */}
    </div>
  )
}
