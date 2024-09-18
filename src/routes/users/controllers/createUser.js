import { UsersModel } from "../models/user.js";

export const createUser = async (req, res) => {
  if (!req.body.fullName)
    return res.status(400).send({ error: "Full name is required!" });
  if (!req.body.phoneNumber)
    return res.status(400).send({ error: "Phone number is required!" });

  const existingUser = await UsersModel.get(req.body.phoneNumber);
  if (existingUser)
    return res.send(
      `Пользователь ${existingUser.fullName} с номером ${req.body.phoneNumber} уже существует!`
    );

  await UsersModel.save(req.body.fullName, req.body.phoneNumber);

  res
    .status(200)
    .send(
      `Вы добавили пользователя ${req.body.fullName} с номером ${req.body.phoneNumber}`
    );
};
