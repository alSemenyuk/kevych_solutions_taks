import { Train } from "../types/Train";

const BASE_URL = 'http://localhost:5500/api/trains';

export const getAll = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  return data
}

export const addNewTrain = async (
  arrivalStation: string,
  arrivalTime: string,
  departureStation: string,
  departureTime: string,
  stayTime: string,
  train: string,
  ): Promise<Train> => {
    const newTrain = {
      arrivalStation,
      arrivalTime,
      departureStation,
      departureTime,
      stayTime,
      train,
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrain),
    })

    return response.json();
}

export const deleteTrain = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
}

export const updateTrainToDB = async (train: Train): Promise<Train> => {
  const updatedTrain = {...train};

  const response = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTrain),
  })

  return response.json();
}