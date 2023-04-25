# final-release
Finished project for CS 451R

## Dependencies

Make sure you have the [dotnet runtimes](https://learn.microsoft.com/en-us/dotnet/core/install/windows?tabs=net70), as well as [Node.js](https://nodejs.org/en/download) installed on your machine.

## User Guide

1. Pull this repository down to your local machine. Open the `final-release` directory in vscode. We are only using vscode for its convenient terminal. You can alternatively open the `final-release` directory in any command line of your choice to run this project.
2. Open the terminal in vscode with `ctrl+`\`.
3. Run the back end with the `dotnet run --project ./back-end/src/givingcircle.api/GivingCircle.Api.csproj` command to build and run the project.
4. Open a new terminal with the `ctrl+shift+`\` command. Navigate to the `front-end` directory with the `cd front-end` command.
5. Install project dependencies with the `npm install` command. Run the project with the `npm run start` command.
6. If you don't wish to create an account on our website, you can log in with email `usopp@gmail.com` and password `test`.
7. Note that fundraiser image upload is not supported in this release. If you try to upload an image it will currently crash the program. This is because AWS doesn't allow you to upload any access credentials to a public repository as they will automatically detect that commit and remove your account credentials. We had seperate directories with these credentials on our local machines, but in the interest of keeping this simple we removed that requirement. Our video contains an example of image upload working on our local machines. The images that are already uploaded will display on the website for you, however.