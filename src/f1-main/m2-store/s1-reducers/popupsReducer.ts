import {v1} from 'uuid'

enum EnumPopupsReducerActionType {
    removePopup = 'POPUPS/REMOVE-POPUP'
}

const initialState = [
    {
        id: v1(), location: [51.5085, -0.12574], name: 'London', description: 'Capital of Great Britain',
        data: '11.05.2022', time: '20:46:25'
    },
    {
        id: v1(), location: [48.84, 2.34], name: 'Paris', description: 'The capital of France',
        data: '11.05.2022', time: '20:46:30'
    },
    {
        id: v1(), location: [50.84, 4.36], name: 'Brussels', description: 'The capital of Belgium',
        data: '11.05.2022', time: '20:46:35'
    },
] as PopupType[]

export const popupsReducer = (state: InitialStateType = initialState, action: PopupsReducerActionType): InitialStateType => {
    switch (action.type) {
        case EnumPopupsReducerActionType.removePopup:
            return state.filter(p => p.id !== action.payload.id)
        default:
            return state
    }
}

//action
export const removePopupAC = (id: string) => {
    return {
        type: EnumPopupsReducerActionType.removePopup,
        payload: {id}
    }
}

//type
type InitialStateType = typeof initialState
export type PopupsReducerActionType =
    |ReturnType<typeof removePopupAC>

export type PopupType = {
    id: string
    location: number[]
    name: string
    description: string
    data: string
    time: string
}