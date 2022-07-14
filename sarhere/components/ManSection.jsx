import React from "react";
import { Image } from "react-bootstrap";
import man from "../assets/man.png";
const ManSection = () => {
  const circles = [
    [
      { color: "#51BFAD", opacity: 0.64 },
      { color: "#303A6C", opacity: 0.21 },
      { color: "#FFFFFF", opacity: 0.36 },
      { color: "#51BFAD", opacity: 0.66 },
      { color: "#303A6C", opacity: 0.28 },
      { color: "#51BFAD", opacity: 0.2 },
    ],
    [
      { color: "#FFFFFF", opacity: 0.14 },
      { color: "#FFFFFF", opacity: 0.29 },
      { color: "#303A6C", opacity: 0.28 },
      { color: "#51BFAD", opacity: 0.3 },
    ],
    [
      { color: "#51BFAD", opacity: 0.61 },
      { color: "#51BFAD", opacity: 0.275 },
    ],
    [{ color: "#303A6C", opacity: 0.164 }],
  ];
  return (
    <>
      <style>
        {`
            .manSection{
                background-color: #5260AB;
                height:500px;
                position:relative;
                border-radius:5%;
                z-index:2000; 
            }
            .man{
                position:absolute;
                bottom:0;
                max-width:100%;

            }
            @media (min-width:800px){
                .manSection{
                    background-color: #5260AB;
                    position:relative;
                    width:115%;
                    border-top-left-radius:50%;
                    border-bottom-left-radius:50%;
                    right:15%;
                    z-index:100;
                }
                .man{
                    bottom:4%;
                    left:20%;
                    max-height:600px;
                    max-width:none;

                }
            }

        `}
      </style>
      <div className="manSection mt-5 mt-xl-0">
        {circles.map((arr, inx) => {
          const line = arr.map((cir, inx2) => {
            const x = inx2 !== 0 ? inx2 * 12 : 0;
            const y = inx !== 0 ? inx * 12 : 0;
            return (
              <div
                key={cir.color + cir.opacity + x + y}
                className="'rightCir"
                style={{
                  position: "absolute",
                  bottom: 0,
                  marginBottom: y + "%",
                  right: x + "%",
                  width: "12%",
                  height: "0",
                  paddingBottom: "12%",
                  borderRadius: "50%",
                  backgroundColor: cir.color,
                  opacity: cir.opacity,
                  transform: "matrix(0, 1, 1, 0, 0, 0)",
                  mixBlendMode: "normal",
                }}
              ></div>
            );
          });
          return line;
        })}
        <Image className="man" src={man} />
      </div>
    </>
  );
};

export default ManSection;
