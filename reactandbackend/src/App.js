import logo from './assets/logo.png';
import Places from './components/Places';
import AvailablePlaces from './components/AvailablePlaces';
import Modal from './components/Modal';
import DeleteConfirmation from './components/DeleteConfirmation';
import './App.css';
import { useState, useRef, useCallback } from 'react';
import { fetchUserPlaces, updateUserPlaces } from './http';
import Error from './components/Error';
import { useFetch } from './hooks/useFetch';
function App() {
  const selectedPlace = useRef();

  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const { isFetching, error, fetchedData: userPlaces, setFetchedData: setUserPlaces } = useFetch(fetchUserPlaces, [])
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({ message: error.message || 'Failed to update place.' })
    }
  }


  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try {
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id));
    }
    catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({ message: error.message || 'Failed to delete place.' })
    }
    setModalIsOpen(false);
  }, [userPlaces, setUserPlaces]);

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }
  function handleError() {
    setErrorUpdatingPlaces(null);
  }
  return (
    <div className="App">
      <Modal open={errorUpdatingPlaces} onClose={handleError}>{errorUpdatingPlaces && (<Error title="An error occured!" message={errorUpdatingPlaces.message} onConfirm={handleError} />)}</Modal>


      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>
      <header>
        <img src={logo} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <Error title="An error ocurred" message={error.message} />}
        {!error && (<Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={isFetching}
          loadingText="Fetching Places Data"

        />)}


        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </div>
  );
}

export default App;
