Simple test scripts demonstrating a proof-of-concept for using behavior-driven-testing to check for compatibility between popular WordPress plugins and the Gutenberg WordPress Editor.

Uses Mocha, WebdriverIO, and Selenium to automate logging into WordPress, navigating to the page editor and to the post editor, and creating and deleting a page and a post using the Gutenberg editor.

This project requires Node.js 8 or newer.

To run, clone the project, change into the project directory, run 'npm install', copy example.local.conf.js to local.conf.js and update it with the values for your WordPress installation, and, finally, run 'npm test' to start the test suite using the WebDriverIO binary.

WebDriverIO is configured to run with verbose logging. Every WebDriverIO command and its output will be logged to the terminal. WebDriverIO is also configured to use the dot reporter. These options can be configured in the wdio.conf.js file. For more information about configuring WebDriverIO, please refer to their documentation at http://webdriver.io/guide/getstarted/configuration.html.

After the tests are completed, WebDriverIO will provide a summary of the tests that failed and the tests that were successful.