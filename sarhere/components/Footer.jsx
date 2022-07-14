import React from "react";
import {
  Row,
  Col,
  Stack,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import {
  GrFacebookOption,
  GrTwitter,
  GrLinkedinOption,
  GrGooglePlus,
  GrCheckmark,
} from "react-icons/gr";
import footer from "../assets/footer.png";

const Footer = () => {
  const sections = [
    "الرئيسية",
    "من نحن",
    "الخدمات",
    "الفعاليات",
    "الكورسات",
    "الندوات",
    "الورشات",
    "الاخبار",
    "الابحاث",
    "فريق العمل",
    "العضوية",
    "اتصل بنا",
  ];
  return (
    <Stack className="px-3 px-md-5 my-3 ">
      <style>
        {`
            .footerImg{
                max-width:135px;
            }
            .footerCol{
                color:#303A6C;
            }
            .footerCol h5{
                font-weight:700;
            }
            .infoStack{
                direction:rtl;
                color:#303A6C;
            }
            .footerSectionsStack{
                direction:rtl;
                flex-wrap:wrap;
                justify-content:space-between;
            }
            .followUs{
                color:#303A6C;
                direction:rtl;
            }
            .followUs h5{
                font-weight:700;
            }
            .followUs .shareIcons{
                color:#adb5bd;
            }
            .followUs .input-group{
                display:flex;
                direction:ltr;
            }
            .followUs .input-group-text{
                background-color:#5260AB;
                color:#fff;
                font-weight:600;
                padding-left:1rem;
                padding-right:1rem;
            }
            @media (max-width:576px){
                .infoStack{
                    align-items:center;
                }
            }
          `}
      </style>

      <Row className="border-top mt-5 py-5">
        <Col xs={12} md={4}>
          <Stack className="followUs mt-4" gap={5}>
            <h5>تابعنا</h5>
            <Stack className="shareIcons" direction="horizontal" gap={2}>
              <GrGooglePlus className="mx-1" />
              <GrLinkedinOption />
              <GrTwitter className="mx-1" />
              <GrFacebookOption />
            </Stack>
            <h5>لمتابعة الاخبار</h5>
            <InputGroup>
              <InputGroup.Text id="subscribe">اشترك</InputGroup.Text>
              <FormControl
                aria-label="subscribe"
                aria-describedby="subscribe"
              />
            </InputGroup>
          </Stack>
        </Col>
        <Col className="footerCol px-4 px-md-0" xs={12} md={4}>
          <h5 className="my-4 text-end">الروابط</h5>
          <Stack className="footerSectionsStack" direction="horizontal" gap={2}>
            <Stack gap={2}>
              {sections.map((sec, inx) => {
                if (inx <= 5) return <h6>{sec}</h6>;
              })}
            </Stack>
            <Stack gap={2}>
              {sections.map((sec, inx) => {
                if (inx > 5) return <h6>{sec}</h6>;
              })}
            </Stack>
          </Stack>
        </Col>
        <Col xs={12} md={4}>
          <Stack className="infoStack mt-4 mt-md-0" gap={2}>
            <Image className="footerImg mb-5" src={footer} />
            <p className="mb-0">Safa@gmail.com</p>
            <p>+757 699-4478</p>
          </Stack>
        </Col>
      </Row>
      <p
        style={{ color: "#303A6C", fontSize: "0.8em" }}
        className="text-center"
      >
        الحقوق محفوظة لصفا
      </p>
    </Stack>
  );
};

export default Footer;
