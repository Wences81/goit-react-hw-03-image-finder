import axios from 'axios';

export const FetchPictures = async (pictureName, page) => {
  const keyApi = '22617887-a3f68d8335d469bb4f11f2290';
  const response = await axios.get(
    `https://pixabay.com/api/?q=${pictureName}&page=${page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response.data.hits;
};
