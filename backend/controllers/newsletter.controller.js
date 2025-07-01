// controllers/newsletterController.js
import Subscriber from "../models/subscribe.js";

export const subscribeEmail = async (req, res) => {
  const { email } = req.body;
  const sub = new Subscriber({ email });
  await sub.save();
  res.status(201).json({ message: "Subscribed successfully" });
};

export const getSubscribers = async (req, res) => {
  const subs = await Subscriber.find();
  res.json(subs);
};
