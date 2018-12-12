import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7d321b5c768455933c38819724277d50e079f5543e6832d4555f41330cdd1a53'
    }
});