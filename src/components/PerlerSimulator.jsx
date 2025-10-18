import React, { useState, useRef } from "react";
import "../styles/PerlerSimulator.scss";

const CELL_SIZE = 25;

export default function PerlerSimulator() {
    // 預設格數
    const [gridSize, setGridSize] = useState(16);
    // 二維陣列，預設白色
    const [grid, setGrid] = useState(
        Array(16).fill(null).map(() => Array(16).fill("#ffffff"))
    );
    // 預選紅色
    const [selectedColor, setSelectedColor] = useState("#ff6b6b");
    // 判斷是否在畫
    const [isDrawing, setIsDrawing] = useState(false);
    // 切換橡皮擦
    const [isErasing, setIsErasing] = useState(false);
    // 匯出是否加格線
    const [showGridLine, setShowGridLine] = useState(true);
    // 儲存最外層idv
    const containerRef = useRef(null);

    // 建立新空白畫布
    const initGrid = (size) => Array(size).fill(null).map(() => Array(size).fill("#ffffff"));

    const paintCell = (row, col) => {
        // 不能小於邊界，也不能超出邊界
        if (row < 0 || col < 0 || row >= gridSize || col >= gridSize) return;
        // 接收前一個grid狀態
        setGrid((prev) => {
            // 對每一列r使用［展開運算符］建立新的陣列，格子保持原本顏色值
            const newGrid = prev.map((r) => [...r]);

            // 如果erasing就塗白=擦掉，不然就上目前顏色
            newGrid[row][col] = isErasing ? "#ffffff" : selectedColor;
            return newGrid;
        });
    };

    // 點滑鼠開始畫
    const handleMouseDown = (row, col) => { setIsDrawing(true); paintCell(row, col); };
    // 滑動繼續畫
    const handleMouseEnter = (row, col) => { if (isDrawing) paintCell(row, col); };
    // 放開終止
    const handleMouseUp = () => setIsDrawing(false);

    // 觸控-避免滾動&開始畫
    const handleTouchStart = (e, row, col) => {
        e.preventDefault();
        setIsDrawing(true);
        paintCell(row, col);
    };
    // 追蹤手指位置，正在觸碰則更新顏色
    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);

        if (target && target.classList.contains("perler-cell")) {
            e.preventDefault(); // ✅ 只阻止格子拖時滾動
            if (isDrawing && target.dataset.row && target.dataset.col) {
                const row = parseInt(target.dataset.row, 10);
                const col = parseInt(target.dataset.col, 10);
                paintCell(row, col);
            }
        }
    };
    // 放手就不畫
    const handleTouchEnd = () => setIsDrawing(false);
    // 清空&匯出
    const clearGrid = () => setGrid(initGrid(gridSize));
    // 用canvas畫出畫布，如果showGridLine是true就畫格線，並產生下載連結存PNG
    const exportToPNG = () => {
        // 動態創建canvas元素，不出現存在於記憶體
        const canvas = document.createElement("canvas");
        canvas.width = gridSize * CELL_SIZE;
        canvas.height = gridSize * CELL_SIZE;
        // CanvasRenderingContext2D 物件
        const ctx = canvas.getContext("2d");

        grid.forEach((row, r) =>
            row.forEach((color, c) => {
                ctx.fillStyle = color;
                ctx.fillRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                if (showGridLine) {
                    ctx.strokeStyle = "#ccc";
                    ctx.strokeRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                }
            })
        );

        const link = document.createElement("a");
        link.download = `perler-${gridSize}x${gridSize}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };
    // 限制最大尺寸64*64
    const handleGridSizeChange = (e) => {
        const size = parseInt(e.target.value, 10);
        if (!isNaN(size) && size > 0 && size <= 64) {
            setGridSize(size);
            setGrid(initGrid(size));
        }
    };

    return (
        <div
            className="perler-container"
            ref={containerRef}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <div className="perler-tools">
                <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
                <button onClick={() => setIsErasing(false)}>畫筆</button>
                <button onClick={() => setIsErasing(true)}>橡皮擦</button>
                <button onClick={clearGrid}>清空</button>
                <button onClick={exportToPNG}>匯出 PNG</button>
                <label>
                    格數：
                    <input type="number" min="4" max="64" value={gridSize} onChange={handleGridSizeChange} />
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={showGridLine}
                        onChange={(e) => setShowGridLine(e.target.checked)}
                    />
                    匯出時顯示格線
                </label>
            </div>

            <div className="perler-grid">
                {grid.map((row, r) => (
                    <div key={r} className="perler-row">
                        {row.map((color, c) => (
                            <div
                                key={c}
                                className="perler-cell"
                                style={{ backgroundColor: color, width: CELL_SIZE, height: CELL_SIZE }}
                                data-row={r}
                                data-col={c}
                                onMouseDown={() => handleMouseDown(r, c)}
                                onMouseEnter={() => handleMouseEnter(r, c)}
                                onTouchStart={(e) => handleTouchStart(e, r, c)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
