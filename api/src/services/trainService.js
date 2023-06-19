import Train from "../model/TrainModel.js";

async function create(train) {
  const createdTrain = await Train.create(train);

  return createdTrain;
}

async function getOne(id) {
  if (!id) {
    throw new Error('id is not define')
  }
  const train = await Train.findById(id);

  return train;
}

async function getAll() {
  const trains = await Train.find();

  return trains;
}

async function update(train) {
  if (!train._id) {
    throw new Error('id is not define')
  }

  const updatedTrain = await Train.findByIdAndUpdate(train._id, train, {new: true})

  return updatedTrain;
}

async function remove(id) {
  if (!id) {
    throw new Error('id is not define')
  }

  const train = await Train.findByIdAndDelete(id);

  return train;
}

export const TrainService = {
  create,
  getOne,
  getAll,
  remove,
  update
}