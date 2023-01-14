import '../scss/MeetingNotes.scss'
import NotesIcon from '@mui/icons-material/Notes';
import { useState } from 'react';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

function MeetingNotes() {

    const [isOpen, setIsOpen] = useState(false)
    const [note, setNote] = useState("")

    function handleButtonClick() {

        setIsOpen(!isOpen)
    }

    function handleSaveNoteClick() {

        console.log(note)
    }

    function handleChange(value){

        setNote(value)
    }

    return (
        <div className="meeting-notes">
            <textarea 
            className='note-area' 
            style={{ display: isOpen ? "inline-block" : "none" }}
            onChange={(e) => handleChange(e.target.value)}>

            </textarea>

            <Button
                style={{ display: isOpen ? "block" : "none" }}
                variant="contained"
                className='save-note-button'
                onClick={handleSaveNoteClick}>
                <SaveIcon />
            </Button>

            <Button
                variant="contained"
                className='notes-button'
                onClick={handleButtonClick}>
                <NotesIcon />
            </Button>

        </div>
    );
}

export default MeetingNotes;