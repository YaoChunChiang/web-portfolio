import React from 'react'
import styles from './Projects.module.css'
import SunriseGuitarPic from '../../Asset/SunriseGuitarLong.png'
import TelegramNewsBotPic from '../../Asset/TelegramNewsBot.png'
import PortfolioPic from '../../Asset/portfolio.png'


export default function Projects() {
    return (
        <div className={styles.ProjectsContainer}>
            
            {/* <div className={styles.colorFiller}></div> */}
            <div className={styles.Project}>
                <div className={styles.ProjectDescription}>
                    <h2>Sunrise Guitar</h2>
                    <p>A fictional guitar brand which created by myself to demonstrate basic front-end development skill.</p>
                    {/* <span>Skill Set</span> */}
                    <ul>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                    <a target="_blank" href="https://sunrise-guitar.alex-chiang.tech" className="btn">
                        View Details
                    </a>
                </div>
                <div className={styles.imgWrap}>
                    <img src={SunriseGuitarPic} />
                </div>
            </div>
            <div className={styles.Project}>
                <div className={styles.ProjectDescription}>
                    <h2>Lazy News Bot</h2>
                    <p>A Telegram bot which will gather news from requested site.</p>
                    <ul>
                        <li>Node.js</li>
                        <li>Telegram bot API</li>
                    </ul>
                    <p>Bot ID: @lazy_news_bot</p>
                </div>
                <div className={styles.imgWrap}>
                    <img src={TelegramNewsBotPic} />
                </div>
            </div>
            <div className={styles.Project}>
                <div className={styles.ProjectDescription}>
                    <h2>My Portfolio</h2>
                    <p>My website for presenting my work.</p>
                    <ul>
                        <li>React.js</li>
                        <li>JSONPlaceholder API</li>
                    </ul>
                    <a target="_blank" href="/" className="btn">
                        View Details
                    </a>
                </div>
                <div className={styles.imgWrap}>
                    <img src={PortfolioPic} />
                </div>
            </div>
        </div>
    )
}