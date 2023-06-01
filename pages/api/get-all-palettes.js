import path from "path";
import { promises as fs } from "fs-extra";

export default async function handler(req, res) {
 const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/master-palette-store.json",
    "utf8"
  );
 res.status(200).json(fileContents);
}
