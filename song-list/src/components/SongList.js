import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './newSongForm';


const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', artist:'1', id:1},
        {title: 'memory gospel', artist:'2',  id:2},
        {title: 'this wild darkness', artist:'3',  id:3},
    ]);



    const addSong = (title, artist) => {
        setSongs([...songs, { title,  artist, id:uuidv4()}])
    }

    useEffect(() => {})

    return (
        <div className='song-list'>
            <ul>
                {songs.map(song => {
                    return(
                        <li key={song.id}> Artist: {song.artist} Song: {song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
    )
}

export default SongList;