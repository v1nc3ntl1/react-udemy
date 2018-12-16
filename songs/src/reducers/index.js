import { combineReducers } from 'redux';


const songsReducer = () => {
    return [{title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All stars', duration: '3:54'},
    {title: 'I want it that way', duration: '1:05'}];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});