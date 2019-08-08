import React, { useState } from "react";
import PropTypes from "prop-types";
import CanvasGrid from "../CanvasGrid/CanvasGrid";
import Menu from "../Menu/Menu";

const Home = props => {
    const [playing, setPlaying] = useState(false);
    const [drawingMode, setDrawingMode] = useState(false);
    const [bpm, setBpm] = useState(90);

    const setBpmFromEvent = event => {
        event.preventDefault();
        const newBpm = event.target.value;
        setBpm(newBpm);
    };

    const togglePlayStop = () => {
        setPlaying(!playing);
    };

    const toggleDrawingMode = () => {
        setDrawingMode(!drawingMode);
    };

    const numRows = 22;
    const numCols = 20;
    return (
        <div>
            <Menu
                drawingMode={drawingMode}
                toggleDrawingMode={toggleDrawingMode}
                playing={playing}
                bpm={bpm}
                setBpmFromEvent={setBpmFromEvent}
                togglePlayStop={togglePlayStop}
            />
            <CanvasGrid
                drawingMode={drawingMode}
                numRows={numRows}
                numCols={numCols}
            />
        </div>
    );
};

Home.propTypes = {};

export default Home;
