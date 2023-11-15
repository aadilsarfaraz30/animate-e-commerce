import * as types from "../../action/getPhoto/types";

export interface PhotoState {
  loading: boolean;
  error: null | string;
  data: {
    success: boolean;
    total_photos: number;
    message: string;
    offset: number;
    limit: number;
    photos: PhotoData[];
  };
}

export interface PhotoData {
  url: string;
  title: string;
  user: number;
  description: string;
  id: number;
}

const initialState: PhotoState = {
  loading: false,
  error: null,
  data: {
    success: false,
    total_photos: 0,
    message: "",
    offset: 0,
    limit: 0,
    photos: [],
  },
};

type Action =
  | types.GetPhotoDataRequestAction
  | types.GetPhotoDataSuccessAction
  | types.GetPhotoDataFailureAction;

const getPhotoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.GET_PHOTO_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PHOTO_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.GET_PHOTO_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getPhotoReducer;
