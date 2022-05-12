import React from 'react'
import styles from './ExperienceItem.module.css'

export default function ExperienceItem(props) {
    const {name, position, leftMoreInfo, rightMoreInfo, img, descriptionList} = props;
    
    const addNoWrap = (text) => {
        let lastWhiteSpaceIndex = text.lastIndexOf(" ");
        let newText = `${text.substring(0, lastWhiteSpaceIndex)}\u00A0${text.substring(lastWhiteSpaceIndex + 1)}`
        return newText;
    }
    
    return (
        <div className={styles.experience}>
            <h2>{name}</h2>
            <h3>{position}</h3>
            <div className={styles.moreInfo}>
                {leftMoreInfo && <span>{leftMoreInfo}</span>}
                {rightMoreInfo && <span>{rightMoreInfo}</span>}
            </div>
            <div className={styles.experienceImgWrap}>
                {img}
            </div>
            <ul>
                {descriptionList.map(description => (
                    <li>{description}</li>
                ))}
            </ul>
        </div>
    )
}
