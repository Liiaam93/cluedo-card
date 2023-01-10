import { Box, Grid, Input, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box p="5" zIndex={"sticky"} pos="fixed" bg="grey" w="100%" mb="20%">
      <Grid templateColumns="repeat(6, 1fr)" gap={1}>
        <Text p="2" fontSize={["xs", "md"]} w="20vw">
          Players
        </Text>
        <Input
          paddingStart={0}
          paddingEnd={0}
          textAlign={"center"}
          fontSize={"xs"}
          _placeholder={{ color: "whitesmoke" }}
          placeholder="P1"
        ></Input>
        <Input
          paddingStart={0}
          paddingEnd={0}
          textAlign={"center"}
          fontSize={"xs"}
          _placeholder={{ color: "whitesmoke" }}
          placeholder="P2"
        ></Input>
        <Input
          paddingStart={0}
          paddingEnd={0}
          textAlign={"center"}
          fontSize={"xs"}
          _placeholder={{ color: "whitesmoke" }}
          placeholder="P3"
        ></Input>
        <Input
          paddingStart={0}
          paddingEnd={0}
          textAlign={"center"}
          fontSize={"xs"}
          _placeholder={{ color: "whitesmoke" }}
          placeholder="P4"
        ></Input>
        <Input
          paddingStart={0}
          paddingEnd={0}
          textAlign={"center"}
          fontSize={"xs"}
          _placeholder={{ color: "whitesmoke" }}
          placeholder="P5"
        ></Input>
      </Grid>
    </Box>
  );
};

export default Header;
