import React from "react";
import PropTypes from "prop-types";
import "./Cell.scss";
import Note from "../Note/Note";

const Cell = ({ row, col, drawingMode }) => {
    return (
        <div
            className="cell-container"
            style={{ gridRow: row, gridColumn: col }}
        >
            <Note
                row={row}
                leftEnd={col}
                rightEnd={col}
                drawingMode={drawingMode}
            />
        </div>
    );
};

Cell.propTypes = {};

export default Cell;
