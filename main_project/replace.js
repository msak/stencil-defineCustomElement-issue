const replace = require('replace-in-file');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const placeholder = '__version_placeholder__';
const replacement = 'v1';

const distFolder = 'dist';

(async () => {
  try {
    // rename files
    const globPattern = `${process.cwd()}/${distFolder}/**/*${placeholder}*`;
    const files = glob.sync(globPattern);
    for (i = 0; i < files.length; i++) {
      fs.renameSync(files[i], files[i].replace(placeholder, replacement));
    }

    // rename content of the files
    await replace({
      files: `./${distFolder}/**`,
      from: new RegExp(placeholder, 'g'),
      to: replacement,
    });

    console.log(`Renaming to ${replacement}`);
  } catch (error) {
    console.error('Error occurred while renaming:', error);
  }
})();
