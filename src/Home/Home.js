import React, { useState } from "react";
import PropTypes from "prop-types";
import CanvasGrid from "../CanvasGrid/CanvasGrid";
import Menu from "../Menu/Menu";

const Home = props => {
    const [values, setValues] = useState({
        playing: false,
        bpm: 90
    });

    const setBpm = value => {
        setValues({ ...values, bpm: value });
    };

    const togglePlayStop = () => {
        setValues({ ...values, playing: !values.playing });
    };

    return (
        <div>
            <Menu
                playing={values.playing}
                bpm={values.bpm}
                setBpm={setBpm}
                togglePlayStop={togglePlayStop}
            />
            <CanvasGrid />
        </div>
    );
};

Home.propTypes = {};

export default Home;
