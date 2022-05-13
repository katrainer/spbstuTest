import {FC} from 'react'
import {Link} from 'react-router-dom';
import s from './MyLink.module.css'

type MyLinkPropsType = {
    to: string
    title: string
}

export const MyLink: FC<MyLinkPropsType> =
    ({to, title}) => <div className={s.container}>
        <Link to={to}>
            {title}
        </Link>
    </div>