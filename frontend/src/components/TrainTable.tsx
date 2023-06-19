import { useState } from "react";
import { Train } from "../types/Train";
import { SortLink } from "./SortLink";

interface Props {
  train: Train[],
  removeTrain: (id: string) => Promise<void>,
  setAddId: React.Dispatch<React.SetStateAction<string>>,
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>,
}

export const TrainTable: React.FC<Props> = ({
  train,
  removeTrain,
  setIsUpdate,
  setAddId
}) => {
  
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortClass = (field: string) => {
    if (sortField === field) {
      return sortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
    }

    return 'fa-sort';
  };

  const sortedTrain = train.sort((a, b) => {
    const sortEll = (title: keyof Train) => {
      return sortDirection === 'asc'
      ? (a[title] as string).localeCompare(b[title] as string)
      : (b[title] as string).localeCompare(a[title] as string);
    }

    switch (sortField) {
      case 'train':
        return sortEll('train');
      case 'departureStation':
        return sortEll('departureStation');
      case 'arrivalStation':
        return sortEll('arrivalStation');
      default:
        return 0;
    }
  });

  return (
    <table
      data-cy="peopleTable"
      className="table is-fullwidth box"
    >
      <thead>
        <tr>
          <SortLink
            getSortClass={getSortClass}
            title={'train'}
            handleSort={handleSort}
          />
          <SortLink
            getSortClass={getSortClass}
            title={'departureStation'}
            handleSort={handleSort}
          />
          <th>Arrival time</th>
          <th>Stay time</th>
          <th>Departure time</th>
          <SortLink
            getSortClass={getSortClass}
            title={'arrivalStation'}
            handleSort={handleSort}
          />
          <th></th>
        </tr>
      </thead>

      <tbody>
        {sortedTrain.map(item => {
          const {
            arrivalStation,
            arrivalTime,
            departureStation,
            departureTime,
            stayTime,
            train,
            _id,
          } = item;

          return (
            <tr key={_id}>
              <td>{train}</td>
              <td>{departureStation}</td>
              <td>{arrivalTime}</td>
              <td>{stayTime}</td>
              <td>{departureTime}</td>
              <td>{arrivalStation}</td>
              <td>
                <button
                  className="button is-success"
                  onClick={() => {
                    setIsUpdate(true);
                    setAddId(_id)
                  }}
                >
                  Update
                </button>
                <button
                  className="button is-danger"
                  onClick={() => {removeTrain(_id)}}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};
