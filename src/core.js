export function createInitialState() {
    return {
        fetching: true,
        response: null
    };

}

export function receiveServiceData(state, data) {
    return {...state, response: data.error ? null : data, fetching: false};
}

export function getResponse(state) {
    return state.response;
}

export function isFetching(state) {
    return state.fetching;
}
