import React from 'react'

const page = ({params}:{
    params: {productId:string}
}) => {
  return (
    <h1 className='text-2xl font-semibold'>
      Details About Product {params.productId}
    </h1>
  )
}

export default page
