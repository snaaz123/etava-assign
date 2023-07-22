import { Box, Button, Image, Text } from "@chakra-ui/react";
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
      <Box textAlign="center">
        <Box  borderRadius="8px" p="2rem" m="auto">
          
          <Box>
            <Image src={data.image} alt="Dan Abramov" boxSize="250px" />
          </Box>
          <Box>
            <Text textAlign="left" marginLeft="1rem" fontWeight="semibold">
              {data.name}
            </Text>
            <Text textAlign="left" marginLeft="1rem" fontWeight="semibold">
              Rs.{data.price}
            </Text>

            <Box display="flex">
              <Button bg="teal" color="white" onClick={handleInc}>
                +
              </Button>
              <Text ml="1rem" mr="1rem">
                {count}
              </Text>
              <Button bg="teal" color="white" onClick={handleDec}>
                -
              </Button>
            </Box>
          </Box>
         </Box>
          <Button bg="green" color="white" onClick={() => addToData(data)}>
            Add to Cart
          </Button>
        </Box>
     
    );
}

export default ProductDetailPage;