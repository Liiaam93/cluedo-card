import { Box, Divider, Grid, Input, Text } from "@chakra-ui/react";
import Clue from "./components/Clue";
import Header from "./components/Header";

function App() {
  const suspects = ["Mustard", "Plum", "Green", "Scarlet", "Peacock", "Orchid"];
  const weapons = [
    "Candle Stick",
    "Dagger",
    "Revolver",
    "Lead Pipe",
    "Rope",
    "Wrench",
  ];
  const rooms = [
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
  return (
    <Box height={"100%"} background={"darkslategray"} color="white">
      <Header />
      <Text
        pt="20"
        textAlign={"center"}
        fontSize={"3xl"}
        fontWeight="800"
        textShadow={"2px 2px #000"}
        color="red"
      >
        Cluedo!
      </Text>
      <Divider w="80%" m="auto" />
      <Text pt="5" textAlign={"center"} fontSize="lg" color={"yellow"}>
        Suspects
      </Text>
      {suspects.map((suspect) => (
        <Clue name={suspect} />
      ))}

      <Divider w="80%" m="auto" pt="5" />
      <Text textAlign={"center"} fontSize="lg" color={"yellow"}>
        Weapons
      </Text>
      {weapons.map((weapon) => (
        <Clue name={weapon} />
      ))}
      <Divider w="80%" pt="5" m="auto" />
      <Text textAlign={"center"} fontSize="lg" color={"yellow"}>
        Rooms
      </Text>
      {rooms.map((room) => (
        <Clue name={room} />
      ))}
    </Box>
  );
}

export default App;
