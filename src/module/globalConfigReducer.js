import { TOGGLE_DRAWING_MODE } from "./actions";

const initialState = {
    drawingMode: false
};

export default function globalConfigReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DRAWING_MODE:
            return { ...state, drawingMode: !state.drawingMode };
        default:
            return state;
    }
}
