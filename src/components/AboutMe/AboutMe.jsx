import React from 'react'
import myPhoto from '/photo prototype 1.png'
export default function AboutMe() {
  return (
    <div className="wrap w-full min-h-screen bg-customBlack">
      <section className='w-full h-[90vh] p-5 flex flex-col items-center relative'>
        <p className='text-customPurple text-9xl absolute bottom-[10%] w-[900px] flex justify-between'><span className='backgroundText'>Yana</span><span className='backgroundText'>Zubal</span></p>
        <img src={myPhoto} alt="my photo" className='w-[448px] absolute bottom-[0%]'/>
        <div className="textCon w-[570px] h-[180px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light
        absolute top-[8%] left-[8%]">
        &lt;Hello there! I'm <b>Yana Zubal</b>, a web developer and UI/UX designer based in Ukraine. My passion lies in creating beautiful and functional <b>web experiences</b>. I'm very glad you decided to explore my portfolio page, where I showcase my skills, projects, and the journey I've embarked on as a <b>designer</b> and <b>developer</b>. I am constantly improving myself by learning new technologies and acquiring new soft skills.&gt;
        </div>
        <div className="textCon w-[570px] h-[180px] rounded-2xl bg-customPurple/40 backdrop-blur-lg p-4 text-customWhite font-light
        absolute top-[30%] right-[7%]">
        &lt;Don't hesitate to explore my <b>projects</b> and learn more about me. Each project is a testament to my commitment to quality and <b>continuous learning</b>. Whether it's a simple website or a complex application, I strive to deliver the best possible <b>user experience</b>. With every new project I create, I feel a sense of growth and a passion for facing and overcoming new <b>challenges</b>.&gt;
        </div>
      </section>
    </div>
  )
}
