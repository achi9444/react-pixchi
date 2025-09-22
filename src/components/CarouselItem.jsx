import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/CarouselStage.module.scss';

export default function CarouselItem({ src, index, current, images, title, setIsPaused, tag }) {
    const tiltRef = useRef(null);
    const isCenter = index === current;

    // 計算環狀偏移距離
    const distance = (index - current + images.length) % images.length;
    const reverse = (current - index + images.length) % images.length;
    const shortest = distance <= reverse ? distance : -reverse;
    const offset = shortest * 600;


    useEffect(() => {
        if (isCenter && tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                startX: 10,
                startY: -15,
                resetToStart: true,
                max: 25,
                speed: 400,
                glare: true,
                'max-glare': 0.2,
            });
        }
        return () => {
            tiltRef.current?.vanillaTilt?.destroy();
        };
    }, [isCenter]);

    // 超過可視範圍就不渲染
    if (Math.abs(shortest) > 2) return null;
    return (
        <div
            className={styles.itemWrapper}
            style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translateX(${offset}px)`,
                position: 'absolute',
                zIndex: isCenter ? 2 : 1,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <img
                ref={tiltRef}
                src={src}
                alt={title}
                className={`${styles.item} ${isCenter ? styles.center : styles.side}`}
            />
            {/* 是主角才有標題 */}
            {
                isCenter && (
                    <div className={styles.leader}>
                        <h3>{title}</h3>
                        <h4>{tag}</h4>
                    </div>
                )
            }
        </div>
    );
}
