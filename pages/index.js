import Image from "next/image";
import { useState, useRef } from "react";

function testing() {
  global();
}

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openChest = () => {
    setIsOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>
        You found a chest on the dungeon! Click it to claim your treasure.
      </h1>
      {isOpen ? (
        <div>
          <h1>Oh no! It's a rick rolling mimic!</h1>
          <Image src={"/mimic.png"} width={250} height={250}></Image>
          <video
            style={{
              position: "absolute",
              left: "50%",
              top: "65%",
              transform: "translate(-50px, -50px)",
              marginRight: "auto",
            }}
            width="100"
            height="100"
            controls
            autoPlay
          >
            <source src="/never-gonna-give-you-up.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <Image
          onClick={() => openChest()}
          src={"/closed-chest.png"}
          width={250}
          height={250}
        ></Image>
      )}
    </div>
  );
}
export default Home;
