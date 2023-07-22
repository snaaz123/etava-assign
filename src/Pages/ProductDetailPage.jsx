import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
const ProductDetailPage=()=>{
    const toast = useToast();
    const [count,setCount]=useState(1)
    const [data, setData] = useState({});
   

    const { id } = useParams();
    console.log(id);
    const handleInc=()=>{
        setCount(count+1)
    }
     const handleDec = () => {
        if(count>0){
        setCount(count - 1);
        }
      
     };
    // const dispatch = useDispatch();

    const getData = async () => {
      let res = await fetch(
        `https://mock-api-c37k.onrender.com/products/${id}`
      );
      let datas = await res.json();
      console.log(datas);
      setData(datas);
    };
    useEffect(() => {
      getData();
    }, []);

     const addToData = (data) => {
       axios
         .post(
           "https://mock-api-c37k.onrender.com/cart",
           data,
           (data.qty = count)
         )
         .then((r) =>
           toast({
             position: 'top-center',
             title: "Product Added Sccussfully.",
             status: "success",
             duration: 9000,
             isClosable: true,
           })
         )
         .catch((e) => console.log(e));

     };
    console.log("Data",data)
    return (
      <Box>
        <Box
          borderRadius="8px"
          p="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SimpleGrid columns={["1","2","2","2"]}>
            <Box>
              <Image
                src={data.image}
                alt="Dan Abramov"
                w={["150px", "150px", "200px", "250px"]}
                ml="20%"
              />
            </Box>
            <Box>
              <Text m="1rem" textAlign="left" fontWeight="semibold" >
                {data.name}
              </Text>
              <Text m="1rem" textAlign="left" fontWeight="semibold">
                Rs.{data.price}
              </Text>

              <Box display="flex" m="1rem">
                <Button bg="teal" color="white" onClick={handleDec}>
                  -
                </Button>
                <Text ml="1rem" mr="1rem">
                  {count}
                </Text>
                <Button bg="teal" color="white" onClick={handleInc}>
                  +
                </Button>
              </Box>
              <Button
                m="1rem"
                float="left"
                bg="green"
                color="white"
                p="20px"
                onClick={() => addToData(data)}
              >
                Add to Cart
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    );
}

export default ProductDetailPage;