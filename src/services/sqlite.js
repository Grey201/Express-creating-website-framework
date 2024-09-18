import sqlite3 from "sqlite3";
import { open } from "sqlite";

export let db;
export const openDBConnection = async (path) => {
  db = await open({
    filename: path,
    driver: sqlite3.Database,
  });

  db.migrate().catch((e) => {
    console.log("Ошибка применения миграций", e);
  });

  return db;
};

export const closeDBConnection = async () => {
  if (db) await db.close();
};
