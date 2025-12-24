// API for adding doctor

import { Doctor } from "../model/doctor.model.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken"

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      degree,
      speciality,
      experience,
      about,
      address,
      fee,
      password,
    } = req.body;

    const imageFile = req.file;

    if (
      !name ||
      !email ||
      !degree ||
      !speciality ||
      !experience ||
      !about ||
      !address ||
      !fee ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing Details",
      });
    }

    // validating email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // validating strong password
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be greater then 7",
      });
    }
    // hashed doctor password
    const hasedPassword = await bcrypt.hash(password, 10);

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hasedPassword,
      about,
      speciality,
      experience,
      degree,
      fee,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new Doctor(doctorData);
    await newDoctor.save();

    return res.status(200).json({
      success: true,
      message: "Doctor added",
    });
  } catch (error) {
    console.log(error.message, "failed to add doctor");
    return res.status(500).json({
      success: false,
      message: "server error failed to add doctor",
    });
  }
};

// api for admin login

const loginAdmin = async (req,res) => {
  try {
    const { email, password } = req.body;
    if (!email?.trim() || !password?.trim()){
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if(email !== process.env.ADMIN_EMAIL){
      return res.status(400).json({
        success : false,
        message : "Incorrect email"
      })
    }
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(400).json({
        success : false,
        message : "Wrong Credentials"
      })
    }

    const token = jwt.sign(email + password, process.env.ADMIN_JWT_SECRET_KEY);

  // const token =  jwt.sign({
  //   role : "admin",
  //   adminEmail : process.env.ADMIN_EMAIL
  // },process.env.ADMIN_SECRET,{expiresIn : process.env.ADMIN_EXPIRY})

  return res.status(200).json({
    success : true,
    message : "Login successfully",
    token 
  })



  } catch (error) {
    console.log(error.message,"failed to adminlogin ");
    return res.status(500).json({
      success : false,
      message : "server error while admin login"
    })
    
  }
};

export { addDoctor,loginAdmin };
