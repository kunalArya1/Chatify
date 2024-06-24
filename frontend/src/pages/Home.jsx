import React from "react";
import image from "../assets/Login/sideBanner.webp";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#000E47]">
      {/** Side Bar Image  */}

      <div className="w-[50%]">
        <img
          src={image}
          className=" h-screen w-full object-contains"
          alt="SideBanner Image"
        />
      </div>
    </div>
  );
};

export default Home;
