import axios from 'axios';

const KEY = 'AIzaSyDBGBQZ4e9GS_NWdPPmPptLJRPbeKyrL0o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});