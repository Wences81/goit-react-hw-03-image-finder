import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchPictures } from '../../services/api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import './App.module.css';

export default class App extends Component {
  state = {
    pictureName: '',
    pictures: [],
    selectedImg: null,
    reqStatus: 'idle',
    page: 1,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const nextSearch = this.state.pictureName;
    const nextPage = this.state.page;
    if (prevState.pictureName !== nextSearch || prevState.page !== nextPage) {
      try {
        this.setState({ reqStatus: 'pending' });

        const pictures = await fetchPictures(nextSearch, nextPage);
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          reqStatus: 'resolved',
        }));

        if (nextSearch.trim() === '' || pictures.length === 0) {
          return toast.error(
            `Sorry, but there are no pictures with  ${nextSearch}`,
          );
        }
      } catch (error) {
        this.setState({ reqStatus: 'rejected' });
        toast.error('Something went wrong');
      }

      this.state.page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    }
  }

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  loadMoreButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSelectedImage = LageImageURL => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedImg: LageImageURL,
    }));
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
    this.setState({
      selectedImg: '',
    });
  };

  render() {
    const { pictures, reqStatus, selectedImg, showModal } = this.state;
    const showButton = pictures.length >= 12;

    return (
      <div>
        <Toaster />
        <SearchBar onSearch={this.handleFormSubmit} />
        <ImageGallery pictures={pictures} onSelect={this.handleSelectedImage} />
        {showButton && <Button onClick={this.loadMoreButtonClick} />}
        {showModal && (
          <Modal
            src={this.state.selectedImg}
            alt={selectedImg.tags}
            onClose={this.toggleModal}
          />
        )}
        {reqStatus === 'pending' && <Loader />}
      </div>
    );
  }
}
