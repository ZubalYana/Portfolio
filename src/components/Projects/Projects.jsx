import React from 'react'
import ExtendedProjectCard from '../ExtendedProjectCard/ExtendedProjectCard'
import sheret from '/projectsImgs/sheret.png';
import travelog from '/projectsImgs/travelog.png';
import dental from '/projectsImgs/dental.png';
import honey from '/projectsImgs/honey.png';
import yantarne from '/projectsImgs/yantarne.png';
import yorokobi from '/projectsImgs/yorokobi.png';
import daunku from '/projectsImgs/daunku.png';
export default function Projects() {
  let projects = [
    {
      name: 'SHERET',
      img: sheret,
      description: 'Sheret is an online file-sharing platform designed to make managing your files effortless and hassle-free—no need for physical storage devices. With a sleek, user-friendly interface, my custom design, and incredibly convenient features, Sheret has everything you need. Simply upload your file, receive a unique code, and access your file anytime, anywhere!',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Multer', 'Express', 'Dotenv', 'MongoDB'],
      repoLink: 'https://github.com/ZubalYana/Sheret',
      presentationLink: 'https://www.canva.com/design/DAGWAE-TrWU/PggvoTljiQ5zdtjk9Rzj7A/edit?utm_content=DAGWAE-TrWU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      projectLink: 'https://sheret.onrender.com/'
    },
    {
      name: 'Travelog',
      img: travelog,
      description: 'This webpage is for a dental clinic and offers a range of functions with a user-friendly experience. It was my first major React project, featuring tools for patients to leave reviews, register, and book appointments. On the administrative side, it includes an intuitive admin panel to manage the clinic\'s services efficiently. This project was a valuable step in building dynamic and interactive web applications.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Multer', 'Express', 'Dotenv', 'MongoDB', 'Bcrypt', 'JWT', 'Cookies'],
      repoLink: 'https://github.com/ZubalYana/Personal-blog',
      presentationLink: 'https://www.canva.com/design/DAGPoAozo18/CaHcLiOBT8_yW07VmK_qrQ/edit',
      projectLink: ''
    },
    {
      name: 'DENTAL',
      img: dental,
      description: 'This webpage is for a dental clinic and offers a range of functions with a user-friendly experience. It was my first major React project, featuring tools for patients to leave reviews, register, and book appointments. On the administrative side, it includes an intuitive admin panel to manage the clinic\'s services efficiently. This project was a valuable step in building dynamic and interactive web applications.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Multer', 'Express', 'Dotenv', 'MongoDB', 'React', 'React Modal'],
      repoLink: 'https://github.com/ZubalYana/Dental',
      presentationLink: '',
      projectLink: ''
    },
    {
      name: 'Honey',
      img: honey,
      description: 'This project is a static web page I created to learn and practice using the Tailwind CSS framework. Through building this page, I gained valuable hands-on experience with Tailwind\'s utility-first approach to styling, which has since become a key part of my workflow. While this page doesn\'t include real functionality and was completed in just one day, it served as a great starting point for mastering the framework.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'React', 'Tailwind CSS'],
      repoLink: 'https://github.com/ZubalYana/Honey-Tailwind-practice',
      presentationLink: '',
      projectLink: ''
    },
    {
      name: 'Yantarne FM',
      img: yantarne,
      description: 'This was a team project where I took charge of designing and developing the first screen, focusing on responsive design and engaging animations—something I truly enjoy in every project. Working with the team helped me strengthen my collaboration skills, and we integrated a radio API to create our unique version. This experience was both rewarding and a great opportunity to combine creativity with teamwork.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'React', 'API'],
      repoLink: 'https://github.com/ihymon/yantarne-team-project',
      presentationLink: '',
      projectLink: ''
    },
    {
      name: 'Yorokobi',
      img: yorokobi,
      description: 'Yorokobi is a Japanese cuisine restaurant concept born from my passion for Japanese culture and vivid imagination. While it may not match the sophistication or functionality of my more recent projects, it holds a special place in my journey as a developer. This project marked a significant milestone, allowing me to combine creativity with technical skills, and it was one I truly enjoyed and felt proud of completing.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Express', 'Axios', 'MongoDB'],
      repoLink: 'https://github.com/ZubalYana/Yorokobi',
      presentationLink: '',
      projectLink: ''
    },
    {
      name: 'Daunku',
      img: daunku,
      description: 'Daunku is an online shop for selling plants, designed to provide a seamless shopping experience. This project offered me valuable hands-on experience and features a wide range of functionality. Customers can place orders and track them conveniently via email or a Telegram bot. The admin panel is equipped with robust tools, including the ability to manage inventory, handle user accounts, and send newsletters.',
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Express', 'Axios', 'MongoDB'],
      repoLink: 'https://github.com/ZubalYana/Daunku',
      presentationLink: '',
      projectLink: ''
    },

  ]
  return (
    <div className="wrap w-full min-h-screen bg-customBlack p-10 flex flex-col items-center">
       {projects.map((project, index) => (
        <ExtendedProjectCard key={index} {...project} /> 
      ))}
    </div>
  )
}
