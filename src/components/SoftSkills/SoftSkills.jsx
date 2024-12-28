import React from 'react'
import SoftSkillsProgressbar from '../SoftSkillsProgressbar/SoftSkillsProgressbar'
export default function SoftSkills() {
    let softSkills = [
        {
            name: 'Time Management',
            progress: 80
        },
        {
            name: 'Public Speaking',
            progress: 90
        },
        {
            name: 'Teamwork',
            progress: 70
        },
        {
            name: 'Problem Solving',
            progress: 65
        },
        {
            name: 'Continuous Learning',
            progress: 87
        },
        {
            name: 'Flexibility',
            progress: 76
        },
    ]
  return (
    <>
    <div className="softSkillsCon w-full flex justify-between">
    {softSkills.map((skill) => <SoftSkillsProgressbar key={skill.name} name={skill.name} progress={skill.progress} />)}
    </div>
    </>
  )
}
