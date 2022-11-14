import { createContext, useContext, useEffect, useState } from "react";
import EmojiList from '../EmojiLists.json'
const EmojiContext = createContext();

export const EmojiProvider = ({children}) => {


    const [emojiList,setEmojiList] = useState(EmojiList)
    const [searchText,setSearchText] = useState("");
    
    const values ={
      emojiList,
      searchText,
      setSearchText
    }
    
    const filterEmoji = () =>{
        if (searchText=="") {
            setEmojiList(EmojiList)
        } else {

            setEmojiList( 
                emojiList.filter(emoji => {
                  if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
                    console.log(emojiList);
                    return true;
                  }
                  if (emoji.keywords.toLowerCase().includes(searchText.toLowerCase())) {
                    return true;
                  }
                  return false;
                }))
            
        }
    }
  
    useEffect(() => {
        filterEmoji()
    }, [searchText])
    
    return <EmojiContext.Provider value={values}>
        {children}
    </EmojiContext.Provider>
}

export const useEmoji = () => useContext(EmojiContext)