# Test Automation Assignment
The test automation is built using cucumber framework.Chai is used for assertion.

# Repository


# Setup and Execution
1.	Get the code from the git repository
2.	Open the project in VS code and open new terminal
3.	Run following commands
    a.	**npm init**
    b.	**npm install @wdio/cli**
4.	To run the tests ,execute the following 
        **npx wdio run wdio.conf.js**
5.	Selected **chromedriver** for running the test

# Test Report
 For reporting I have used allure and spec.

# Folder Structure
1.	Under Page Objects folder there are 4 files that contains the web elements locators and actions.
    **carsafety.page.js** - contains web locators for car safety page
    **home.page.js**      - contains web locator and actions for Campaign home page
    **ourcars.page.js**   - contains web locators and actions for Our Cars menu
2.	Under Step definitions there is a step file(**steps.js**) which contains the steps to
     be executed as a part of test.
3.	There are 2 feature files.
    **campaign.feature**  – contains test scenarios related to campaign page
	**carsafety.feature** – contains test scenario related to car safety page
NOTE: Created 2 feature file to demonstrate parallel execution.
4.	allure-results – contains test results in allure reporting tool.

