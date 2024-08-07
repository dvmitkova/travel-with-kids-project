import * as request from './requester';

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/trips`;

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    const trips = Object.values(result);
    return trips;
}

export const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
    })

    const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

    const latestTrips = Object.values(result)

    return latestTrips;
}

export const getOne = (tripId) => request.get(`${BASE_URL}/${tripId}`);

export const create = (tripData) => request.post(`${BASE_URL}`, tripData);

export const remove = (tripId) => request.del(`${BASE_URL}/${tripId}`);

export const update = (tripId, tripData) => request.put(`${BASE_URL}/${tripId}`, tripData)

const tripsAPI = {
    getLatest,
    getAll,
    getOne,
    create,
    remove, 
    update
}

export default tripsAPI;