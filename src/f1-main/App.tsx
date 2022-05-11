import React from 'react';
import s from './App.module.css';
import {Map} from '../f2-features/f2-map/Map';
import {Navbar} from '../f2-features/f1-navbar/Navbar';
import {Navigate, Route, Routes} from 'react-router-dom';
import {routesPath} from './m1-ui/u1-routes/routesPath';
import {PopupsPage} from '../f2-features/f3-popupsPage/PopupsPage';

export const App = () => {
    const t = new Date()
    console.log(t.toLocaleDateString())
    console.log(t.toLocaleTimeString())
    return <div className={s.mainContainer}>
        <Navbar/>
        <div className={s.contentContainer}>
            <Map/>
            <div className={s.routeContainer}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={routesPath.allPopups}/>}></Route>
                    <Route path={routesPath.allPopups} element={<PopupsPage/>}></Route>
                    <Route path={routesPath.addPopup} element={<div></div>}></Route>
                </Routes>
            </div>
        </div>
    </div>
}