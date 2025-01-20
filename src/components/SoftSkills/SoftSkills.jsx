import React from 'react';
import { useTranslation } from 'react-i18next';
import SoftSkillsProgressbar from '../SoftSkillsProgressbar/SoftSkillsProgressbar';
import './SoftSkills.css';
import continuousLearning from '/softSkillsIcons/continuousLearning.svg';
import flexebility from '/softSkillsIcons/flexebility.svg';
import problemSolving from '/softSkillsIcons/problemSolving.svg';
import publicSpeaking from '/softSkillsIcons/publicSpeaking.svg';
import teamwork from '/softSkillsIcons/teamwork.svg';
import timeManagment from '/softSkillsIcons/timeManagment.svg';

export default function SoftSkills() {
  const { t, i18n } = useTranslation(); 

  let softSkills = [
    {
      name: 'Time Management',
      uaName: 'Керування часом',
      frName: 'Gestion du temps',
      progress: 80,
      icon: timeManagment
    },
    {
      name: 'Public Speaking',
      uaName: 'Виступ перед публікою',
      frName: 'Prise de parole en public',
      progress: 90,
      icon: publicSpeaking
    },
    {
      name: 'Teamwork',
      uaName: 'Командна робота',
      frName: 'Travail en équipe',
      progress: 70,
      icon: teamwork
    },
    {
      name: 'Problem Solving',
      uaName: 'Розв’язання проблем',
      frName: 'Résolution de problèmes',
      progress: 65,
      icon: problemSolving
    },
    {
      name: 'Continuous Learning',
      uaName: 'Безперервне навчання',
      frName: 'Apprentissage continu',
      progress: 87,
      icon: continuousLearning
    },
    {
      name: 'Flexibility',
      uaName: 'Гнучкість',
      frName: 'Flexibilité',
      progress: 76,
      icon: flexebility
    },
  ];

  const getTranslatedName = (skill) => {
    const lang = i18n.language;
    switch (lang) {
      case 'ua':
        return skill.uaName;
      case 'fr':
        return skill.frName;
      default:
        return skill.name; 
    }
  };

  return (
    <div className="softSkillsCon w-full flex justify-between mt-3 sm:h-[450px] sm:flex-wrap md:w-[80%] md:h-[450px] lg:h-[200px] lg:flex-none lg:w-[100%]">
      {softSkills.map((skill) => {
        const translatedName = getTranslatedName(skill); 
        return (
          <SoftSkillsProgressbar
            key={skill.name}
            name={translatedName}
            progress={skill.progress}
            icon={skill.icon}
          />
        );
      })}
    </div>
  );
}
