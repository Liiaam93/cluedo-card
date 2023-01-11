import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const CheckBox = () => {
  const [icon, setIcon] = useState("");
  const [iconColor, setIconColor] = useState("");

  const setChecked = () => {
    if (icon === "") {
      setIcon("X");
      setIconColor("red");
    } else if (icon === "X") {
      setIcon("?");
      setIconColor("blue");
    } else if (icon === "?") {
      setIcon("");
      setIconColor("");
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
      background={iconColor}
    >
      <Text fontSize={["12", "md"]} textAlign={"center"}>
        {icon}
      </Text>
    </Box>
  );
};

export default CheckBox;
