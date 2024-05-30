import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { samuel, niosh, noah, gauresh, sumit } from "./assets";

function App() {
  const [data, setData] = useState([
    {
      name: "Niosh",
      occuption: "Sound Engineer, Mumbai",
      quote: "When you dont have mobile read manga",
      src: `${niosh}`,
    },
  ]);

  const info = [
    {
      name: "Samuel",
      occuption: "Software Engineer, Goa",
      quote: "Chipi Chipi Chapa Chapa Dubi Dubi Daba Daba",
      src: `${samuel}`,
    },
    {
      name: "Niosh",
      occuption: "Sound Engineer, Mumbai",
      quote: "When you dont have mobile read manga",
      src: `${niosh}`,
    },
    {
      name: "Noah",
      occuption: "Artist, Goa",
      quote: "Life is sad but be happy",
      src: `${noah}`,
    },
    {
      name: "Sumit",
      occuption: "Philosopher, Goa",
      quote:
        "Life can only be understood backwards; but it must be lived forwards.",
      src: `${sumit}`,
    },

    {
      name: "Gauresh",
      occuption: "Shruti Mausi Lover, Goa",
      quote: "Mai bhul gaya",
      src: `${gauresh}`,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card
          name={data[0].name}
          occuption={data[0].occuption}
          quote={data[0].quote}
          src={data[0].src}
        />

        <div className="flex flex-col md:flex-row gap-4">
          {info.map((key) => (
            <button
              key={key.name}
              onClick={() => {
                setData([
                  {
                    name: key.name,
                    occuption: key.occuption,
                    src: key.src,
                    quote: key.quote,
                  },
                ]);
              }}
            >
              <img src={key.src} width={120} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
