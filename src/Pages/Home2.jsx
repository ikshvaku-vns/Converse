import { useFetcher } from "react-router-dom";
import { projects } from "../assets/data/iso/project/projects";
import BuildingMap from "../components/BuildingMap";
import { useEffect, useState } from "react";
export default function Home2() {
  const [count, setCount] = useState(0);
  const moveRight = () => {
    setCount((count) => (count >= 3 ? 0 : count + 1));
  };

  const moveLeft = () => {
    setCount((count) => (count <= 0 ? 3 : count - 1));
  };

  const images = [
    projects.image0,
    projects.image1,
    projects.image2,
    projects.image3,
  ];
  return (
    <div
      className="relative w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${images[count]})` }}
    >
      <BuildingMap />
    </div>
  );
}
