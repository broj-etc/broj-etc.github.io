/** Imports */
/** Basic */
import { Routes, Route } from "react-router-dom";
import * as React from "react";
/** Custom */
/** Structures */
import * as Components from "./assets/components/picture";
import Navigation from "./structures/navigation";
import Footer from "./structures/footer";
import Body from "./structures/body";
/** Pages */
import Home from "./pages/home";
/** Components */
/** Pictures */
import placeholder from "./assets/pics/placeholders/imgPlaceholder.png";
/** Define App structure */
const App = () => {
  /** Website title / Tab name */
  document.title = "Broj-etc";
  /** States */
  const [fullImage, setFullImage] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState("     Placeholder");
  /** Render Structure */
  return (
    <>
      <Components.FullImage
        image={image}
        fullImage={fullImage}
        setFullImage={setFullImage}
      ></Components.FullImage>
      <Navigation />
      <Routes>
        <Route path="/dev/" element={<Body />} />
        <Route
          path="/dev/home"
          element={
            <Body
              content={<Home setFullImage={setFullImage} setImage={setImage} />}
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
