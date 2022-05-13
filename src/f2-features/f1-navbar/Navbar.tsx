import React from 'react';
import s from './Navbar.module.css';
import {routesPath} from '../../f1-main/m1-ui/u1-routes/routesPath';
import {MyLink} from '../../f1-main/m1-ui/u2-common/c2-MyLink/MyLink';
import {MyTitle} from '../../f1-main/m1-ui/u2-common/c1-MyTitle/MyTitle';

export const Navbar = () => <div className={s.mainContainer}>
    <div className={s.contentContainer}>
        <MyTitle title='Menu:'/>
        <MyLink to={routesPath.allPopups} title="All popups"/>
        <MyLink to={routesPath.addPopup} title="Add popup"/>
    </div>
</div>