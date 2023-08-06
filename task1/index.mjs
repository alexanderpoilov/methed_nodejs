import backupDir from './mpackage/taskOne.mjs';

backupDir('./testDir', './backupDir', (err) => {console.log(err)});
