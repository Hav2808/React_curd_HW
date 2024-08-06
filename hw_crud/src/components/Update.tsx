import { FC } from "react";

type PropsUpdate = {
    check: React.Dispatch<React.SetStateAction<Boolean>>
}

export const Update: FC<PropsUpdate> = ({check}) => {

    const hundleUpdateClick = () => {
        check(true)
    }

    return (
        <div className="update">
            <h2>Notes</h2>
            <button className="material-icons" onClick={() => hundleUpdateClick()}>
                sync
            </button>
        </div>
    )
}