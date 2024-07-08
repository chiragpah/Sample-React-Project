import { useFetch } from '../hooks/useFetch.js';
import { fetchAvailablePlaces } from '../http.js';
import { sortPlacesByDistance } from '../loc.js';
import Error from './Error.jsx';
import Places from './Places.jsx';

async function fetchSortedPlaces() {
    const places = await fetchAvailablePlaces();
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {

            const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
            resolve(sortedPlaces)
        })
    })
}
export default function AvailablePlaces({ onSelectPlace }) {

    const { isFetching, error, fetchedData: availablePlaces } = useFetch(fetchSortedPlaces, [])
    //


    if (error) {
        return <Error title="An Error occured" message={error.message} />
    }
    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
            loadingText="Fetching Places Data"
            isLoading={isFetching}
        />
    );
}
