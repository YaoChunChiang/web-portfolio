import React from 'react'
import styles from './Experience.module.css'
import AnsonNetLogo from '../../Asset/AnsonLogo.svg'
import MississippiCollegeLogo from '../../Asset/MississippiCollegeLogo.png'
import CycuLogo from '../../Asset/CycuLogo.png'
import EduLogo from '../../Asset/EduLogo.png'
import ExperienceItem from './component/ExperienceItem'


export default function Experience() {
    return (
        <div className={styles.experienceContainer}>
            <ExperienceItem
                name="Anson Net"
                position="Full stack developer"
                leftMoreInfo="Full time"
                rightMoreInfo="2019 - Present"
                img={<img src={AnsonNetLogo} alt="Anson Net Logo" />}
                descriptionList={['Building front end app with React.js.', 'Utilize C# to connect to Database.', 'Design Database base on customer\'s request.', 'Help managing RD team.']}
            />
            <ExperienceItem
                name="Digital Education Institute"
                position="Front end development"
                leftMoreInfo="Student"
                rightMoreInfo="2018 - 2019"
                img={<img src={EduLogo} alt="EDU Logo" />}
                descriptionList={[
                    'Deep dive into front end development skill.',
                    'Required skills: JavaScript, CSS, HTML, PHP, MySQL, Relational Database Design.'
                ]}
            />
            <ExperienceItem
                name="Mississippi College"
                position="Exchange student"
                leftMoreInfo="Psychology"
                rightMoreInfo="2017 - 2018"
                img={<img src={MississippiCollegeLogo} alt="Mississippi College Logo" />}
                descriptionList={[
                    'Focus on studying behavioral psychology.', 
                    'Improve language skill on both English and Japanese.',
                ]}
            />
            <ExperienceItem
                name="Chung Yuan Christian University"
                position="Psychology degree"
                leftMoreInfo="Bachelor"
                rightMoreInfo="2013 - 2018"
                img={<img src={CycuLogo} alt="CYCU Logo" />}
                descriptionList={[
                    'Have a basic understanding of every category of psychology', 
                    'Responsible for hosting the psychology summer camp.'
                ]}
            />
        </div>
    )
}
