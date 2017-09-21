import { STEPS } from '../../constants/steps';

export const PLANNING_POKER_SET_NAME = 'PLANNING_POKER_SET_NAME';
export const PLANNING_POKER_SET_SESSION_ID = 'PLANNING_POKER_SET_SESSION_ID';
export const PLANNING_POKER_SET_HOST = 'PLANNING_POKER_SET_HOST';
export const PLANNING_POKER_CHANGE_STEP = 'PLANNING_POKER_CHANGE_STEP';

export const REQUEST_AVAILABLE_SESSIONS = 'REQUEST_AVAILABLE_SESSIONS';
export const UPDATE_AVAILABLE_SESSIONS = 'UPDATE_AVAILABLE_SESSIONS';
export const CONNECT_TO_SESSION = 'CONNECT_TO_SESSION';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const START = 'START';
export const VOTE = 'VOTE';

let ws;

const wsAware = actionCreator => (...args) => dispatch => {
    const action = actionCreator(...args);
    dispatch(action);
    ws.send(JSON.stringify(action));
};

const getStateBase = state => state.planningPoker;
export const getName = state => getStateBase(state).name;
export const getSessionId = state => getStateBase(state).sessionId;
export const getStep = state => getStateBase(state).step;
export const getSessions = state => getStateBase(state).sessions;
export const getClientNames = state => getStateBase(state).clientNames;
export const isVoting = state => getStateBase(state).voting;
export const getHost = state => getStateBase(state).host;

export const setName = name => ({ type: PLANNING_POKER_SET_NAME, payload: name });
export const setSessionId = sessionId => ({ type: PLANNING_POKER_SET_SESSION_ID, payload: sessionId });
export const setStep = step => ({ type: PLANNING_POKER_CHANGE_STEP, payload: step });
export const setHost = host => ({ type: PLANNING_POKER_SET_HOST, payload: host });

export const requestAvailableSessions = wsAware(() => ({ type: REQUEST_AVAILABLE_SESSIONS }));
export const performLogin = wsAware((sessionId, name) => ({
    type: CONNECT_TO_SESSION,
    payload: {
        id: sessionId,
        clientName: name,
    }
}));
export const vote = wsAware(vote => ({ type: VOTE, payload: vote}));

export const initWebsocket = () => (dispatch, getState) => {
    ws = new WebSocket('ws://' + getHost(getState()), 'native-poker');
    ws.onmessage = ({ data }) => {
        const action = JSON.parse(data);
        dispatch(action);
    };
    ws.onopen = () => dispatch(setStep(STEPS.LOGIN));
    ws.onclose = () => dispatch(setStep(STEPS.DISCONNECTED));
    ws.onerror = () => dispatch(setStep(STEPS.DISCONNECTED));
};

export const closeWebsocket = () => (dispatch, getState) => {
    if (ws) {
        ws.close();
    }
};

export const login = () => (dispatch, getState) => {
    dispatch(performLogin(getSessionId(getState()), getName(getState())));
};

const initialState = {
    name: '',
    sessionId: null,
    step: STEPS.DISCONNECTED,
    sessions: [],
    clientNames: [],
    voting: false,
    host: '10.22.0.109:8080',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case PLANNING_POKER_SET_NAME:
            return {
                ...state,
                name: payload,
            };
        case PLANNING_POKER_SET_SESSION_ID:
            return {
                ...state,
                sessionId: payload,
            };
        case PLANNING_POKER_CHANGE_STEP:
            return {
                ...state,
                step: payload,
            };
        case PLANNING_POKER_SET_HOST:
            return {
                ...state,
                host: payload,
            };
        case UPDATE_AVAILABLE_SESSIONS:
            return {
                ...state,
                sessionId: payload.indexOf(state.sessionId) >= 0 ? state.sessionId : (payload[0] ? payload[0].id : null),
                sessions: payload,
                step: payload.indexOf(state.sessionId) >= 0 ? state.step : STEPS.LOGIN,
            };
        case UPDATE_SESSION:
            return {
                ...state,
                step: STEPS.LOGGEDIN,
                sessionId: payload.id,
                clientNames: payload.clientNames,
                voting: false,
            };
        case START:
            return {
                ...state,
                selectedVote: null,
                voting: true,
            };
        case VOTE:
            return {
                ...state,
                voting: false,
            };
        default:
            return state;
    }
};