import { useEffect, useState } from "react";
import { SearchPanel } from "./SearchPanel";
import { TrainTable } from "./TrainTable";
import { Train } from "../types/Train";
import { addNewTrain, deleteTrain, getAll, updateTrainToDB } from "../api/train";
import { AddNewOnePanel } from "./AddNewOnePanel";
import { UpdatePanel } from "./UpdatePanel";

export const TrainPage = () => {
  const [train, setTrain] = useState<Train[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [addId, setAddId] = useState('');
  const [searchPanel, setSearchPanel] = useState('');
  const correstSearch = searchPanel.toLowerCase().trim();
  const trainMesageError = !isLoading && !fetchError && !train.length;

  const handleSetSearchPanel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPanel(event.target.value);
  };

  const getTrain = async() => {
    try {
      setIsLoading(true);
      const allTrains = await getAll();
      
      setTrain(allTrains);
    } catch(err) {
      setFetchError(true)
    } finally {
      setIsLoading(false);
    }
  }

  const filteredTrain = train.filter((item: Train) => {
      const {
        arrivalStation,
        departureStation,
        train,
      } = item;

      const search = (train + arrivalStation + departureStation).toLowerCase();

      return search.includes(correstSearch);
    },
  );

  const addTrain = async (
    train: string,
    departureStation: string,
    arrivalTime: string,
    stayTime: string,
    departureTime: string,
    arrivalStation: string,
  ) => {
    try {
      await addNewTrain(
        arrivalStation,
        arrivalTime,
        departureStation,
        departureTime,
        stayTime,
        train,
      );
      await getTrain();
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  const updateTrain = async (train: Train) => {
    try {
      await updateTrainToDB(train);
      await getTrain();
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  const removeTrain = async (id: string) => {
    try {
      await deleteTrain(id);
      await getTrain();
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    getTrain();
  }, [])

  return (
    <>
      <h1 className="title">Train Schedule</h1>

      <div className="columns is-desktop is-flex-direction-row-reverse">
        <div className="column is-7-tablet is-narrow-desktop">
          <SearchPanel
            searchPanel={searchPanel}
            handleSetSearchPanel={handleSetSearchPanel}
          />
          {isUpdate ?
          (<UpdatePanel
            updateTrain={updateTrain}
            setIsUpdate={setIsUpdate}
            addId={addId}
          />) :
          (<AddNewOnePanel addTrain={addTrain}/>)}
        </div>

        <div className="column">
          {fetchError && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}

          {trainMesageError && (
            <p data-cy="noPeopleMessage">
              There are no people on the server
            </p>
          )}

          <TrainTable
            train={filteredTrain}
            removeTrain={removeTrain}
            setIsUpdate={setIsUpdate}
            setAddId={setAddId}
          />
        </div>
      </div>
    </>
  )
};
