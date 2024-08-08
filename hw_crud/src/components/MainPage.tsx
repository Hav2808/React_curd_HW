import { FC, useEffect, useState } from "react";
import { Update } from "./Update";
import { CrudList } from "./CrudList";
import { Form } from "./Form";
import { Note } from "./Note";
import { ModalListNotes } from "../Modals/ModalListNotes";

export type TypeNote = {
    id: number
    content: string
}

export const MainPage: FC = () => {
    const [check, setCheck] = useState<boolean>(false)
    const [noteList, setNoteList] = useState<TypeNote[]>([])

    // Загрузка списка заметок при начальном отображении
    useEffect(() => {
        CrudList.get(setNoteList)
    }, []);

    // Обновление списка заметок при изменении состояния check
    useEffect(
        () => {
            if (check) {
                CrudList.get(setNoteList)
                setCheck(false)
            }
        }, [check]
    )
    
    return (
        <>  
            <Update check={setCheck}/>

            <ModalListNotes>
                {(noteList.length != 0) 
                ? 
                noteList.map((note, i) => (
                    <Note key={i} check={setCheck} data={note}/>
                ))
                :
                <p>ПУСТО</p>
                }
            </ModalListNotes>

            <Form check={setCheck}/>
        </>
    )
}