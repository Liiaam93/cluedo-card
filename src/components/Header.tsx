import { Box, Grid, Input, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box p="5" zIndex={"sticky"} pos="fixed" bg="grey" w="100%" mb="20%">
      <Box w="90vw" m="auto">
        <Grid templateColumns="repeat(6, 1fr)" gap={2}>
          <Text p="2">Players</Text>
          <Input
            textAlign={"center"}
            fontSize={"sm"}
            _placeholder={{ color: "whitesmoke" }}
            placeholder="P1"
          ></Input>
          <Input
            textAlign={"center"}
            fontSize={"sm"}
            _placeholder={{ color: "whitesmoke" }}
            placeholder="P2"
          ></Input>
          <Input
            textAlign={"center"}
            fontSize={"sm"}
            _placeholder={{ color: "whitesmoke" }}
            placeholder="P3"
          ></Input>
          <Input
            textAlign={"center"}
            fontSize={"sm"}
            _placeholder={{ color: "whitesmoke" }}
            placeholder="P4"
          ></Input>
          <Input
            textAlign={"center"}
            fontSize={"sm"}
            _placeholder={{ color: "whitesmoke" }}
            placeholder="P5"
          ></Input>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
