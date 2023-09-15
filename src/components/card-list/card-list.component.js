import React from 'react';
import Card from 'components/card/card.component';
import './cardlist.styles.css';
export default function CardList(props) {
    const { monsters } = props;
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return (
                    <Card monster={monster} />
                )

            })}
        </div>
    )
}


