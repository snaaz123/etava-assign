import React from "react";
import axios  from "axios";
import { Image, Text, Box, Button } from "@chakra-ui/react";
const CartProduct = ({ productsData }) => {
  console.log("hii", productsData.image);

   const deleteData = (data) => {
     axios
       .delete(`https://mock-api-c37k.onrender.com/cart/${productsData.id}`)
       .then((r) => console.log(r))
       .catch((e) => console.log(e));
   };
  return (
    <Box>
      <Image src={productsData.image} alt="Dan Abramov" boxSize="250px" />

      <Text
        textAlign="left"
        marginLeft="1rem"
        fontWeight="semibold"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        {productsData.name}
      </Text>
      <Text textAlign="left" marginLeft="1rem" fontWeight="semibold">
        Rs.{productsData.price}
      </Text>
      <Text fontWeight="semibold">Quantity.{productsData.qty}</Text>
      <Text fontWeight="semibold">
        Price.{productsData.price * productsData.qty}
      </Text>
      <Button
        bg="red"
        color="white"
        onClick={() => {
          deleteData(productsData.id);
        }}
      >
        Remove
      </Button>
    </Box>
  );
};
export default CartProduct;
