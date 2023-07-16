import { sendFile } from "../../src/controllers/google-controller.js";

export default function handler(req, res) {
  const idList = req.files.forEach(async (file, i) => await sendFile(file))
  console.log(idList)
  res.status(200).json(idList)
}