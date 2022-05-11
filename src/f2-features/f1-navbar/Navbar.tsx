import React from 'react';
import {Link} from 'react-router-dom';
import s from './Navbar.module.css';
import {routesPath} from '../../f1-main/m1-ui/u1-routes/routesPath';

export const Navbar = () => <div className={s.mainContainer}>
    <div className={s.contentContainer}>
        <Link to={routesPath.allPopups}>Все точки</Link>
        <Link to={routesPath.addPopup}>Добавить точку</Link>
    </div>
</div>