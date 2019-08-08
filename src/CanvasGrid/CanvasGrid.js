import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./CanvasGrid.scss";
import Cell from "../Cell/Cell";

const CanvasGrid = ({ numRows, numCols }) => {
    const createCells = useMemo(() => {
        console.log("rerendering");
        const cells = [];
        for (let row = 1; row <= numRows; row++) {
            for (let col = 1; col <= numCols; col++) {
                cells.push(<Cell row={row} col={col} key={`${row}0${col}`} />);
            }
        }
        return cells;
    }, [numRows, numCols]);

    return (
        <div className="grid-container" id="grid">
            {createCells}
        </div>
    );
};

CanvasGrid.propTypes = {};

export default CanvasGrid;
