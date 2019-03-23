import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID a2f938d9f839d4d05c8043b9f0345dc2d20a9542191a3e8eab66b70fb9e70a1f'
    }
});