import Train from "../model/TrainModel.js";
import { TrainService } from "../services/trainService.js";

async function createNewOne(req, res) {
  try {
    const newTrain = await TrainService.create(req.body)
  
    res.json(newTrain);
  } catch(err) {
    console.log(err);
  }
}

async function getOne(req, res) {
  try {
    const train = await TrainService.getOne(req.params.id);

    return res.json(train);
  } catch(err) {
    res.status(500).json(err);
  }
  
}

async function getAll(req, res) {
  try {
    const trains = await TrainService.getAll();

    return res.json(trains);
  } catch(err) {
    res.status(500).json(err.message);
  }
}

async function update(req, res) {
  try {
    const updetedTrain = await TrainService.update(req.body)

    return res.json(updetedTrain);
  } catch(err) {
    res.status(500).json(err.message);
  }
}

async function remove(req, res) {
  try {
    const train = await TrainService.remove(req.params.id);

    return res.json(train);
  } catch(err) {
    res.status(500).json(err.message);
  }
}

export const TrainController = {
  createNewOne,
  getOne,
  getAll,
  remove,
  update
}