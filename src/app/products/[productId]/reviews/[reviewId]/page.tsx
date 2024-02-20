import React from 'react'
import { notFound } from 'next/navigation'
const page = ({params}:{
    params:{
        productId:string,
        reviewId:string
    }
}) => {
  if(parseInt(params.reviewId) > 1000){
    notFound();
  }
  return (
    <h1 className='text-2xl font-medium m-10'>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  )
}

export default page
