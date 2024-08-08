import { FC, useState } from "react";
import { CrudList } from "./CrudList";

type PropsForm = {
    check: React.Dispatch<React.SetStateAction<boolean>>
}

export const Form: FC<PropsForm> = ({check}) => {
    const [form, setForm] = useState<string>('')

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        CrudList.post(form, check)
        setForm('')
    }

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const { target: { value } } = e
        setForm(value)
    }

    return (
        <form action="" className="form" onSubmit={handleSubmit}>
            <label htmlFor="note">New Note</label>
            <div className="add-container">
                <textarea name="note" id="" cols={30} rows={10} value={form} onChange={handleChange}>
                </textarea>
                <button className="material-icons">
                    arrow_circle_right
                </button>
            </div>
        </form>
    )
}