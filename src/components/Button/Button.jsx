import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={s.Button}>
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
