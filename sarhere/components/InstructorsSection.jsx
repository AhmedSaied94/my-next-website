import React from "react";
import { Stack, Image } from "react-bootstrap";
import ins1 from "../assets/ins1.png";
import ins2 from "../assets/ins2.png";

const InstructorsSection = () => {
  return (
    <>
      <style>
        {`
            .insCont{
                justify-content: flex-end;
                text-align: right;
            }
            .insStack{
              border-radius:10px;
              z-index:2000;
              max-width: 45%;
              background-color: #fff;
              transform: translateY(-50%);
            }
            .insStack p{
              font-size:0.6em;
            }
            @media (max-width:576px){
              .insStack{
                max-width:none;
              }
            }
            @media (max-width:1024px){
              .insStack{
                transform:translateY(0);
              }
            }

          
      `}
      </style>
      <Stack direction="horizontal" className="insCont px-3 px-md-5">
        <Stack gap={3} className="insStack p-4">
          <h6>تقديم المحاضرين</h6>
          <Stack direction="horizontal" gap={2} className="ms-auto">
            <div>
              <h6>الدكتور رجا المرزوقى</h6>
              <p>
                نائب رئيس مجلس ادارة جمعية صفا - استاذ الاقتصاد المشارك معهد
                الامير سعود الفيصل للدراسات الدبلوماسية
              </p>
            </div>
            <Image roundedCircle src={ins1} />
          </Stack>
          <Stack direction="horizontal" gap={2} className="ms-auto">
            <div>
              <h6>الدكتور رجا المرزوقى</h6>
              <p>
                نائب رئيس مجلس ادارة جمعية صفا - استاذ الاقتصاد المشارك معهد
                الامير سعود الفيصل للدراسات الدبلوماسية
              </p>
            </div>
            <Image roundedCircle src={ins2} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default InstructorsSection;
