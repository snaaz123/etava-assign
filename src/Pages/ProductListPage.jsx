import React, { useEffect, useState } from "react";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import Product from "../Components/Product";
import { Link } from "react-router-dom";
const ProductListPage =()=>{
    const url = "https://mock-api-c37k.onrender.com/products";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
      return axios.get(url).then((res) => setData(res.data));
    };

    useEffect(() => {
      fetchInfo();
    }, []);
    console.log(data)
    return (
      <Box w="100%" >
        
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={["1%","2%","3%","2%"]}>
          {data.length > 0 &&
            data.map((datas, index) => {
              return (
                <Box
                  key={index}
                  border="1px"
                  p="1rem"
                  borderRadius="8px"
                  cursor="pointer"
                >
                  <Link to={`/product/${datas.id}`}>
                    <Product key={index} productsData={datas} />
                  </Link>
                </Box>
              );
            })}
        </SimpleGrid>
      </Box>
    );
}
export default ProductListPage;