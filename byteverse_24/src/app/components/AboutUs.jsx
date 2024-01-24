// pages/about.js
"use client";
import React from "react";
import Card from "./card";
import AboutIamge from "./AboutIamge";
import KnifeImage from "./KnifeImage";

const About = () => {
  return (
    <div className="flex flex-col  md:justify-center items-center md:m-14      h-screen">
      <div className=" m-10   ">
        <AboutIamge />
      </div>
      <div className="flex flex-col  gap-5 p-10 md:flex-row relative justify-center items-center ">
        <Card
          img="HackSlashlogo.svg"
          width={180}
          height={180}
          instagram="https://instagram.com/hackslash.nitp/"
          linkedin="https://www.linkedin.com/company/hackslash/mycompany/"
        />

        <Card
          img="Gdsclogo.png"
          width={385}
          height={450}
          instagram="https://www.instagram.com/gdscnitp/"
          linkedin="https://www.linkedin.com/company/gdscnitp/"
        />
        <div className="flex flex-col items-center justify-center w-[200px] h-[200px] bg-[#4A0000] rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <KnifeImage />
        </div>
      </div>
    </div>
  );
};

export default About;

// // pages/about.js
// "use client";
// import React from "react";
// import Card from "@/Components/card";
// import AboutIamge from "@/Components/AboutIamge";
// import HeadImage from "@/Components/HeadImage";
// import KnifeImage from "@/Components/KnifeImage";

// const About = () => {
//   return (
//     <div className="flex flex-col m-40   justify-center items-center h-screen">
//       <div className="">
//         <AboutIamge />
//       </div>
//       <div className=" flex flex-co md:justify-normal md:flex flex-row  m-40 gap-4   ">
//         <Card />
//         <div className="bg-[#4A0000] w-[200px] h-[200px] flex flex-col justify-center items-center rounded-full absolute left-[656px] top-[520px]">
//           <KnifeImage />
//         </div>
//         <Card />
//       </div>
//     </div>
//   );
// };

// export default About;
