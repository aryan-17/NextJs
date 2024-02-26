"use client"
import React from 'react'
import { notFound } from 'next/navigation'

function getRandomInt(count:number) {
  return Math.floor(Math.random()*count);
}

const page = ({params}:{
    params:{
        productId:string,
        reviewId:string
    }
}) => {
  // const random = getRandomInt(2);

  // if(random === 1){
  //   throw new Error("Error loading review");
  // }

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
