import ImageGalleryItem from '../ImageGalleryItem/imageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ pictures, onSelect }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map((picture, id) => (
        <ImageGalleryItem
          key={id}
          image={picture}
          onClic={() => onSelect(picture)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.object,
      id: PropTypes.number.isRequired,
    }),
  ),
  onSelect: PropTypes.func.isRequired,
};
