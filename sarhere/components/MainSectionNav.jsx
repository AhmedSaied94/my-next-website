import React from "react";
import { Stack, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { MdFavoriteBorder } from "react-icons/md";
import TransBtn from "./TransBtn";

const MainSectionNav = () => {
  return (
    <>
      <style>
        {`
            .sectionNav{
                direction:rtl;
                font-weight:600;
                border-bottom:2px solid rgb(0 0 0 / 12%);
            }
            .sectionBread{
                direction:ltr;
            }
            .sectionBread a{
                color: #fff;
            }
            .sectionBread .active{
                color: #51BFAD;
            }
            .breadcrumb-item+.breadcrumb-item::before{
                content: "<";
                color:#51BFAD;
            }
            .iconCon{
                background-color: #fff;
                border-radius: 50%;
                width:30px;
                height:30px;
                font-size: 1.5em;
                display: flex;
                justify-content: center;
                align-items: center;
                color:#5260AB;
            }
            .langBtn{
                max-width:100px;
                text-align:left;
            }
        `}
      </style>
      <Stack direction="horizontal" gap={2} className="sectionNav">
        <Breadcrumb className="sectionBread ms-auto">
          <Breadcrumb.Item active>الندوات</Breadcrumb.Item>
          <Breadcrumb.Item href="#">الرئيسية</Breadcrumb.Item>
        </Breadcrumb>
        <div className="iconCon">
          <MdFavoriteBorder />
        </div>
        <TransBtn text={"اضف الى المفضلة"} />
      </Stack>
    </>
  );
};

export default MainSectionNav;
