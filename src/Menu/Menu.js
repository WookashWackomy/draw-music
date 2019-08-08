import React from "react";
import PropTypes from "prop-types";
import "./Menu.scss";
import Play from "../assets/images/play.png";
import Stop from "../assets/images/stop.png";
import Pause from "../assets/images/pause.png";
import Draw from "../assets/images/draw.png";
import Move from "../assets/images/move.png";

const Menu = ({
    playing,
    togglePlayStop,
    bpm,
    setBpmFromEvent,
    drawingMode,
    toggleDrawingMode
}) => {
    return (
        <div id="menu">
            <div className={"button"} id="playButton">
                <img
                    src={playing ? Stop : Play}
                    onClick={togglePlayStop}
                    alt="play button"
                />
            </div>
            <div className={"button"} id="drawingModeButton">
                <img
                    src={!drawingMode ? Draw : Move}
                    onClick={toggleDrawingMode}
                    alt="play button"
                />
            </div>
            <div className={"pull-right bpm"}>
                <div id="bpmText"> {bpm + " BPM"} </div>
                <div>
                    <input
                        className="slider"
                        type="range"
                        min="60"
                        max="200"
                        defaultValue={bpm}
                        onInput={setBpmFromEvent}
                    />
                </div>
            </div>
        </div>
    );
};

Menu.propTypes = {};

export default Menu;
