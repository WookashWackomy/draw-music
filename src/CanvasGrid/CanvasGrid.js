import React from "react";
import PropTypes from "prop-types";
import "./CanvasGrid.scss";
import Cell from "../Cell/Cell";

const numRows = 10;
const numCols = 20;

const CanvasGrid = ({ drawingMode }) => {
    const createCells = () => {
        const cells = [];
        for (let row = 1; row <= numRows; row++) {
            for (let col = 1; col <= numCols; col++) {
                cells.push(
                    <Cell
                        row={row}
                        col={col}
                        drawingMode={drawingMode}
                        key={row + "," + col}
                    />
                );
            }
        }
        return cells;
    };

    return <div className="grid-container">{createCells()}</div>;
};

CanvasGrid.propTypes = {};

export default CanvasGrid;
