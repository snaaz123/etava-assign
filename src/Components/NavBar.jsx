import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar=()=>{
      const url = "https://mock-api-c37k.onrender.com/Cart";
      const [data, setData] = useState([]);

      const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data));
      };

      useEffect(() => {
        fetchInfo();
      }, [data]);
    return (
      <Box bg="teal" w="100%" p={4} color="white">
        <Box display="flex" justifyContent="space-around">
          <Link to="/">
            <Button bg="teal" color="white" fontSize="20px">
              Home
            </Button>
          </Link>
          <Link to="/cart">
            <Box >
              <Text bg="teal" color="white" fontSize="20px" >
                {" "}
                Cart
              </Text>
              <Text w="25px" h="25px" borderRadius="50%" bg="red" mt="-35px" ml="47px" >
                {data.length}
              </Text>
            </Box>
          </Link>
        </Box>
      </Box>
    );
}

export default NavBar;