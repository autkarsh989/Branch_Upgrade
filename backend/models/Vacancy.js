// backend/models/Vacancy.js
const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
  branchName: { type: String, required: true },
  open: { type: Number, required: true },
  openPwd: { type: Number, required: true },
  ews: { type: Number, required: true },
  ewsPwd: { type: Number, required: true },
  sc: { type: Number, required: true },
  scPwd: { type: Number, required: true },
  st: { type: Number, required: true },
  stPwd: { type: Number, required: true },
  obcNcl: { type: Number, required: true },
  obcNclPwd: { type: Number, required: true }
});

/*{branchName: "IT",open: 3,openPwd: 3,ews: 3,ewsPwd: 3,sc: 3,scPwd: 3,st: 3,stPwd: 3,obcNcl: 3,obcNclPwd: 3}
*/ 




module.exports = mongoose.model('projvacancies', vacancySchema);
