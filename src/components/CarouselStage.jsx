import React, { useEffect, useState } from 'react';
import styles from '../styles/CarouselStage.module.scss';
import CarouselItem from './CarouselItem';
import { workInfo, levelData } from '../data/workInfo.js';

export default function CarouselStage() {
    const [current, setCurrent] = useState(0);
    const [flash, setFlash] = useState(false);
    const team = levelData.level_3.group[0];
    const subset = team.item;
    const tag = team.tag;

    const [isPaused, setIsPaused] = useState(false);

    const handleChange = (direction) => {
        const next = (current + direction + subset.length) % subset.length;
        setCurrent(next);

        // 聚光燈閃爍
        setFlash(true);
        setTimeout(() => setFlash(false), 800);
    };
    useEffect(() => {
        // hover暫停
        if (isPaused) return;
        const interval = setInterval(() => {
            handleChange(1);
        }, 2000);

        return () => clearInterval(interval);
    }, [current, isPaused]);

    return (
        <div className={styles.stage}>
            <div className={`${styles.spotlight} ${flash ? styles.flash : ''}`} />
            <div className={styles.carousel}>
                {subset.map((work, index) => (
                    <CarouselItem
                        key={work.id}
                        src={work.img}
                        index={index}
                        current={current}
                        images={subset}
                        title={work.title}
                        tag={tag}
                        setIsPaused={setIsPaused}
                    />
                ))}
            </div>
            <div className={styles.controls}>
                <button onClick={() => handleChange(-1)}><img src="./left.webp" alt="left" />   </button>
                <button onClick={() => handleChange(1)}><img src="./right.webp" alt="right" /></button>
            </div>
        </div>
    );
}
