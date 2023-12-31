import { type } from '@testing-library/user-event/dist/type';
import * as C from './style';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void;
}

export const ListItem = ({item, onChange}: Props) => {

    return (
        <C.Container done={item.done}>
           <input 
           type='checkbox' 
           checked={item.done}
           onChange={e => onChange(item.id, e.target.checked)}
           />
           <label>{item.name} - {item.done.toString()} </label>
        </C.Container>
    );
}