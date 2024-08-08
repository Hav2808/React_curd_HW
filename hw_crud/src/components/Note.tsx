import { FC } from "react"
import { TypeNote } from "./MainPage"
import { CrudList } from "./CrudList"

type PropsNote = {
    data: TypeNote
    check: React.Dispatch<React.SetStateAction<boolean>>
}

export const Note: FC<PropsNote> = ({data, check}) => {
    const handleDelete = (id: number) => {
        CrudList.delete(id, check)
    }

    return (
        <div className="note-card">
            <p>
                {data.content}
            </p>
            <button className="delete" onClick={() => handleDelete(data.id)}>
                x
            </button>
        </div>
    )
}