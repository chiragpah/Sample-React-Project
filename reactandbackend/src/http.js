export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:4000/places");
    const resData = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch Data")
    }
    return resData.places

}
export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:4000/user-places");
    const resData = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch User Data")
    }
    return resData.places

}
export async function updateUserPlaces(places) {
    const response = await fetch("http://localhost:4000/user-places", {
        method: 'PUT',
        body: JSON.stringify({ places: places }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resData = await response.json();
    if (!response.ok) {
        throw new Error("Failed to Update user places")
    }
    return resData.message;
}