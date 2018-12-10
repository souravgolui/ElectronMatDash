var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'release-builds/app-win32-x64',
    outputDirectory: 'release-builds/installer64',
    authors: 'My App Inc.',
    exe: './myapp.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));