import { Metadata } from "next";
type props= {
  params: Promise<{productId: string}>
}
export const generateMetadata =async ({params}:props):Promise<Metadata>=>{
  const id=(await params).productId; 
  const title = await new Promise ((resolve) => {
    setTimeout(() => {
      resolve(`Product ${id} Details`);
    }, 100);
  });
  return {
    title: `Product ${title} Details`,
    description: `Details about product ${title}`,
  }; 
   
}


const productDetails = async ({params}: props) => {
    const productId = (await params).productId;
  return (
    <div>
      <h1>detail about Product No</h1 >
        <p>Product ID: {productId}</p>
    </div>
  )
}

export default productDetails
