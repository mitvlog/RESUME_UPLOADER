import CandidateProfileModel from '../models/CandidateProfile.js'

class CandidateProfileController {
  static saveProfile = async (req, res) => {
    try {
      const { name, email, dob, st, gender, pjl } = req.body
      console.log(req.files)
      let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }
      const pimage = req.files[0]
      // const rdoc = req.files['rdoc'][0].filename
      if (name && email && pimage) {
        const doc = new CandidateProfileModel({
          name: name,
          email: email,
          dob: dob,
          state: st,
          gender: gender,
          location: pjl,
          pimage: productPictures
          // rdoc: rdoc
        })
        const candidate = await doc.save()
        res.status(201).send({ "status": "success", "message": "Profile Uploaded Successfully", "candidate": candidate })
      } else {
        res.status(200).send({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
    }
  }

  static profileList = async (req, res) => {
    try {
      const candidates = await CandidateProfileModel.find()
      res.status(200).send({ "status": "success", "candidates": candidates })
    } catch (error) {
      console.log(error)
    }
  }
}

export default CandidateProfileController