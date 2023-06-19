import { useState } from "react";
import { InputPanel } from "./InputPanel";

interface Props {
  addTrain: (
    arrivalStation: string,
    arrivalTime: string,
    departureStation: string,
    departureTime: string,
    stayTime: string,
    train: string
  ) => Promise<void>
}

export const AddNewOnePanel: React.FC<Props> = ({ addTrain }) => {
  const [train, setTrain] = useState('');
  const [departureStation, setDepartureStation] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [stayTime, setStayTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalStation, setArrivalStation] = useState('');

  const handleTrain = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrain(event.target.value);
  };

  const handleDepartureStation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureStation(event.target.value);
  };

  const handleArrivalTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalTime(event.target.value);
  };

  const handleStayTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStayTime(event.target.value);
  };
  const handleDepartureTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureTime(event.target.value);
  };
  const handleArrivalStation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalStation(event.target.value);
  };

  const resetForm = () => {
    setTrain('');
    setDepartureStation('');
    setArrivalTime('');
    setStayTime('');
    setDepartureTime('');
    setArrivalStation('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addTrain(
      train,
      departureStation,
      arrivalTime,
      stayTime,
      departureTime,
      arrivalStation
    )

    resetForm();
  };

  return (
    <nav className="panel">
      <form
        className="panel updatePanel"
        onSubmit={handleSubmit}
      >
        <InputPanel 
          type={"search"}
          placeholder={"Name"}
          value={train}
          handleOnChange={handleTrain}
        />
        <InputPanel 
          type={"search"}
          placeholder={"Departure station"}
          value={departureStation}
          handleOnChange={handleDepartureStation}
        />
        <InputPanel 
          type={"time"}
          placeholder={""}
          value={arrivalTime}
          handleOnChange={handleArrivalTime}
        />
        <InputPanel 
          type={"number"}
          placeholder={"Stay time"}
          value={stayTime}
          handleOnChange={handleStayTime}
        />
        <InputPanel 
          type={"time"}
          placeholder={""}
          value={departureTime}
          handleOnChange={handleDepartureTime}
        />
        <InputPanel 
          type={"search"}
          placeholder={"Arrival station"}
          value={arrivalStation}
          handleOnChange={handleArrivalStation}
        />
        <button
          className="button is-success is-fullwidth"
          type="submit"
        >
          Add new Train
        </button>
      </form>
    </nav>
  );
}


