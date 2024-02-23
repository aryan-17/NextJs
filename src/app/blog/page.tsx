import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  // title:{
  //   absolute:"Blog" //Ignore the template
  // }
  title:"Blog" // with the template
}

const page = () => {
  return (
    <div className='text-4xl font-medium'>
      Blog
    </div>
  )
}

export default page
