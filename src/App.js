/** Imports */
/** Basic */
import { Routes, Route, Navigate } from "react-router-dom";
import * as React from "react";
/** Custom */
/** Structures */
import * as ImageComponents from "./assets/components/picture";
import Navigation from "./structures/navigation";
import Footer from "./structures/footer";
import Body from "./structures/body";
/** Pages */
import Home from "./pages/home";
/** Components */
import * as Components from "./assets/components/components";
/** Pictures */
import placeholder from "./assets/pics/placeholders/imgPlaceholder.png";
import DNDCharacters from "./pages/dnd-characters";
/** Define App structure */
const App = () => {
  /** Website title / Tab name */
  document.title = "Broj-etc";
  /** States */
  const [fullImage, setFullImage] = React.useState(false);
  const [addCharacter, setAddCharacter] = React.useState(false);
  const [image, setImage] = React.useState(placeholder);
  /** Render Structure */
  return (
    <>
      <ImageComponents.FullImage
        image={image}
        fullImage={fullImage}
        setFullImage={setFullImage}
      />
      <Components.AddCharacter
        addCharacter={addCharacter}
        setAddCharacter={setAddCharacter}
      />
      <Navigation />
      <Routes>
        <Route path="/dev/" element={<Navigate to="/dev/home" />} />
        <Route
          path="/dev/home"
          element={
            <Body
              content={<Home setFullImage={setFullImage} setImage={setImage} />}
            />
          }
        />
        <Route path="/dev/dnd" element={<Navigate to="/dev/characters" />} />
        <Route
          path="/dev/characters"
          element={
            <Body
              content={<DNDCharacters setFullImage={setFullImage} setImage={setImage} setAddCharacter={setAddCharacter} />}
            />
          }
        />
        <Route path="*" element={<Body />} />
      </Routes>
      <Footer />
    </>
  );
};
/** Exports */
export default App;
