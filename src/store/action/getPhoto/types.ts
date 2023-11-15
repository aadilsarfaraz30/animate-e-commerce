import { PhotoDataApiResponse } from "../../interface/getPhotoDataInterface";

export const GET_PHOTO_DATA_REQUEST = 'GET_PHOTO_DATA_REQUEST';
export const GET_PHOTO_DATA_SUCCESS = 'GET_PHOTO_DATA_SUCCESS';
export const GET_PHOTO_DATA_FAILURE = 'GET_PHOTO_DATA_FAILURE';

export interface GetPhotoDataRequestAction {
    type: typeof GET_PHOTO_DATA_REQUEST;
}
export interface GetPhotoDataSuccessAction {
    type: typeof GET_PHOTO_DATA_SUCCESS;
    payload: PhotoDataApiResponse;
}
export interface GetPhotoDataFailureAction {
    type: typeof GET_PHOTO_DATA_FAILURE;
    payload: string;
}

export type PhotoActionTypes =
  | GetPhotoDataRequestAction
  | GetPhotoDataSuccessAction
  | GetPhotoDataFailureAction;