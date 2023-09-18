import React from 'react';
import Card from 'components/card/card.component';
import './cardlist.styles.css';
import { Monster } from '../../App';
type MonsterProps = {
    monsters: Monster[];
}
export default function CardList({monsters}:MonsterProps) {
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return (
                    <Card monster={monster} key={monster.id}/>
                )

            })}
        </div>
    )
}


