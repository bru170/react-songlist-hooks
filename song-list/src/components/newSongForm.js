import React, {useState} from 'react'

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title, artist)
        setTitle('')
        setArtist('')
    }

    return (
        <form onSubmit={handleSubmit}> 
          <label>`Artist:</label>
            <input type='text' value={artist} required onChange={(e) => setArtist(e.target.value)}/>
            <label>Song:</label>
            <input type='text' value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <input type='submit' value='add song' />
        </form>
    )
}

export default NewSongForm