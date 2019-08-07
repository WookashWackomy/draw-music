import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Note.scss";
import classNames from "classnames";

const Note = ({ row, leftEnd, rightEnd, drawingMode }) => {
    const [values, setValues] = useState({
        isOn: false
    });

    const handleOnClick = () => {
        setValues({ isOn: !values.isOn });
    };

    const handleOnMouseEnter = () => {
        if (drawingMode) {
            setValues({ isOn: !values.isOn });
        }
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
            onMouseEnter={handleOnMouseEnter}
        />
    );
};

Note.propTypes = {};

export default Note;
