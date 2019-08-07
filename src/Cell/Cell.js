import React from "react";
import PropTypes from "prop-types";
import "./Cell.scss";

const Cell = ({ row, col }) => {
    return (
        <div
            className="cell-container"
            style={{ gridRow: row, gridColumn: col }}
            key={row + "," + col}
        />
    );
};

Cell.propTypes = {};

export default Cell;
