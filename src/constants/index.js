import { analytics, dashboard, withdraw } from "../assets";

export const navlinks = [
  {
    name: "Dashboard",
    imgUrl: dashboard,
    onclick: "",
    link: "/",
  },
  {
    name: "Courses",
    imgUrl: analytics,
    onclick: "",
    link: "/courses",
  },
  {
    name: "Resources",
    imgUrl: dashboard,
    link: "/resources",
    onclick: "",
    disabled: true,
  },
  {
    name: "Chat",
    imgUrl: withdraw,
    link: "/chat",
    onclick: "",
    disabled: true,
  },
];

export const courses = [
  {
    id: 1,
    title: "Cyber Security",
    duration: "615",
    total_lecture: 11,
    completed_lecture: 6,
    course_by: "Simplilearn",
    thumbnail_url:
      "https://i.ytimg.com/vi/Hm35SS_PY5g/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCcTN-25XZDJGOVgY51YNCjobjSkw",
    details: [
      {
        title: "Cryptography & Network Security",
        link: "https://www.youtube.com/embed/Hm35SS_PY5g?si=QuJ3huxU3a7bLcQf",
        duration: "133",
      },
      {
        title: "Ethical Hacking",
        link: "https://www.youtube.com/embed/3OkXu3Wxnvg?si=zPTNkRFGnNdSHa-j",
        duration: "215",
      },
      {
        title: "Cyber Security Interview Questions And Answers",
        link: "https://www.youtube.com/embed/ThsdqPck-LA?si=rhLWdNaZNqptDBZE",
        duration: "166",
      },
      {
        title: "Open System Interconnection Model",
        link: "https://www.youtube.com/embed/Vez9dGiORG8?si=3BxnFvrSfv1uVpbq",
        duration: "12",
      },
      {
        title: "What Is Cross Site Scripting Attack? ",
        link: "https://www.youtube.com/embed/43yYsui3xZc?si=zjM-VH9kMhVEguZU",
        duration: "30",
      },
      {
        title: "Advanced Executive Program In Cybersecurity ",
        link: "https://www.youtube.com/embed/6DeZ-scCuT0?si=ez7jRvQVXzulbPed",
        duration: "3",
      },
      {
        title: "How To Know If Your Computer Is Hacked",
        link: "https://www.youtube.com/embed/nU0jdP0PbJg?si=b846holVprh8p1VQ",
        duration: "9",
      },
      {
        title: "TCP/IP Protocol Explained | What Is TCP/IP Address?",
        link: "https://www.youtube.com/embed/CsektxtqA8c?si=aNuO_wGsQk8rsZx4",
        duration: "9",
      },
      {
        title: "SolarWinds Attack Explained | What Is SolarWinds Attack?",
        link: "https://www.youtube.com/embed/RxGI-l4VxL0?si=hSwG3G_Deh1vxmjR",
        duration: "5",
      },
      {
        title: "Subneting Explained | What Is Subneting? ",
        link: "https://www.youtube.com/embed/mgu4blmFF_w?si=77l-FifDIHY8Ej23",
        duration: "11",
      },
      {
        title:
          "Proxy In 5 Minutes | What Is A Proxy? | What Is A Proxy Server?  ",
        link: "https://www.youtube.com/embed/j9-Y0KWVJ1k?si=FieC326HlqEUjAFu",
        duration: "5",
      },
    ],
  },
];
