import PropTypes from 'prop-types';

function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="Button">
      Load more
    </button>
  );
}

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
