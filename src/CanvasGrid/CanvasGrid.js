import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CanvasGrid.scss";
import Cell from "../Cell/Cell";

const numRows = 22;
const numCols = 20;

const CanvasGrid = ({ drawingMode }) => {
    const [values, setValues] = useState({
        isMouseButtonDown: false
    });

    const toggleMouseButtonDown = () => {
        console.log("mousedown");
        setValues({
            isMouseButtonDown: !values.isMouseButtonDown
        });
    };

    const createCells = () => {
        const cells = [];
        for (let row = 1; row <= numRows; row++) {
            for (let col = 1; col <= numCols; col++) {
                cells.push(
                    <Cell
                        row={row}
                        col={col}
                        isMouseButtonDown={values.isMouseButtonDown}
                        drawingMode={drawingMode}
                        key={row + "," + col}
                    />
                );
            }
        }
        return cells;
    };

    return (
        <div
            className="grid-container"
            id="grid"
            onMouseDown={toggleMouseButtonDown}
            onMouseUp={toggleMouseButtonDown}
        >
            {createCells()}
        </div>
    );
};

CanvasGrid.propTypes = {};

export default CanvasGrid;
