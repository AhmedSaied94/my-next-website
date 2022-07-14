import React from "react";
import { Stack } from "react-bootstrap";
import {
  GrFacebookOption,
  GrTwitter,
  GrLinkedinOption,
  GrGooglePlus,
  GrCheckmark,
} from "react-icons/gr";

const ShareSection = () => {
  return (
    <>
      <style>
        {`
            .shareStack{
                background-color:#5260AB;
                text-align:right;
                color:#fff;
                border-radius:10px;
            }
            .trueDiv{
                background-color:#F69C5D;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 1.5em;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #5260AB;
            }
            .shareStack p{
                font-size:0.6em;
                margin:0;
            }
            .lineStack{
                direction:rtl;
            }
            .headerStack{
                background-color:#51BFAD;
                border-radius:10px;
                color:#fff;
                transform:translateY(20px);
            }

        `}
      </style>
      <Stack className="headerStack p-4" direction="horizontal">
        <Stack direction="horizontal" gap={2}>
          <GrFacebookOption />
          <GrTwitter />
          <GrLinkedinOption />
          <GrGooglePlus />
        </Stack>
        <h5 className="m-0 ms-auto">نشر المحتوى</h5>
      </Stack>
      <Stack className="shareStack p-4" gap={5}>
        <Stack className="lineStack mt-3" direction="horizontal" gap={3}>
          <div className="trueDiv">
            <GrCheckmark />
          </div>
          <div>
            <p>ندوات</p>
            <h5 className="m-0">يوجد ندواتين كل اسبوع</h5>
          </div>
        </Stack>
        <Stack className="lineStack" direction="horizontal" gap={3}>
          <div className="trueDiv">
            <GrCheckmark />
          </div>
          <div>
            <p>ندوات</p>
            <h5 className="m-0">جميع النداوت مجانية من صفا</h5>
          </div>
        </Stack>
        <Stack className="lineStack" direction="horizontal" gap={3}>
          <div className="trueDiv">
            <GrCheckmark />
          </div>
          <div>
            <p>ندوات</p>
            <h5 className="m-0">خطوات و نصائح في مجال الاقتصاد</h5>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default ShareSection;
