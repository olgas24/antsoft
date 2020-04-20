import {CREATE_COMMENT} from "../constants";

export const createComment = (data) => ({
    type: CREATE_COMMENT,
    payload: data
});