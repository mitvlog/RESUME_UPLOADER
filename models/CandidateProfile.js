import mongoose from "mongoose";

// Defining Schema
const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  dob: { type: Date },
  state: { type: String },
  gender: { type: String },
  location: { type: String },
  pimage:  [
    { img: { type: String } }
],
  // rdoc: { type: String, required: true },
})

// Model
const CandidateProfileModel = mongoose.model("candidateprofile", candidateSchema)

export default CandidateProfileModel