import s from './Map.module.css';
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet';
import React, {FC} from 'react';
import {useAppSelector} from '../../f1-main/m2-store/store';
import {PopupType} from '../../f1-main/m2-store/s1-reducers/popupsReducer';

type MapPropsType = {
    setLocation: (location: number[]) => void
}

export const Map: FC<MapPropsType> = ({setLocation}) => {

    const popups = useAppSelector<PopupType[]>(state => state.popups)
    return <MapContainer className={s.mainContainer} center={[50.73, 2.35]} zoom={5} scrollWheelZoom={true}>

        <ReadLocation setLocation={setLocation}/>

        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {popups.map(p => <Marker key={p.id} position={[p.location[0], p.location[1]]}>
            <Popup>
                <div>{p.name}</div>
                <div>{p.description}</div>
            </Popup>
        </Marker>)}

    </MapContainer>
}

type ReadLocationPropsType = {
    setLocation: (location: number[]) => void
}
const ReadLocation: FC<ReadLocationPropsType> = ({setLocation}) => {
    useMapEvents({
        click: (e) => {
            setLocation([
                +e.latlng.lat,
                +e.latlng.lng,
            ])
        },
    })
    return null
}