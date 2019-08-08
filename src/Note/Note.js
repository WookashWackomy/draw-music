import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Note.scss";
import classNames from "classnames";

const Note = ({ row, pitch, color, leftEnd, rightEnd }) => {
    const [values, setValues] = useState({
        isOn: false
    });

    const handleOnClick = e => {
        e.preventDefault();
        console.log(pitch);
        setValues({ isOn: !values.isOn });
    };

    const handleOnMouseOver = e => {
        console.log(color);
        e.preventDefault();

        if (true) {
            // drawingMode
            if (e.buttons === 1) {
                setValues({ isOn: true });
            } else if (e.buttons === 2) {
                setValues({ isOn: false });
            }
        }
    };

    const handleContextMenu = e => {
        e.preventDefault();
        return false;
    };

    const styles = {
        backgroundColor: values.isOn ? color : "inherit",
        gridRow: row,
        gridColumn: leftEnd + "/" + (rightEnd + 1)
    };
    return (
        <div
            className={classNames("note")}
            style={styles}
            onClick={handleOnClick}
            onMouseOver={handleOnMouseOver}
            onContextMenu={handleContextMenu}
        />
    );
};

Note.propTypes = {};

export default Note;
