import React from 'react'
import styles from './Home.module.css'
import HomeImg from '../../Asset/HomeCover.jpeg'
import ProfileImg from '../../Asset/profilePic.jpg'
import ReactImg from '../../Asset/reactIcon.png';
import JsImg from '../../Asset/jsIcon.png';
import SqlImg from '../../Asset/sqlIcon.png';
import DatabaseImg from '../../Asset/databaseIcon.png';


export default function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.HomeCoverImg}>
                <img src={HomeImg} />
                <span className={styles.HomeCoverFont}>Fall Stack Developer <span className="yellow">/</span><br />Guitar Player <span className="yellow">/</span><br />Jiu Jitsu Lover <span className="yellow">/</span></span>
            </div>
            <section className={styles.aboutMe}>
                <h2>About Me</h2>
                <div className={styles.intro}>
                    <div className={styles.introImgWrap}>
                        <img src={ProfileImg} alt="" />
                    </div>
                    <div className={styles.bio}>
                        <p>Found my passion with coding when I was studying in the US as an exchange student. So I went to the coding school in Taiwan to sharpen my front-end and back-end development skill. I am able to build front-end app with <span className={styles.bold} >HTML, CSS, vanilla JavaScript  </span> and <span className={styles.bold} >React.js</span> and build API with <span className={styles.bold} >C#  </span>and writing <span className={styles.bold} >SQL</span>. Have basic knowledge of <span className={styles.bold} >database design</span>.</p>
                        <p>Beside coding, I spend most my time studying Brazilian Jiu-Jitsu and playing guitar. Hopfully I can become a BJJ black belt one day!</p>
                        
                    </div>
                </div>
            </section>
            <section className={styles.skillSet}>
                <h2>Skill Set</h2>
                <ul>
                    <li>
                        <div className={styles.skillImgWrap}>
                            <img src={JsImg} />
                        </div>
                        <p className={styles.skillDescription}>
                            Feeling comfortale building app with vanilla JavaScript
                        </p>
                    </li>
                    <li>
                        <div className={styles.skillImgWrap}>
                            <img src={ReactImg} />
                        </div>
                        <p className={styles.skillDescription}>
                            No problem working with React.js
                        </p>
                    </li>
                    <li>
                        <div className={styles.skillImgWrap}>
                            <img src={SqlImg} />
                        </div>
                        <p className={styles.skillDescription}>
                            Able to write SQL to access data from DB.
                        </p>
                    </li>
                    <li>
                        <div className={styles.skillImgWrap}>
                            <img src={DatabaseImg} />
                        </div>
                        <p className={styles.skillDescription}>
                        Have basic knowledge of database design.
                        </p>
                    </li>
                </ul>
            </section>
            <section className={styles.getInTouch}>
                <h2>Get In Touch</h2>
                <form>
                    <input placeholder="Name" type="text" />
                
                    <input  placeholder="Email" type="text" />
                
                    <textarea  placeholder="Message"type="text" />
                    
                    <div className="btn">Send</div>
                </form>
            </section>
            {/* <section className={styles.socialMedia}>
                <h2>Social Media</h2>
            </section> */}
        </div>
    )
}
