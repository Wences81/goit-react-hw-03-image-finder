import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="Button">
      Load more
    </button>
  );
}

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
