import React from 'react'
import { Col, Row } from 'reactstrap'
import { useEmoji } from '../context/EmojiContext'
import './style.css'
function EmojiList() {

    const {emojiList} = useEmoji()
  return (
    <div>
        <ul className='list-group'>
         {
            emojiList.slice(0,7).map((emoji,index)=>(
                <li key={index} className="list-group-item" onClick={() =>navigator.clipboard.writeText(`${emoji.symbol}`)}>
                  <Row>
                    <Col>
                    <span style={{fontSize:"27px"}}>{emoji.symbol}</span>
                     <span className='title' >{emoji.title}</span>
                     <span className="info">Click to copy emoji</span>
                    </Col>
                  </Row>
                </li>
            ))
         }
        </ul>
    </div>
  )
}

export default EmojiList