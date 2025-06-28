import React from 'react'
import "./styles.css";

export default function ItemList({title, description, login}) {
  return (
    <div className='item-list'>
        <strong>
            <a
            href={`https://github.com/${login}/${title}`}
            target="_blank"
            rel="noopener noreferrer"
            >
                {title}
            </a>
        </strong>
        <p>{description}</p>
        <hr />
    </div>
  )
}
