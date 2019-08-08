import React from "react";
import PropTypes from "prop-types";
import "./Cell.scss";
import Note from "../Note/Note";
import { getPitch, getColor } from "../utils/notes";

const Cell = ({ row, col }) => {
    const pitch = getPitch(row);
    const color = getColor(row);
    return (
        <div
            className="cell-container"
            style={{ gridRow: row, gridColumn: col }}
        >
            <Note
                row={row}
                pitch={pitch}
                color={color}
                leftEnd={col}
                rightEnd={col}
            />
        </div>
    );
};

Cell.propTypes = {};

export default Cell;
