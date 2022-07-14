import React from "react";
import trans from "../assets/trans.png";
import { Stack, Image } from "react-bootstrap";
const ShortageSection = () => {
  return (
    <>
      <style>
        {`
            .trans{
                max-width:185px;
            }

            .shortageStack{
                align-items:flex-end;
                text-align:right;
                transform:translateY(-120px);

            }
            .shortageStack p{
                font-size:0.9em;
                color:#303A6C;
            }
            .shortageStack .attendes{
                color:#51BFAD;
            }
            .shortageStack h3{
                color:#303A6C;
                text-shadow: 1px 1px 4px #303A6C;
                font-weight:600;
            }
            @media (max-width:1024px){
                .shortageStack{
                  transform:translateY(0);
                }
              }
        `}
      </style>
      <Stack className="shortageStack">
        <Image className="trans" src={trans} />
        <h3 className="my-2">ملخص الندوة</h3>
        <p className="attendes">10.382 حاضرين</p>
        <p>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا
          يوجد محتوى نصيهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
          لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
          الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم
          لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا
          يوجد محتوى نصي، هنا يوجد محتوى نصي
        </p>
        <p>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا
          يوجد محتوى نصي
        </p>
      </Stack>
    </>
  );
};

export default ShortageSection;
