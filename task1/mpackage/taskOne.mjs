import { cp } from "node:fs/promises";

const backupDir = async (sourceDir, targetDir, cb) => {
  console.log('\x1Bc');
  try {
    await cp(sourceDir, targetDir, { recursive: true })
    cb(null);
  } catch (e) {
    cb(e.message);
    console.error(`Error: ${e.message}`);
  }
};

export default backupDir;