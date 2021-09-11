import PropTypes from 'prop-types';

export const SearchBar = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.pictureName.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSearch}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
