import * as core from "./core";

test("should create initial state", () => {
    const state = core.createInitialState();

    expect(state).toEqual({
        fetching: true,
        response: null
    });
});

test("should return response", () => {

    const state = {response: 'response'};

    const response = core.getResponse(state);

    expect(response).toEqual('response');
});

describe("isFetching", () => {
    test("should return fetching status true", () => {

        const state = {fetching: true};

        const fetching = core.isFetching(state);

        expect(fetching).toEqual(fetching);
    });

    test("should return fetching status false", () => {

        const state = {fetching: false};

        const fetching = core.isFetching(state);

        expect(fetching).toEqual(fetching);
    });
});

describe("receiveServiceData", () => {
    test("should receive service response", () => {

        const state = core.createInitialState();
        const data = 'data';

        const newState = core.receiveServiceData(state, data);

        expect(newState.fetching).toEqual(false);
        expect(newState.response).toEqual(data);
    });

    test("should receive service error", () => {

        const state = core.createInitialState();
        const data = {error: '500'};

        const newState = core.receiveServiceData(state, data);

        expect(newState.fetching).toEqual(false);
        expect(newState.response).toEqual(null);
    });
});
