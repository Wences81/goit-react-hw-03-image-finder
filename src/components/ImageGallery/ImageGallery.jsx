import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/imageGalleryItem';

export const ImageGallery = ({ pictures, onSelect }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map((picture, id) => (
        <ImageGalleryItem
          key={id}
          image={picture}
          onClic={() => onSelect(picture)}
        ></ImageGalleryItem>
      ))}
      ;
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.object,
      id: PropTypes.number.isRequired,
    }),
  ),
  onSelect: PropTypes.func.isRequired,
};
