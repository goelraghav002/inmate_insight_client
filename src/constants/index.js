import { analytics, dashboard, withdraw } from "../assets";


export const navlinks = [
    {
      name: 'Dashboard',
      imgUrl: dashboard,
      onclick: '',
      link: '/',
    },
    {
      name: 'Courses',
      imgUrl: analytics,
      onclick: '',
      link: '/courses',
    },
    {
      name: 'Resources',
      imgUrl: dashboard,
      link: '/resources',
      onclick: '',
      disabled: true,
    },
    {
      name: 'Chat',
      imgUrl: withdraw,
      link: '/chat',
      onclick: '',
      disabled: true,
    },
];
  
export const courses = [
  {
    id: 1,
    title: 'Cyber Security',
    duration: '615',
    total_lecture: 11,
    completed_lecture: 6,
    course_by: 'Simplilearn',
    details: [
      {
        title: 'Cryptography & Network Security',
        link: "https://www.youtube.com/embed/Hm35SS_PY5g?si=ad-vrwAYxQGeds5n",
        duration: "133",
      },
      {
        title: 'Ethical Hacking',
        link: "https://www.youtube.com/live/3OkXu3Wxnvg?si=FcVKXGGEiqqEVF5q",
        duration: "215",
      },
      {
        title: 'Cyber Security Interview Questions And Answers',
        link: "https://www.youtube.com/live/ThsdqPck-LA?si=7JfVTpUNN52Ljk3L",
        duration: "166",
      },
      {
        title: 'Open System Interconnection Model',
        link: "https://youtu.be/Vez9dGiORG8?si=88Ij4PmMvzDuhPgo",
        duration: "12",
      },
      {
        title: 'What Is Cross Site Scripting Attack? ',
        link: "https://youtu.be/43yYsui3xZc?si=KRFTC3nzj7joxvr7",
        duration: "30",
      },
      {
        title: 'Advanced Executive Program In Cybersecurity ',
        link: "https://youtu.be/6DeZ-scCuT0?si=K0t_vNISwQE0CGCz",
        duration: "3",
      },
      {
        title: 'How To Know If Your Computer Is Hacked',
        link: "https://youtu.be/nU0jdP0PbJg?si=XLl1wNxN6MRWHq7P",
        duration: "9",
      },
      {
        title: 'TCP/IP Protocol Explained | What Is TCP/IP Address?',
        link: "https://youtu.be/CsektxtqA8c?si=r9hxMSMjcNILRoQ-",
        duration: "9",
      },
      {
        title: 'SolarWinds Attack Explained | What Is SolarWinds Attack?',
        link: "https://youtu.be/RxGI-l4VxL0?si=Kt9cAM_6kE0K4RDU",
        duration: "5",
      },
      {
        title: 'Subneting Explained | What Is Subneting? ',
        link: "https://youtu.be/mgu4blmFF_w?si=gEjJXzuBbnqf5JNw",
        duration: "11",
      },
      {
        title: 'Proxy In 5 Minutes | What Is A Proxy? | What Is A Proxy Server?  ',
        link: "https://youtu.be/j9-Y0KWVJ1k?si=MK5pRX4aWrZOR7yL",
        duration: "5",
      }
    ]
  },
  {
    id: 2,
    title: 'Course 2',
    duration: '5',
    total_lecture: 12,
    completed_lecture: 6,
    course_by: 'Raghav'
  },
  {
    id: 3,
    title: 'Course 3',
    duration: '10',
    total_lecture: 7,
    completed_lecture: 4,
    course_by: 'Raghav Sir'
  },
]