# CS 451R Capstone Project Final Release

Finished project for CS 451R capstone project. We did the bank project.

## Dependencies

Make sure you have the [dotnet runtimes](https://learn.microsoft.com/en-us/dotnet/core/install/windows?tabs=net70), as well as [Node.js](https://nodejs.org/en/download) installed on your machine.

## User Guide

1. Pull this repository down to your local machine. Open the `final-release` directory in vscode. We are using vscode only for its convenient terminal. You can alternatively open the `final-release` directory in any command line of your choice to run this project.
2. Open the terminal in vscode with the ``ctrl+` `` shortcut.
3. Run the back end with the `dotnet run --project ./back-end/src/givingcircle.api/GivingCircle.Api.csproj` command to build and run the project. Make sure you run this command from the `final-release` directory.
4. Open a new terminal with the ``ctrl+shift+` `` shortcut. Navigate to the `front-end` directory with the `cd front-end` command.
5. Install project dependencies with the `npm install` command. Once those install you can run the project with the `npm run start` command. The website should open up in a new browser window and you can navigate our website. Note that it may take a while for the website to run the first time as it builds.
6. If you don't wish to create an account on our website, you can log in with email `usopp@gmail.com` and password `test`.

## Notes

Note that fundraiser image upload is not supported in this release, which you can do when you create a fundraiser. Already uploaded images will display, however. This is because AWS doesn't allow you to upload the necessary access credentials to a public repository as they will automatically detect that commit and remove your account credentials. We used a seperate credentials directory installed on our local machines for this to work, but in the interest of keeping this guide simple we removed the need to create those separate files with keys shared privately. Our project powerpoint contains an example of image upload working on our local machines.
