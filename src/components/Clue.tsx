import { Box, Checkbox, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CheckBox from "./CheckBox";

type Props = {
  name: string;
  weapons?: string[];
  setWeapons?: React.Dispatch<React.SetStateAction<string[]>>;
  rooms?: string[];
  setRooms?: React.Dispatch<React.SetStateAction<string[]>>;
  suspects?: string[];
  setSuspects?: React.Dispatch<React.SetStateAction<string[]>>;
};
const Clue: React.FC<Props> = (props) => {
  const [icon, setIcon] = useState("");

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

      <CheckBox
        name={props.name}
        weapons={props.weapons}
        setWeapons={props.setWeapons}
        rooms={props.rooms}
        setRooms={props.setRooms}
        suspects={props.suspects}
        setSuspects={props.setSuspects}
      />
      <CheckBox
        name={props.name}
        weapons={props.weapons}
        setWeapons={props.setWeapons}
        rooms={props.rooms}
        setRooms={props.setRooms}
        suspects={props.suspects}
        setSuspects={props.setSuspects}
      />
      <CheckBox
        name={props.name}
        weapons={props.weapons}
        setWeapons={props.setWeapons}
        rooms={props.rooms}
        setRooms={props.setRooms}
        suspects={props.suspects}
        setSuspects={props.setSuspects}
      />
      <CheckBox
        name={props.name}
        weapons={props.weapons}
        setWeapons={props.setWeapons}
        rooms={props.rooms}
        setRooms={props.setRooms}
        suspects={props.suspects}
        setSuspects={props.setSuspects}
      />
      <CheckBox
        name={props.name}
        weapons={props.weapons}
        setWeapons={props.setWeapons}
        rooms={props.rooms}
        setRooms={props.setRooms}
        suspects={props.suspects}
        setSuspects={props.setSuspects}
      />
    </Grid>
  );
};

export default Clue;
