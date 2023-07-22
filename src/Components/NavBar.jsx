import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    return (
      <Box bg="teal" w="100%" p={4} color="white">
        <Box display="flex" justifyContent="space-around">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/cart">
            <Button> Cart</Button>
          </Link>
        </Box>
      </Box>
    );
}

export default NavBar;