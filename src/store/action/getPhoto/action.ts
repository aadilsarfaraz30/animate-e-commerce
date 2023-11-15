import { PhotoDataApiResponse } from "../../interface/getPhotoDataInterface";
import * as types from './types';


export const getPhotoDataRequest = (): types.GetPhotoDataRequestAction => ({
    type: types.GET_PHOTO_DATA_REQUEST
});

export const getPhotoDataSuccess = (payload: PhotoDataApiResponse): types.GetPhotoDataSuccessAction => ({
    type: types.GET_PHOTO_DATA_SUCCESS,
    payload
});

export const getPhotoDataFailure = (payload: string): types.GetPhotoDataFailureAction => ({
    type: types.GET_PHOTO_DATA_FAILURE,
    payload
})

export const fetchPhotoData = (): any => async (dispatch:any) => {
  try {
    dispatch(getPhotoDataRequest());

    const response = await fetch('https://api.slingacademy.com/v1/sample-data/photos');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: PhotoDataApiResponse = await response.json();
    
    dispatch(getPhotoDataSuccess(data));
  } catch (error:any) {
    dispatch(getPhotoDataFailure(error.message || 'An error occurred while fetching data'));
  }
};