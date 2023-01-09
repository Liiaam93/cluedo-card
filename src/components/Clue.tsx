import { Checkbox, Grid, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  name: string;
};
const Clue: React.FC<Props> = (props) => {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={4}
      w="90vw"
      m="auto"
      fontSize={["xs", "xs", "md"]}
    >
      <Text p="2" w="15vw">
        {props.name}
      </Text>
      <Checkbox alignSelf={"center"} size={"lg"} m="auto" />
      <Checkbox alignSelf={"center"} size={"lg"} m="auto" />
      <Checkbox alignSelf={"center"} size={"lg"} m="auto" />
      <Checkbox alignSelf={"center"} size={"lg"} m="auto" />
      <Checkbox alignSelf={"center"} size={"lg"} m="auto" />
    </Grid>
  );
};

export default Clue;
