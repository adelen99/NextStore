import React from "react";
import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className='capitalize mt-8' size='lg'>
      Add to cart
    </Button>
  );
}

export default AddToCart;
