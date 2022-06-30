import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '28362795-a7a194b938437c9cbae959d13';

export async function fetchImg(query, page) {
    const queryParams = {
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page,
    };
    const response = await axios.get(API_URL, {
        params: queryParams,
      });
    
    return response.data;
}