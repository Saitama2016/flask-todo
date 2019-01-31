export const changeState = ({ source, destination, droppableSource, droppableDestination } = data) => {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_STATE',
            source,
            destination,
            droppableSource,
            droppableDestination
        });
        return Promise.resolve();
    }
}