import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  name: string;
  weapons?: string[];
  setWeapons?: React.Dispatch<React.SetStateAction<string[]>>;
  rooms?: string[];
  setRooms?: React.Dispatch<React.SetStateAction<string[]>>;
  suspects?: string[];
  setSuspects?: React.Dispatch<React.SetStateAction<string[]>>;
};

const CheckBox = (props: Props) => {
  const [icon, setIcon] = useState("");
  const [iconColor, setIconColor] = useState("");

  const setChecked = () => {
    if (icon === "") {
      setIcon("X");
      setIconColor("red");
      if (props.weapons && props.setWeapons) {
        props.setWeapons(props.weapons.filter((w) => !w.includes(props.name)));
      }
      if (props.rooms && props.setRooms) {
        props.setRooms(props.rooms?.filter((r) => !r.includes(props.name)));
      }
      if (props.suspects && props.setSuspects) {
        props.setSuspects(
          props.suspects?.filter((s) => !s.includes(props.name))
        );
      }
    } else if (icon === "X") {
      setIcon("?");
      setIconColor("blue");
      if (props.weapons && props.setWeapons) {
        props.setWeapons([...props.weapons, props.name]);
      }
      if (props.rooms && props.setRooms) {
        props.setRooms([...props.rooms, props.name]);
      }
      if (props.suspects && props.setSuspects) {
        props.setSuspects([...props.suspects, props.name]);
      }
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
