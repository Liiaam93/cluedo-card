import { Box, Checkbox, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CheckBox from "./CheckBox";

type Props = {
  name: string;
};
const Clue: React.FC<Props> = (props) => {
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
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={4}
      w="90vw"
      m="auto"
      fontSize={["xs", "md"]}
    >
      <Text p="2" w="20vw">
        {props.name}
      </Text>

      <CheckBox />
      <CheckBox />
      <CheckBox />
      <CheckBox />
      <CheckBox />
    </Grid>
  );
};

export default Clue;
