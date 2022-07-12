# To run locally
After downloading the repo, here are the steps to run the tests:
1. In root folder of the project, via the command line, run `npm install` to download project dependencies (creates `node_modules` folder).
2. In root folder of the project, via the command line, run `npx cypress run --browser chrome`. This will execute the tests in Chrome in headless mode.



# To run using docker-compose tests in Chrome browser pre-installed in cypress/included image:

docker compose run cypress


