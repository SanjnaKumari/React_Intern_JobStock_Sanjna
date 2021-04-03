import React from "react";

import img1 from "../img/blog/1.jpg";
import img2 from "../img/blog/2.jpg";
import img3 from "../img/blog/3.jpg";
/*import blog1 from "/src/img/blog/1.jpg";
import blog2 from "/src/img/blog/2.jpg";
import blog3 from "/src/img/blog/3.jpg";*/

import A from "../img/can-5.png"

import B1 from "../img/client-1.jpg"
import B2 from "../img/client-2.jpg"
import B3 from "../img/client-4.jpg"

const Top = [
    {
        title: "work process",
        h01: "how it",
        h02: "works"
    }
];

const Account_Data = [
    {
        icon: img1,
        heading: "Create An Account",
        description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.`
    },
    {
        icon: img2,
        heading: "Search Jobs",
        description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.`
    },
    {
        icon: img3,
        heading: "Save & Apply",
        description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.`
    }
];

const kData = [
    {
        classname:"freelance-status",
        stat:"Available",
        price:"$17/hr",
        pic:A,
        nation:"Australia"
    },
    {
        classname:"freelance-status bg-warning",
        stat:"Available",
        price:"$22/hr",
        pic:A,
        nation:"United States"
    },
    {
        classname:"freelance-status",
        stat:"Available",
        price:"$19/hr",
        pic:A,
        nation:"Bangladesh"
    }
]

const MData = [
    {
        pic:B1,
        name:"Lacky Mole"
    },
    {
        pic:B2,
        name:"Karan Wessi"
    },
    {
        pic:B3,
        name:"Roul Pincha"
    },
    {
        pic:B1,
        name:"Adam Jinna"
    }

]

//TwoColumnData
const TwoColumnData = [
    {
        cname:"col-md-6 col-sm-6 no-padd bl-dark",
        btncontent:"Hire Us"
    },
    {
        cname:"col-md-6 col-sm-6 no-padd gr-dark",
        btncontent:"Join Us"
    }
]

//CreateJobPageData

var ph = "Profile Link"
const CreateJobData = [
    {
        title : "Company Information",
        icon1 : "fa fa-flag",
        ph1 : "Company Name",
        icon2 : "fa fa-pencil",
        ph2 : "Company Tagline",
        icon3: "fa fa-envelope",
        ph3:"Company Email",
        icon4:"fa fa-map-marker",
        ph4:"Local E.g. It Park New",
        icon5:"fa fa-globe",
        ph5:"Website",
        icon6:"fa fa-birthday-cake" ,
        id :"company-dob",
        en:"en",
        mode:"true",
        min:"2017",
        max:"2020",
        days:"08/17/2017,08/18/2017",
        dataId:"datedropper-0",
        dataTheme:"my-style",
        rO:""
    },
    {
        title : "Social Profile",
        icon1 : "fa fa-facebook",
        ph1 : ph,
        icon2 : "fa fa-google-plus",
        ph2 : ph,
        icon3: "fa fa-twitter",
        ph3:ph,
        icon4:"fa fa-instagram",
        ph4:ph,
        icon5:"fa fa-linkedin",
        ph5:ph,
        icon6:"fa fa-dribbble" ,
        ph6:ph
    },
]
export { Top, Account_Data, kData, MData, TwoColumnData,CreateJobData };
