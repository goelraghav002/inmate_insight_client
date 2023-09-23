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
    title: "Cyber Security | Become Cyber Security Expert",
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
  {
    id: 2,
    title: 'Inside Maximum Security: Case Study-Singapore',
    duration: '184',
    total_lecture: 4,
    completed_lecture: 3,
    course_by: 'CNA Insider',
    thumbnail_url: "https://i.ytimg.com/vi/6Bfg9jMOV9A/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAk5uxjyQ5205kP9h091zrV0ue6vg",
    details: [
      {
        title: 'How Tough Is Singapore Prison Life?',
        link: "https://www.youtube.com/embed/tJqRPycWUDg?si=jYSFFQ2t-uCMYGe7",
        duration: 46,
      }, 
      {
        title: 'Coping With Family Problems While In Prison',
        link: "https://www.youtube.com/embed/UITJvieslFY?si=hUhTEOEFf9kOBt70",
        duration: 46, 
      },
      {
        title: 'How Do You Break Bad Habits In Prison?',
        link: "https://www.youtube.com/embed/6Bfg9jMOV9A?si=4kOl2Gwp40W_jbep",
        duration: 46, 
      },
      {
        title: 'Getting Ready To Be Released?',
        link: "https://www.youtube.com/embed/vkrCZHNKQ9o?si=t_w_Y4YV8D1QuytS",
        duration: 46, 
      }
    ]
  },
  {
    id: 3,
    title: 'Basic Safety & First Aid Online Course',
    duration: '79',
    total_lecture: 12,
    completed_lecture: 7,
    course_by: 'ProCPR',
    thumbnail_url: "https://i.ytimg.com/vi/HeHsYKlGZPg/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARg-IEEofzAP&rs=AOn4CLD4d1cLmRY0uvXr0JpTyMbqxyEQGw",
    details: [
      {
        title: 'New 2020 AHA / ILCOR CPR Guideline Updates?',
        link: "https://www.youtube.com/embed/HeHsYKlGZPg?si=GLhcGOfHvth5IVwC",
        duration: 11,
      }, 
      {
        title: 'The Five Fears of CPR Rescue',
        link: "https://www.youtube.com/embed/wMrDebkgDHo?si=JuVpET27hS6IJZu3",
        duration: 5, 
      },
      {
        title: 'Heart Attacks',
        link: "https://www.youtube.com/embed/-7SDm0UmG_4?si=Ard52IL6PiXO8rbg",
        duration: 8, 
      },
      {
        title: 'Stroke',
        link: "https://www.youtube.com/embed/s_5lSXEu2pw?si=itJWN8rr3PPZxaQH",
        duration: 5, 
      },
      {
        title: 'Adult CPR - Lay Rescuer',
        link: "https://www.youtube.com/embed/s_5lSXEu2pw?si=f6hoV-N_teJH4Oum",
        duration: 3, 
      },
      {
        title: 'When CPR Doesnt Work',
        link: "https://www.youtube.com/embed/If2ik9PAYzk?si=aCHAZXdrA5LfC8_F",
        duration: 10, 
      },
      {
        title: 'Conscious Adult Choking',
        link: "https://www.youtube.com/embed/GLz5dWCEcPc?si=sIhR57BaeaPXcNdu",
        duration: 4, 
      },
      {
        title: 'Amputation',
        link: "https://www.youtube.com/embed/6tdmwSxe4tw?si=zulrsOK1mxUftziO",
        duration: 7,
      },
      {
        title: 'Tourniquets',
        link: "https://www.youtube.com/embed/xFVY4IdNdg0?si=ctlo9iTHrSemZxci",
        duration: 5, 
      },
      {
        title: 'Seizure',
        link: "https://www.youtube.com/embed/keYKzRZ6Mj8?si=2NaYlMGoHXxHYm04",
        duration: 6, 
      },
      {
        title: 'How to Use an EpiPen (Latest Guidelines)',
        link: "https://www.youtube.com/embed/bwGFLzIioA4?si=N4N8QrP0Uv59HRJr",
        duration: 4, 
      },
      {
        title: 'Special Considerations for CPR, AED and Choking',
        link: "https://www.youtube.com/embed/d-SipwXquOE?si=tjaCsWG2bAIl4PGj",
        duration: 11, 
      }
      
    ]
  }
];
