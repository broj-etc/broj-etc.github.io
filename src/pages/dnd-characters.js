import { Button } from "@mui/material";
import * as React from "react";
import { TitleCard } from "../assets/components/card";
/** Load images */
const characters = require.context("../assets/pics/characters", true);
/** Variables */
const test = [
  { name: "Aetal Thunnek", deceased: false },
  { name: "Arun", deceased: false },
  { name: "Commander Shumway", deceased: false },
  { name: "Kelberos Boriulad", deceased: false },
  { name: "Kelmaris Codro", deceased: false },
  { name: "Milli-Kiituri", deceased: false },
  { name: "Obar Arunath", deceased: false },
  { name: "Skyler Thundersnow", deceased: true },
  { name: "Tuks", deceased: true },
  { name: "Zuko Donrua", deceased: false },
];
/** Structure of the body */
const DNDCharacters = ({ setImage, setFullImage, setAddCharacter }) => {
  return (
    <>
      <Button
        onClick={(e) => {
          setAddCharacter(true);
        }}
      >
        Add
      </Button>
      <hr className="mediator"></hr>
      {/*characters.keys().map((item, i) => (
        <TitleCard
          key={"TitleCard-" + item.name + "-" + i}
          title={item.replace("./", "").replace(".png", "").replace(".jpeg", "")}
          setFullImage={setFullImage}
          image={characters(item)}
          setImage={setImage}
          deceased={deceased}
        ></TitleCard>
      ))*/}
      {test.map((item, i) => (
        <TitleCard
          image={characters(
            characters.keys().find((elem) => elem.includes(item.name))
          )}
          key={"TitleCard-" + item.name + "-" + i}
          setFullImage={setFullImage}
          deceased={item.deceased}
          setImage={setImage}
          title={item.name}
        ></TitleCard>
      ))}
    </>
  );
};
/** */
export default DNDCharacters;
