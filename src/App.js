/** Imports */
/** Basic */
import { Routes, Route } from "react-router-dom";
import * as React from "react";
/** Custom */
/** Structures */
import * as Components from "./assets/components/picture"
import Navigation from "./structures/navigation";
import Footer from "./structures/footer";
import Body from "./structures/body";
/** Pages */
/** Components */
/** Pictures *//** 
import placeholder from "./assets/pics/placeholders/imgPlaceholder.png";*/
/** Define App structure */
const App = () => {
  /** Website title / Tab name */
  document.title = "Broj-etc";
  /** States */
  /** *//**
  const [modal, setModal] = React.useState(false);*/
  /** *//**
  const [image, setImage] = React.useState(placeholder);
  const [name, setName] = React.useState("     Placeholder");*/
  /** *//**
  const [expanded, setExpanded] = React.useState(false);*/
  /** Render Structure */
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/dev/" element={<Body />} />
        <Route path="/dev/home" element={<Body content={<Components.FullImage/>} />} />
        <Route path="*" element={<Body />} />
      </Routes>
      <Footer />
    </>
  );
};
/** Exports */
export default App;
