import { db } from "../../../services/sqlite.js";

export const UsersModel = {
  save: (fullName, phoneNumber) => {
    const sql = `INSERT INTO  Users (fullName, phoneNumber) VALUES (?,?)`;
    return db.run(sql, fullName, phoneNumber);
  },
  get: (phoneNumber) => {
    const sql = `SELECT fullName FROM Users WHERE phoneNumber =?`;
    return db.get(sql, phoneNumber);
  },
};
