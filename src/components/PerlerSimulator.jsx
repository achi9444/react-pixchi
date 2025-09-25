import React, { useState, useRef, useEffect } from "react";
import "../styles/PerlerSimulator.scss";

const CELL_SIZE = 25;

export default function PerlerSimulator() {
    const [gridSize, setGridSize] = useState(16);
    const [grid, setGrid] = useState(
        Array(16).fill(null).map(() => Array(16).fill("#ffffff"))
    );
    const [selectedColor, setSelectedColor] = useState("#ff6b6b");
    const [isDrawing, setIsDrawing] = useState(false);
    const [isErasing, setIsErasing] = useState(false);
    const [showGridLine, setShowGridLine] = useState(true);
    const containerRef = useRef(null);

    const initGrid = (size) => Array(size).fill(null).map(() => Array(size).fill("#ffffff"));

    const paintCell = (row, col) => {
        if (row < 0 || col < 0 || row >= gridSize || col >= gridSize) return;
        setGrid((prev) => {
            const newGrid = prev.map((r) => [...r]);
            newGrid[row][col] = isErasing ? "#ffffff" : selectedColor;
            return newGrid;
        });
    };

    const handleMouseDown = (row, col) => { setIsDrawing(true); paintCell(row, col); };
    const handleMouseEnter = (row, col) => { if (isDrawing) paintCell(row, col); };
    const handleMouseUp = () => setIsDrawing(false);

    const handleTouchStart = (e, row, col) => {
        e.preventDefault();
        setIsDrawing(true);
        paintCell(row, col);
    };

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

    const handleTouchEnd = () => setIsDrawing(false);

    const clearGrid = () => setGrid(initGrid(gridSize));

    const exportToPNG = () => {
        const canvas = document.createElement("canvas");
        canvas.width = gridSize * CELL_SIZE;
        canvas.height = gridSize * CELL_SIZE;
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
