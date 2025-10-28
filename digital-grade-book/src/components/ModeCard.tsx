import { useState } from 'react'
import "../App.css"


export type CardProp = {
    title: string;
    cardImage: string;
    bgColor: string;
}

function ModeCard(props: CardProp) {
  return (
    <div className='card-body'>
        <div className='card-image' style={{ backgroundColor: props.bgColor }}>
            <img src={props.cardImage}/>
        </div>
        <h3 className='card-text'>{props.title}</h3>
    </div>
  )
}

export default ModeCard