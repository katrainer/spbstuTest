import {useAppSelector} from '../../f1-main/m2-store/store';
import {PopupType, removePopupAC} from '../../f1-main/m2-store/s1-reducers/popupsReducer';
import s from './PopupsPage.module.css'
import {useDispatch} from 'react-redux';
import {MyTitle} from '../../f1-main/m1-ui/u2-common/c1-MyTitle/MyTitle';
import React from 'react';
import {MyButton} from '../../f1-main/m1-ui/u2-common/c3-myButton/MyButton';

export const PopupsPage = () => {
    const popups = useAppSelector<PopupType[]>(state => state.popups)
    const dispatch = useDispatch()

    const removePopupHandler = (id: string) => {
        dispatch(removePopupAC(id))
    }
    return <div className={s.mainContainer}>
        <div className={s.title}><MyTitle title="All popups"/></div>
        <div className={s.titlePopupsContainer}>
            <div>Name</div>
            <div>Description</div>
            <div>Location</div>
            <div>Data/Time</div>
            <div>Action</div>
        </div>
        <div className={s.contentContainer}>
            {popups.map(p => <div key={p.id} className={s.popupContainer}>
                <div style={{wordBreak: 'break-word'}}>{p.name}</div>
                <div className={s.popupDescription}>{p.description}</div>
                <div className={s.popupDouble}>
                    <span>{p.location[0].toFixed(2)}</span>
                    <span>{p.location[1].toFixed(2)}</span>
                </div>
                <div className={s.popupDouble}>
                    <span>{p.data}</span>
                    <span>{p.time}</span>
                </div>
                <div>
                    <MyButton onClick={() => removePopupHandler(p.id)}>remove</MyButton>
                </div>
            </div>)}
        </div>
    </div>
}