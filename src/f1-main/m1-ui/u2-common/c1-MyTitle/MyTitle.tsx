import {FC} from 'react';
import s from './MyTitle.module.css'

type MyTitlePropsType = {
    title: string
}

export const MyTitle: FC<MyTitlePropsType> = ({title}) => <div className={s.container}>
    {title}
</div>