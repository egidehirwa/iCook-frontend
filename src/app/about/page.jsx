import Image from "next/image";
import { Rubik, Inter } from "@next/font/google";
import Egide from "/src/assets/Egide.jpg";
import Audric from "/src/assets/audric.jpg";
import Daria from "/src/assets/Daria.jpeg";
import Edouard from "/src/assets/Edouard.jpg";
import Kawtar from "/src/assets/kawtar.jpg";
import Youssef from "/src/assets/youssef.jpg";
import Mission from "/src/assets/mission.png";
import Eye from "/src/assets/eye.png";

// import { GrTarget} from "react-icons/gr"
// import { GrView} from "react-icons/gr"

import { EyeIcon } from "@heroicons/react/24/outline";
// import { FlagIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <main className="container mx-auto space-y-8">
      <section className="space-y-4 p-8">
        <div className="space-y-4">
          <h3 className="text-3xl text-center py-6">Who We Are</h3>
          <p className=" text-center">
            We are a team of passionate individuals who are dedicated to
            reducing food waste while making cooking easy and enjoyable. We
            believe that food waste is a global problem that can be solved by
            taking small steps in our daily lives, such as using the ingredients
            already present in our fridges to create delicious meals. With our
            app, we hope to inspire people to be more mindful of their food
            consumption and to adopt sustainable cooking habits. Our team is
            committed to providing a user-friendly, reliable, and innovative
            solution for our users to cook with ease, save money, and make a
            positive impact on the environment.
          </p>
        </div>
        <div className="flex gap-4 justify-center py-6">
          <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg p-6">
            <Image
              className=" mx-auto object-center"
              alt=" "
              src={Mission}
              layoutobjectFit="contain"
              width={70}
              height={70}
            />
            {/* <FlagIcon className="h-10 w-10 mx-auto mb-2 fill-white-100	border-red-500" /> */}
            {/* <GrTarget  /> */}
            {/* <img src="iCook-frontend/src/assets/mission.png"></img> */}
            <h2 className="text-lg text-center font-medium">Mission</h2>
            <p className="mt-2 text-gray-400 text-center">
              Our mission is to simplify and improve the culinary lives of our
              users by providing a practical app that helps reduce food waste.
              <br />
              We aim to offer a convenient solution for finding recipes using
              ingredients that are already present in your fridge.
            </p>
          </div>
          <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              className=" mx-auto object-center"
              alt=" "
              src={Eye}
              layoutobjectFit="contain"
              width={70}
              height={70}
            />
            {/* <EyeIcon className="h-10 w-10 mx-auto mb-2 fill-transparent border border-red-500" /> */}
            {/* <GrView  /> */}

            <h2 className="text-lg text-center font-medium">Vision</h2>
            <p className="mt-2 text-gray-400 text-center">
              Our vision is to create an online community that shares the same
              values in reducing food waste, providing a user-friendly,
              intuitive, and personalized experience. 
              <br />
               We strive to become the go-to choice for anyone looking for an efficient solution to
              cook delicious meals while saving time and money.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 p-4 pb-24">
        <div className="space-y-4">
          <h3 className="text-3xl text-center pb-6">Team</h3>
          <p className="text-center pb-6">
            We are a small but dedicated team of 6 passionate individuals who
            share the same values and vision of reducing food waste and making
            cooking more accessible and enjoyable. With our diverse backgrounds
            in technology, culinary arts, and sustainability, we bring a unique
            perspective to the table and work collaboratively to create an
            innovative solution that meets the needs of our users. Our team is
            committed to providing a user-friendly, reliable, and sustainable
            app that helps users cook with ease and make a positive impact on
            the environment. We take pride in our work and strive to provide the
            best experience for our users.
          </p>
        </div>
        <div className="flex gap-4 py-2 justify-between">
          <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="font-satisfy text-xl mb-6 text-center">
              Audric
            </h2>
            <div style={{ borderRadius: "100%", overflow: "hidden" }}>
              <Image
                alt=" "
                src={Audric}
                layoutobjectFit="contain"
                width={350}
                height={350}
              />
            </div>
            <p className="mt-6 text-gray-400 text-center">
             Back-end Developer 
            </p>
          </div>

          <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="font-satisfy text-xl mb-6 text-center">
              Daria
            </h2>
            <div style={{ borderRadius: "100%", overflow: "hidden" }}>
              <Image
                src={Daria}
                alt=""
                layoutobjectFit="contain"
                width={350}
                height={350}
              />
            </div>
            <p className="mt-6 text-gray-400 text-center">
              Front-end Developer 
            </p>
          </div>

          <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="font-satisfy text-xl mb-6 text-center">
              Kawtar
            </h2>
            <div style={{ borderRadius: "100%", overflow: "hidden" }}>
              <Image
                src={Kawtar}
                alt=""
                layoutobjectFit="contain"
                width={350}
                height={300}
              />
            </div>
            <p className="mt-6 text-gray-400 text-center">
              Front-end Developer 
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="font-satisfy text-xl mb-6 text-center">
              Egide
            </h2>
            <div style={{ borderRadius: "100%", overflow: "hidden" }}>
              <Image
                src={Egide}
                alt=""
                layoutobjectFit="contain"
                width={350}
                height={300}
              />
            </div>
            <p className="mt-6 text-gray-400 text-center">
              Front-end Developer 
            </p>
          </div>

          <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="font-satisfy text-xl mb-6 text-center">
              Edouard
            </h2>
            <div style={{ borderRadius: "100%", overflow: "hidden" }}>
              <Image
                src={Edouard}
                alt=""
                layoutobjectFit="contain"
                width={350}
                height={350}
              />
            </div>
            <p className="mt-6 text-gray-400 text-center">
              Front-end Developer 
            </p>
          </div>

          <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="font-satisfy text-xl mb-6 text-center">
              Youssef
            </h2>
            <div style={{ borderRadius: "100%", overflow: "hidden" }}>
              <Image
                src={Youssef}
                alt=""
                layoutobjectFit="contain"
                width={350}
                height={350}
              />
            </div>
            <p className="mt-6 text-gray-400 text-center">
              Back-end Developer 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// GrTarget
// GrView
// GrWebcam
