import React, { useEffect, useRef, useState } from 'react';
import '../styles/PixelMe.scss';

const pixelSize = 15;

// 地圖數據保持不變
const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 3, 1, 1, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 3, 3, 1, 1, 3, 7, 3, 1, 1, 1, 1, 3],
    [0, 0, 0, 0, 0, 0, 3, 1, 1, 3, 1, 1, 3, 3, 7, 7, 7, 3, 3, 1, 1, 3],
    [0, 0, 0, 0, 0, 0, 3, 1, 1, 3, 3, 3, 7, 7, 7, 7, 7, 7, 7, 3, 1, 3],
    [0, 0, 0, 0, 0, 0, 3, 1, 1, 3, 7, 7, 3, 7, 7, 7, 7, 3, 7, 3, 1, 3],
    [0, 0, 0, 0, 0, 3, 1, 1, 1, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 1, 3],
    [0, 0, 0, 0, 0, 3, 1, 1, 3, 3, 7, 7, 3, 7, 7, 7, 7, 3, 7, 3, 1, 3],
    [0, 0, 0, 0, 0, 3, 1, 3, 3, 3, 7, 7, 3, 7, 7, 7, 7, 3, 7, 3, 1, 3],
    [0, 0, 0, 0, 0, 3, 1, 3, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 3, 3, 1, 3],
    [0, 0, 0, 0, 3, 1, 1, 3, 3, 3, 7, 7, 7, 7, 3, 3, 7, 7, 3, 3, 1, 3],
    [0, 0, 0, 0, 3, 1, 1, 3, 3, 3, 3, 7, 7, 7, 7, 7, 7, 3, 3, 3, 1, 3],
    [0, 0, 0, 0, 3, 1, 3, 7, 3, 3, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3],
    [0, 0, 0, 0, 3, 1, 3, 7, 3, 3, 3, 3, 7, 11, 3, 3, 3, 3, 3, 3, 1, 3],
    [0, 0, 0, 3, 1, 1, 3, 7, 3, 3, 10, 3, 3, 3, 3, 10, 3, 3, 3, 3, 1, 3],
    [0, 0, 0, 3, 1, 1, 3, 7, 11, 3, 3, 3, 3, 3, 3, 3, 3, 11, 7, 3, 1, 3],
    [0, 0, 0, 3, 1, 1, 3, 7, 11, 3, 3, 3, 3, 3, 3, 10, 3, 11, 7, 3, 1, 3],
    [0, 0, 0, 3, 1, 3, 3, 7, 7, 11, 3, 3, 3, 3, 3, 10, 3, 11, 7, 3, 1, 3],
    [0, 0, 0, 3, 1, 3, 3, 7, 7, 11, 3, 3, 3, 3, 3, 3, 3, 11, 7, 3, 1, 3],
    [0, 0, 0, 3, 1, 3, 3, 7, 7, 11, 3, 3, 3, 3, 3, 8, 7, 7, 7, 3, 1, 3],
    [0, 0, 0, 3, 1, 3, 3, 3, 7, 7, 3, 7, 7, 7, 7, 7, 7, 7, 7, 3, 1, 3],
    [0, 0, 0, 3, 1, 3, 6, 3, 7, 7, 3, 7, 7, 7, 7, 7, 7, 7, 3, 3, 1, 3],
    [0, 0, 0, 3, 1, 3, 6, 3, 7, 7, 11, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3],
    [0, 0, 0, 3, 1, 3, 6, 3, 7, 7, 11, 3, 5, 11, 11, 11, 11, 4, 3, 1, 1, 3],
    [0, 0, 0, 3, 1, 3, 6, 6, 3, 7, 11, 3, 5, 7, 7, 7, 8, 4, 3, 1, 3, 3],
    [0, 0, 0, 3, 1, 3, 6, 6, 3, 7, 11, 3, 5, 4, 4, 4, 4, 4, 3, 1, 3, 3],
    [0, 0, 0, 3, 1, 3, 6, 6, 3, 7, 11, 3, 5, 4, 4, 4, 4, 4, 3, 1, 3, 3],
    [0, 0, 0, 3, 1, 3, 3, 6, 3, 7, 11, 3, 5, 4, 4, 4, 4, 3, 3, 1, 3, 3],
    [0, 0, 0, 3, 1, 1, 3, 3, 3, 7, 11, 3, 3, 5, 5, 5, 3, 3, 1, 1, 3, 3],
    [0, 0, 3, 3, 1, 3, 3, 2, 3, 7, 11, 3, 0, 3, 3, 3, 3, 3, 1, 3, 3, 3],
    [0, 0, 3, 3, 1, 3, 2, 2, 3, 3, 3, 3, 0, 3, 2, 2, 2, 3, 1, 3, 3, 3],
    [0, 0, 3, 1, 1, 3, 2, 2, 3, 7, 11, 3, 0, 3, 2, 2, 2, 3, 1, 3, 3, 3],
    [0, 0, 3, 1, 3, 2, 2, 3, 3, 7, 7, 3, 0, 0, 3, 2, 2, 3, 1, 3, 1, 3],
    [3, 3, 1, 1, 1, 3, 3, 0, 3, 7, 7, 3, 0, 0, 0, 3, 3, 1, 3, 3, 1, 3],
    [0, 0, 3, 3, 3, 0, 0, 0, 7, 3, 7, 3, 0, 0, 0, 0, 3, 1, 1, 1, 3, 0],
    [0, 3, 3, 3, 0, 0, 0, 0, 0, 7, 7, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const colors = {
    1: '#6C472B',
    2: '#5C191C',
    3: '#111111',
    4: '#94D8CD',
    5: '#7EAEA6',
    6: '#40628B',
    7: '#FFBC86',
    8: '#E3995E',
    9: '#752B00',
    10: '#DDAB22',
    11: '#E49C5C',
};

const PixelMe = ({ mode = 'auto', onFinish, onReady, className }) => {
    const gridRef = useRef(null);
    const [animationDone, setAnimationDone] = useState(false);
    const [progressPercent, setProgressPercent] = useState(0);

    // 判斷動靜
    const navType = performance.getEntriesByType('navigation')[0]?.type;
    const shouldAnimate = navType === 'navigate' || navType === 'reload';
    const isLoading = mode === 'animated';

    useEffect(() => {

        // 放東西的空陣列
        const pixels = [];
        // 生成所有像素數據
        for (let y = map.length - 1; y >= 0; y--) {
            for (let x = 0; x < map[y].length; x++) {
                const type = map[y][x];
                // 0不填色
                if (type === 0) continue;
                // 不是0的放進陣列裡
                pixels.push({ x, y, color: colors[type] });
            }
        }
        // 靜態
        if (mode === 'static') {
            // 清空舊內容，避免重複渲染
            gridRef.current.innerHTML = '';

            // 靜態渲染所有像素
            pixels.forEach(({ x, y, color }) => {
                const div = document.createElement('div');
                div.className = 'allPixel';
                div.style.left = `${x * pixelSize}px`;
                div.style.bottom = `${(map.length - 1 - y) * pixelSize}px`;
                div.style.backgroundColor = color;
                gridRef.current.appendChild(div);
            });
            setTimeout(() => {
                onReady?.();
            }, 600);
            return;
        }

        // 打亂陣列排序，亂數-0.5，回傳值正負不同使陣列重新排序
        const shuffled = pixels.sort(() => Math.random() - 0.5);

        // 跟網頁載入速度調整長格子的時間
        // getEntriesByType('navigation')[0]取得所有「導航」類型的性能紀錄[第1筆]
        // 回傳PerformanceNavigationTiming物件，包含時間戳記
        const nav = performance.getEntriesByType('navigation')[0];
        // 上一行拿到的時間-開始(0),避免不存在，預設2秒
        const loadTime = nav ? nav.loadEventEnd - nav.startTime : 2000;
        // 確保不會太短，至少1秒
        const totalDuration = Math.max(loadTime, 1500);

        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            // 進度=>不超過1(100%) elapsed過去
            const progress = Math.min(elapsed / totalDuration, 1);
            setProgressPercent(Math.floor(progress * 100));
            const targetCount = Math.floor(shuffled.length * progress);
            // 確認現在有哪幾個沒有被加入
            for (let i = gridRef.current.childElementCount; i < targetCount; i++) {
                const { x, y, color } = shuffled[i];
                const div = document.createElement('div');
                // 加入名稱(用在css動畫)
                div.className = 'pixel';
                // 計算擺放位置、顏色
                div.style.left = `${x * pixelSize}px`;
                div.style.bottom = `${(map.length - 1 - y) * pixelSize}px`;
                div.style.backgroundColor = color;
                div.addEventListener('animationend', () => {
                    // 移除名稱(靜態)
                    div.classList.remove('pixel');
                    // 計算總數
                    div.classList.add('allPixel');
                })
                // 把新增的div放進容器裡
                gridRef.current.appendChild(div);
            }
            if (progress < 1) {
                // 刷新同步不掉幀
                requestAnimationFrame(animate);
            }
            else {
                if (onFinish) {
                    setTimeout(() => {
                        setAnimationDone(true);
                        onFinish?.();
                    }, 600)
                }
            }
        };
        requestAnimationFrame(animate);
    }, [isLoading]); // 只執行一次

    return (
        <>
            <div className={`myBox ${className || ''}`}>
                <div
                    className="me"
                    ref={gridRef}
                    style={{
                        // 完整圖的橫向格數*格子尺寸
                        width: `${map[0].length * pixelSize}px`,
                        height: `${map.length * pixelSize}px`,
                    }}
                />
                {isLoading && !animationDone && (
                    <div className="progressText">
                        {`${progressPercent}%`}
                    </div>
                )}

            </div>
        </>
    );
};

export default PixelMe;