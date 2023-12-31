import React from "react";
import { Image, Text ,Box} from "@chakra-ui/react";
const Product=({productsData})=>{
    console.log("hii",productsData.image)
    return (
      <Box >
        <Image src={productsData.image} alt="Dan Abramov" m='10px' boxSize="250px" textAlign="center" />

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
      </Box>
    );
}
export default Product;