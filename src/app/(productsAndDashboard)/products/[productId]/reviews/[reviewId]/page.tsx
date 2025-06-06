import { notFound,redirect } from "next/navigation";

const page = async({params}:
    {
        params:Promise<{productId: string, reviewId: string}>
    }
) => {
    const {productId, reviewId} = await params;
    if (parseInt(reviewId) >=1000){
        // notFound();
        redirect('/products');
    }
  return (
    <div>
      <h1>Review no {reviewId} for {productId}</h1>
    </div>
  )
}

export default page
