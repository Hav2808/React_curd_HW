import { PropsWithChildren } from "react"

export const ModalListNotes = ({children}: PropsWithChildren) => {
    return (
        <div className="list-notes">
            {children}
        </div>
    )
}