import { combineReducers } from "redux";
import getPhotoReducer from "./getPhoto";

const rootReducer = combineReducers({
    getPhotoReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer