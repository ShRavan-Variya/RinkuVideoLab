import React from 'react'
import { Caption, Figure } from './GalleryCard.styles'

export default function GalleryCard(props) {

  console.log(props.thumbnail);

  return (
    <li>
      <Figure>
        <img src={props.thumbnail} alt="" />
        <Caption>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </Caption>
      </Figure>
    </li>
  )
}
