import axios from "axios";
import { TypeNote } from "./MainPage";
const BASE_URL = 'http://localhost:7070/notes'

export const CrudList = {
    get: (changeState: React.Dispatch<React.SetStateAction<TypeNote[]>>) => {
        axios({
            method: 'get',
            url: BASE_URL,
        })
        .then(i => {
            if (i.status >= 200 && i.status < 300) {
                return changeState(i.data)
            }
            else {
                throw new Error().message
            }
        })
        
    },

    post: (text: string, check: React.Dispatch<React.SetStateAction<Boolean>>) => {
        axios({
            method: 'post',
            url: BASE_URL,
            data: {
                content: text
            },
        }).then(() => {
            check(true)
        }
        )
    },

    delete: (id: number, check: React.Dispatch<React.SetStateAction<Boolean>>) => {
        axios({
            method: 'delete',
            url: BASE_URL + `/${id}`,
        }).then(
            () => check(true)
        )
    }
}