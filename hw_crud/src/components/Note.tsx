import { FC } from "react"
import { TypeNote } from "./MainPage"
import { CrudList } from "./CrudList"

type PropsNote = {
    data: TypeNote
    check: React.Dispatch<React.SetStateAction<Boolean>>
}

export const Note: FC<PropsNote> = ({data, check}) => {
    const hundleDelete = (id: number) => {
        CrudList.delete(id, check)
    }

    return (
        <div className="note-card">
            <p>
                {data.content}
            </p>
            <button className="delete" onClick={() => hundleDelete(data.id)}>
                x
            </button>
        </div>
    )
}