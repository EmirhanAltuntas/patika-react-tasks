import React from 'react'
import {Input,InputGroup} from 'reactstrap'
import { useEmoji } from '../context/EmojiContext'

function SearchInput() {

    const {searchText,setSearchText} = useEmoji();
  return (
    <div>
    <InputGroup>
            <Input placeholder='search any emoji' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
    </InputGroup>
    </div>
  )
}

export default SearchInput