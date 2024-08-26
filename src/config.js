import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || "xxxxxxxxx";
export const DB_PASSWORD = process.env.DB_PASSWORD || "xxxxxxxxx";
export const DB_SERVER = process.env.DB_SERVER || "xxxxxxxxxxxxx";
export const DB_DATABASE = process.env.DB_DATABASE || "IPM";