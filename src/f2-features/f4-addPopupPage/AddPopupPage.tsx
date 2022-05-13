import React, {ChangeEvent, FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {v1} from 'uuid';
import {addPopupAC, PopupType} from '../../f1-main/m2-store/s1-reducers/popupsReducer';
import s from './AddPopupPage.module.css'
import {MyTitle} from '../../f1-main/m1-ui/u2-common/c1-MyTitle/MyTitle';
import {MyButton} from '../../f1-main/m1-ui/u2-common/c3-myButton/MyButton';

type AddPopupPagePropsType = {
    location: number[]
    setLocation: (location: number[]) => void
}

export const AddPopupPage: FC<AddPopupPagePropsType> = ({location, setLocation}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')


    const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const descriptionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }
    const locationChangeHandlerLat = (e: ChangeEvent<HTMLInputElement>) => {
        const lat = +e.currentTarget.value
        if (lat > 90 || lat < -90 || lat.toString().length > 16) return
        setLocation([lat, location[1]])

    }
    const locationChangeHandlerLng = (e: ChangeEvent<HTMLInputElement>) => {
        const lng = +e.currentTarget.value
        if (lng > 180 || lng < -180 || lng.toString().length > 16) return
        setLocation([location[0], lng])
    }

    const addPopupHandler = () => {
        const popup: PopupType = {
            id: v1(),
            location: location.length < 2 ? [0, 0] : location,
            name,
            description,
            data: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        }
        dispatch(addPopupAC(popup))
        setName('')
        setDescription('')
        setLocation([0, 0])
    }

    return <div className={s.mainContainer}>
        <div className={s.title}><MyTitle title="Add popup"/></div>
        <div className={s.contentContainer}>
            <div>
                <span>Name:</span>
                <input
                    placeholder="required"
                    name={name}
                    type="text"
                    value={name}
                    onChange={nameChangeHandler}
                />
            </div>
            <div>
                <span>Description:</span>
                <input
                    name={description}
                    type="text"
                    value={description}
                    onChange={descriptionChangeHandler}
                />
            </div>
            <div>
                <span>Latitude:</span>
                <input
                    placeholder={'press map or write'}
                    name={'location1'}
                    type="number"
                    value={location[0]}
                    onChange={locationChangeHandlerLat}
                />
            </div>
            <div>
                <span>Longitude:</span>
                <input
                    placeholder={'press map or write'}
                    name={'location2'}
                    type="number"
                    value={location[1]}
                    onChange={locationChangeHandlerLng}
                />
            </div>
        </div>
        <div className={s.button}>
            <MyButton
                onClick={addPopupHandler}
                disabled={name === ''}
                style={name === '' ? {backgroundColor: '#AFAFAF'} : undefined}
            >
                Add popup
            </MyButton>
        </div>
    </div>
}