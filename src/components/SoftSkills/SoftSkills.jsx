import React from 'react';
import { useTranslation } from 'react-i18next';
import SoftSkillsProgressbar from '../SoftSkillsProgressbar/SoftSkillsProgressbar';

export default function SoftSkills() {
  const { t, i18n } = useTranslation(); 

  let softSkills = [
    {
      name: 'Time Management',
      uaName: 'Керування часом',
      frName: 'Gestion du temps',
      progress: 80
    },
    {
      name: 'Public Speaking',
      uaName: 'Виступ перед публікою',
      frName: 'Prise de parole en public',
      progress: 90
    },
    {
      name: 'Teamwork',
      uaName: 'Командна робота',
      frName: 'Travail en équipe',
      progress: 70
    },
    {
      name: 'Problem Solving',
      uaName: 'Розв’язання проблем',
      frName: 'Résolution de problèmes',
      progress: 65
    },
    {
      name: 'Continuous Learning',
      uaName: 'Безперервне навчання',
      frName: 'Apprentissage continu',
      progress: 87
    },
    {
      name: 'Flexibility',
      uaName: 'Гнучкість',
      frName: 'Flexibilité',
      progress: 76
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
    <div className="softSkillsCon w-full flex justify-between mt-3 h-[200px]">
      {softSkills.map((skill) => {
        const translatedName = getTranslatedName(skill); 
        return (
          <SoftSkillsProgressbar
            key={skill.name}
            name={translatedName}
            progress={skill.progress}
          />
        );
      })}
    </div>
  );
}
