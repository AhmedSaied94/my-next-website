import React from "react";
import FirstNav from "./FirstNav";
import MainNav from "./MainNav";
import { Row, Col, Image, Stack } from "react-bootstrap";
import main from "../assets/main.png";
import MainSectionNav from "./MainSectionNav";
import { TbCalendarStats } from "react-icons/tb";
import MainBtn from "./MainBtn";

const Background = ({}) => {
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
    [{ color: "#303A6C", opacity: 0.4 }],
  ];
  return (
    <>
      <style type="text/css">
        {`
            .background{
                background-color: #5260AB;
                height: 100vh;
                position: relative;
                overflow: hidden;
                
            }
            @media (max-width:1024px){
              .background{
                height:auto;
              }
            }
            .mainImg{
              max-width: inherit;
            }
            .mainSection{
              position: relative;
              text-align:right;
              color:#fff;
              z-index:100;
            }
            .appointment{
              justify-content:flex-end;
              font-size:0.8em;
              font-weight:600;
            }
        `}
      </style>
      <div className="background py-4 px-3 px-md-5">
        {circles.map((arr, inx) => {
          const line = arr.map((cir, inx2) => {
            const x = inx2 !== 0 ? inx2 * 6.25 : 0;
            const y = inx !== 0 ? inx * 6.25 : 0;
            return (
              <div key={cir.color + cir.opacity + x + y}>
                {" "}
                <div
                  className="'rightCir"
                  style={{
                    position: "absolute",
                    top: 0,
                    marginTop: y - 1.5 + "%",
                    right: x - 1.5 + "%",
                    width: "6.25%",
                    height: "0",
                    paddingBottom: "6.25%",
                    borderRadius: "50%",
                    backgroundColor: cir.color,
                    opacity: cir.opacity - 0.1,
                    transform: "matrix(0, -1, -1, 0, 0, 0)",
                    mixBlendMode: "normal",
                  }}
                ></div>
                <div
                  className="'leftCir"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: y - 1.5 + "%",
                    left: x - 1.5 + "%",
                    width: "6.25%",
                    height: "0",
                    paddingBottom: "6.25%",
                    borderRadius: "50%",
                    backgroundColor: cir.color,
                    opacity: cir.opacity,
                    transform: "matrix(0, 1, 1, 0, 0, 0)",
                    mixBlendMode: "normal",
                  }}
                ></div>
              </div>
            );
          });
          return line;
        })}
        <FirstNav />
        <MainNav />
        <Row className="mainSection">
          <Col xs={12} md={6}>
            <Image className="mainImg" src={main} />
          </Col>
          <Col xs={12} md={6} className="mt-3 mt-md-0">
            <MainSectionNav />
            <Stack direction="horizontal" className="appointment mt-3">
              <span>
                يوم الخميس ١٦ يوليو ٢٠٢٠ م من ٤ - ٦ مساءاً
                <TbCalendarStats
                  style={{ width: "24px", height: "24px", color: "#51BFAD" }}
                  className="ms-2"
                />
              </span>
            </Stack>
            <h2 className="my-4">
              ندعوكم في الجمعية المالية السعودية صفا لحضور المساحة الخاصة
              بمناقشة الميزانية العامة والاقتصاد المحلي، ننتظركم غدًا
            </h2>
            <MainBtn color={"#51BFAD"} disabled={false} text={"احجز الان"} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Background;
