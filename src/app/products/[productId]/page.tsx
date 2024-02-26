import { Metadata } from "next";
export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const title = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`Product No. ${params.productId}`)
    },100)
  })
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({params}:{
  params:{
    productId:string;
  }
}) {
  return(
    <>
    <h1 className="text-2xl font-semibold">
      Details About Product {params.productId}
    </h1>
  </>
  )
}
