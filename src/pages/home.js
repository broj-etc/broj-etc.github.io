import {} from "@mui/material";
import * as React from "react";
import { TitleCard } from "../assets/components/card";
/** Variables */
const cardContent = [
  { name: "Test Image 1", image: "https://picsum.photos/300/300?random=1" },
  { name: "Test Image 2", image: "https://picsum.photos/300/300?random=2" },
  { name: "Test Image 3", image: "https://picsum.photos/300/300?random=3" },
  { name: "Test Image 4", image: "https://picsum.photos/300/300?random=4" },
  { name: "Test Image 5", image: "https://picsum.photos/300/300?random=5" },
  { name: "Test Image 6", image: "https://picsum.photos/300/300?random=6" },
  { name: "Test Image 7", image: "https://picsum.photos/300/300?random=7" },
  { name: "Test Image 8", image: "https://picsum.photos/300/300?random=8" },
  { name: "Test Image 9", image: "https://picsum.photos/300/300?random=9" },
  { name: "Test Image 10", image: "https://picsum.photos/300/300?random=10" },
  { name: "Test Image 11", image: "https://picsum.photos/300/300?random=11" },
  { name: "Test Image 12", image: "https://picsum.photos/300/300?random=12" },
  { name: "Test Image 13", image: "https://picsum.photos/300/300?random=13" },
  { name: "Test Image 14", image: "https://picsum.photos/300/300?random=14" },
  { name: "Test Image 15", image: "https://picsum.photos/300/300?random=15" },
];
/** Structure of the body */
const Home = ({ setImage, setFullImage }) => {
  return (
    <>
      {cardContent.map((item, i) => (
        <TitleCard
          key={"TitleCard-" + item.name + "-" + i}
          setFullImage={setFullImage}
          deceased={item.deceased}
          setImage={setImage}
          image={item.image}
          title={item.name}
        ></TitleCard>
      ))}
    </>
  );
};
/** */
export default Home;
