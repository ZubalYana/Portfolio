import React, { useState } from 'react';

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in HTML, CSS, JavaScript, Node.js, and React, including frameworks like Express and Tailwind CSS. I can also work with SCSS, jQuery, and AJAX. For my designs, I primarily use Figma. Currently, I am planning to learn TypeScript.',
    },
    {
      question: 'How do you handle project timelines and deadlines?',
      answer: 'I am highly interested in time management and use various tools to stay organized. I track my work in Notion and Coda, and for team projects, I primarily use ClickUp. I take my work seriously, ensuring tasks are completed on time or promptly communicating any potential delays.',
    },
    {
      question: 'Can you integrate third-party APIs or services into a web application?',
      answer: 'Absolutely! I enjoy working with APIs as they are incredibly useful in various contexts. I have experience integrating multiple APIs and currently have a few active projects showcasing their usage. Feel free to check them out on the /projects page!',
    },
    {
      question: 'How do you handle feedback and revisions?',
      answer: 'I welcome feedback at every stage of the design and development process. I greatly value input from clients, colleagues, and mentors, as it helps me grow and improve both my projects and skills. I’m not afraid of constructive criticism—it challenges me to become better!',
    },
    {
      question: 'Are you able to work in a team?',
      answer: 'Sure! I’ve worked on several projects that required close teamwork and effective communication. I’ve had experience as a designer, backend developer, and even as a project manager. I really enjoyed the collaboration and the way we worked together to bring these projects to life!',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="questions w-[90%] mt-5">
      {questions.map((question, index) => (
        <div className="questionContainer" key={index}>
          <div
            className="question w-full h-[70px] rounded-2xl bg-customPurple text-customWhite text-xl font-medium flex items-center justify-between p-6 mb-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h3>{question.question}</h3>
            <div className="plusCon w-[25px] h-[25px] flex justify-center items-center relative">
              <div className="horizontalStroke absolute w-full h-[3px] bg-customWhite rounded-md"></div>
              <div
                className={`verticalStroke absolute w-[3px] h-full bg-customWhite rounded-md transition-transform duration-600 ease-in-out ${
                  activeIndex === index ? 'rotate-90' : ''
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`answer overflow-hidden transition-[height,opacity] duration-500 ease-in-out ${
              activeIndex === index ? 'h-auto opacity-100' : 'h-0 opacity-0'
            }`}
          >
            <div className="w-full p-4 rounded-2xl bg-customBgPurple text-customWhite text-base font-normal mb-4">
              <h3>{question.answer}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
