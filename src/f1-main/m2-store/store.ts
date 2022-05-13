import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {popupsReducer} from './s1-reducers/popupsReducer';

const rootReducer = combineReducers({
    popups: popupsReducer,
})
export const store = createStore(rootReducer)


//type

//Свой useSelector
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//Типизация стора
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store