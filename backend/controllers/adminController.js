const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vacancy = require("../models/Vacancy");

const Students = require("../models/User")

const getAllRequests = async (req, res) => {
  try {
    const requests = await Students.find();
    res.status(200).json(requests);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  }
};

const updateVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find();
    // await Vacancy.deleteMany({});
    // await Vacancy.insertMany(vacancies);
    res.status(200).json(vacancies);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
// const updateVacancies = async (req, res) => {
//   try {
//     const vacancies = req.body;
//     await Vacancy.deleteMany({});
//     await Vacancy.insertMany(vacancies);
//     res.status(200).json({message: 'Vacancies updated successfully'});
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// };

const deleteRequest = async (req, res) => {
  try {
    const rollNo = req.params.rollNo;
    console.log(req);
    await Students.findOneAndDelete({ rollNo });
    res.status(200).json({message: 'Request deleted successfully'});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const updateVacancy = async (req, res) => {
  try {
    const branchName = req.params.branchName;
    const vacancyData = req.body;

    const vacancy = await Vacancy.findOne({ branchName });
    if (!vacancy) {
      return res.status(404).json({message: 'Vacancy not found'});
    }

    Object.keys(vacancyData).forEach((category) => {
      vacancy[category] = vacancyData[category];
    });

    await vacancy.save();
    res.status(200).json({message: 'Vacancy data updated successfully'});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

router.get('/requests', getAllRequests);
router.get('/vacancies', updateVacancies);
router.delete('/delete-request/:rollNo', deleteRequest);
router.patch('/update-vacancy/:branchName', updateVacancy);

module.exports = router;