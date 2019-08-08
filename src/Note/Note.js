import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Note.scss";
import classNames from "classnames";

const Note = ({ row, leftEnd, rightEnd, drawingMode, isMouseButtonDown }) => {
    const [values, setValues] = useState({
        isOn: false
    });

    const handleOnClick = e => {
        setValues({ isOn: !values.isOn });
    };

    const handleOnMouseOver = e => {
        e.preventDefault();
        console.log(drawingMode);
        if (drawingMode) {
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
        gridRow: row,
        gridColumn: leftEnd + "/" + (rightEnd + 1)
    };
    const noteOn = values.isOn ? "note--on" : null;
    return (
        <div
            className={classNames("note", noteOn)}
            style={styles}
            onClick={handleOnClick}
            onMouseOver={handleOnMouseOver}
            onContextMenu={handleContextMenu}
        />
    );
};

Note.propTypes = {};

export default Note;
