import {useAppSelector} from '../../f1-main/m2-store/store';
import {PopupType, removePopupAC} from '../../f1-main/m2-store/s1-reducers/popupsReducer';
import s from './PopupsPage.module.css'
import {useDispatch} from 'react-redux';

export const PopupsPage = () => {
    const popups = useAppSelector<PopupType[]>(state => state.popups)
    const dispatch = useDispatch()

    const removePopupHandler = (id: string) => {
        dispatch(removePopupAC(id))
    }
    return <div className={s.mainContainer}>
        <div className={s.titleContainer}>
            <div>Name</div>
            <div>Description</div>
            <div>Location</div>
            <div>Data/Time</div>
            <div>Remove</div>
        </div>
        <div className={s.contentContainer}>
            {popups.map(p => <div key={p.id} className={s.popupContainer}>
                <div>{p.name}</div>
                <div className={s.popupDescription}>{p.description}</div>
                <div className={s.popupDouble}>
                    <span>{p.location[0]}</span>
                    <span>{p.location[1]}</span>
                </div>
                <div className={s.popupDouble}>
                    <span>{p.data}</span>
                    <span>{p.time}</span>
                </div>
                <div onClick={() => removePopupHandler(p.id)}>
                    <button>🗑</button>
                </div>
            </div>)}
        </div>
    </div>
}