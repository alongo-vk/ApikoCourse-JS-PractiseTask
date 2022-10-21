import React from 'react'

const AppWrapper = ({title, children}) => {
  return (
    <div className="appWrapper" >
    <h1>{title}</h1>
     {children}
    </div>
  )
}

export default AppWrapper