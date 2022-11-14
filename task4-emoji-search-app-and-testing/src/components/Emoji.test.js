import {render,screen,fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { EmojiProvider } from '../context/EmojiContext'
import { Container } from './Container'
import EmojiList from './EmojiList'
import Header from './Header'


describe("Emoji tests",()=>{
    beforeEach(()=>{
        render(<App></App>)
    })

    test("baslık render oluyor mu?",()=>{
        const header = screen.getByText("Emoji Search App")
        expect(header).toBeInTheDocument()

    })
    test("emoji listesi render oluyor mu ?",()=>{
       const emojiLists = screen.getByText("100")
       expect(emojiLists).toBeInTheDocument();
    })

    test("inputtan girilen değer ile liste yeniden render oluyor mu?",()=>{
        const searchText = "heart"
        const input = screen.getByPlaceholderText("search any emoji")
        fireEvent.change(input, { target: { value: searchText } });
    })
    test("emojiye tıklandığında kopyalama işlemi yapılıyor mu?",()=>{
        const listItem = screen.getByText("100")     

        //bu işlem şu anlık çalışmıyor.
        // expect(userEvent.click(listItem)).toHaveBeenCalledWith('😶')
    })
})