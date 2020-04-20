import {CREATE_COMMENT} from "../constants";

const INITIAL_STATE = {
    ids: [],
    postComments: []
};

export const root = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_COMMENT: {
            const lastId = state.ids.length
                ? state.ids[state.ids.length - 1]
                : 0;

            const result = {
                ...action.payload,
                id: lastId + 1
            };

            return {
                ...state,
                ids: [...state.ids, lastId + 1],
                postComments: [...state.postComments, result]
            };
        }

        default: return state;
    }

};