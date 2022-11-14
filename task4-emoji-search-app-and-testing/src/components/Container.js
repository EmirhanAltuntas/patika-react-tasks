import React from 'react'
import { Col, Row } from 'reactstrap'
import EmojiList from './EmojiList'
import Header from './Header'
import SearchInput from './SearchInput'

function Container() {
  return (
    <div className='container p-3  main' >
        <Row className='mt-1'>
            <Col>
                <Row >
                    <Col className='text-center'>
                    <Header/>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <SearchInput/>
                    </Col>
                </Row>
                <Row className='mt-2 mb-2'>
                    <Col>
                        <EmojiList/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default Container