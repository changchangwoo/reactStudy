import React, { Children } from 'react'

interface ProgressContentsProps {
    children: React.ReactNode;
    title : string;
    subTitle : string;
}

const ProgressContents = ({title, subTitle, children} : ProgressContentsProps) => {
  return (
    <div className='ProgressContentsContainer'>
      <div className='TitleBox'>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      {children}
    </div>

  )
}

export default ProgressContents