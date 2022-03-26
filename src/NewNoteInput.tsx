import React, { useState } from "react"

interface newNoteInputProps {
    addNote(note: string): void;
}

const NewNoteInput: React.FC<newNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = useState<string>("")

    const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }

    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }

    return (
        <>
            <input onChange={updateNote} value={note} type="text" name="input" />
            <button onClick={() => onAddNoteClick()}>ADd note</button>
        </>
    )
}

export default NewNoteInput