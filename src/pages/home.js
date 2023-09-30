import { Button } from "@mui/material";
import * as React from "react";
/** Variables */
import placeholder from "../assets/pics/placeholders/imgPlaceholder.png";
/** Structure of the body */
const Home = ({ content, setImage, setFullImage }) => {
  return (
    <>
      <Button
        onClick={e=>{setFullImage(true); setImage(placeholder)}}>Test</Button>
    </>
  );
};
/** */
export default Home;
