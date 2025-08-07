import React, { useEffect, useRef } from 'react'
import styles from './Projects.module.css'
import SunriseGuitarPic from '../../Asset/SunriseGuitarLong.png'
import TelegramNewsBotPic from '../../Asset/TelegramNewsBot.png'
import PortfolioPic from '../../Asset/portfolio.png'


export default function Projects() {
    const projectRefs = useRef([]);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            projectRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const projectTop = rect.top + window.pageYOffset;
                    const projectHeight = rect.offsetHeight;
                    
                    // Calculate which project section is currently in view
                    const currentSection = Math.floor(scrolled / windowHeight);
                    
                    // Only show the image for the current section
                    const imgWrap = ref.querySelector(`.${styles.imgWrap}`);
                    if (imgWrap) {
                        if (index === currentSection || (index === projectRefs.current.length - 1 && scrolled >= (projectRefs.current.length - 1) * windowHeight)) {
                            imgWrap.style.opacity = '1';
                            imgWrap.style.visibility = 'visible';
                        } else {
                            imgWrap.style.opacity = '0';
                            imgWrap.style.visibility = 'hidden';
                        }
                    }
                }
            });
        };
        
        // Initialize on load - show first image
        const handleInitialLoad = () => {
            projectRefs.current.forEach((ref, index) => {
                if (ref) {
                    const imgWrap = ref.querySelector(`.${styles.imgWrap}`);
                    if (imgWrap) {
                        if (index === 0) {
                            imgWrap.style.opacity = '1';
                            imgWrap.style.visibility = 'visible';
                        } else {
                            imgWrap.style.opacity = '0';
                            imgWrap.style.visibility = 'hidden';
                        }
                    }
                }
            });
        };
        
        // Call initial load function
        handleInitialLoad();
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const addProjectRef = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };
    return (
        <div className={styles.ProjectsContainer}>
            
            {/* <div className={styles.colorFiller}></div> */}
            <div className={styles.Project} ref={addProjectRef}>
                <div className={styles.ProjectDescription}>
                    <h2>Sunrise Guitar</h2>
                    <p>A fictional guitar brand which created by myself to demonstrate basic front-end development skill.</p>
                    {/* <span>Skill Set</span> */}
                    <ul>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                    <a target="_blank" href="https://sunrise-guitar.alex-chiang.com" className="btn">
                        View Details
                    </a>
                </div>
                <div className={styles.imgWrap}>
                    <img src={SunriseGuitarPic} />
                </div>
            </div>
            <div className={styles.Project} ref={addProjectRef}>
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
            <div className={styles.Project} ref={addProjectRef}>
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