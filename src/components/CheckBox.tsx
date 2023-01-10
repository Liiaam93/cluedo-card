import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const CheckBox = () => {
  const [icon, setIcon] = useState("");

  const setChecked = () => {
    if (icon === "") {
      setIcon("X");
    } else if (icon === "X") {
      setIcon("?");
    } else if (icon === "?") {
      setIcon("");
    }
  };

  return (
    <Box
      alignSelf={"center"}
      m="auto"
      border={"solid white 1px"}
      borderRadius="2"
      height={[5, 6]}
      w={[5, 6]}
      onClick={setChecked}
      background={icon !== "" ? "red" : ""}
    >
      <Text fontSize={["12", "md"]} textAlign={"center"}>
        {icon}
      </Text>
    </Box>
  );
};

export default CheckBox;
