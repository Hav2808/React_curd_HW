import { FC } from "react";

type PropsUpdate = {
    check: React.Dispatch<React.SetStateAction<boolean>>
}

export const Update: FC<PropsUpdate> = ({check}) => {

    const handleUpdateClick = () => {
        check(true)
    }

    return (
        <div className="update">
            <h2>Notes</h2>
            <button className="material-icons" onClick={() => handleUpdateClick()}>
                sync
            </button>
        </div>
    )
}