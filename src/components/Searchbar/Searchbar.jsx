import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.pictureName.value.toLowerCase());
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSearch}>
        <button type="submit" className={s.SearchFormbutton}>
          <span className={s.SearchFormbuttonlabel}>Search</span>
        </button>

        <input
          className={s.SearchForminput}
          type="text"
          name="pictureName"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
