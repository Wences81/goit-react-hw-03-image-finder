import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

const keyApi = '22617887-a3f68d8335d469bb4f11f2290';

export const fetchPictures = async (pictureName, page) => {
  const {
    data: { hits },
  } = await axios.get(`/api/?q=${pictureName}&page=${page}&key=${keyApi}`);
  return hits;
};
