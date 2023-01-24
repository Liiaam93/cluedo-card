import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Clue from "./components/Clue";
import Header from "./components/Header";

const weaponList = [
  "Candle Stick",
  "Dagger",
  "Revolver",
  "Lead Pipe",
  "Rope",
  "Wrench",
];

const suspectList = [
  "Mustard",
  "Plum",
  "Green",
  "Scarlet",
  "Peacock",
  "Orchid",
];
const roomList = [
  "Conservatory",
  "Ballroom",
  "Kitchen",
  "Dining Room",
  "Lounge",
  "Hall",
  "Study",
  "Library",
  "Billiards Room",
];

function App() {
  const [weapons, setWeapons] = useState([
    "Candle Stick",
    "Dagger",
    "Revolver",
    "Lead Pipe",
    "Rope",
    "Wrench",
  ]);

  const [suspects, setSuspects] = useState([
    "Mustard",
    "Plum",
    "Green",
    "Scarlet",
    "Peacock",
    "Orchid",
  ]);

  const [rooms, setRooms] = useState([
    "Conservatory",
    "Ballroom",
    "Kitchen",
    "Dining Room",
    "Lounge",
    "Hall",
    "Study",
    "Library",
    "Billiards Room",
  ]);

  return (
    <Box height={"100%"} background={"darkslategray"} color="white">
      <Header />
      <Heading
        pt="20"
        textAlign={"center"}
        fontSize={"3xl"}
        fontWeight="800"
        textShadow={"2px 2px #000"}
        color="red"
      >
        Cluedo!
      </Heading>
      <Divider w="80%" m="auto" />
      <Text pt="5" textAlign={"center"} fontSize="lg" color={"yellow"}>
        Suspects
      </Text>
      {suspectList.map((s) => (
        <Clue name={s} suspects={suspects} setSuspects={setSuspects} />
      ))}

      <Divider w="80%" m="auto" pt="5" />
      <Text textAlign={"center"} fontSize="lg" color={"yellow"}>
        Weapons
      </Text>

      {weaponList.map((w) => (
        <Clue name={w} weapons={weapons} setWeapons={setWeapons} />
      ))}
      <Divider w="80%" pt="5" m="auto" />
      <Text textAlign={"center"} fontSize="lg" color={"yellow"}>
        Rooms
      </Text>
      {roomList.map((r) => (
        <Clue name={r} rooms={rooms} setRooms={setRooms} />
      ))}
      <Flex
        justifyContent={"center"}
        mt="5"
        marginX={["2vw", "10vw"]}
        borderWidth={1}
      >
        <VStack w={"33%"}>
          <Heading textAlign={"center"} size={["xs", "md"]} color="yellow">
            Remaining Suspects
          </Heading>
          {suspects.map((s) => (
            <Text textAlign={"center"} fontSize={["xs", "md"]}>
              • {s}
            </Text>
          ))}
        </VStack>
        <VStack w={"33%"}>
          <Heading textAlign={"center"} size={["xs", "md"]} color="yellow">
            Remaining weapons
          </Heading>
          {weapons.map((w) => (
            <Text textAlign={"center"} fontSize={["xs", "md"]}>
              • {w}
            </Text>
          ))}
        </VStack>
        <VStack w={"33%"}>
          <Heading textAlign={"center"} size={["xs", "md"]} color="yellow">
            Remaining Rooms
          </Heading>
          {rooms.map((r) => (
            <Text textAlign={"center"} fontSize={["xs", "md"]}>
              • {r}
            </Text>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
}

export default App;
