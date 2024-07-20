import { Refer } from "../models/referral.js";

export const create = async (req, res) => {
  const { referrerInfo, refereeInfo, courseInfo } = req.body;
  if (!referrerInfo || !refereeInfo || !courseInfo) {
    return res.status(400).json({ error: "All fields are required" });
  }
  
  const newRefer = new Refer({
    referrerInfo,
    refereeInfo,
    courseInfo,
  });

  try {
    await newRefer.save();
    res.status(201).json("Refer created successfully");
  } catch (error) {
    return res.status(400).json({ error: "Refer creation failed" });
  }
};

export const get = async (req, res) => {
  try {
    const refers = await Refer.find();
    res.status(200).json(refers);
  } catch (error) {
    res.status(404).json({ error: "No refers found" });
  }
};
