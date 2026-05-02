import React from 'react'

const WellCome = ({name}) => {
  return (
    <>
    <div className='name'>Hello,{name}</div>
    <div className='name'>Year { new Date().getFullYear() }</div>
    
    </>
  )
}

export default WellCome
