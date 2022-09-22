import axios from "axios"

export const getData = (id) => {

    return new Promise(async (resolve, reject) => {
        const { data: user1 } = await axios("https://jsonplaceholder.typicode.com/users?id=" + id)
        const { data: posts1 } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id)

        var result = user1.map((e, i) => {
            let post1 = posts1.find(item => item.userId === e.id)
            if (post1.userId) {
                e.posts = post1
            }
            return e;
        })

        if (result) {
            resolve(result)
        } else {
            reject("hata")
        }
    })

}

