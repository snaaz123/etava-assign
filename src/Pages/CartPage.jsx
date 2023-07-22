import React, { useEffect, useState } from "react";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import Product from "../Components/Product";
import { Link } from "react-router-dom";
import CartProduct from "../Components/CartProduct";
const CartPage = () => {
  const url = "https://mock-api-c37k.onrender.com/Cart";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, [data]);
  console.log(data);
  return (
    <Box w="100%" mt={["10px", "4px", "4px", "1rem"]} p="0px 20px 0px 20px">
      <SimpleGrid columns={["1", "2"," 3", "4"]} spacing={["1%", "2%", "3%", "4%"]}>
        {data.length > 0 &&
          data.map((datas, index) => {
            return (
              <Box
                key={index}
                boxShadow="dark-lg"
                p="6"
                rounded="md"
                bg="white"
                cursor="pointer"
              >
                <CartProduct key={index} productsData={datas} />
              </Box>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};
export default CartPage;
