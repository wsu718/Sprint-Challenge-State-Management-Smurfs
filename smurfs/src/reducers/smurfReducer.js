import {
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE,
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,
    EDIT_SMURFS_START,
    EDIT_SMURFS_SUCCESS,
    EDIT_SMURFS_FAILURE

} from '../actions/smurfActions';

const initialState = {
    smurfs: [

    ],
    isFetching: false,
    error: '',
    isPosting: false,
    isEditing: false
}

const smurfReducer = (state = initialState, action) => {
    console.log(action.payload)
    console.log(state, action)
    switch (action.type) {
        case ADD_SMURF_START:
            return {
                ...state,
                isPosting: true
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false,
                error: '',
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload.data.Error
            };
        case DELETE_SMURF_START:
            return {
                ...state,
                isPosting: true
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false,
                error: '',
            }
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload.data.Error
            };

        case GET_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs:
                    action.payload

            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case EDIT_SMURFS_START:
            return {
                ...state,
                isEditing: true
            }
        case EDIT_SMURFS_SUCCESS:
            return {
                ...state,
                isEditing: false,
                error: '',
                smurfs:
                    action.payload

            }
        case EDIT_SMURFS_FAILURE:
            return {
                ...state,
                isEditing: false,
                error: action.payload
            }

        default:
            return state;
    }


}

export default smurfReducer;