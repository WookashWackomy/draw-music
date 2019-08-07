import React from "react";
import PropTypes from "prop-types";
import "./Menu.scss";
import Play from "../assets/images/play.png";
import Stop from "../assets/images/stop.png";
import Pause from "../assets/images/pause.png";

const Menu = ({ playing, togglePlayStop, bpm, setBpm }) => {
    const setBpmFromEvent = event => {
        const newBpm = event.target.value;
        setBpm(newBpm);
    };

    return (
        <div id="menu">
            <div id="playButton">
                <img
                    src={playing ? Stop : Play}
                    onClick={togglePlayStop}
                    alt="play button"
                />
            </div>
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
    );
};

Menu.propTypes = {};

export default Menu;
