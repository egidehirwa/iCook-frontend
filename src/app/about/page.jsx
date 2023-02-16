import Image from "next/image";
import { Rubik, Inter } from "@next/font/google";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <main className="container mx-auto space-y-8">
      <section className="space-y-4 p-8">
        <div className="space-y-4">
          <h3 className="text-red-500 text-3xl text-center">WHO WE ARE</h3>
          <p className="text-center">
            {" "}
            Sweet dragée gummies wafer dragée candy gingerbread sweet. Icing
            jelly beans soufflé icing gingerbread danish tootsie roll biscuit
            chupa chups. Halvah cake sweet roll powder gummies pastry. Liquorice
            croissant bonbon cookie cake marzipan.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="bg-white rounded-lg shadow-md max-w-sm rounded overflow-hidden shadow-lg p-6">
            <h2 className="text-lg text-center font-medium">Missions</h2>
            <p className="mt-2 text-gray-600">
              Add the description of the missions here
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-lg text-center font-medium">Visions</h2>
            <p className="mt-2 text-gray-600">
              Add the description of the visions here
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 p-4">
        <div className="space-y-4">
          <h3 className="text-red-500 text-3xl text-center">TEAM</h3>
          <p className="text-center">
            {" "}
            Sweet dragée gummies wafer dragée candy gingerbread sweet. Icing
            jelly beans soufflé icing gingerbread danish tootsie roll biscuit
            chupa chups. Halvah cake sweet roll powder gummies pastry. Liquorice
            croissant bonbon cookie cake marzipan.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-lg text-center font-medium">Audric</h2>
            <img></img>
            <p className="mt-2 text-gray-600">
              Add the description of the missions here
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-lg text-center font-medium">Daria</h2>
            <img></img>
            <p className="mt-2 text-gray-600">
              Add the description of the missions here
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-lg text-center font-medium">Kawtar</h2>
            <img></img>
            <p className="mt-2 text-gray-600">
              Add the description of the missions here
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-lg text-center font-medium">Egide</h2>
            <img></img>
            <p className="mt-2 text-gray-600">
              Add the description of the missions here
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-lg text-center font-medium">Edouard</h2>
            <img></img>
            <p className="mt-2 text-gray-600">
              Add the description of the missions here
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm rounded overflow-hidden shadow-lg">
            <h2 className="text-lg text-center font-medium">Youssef</h2>
            <img></img>
            <p className="mt-2 text-gray-600">
              Add the description of the missions here
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
