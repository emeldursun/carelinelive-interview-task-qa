# CareLineLive Interview Task - QA Engineer

This repository contains a simple Angular application, that we'd like you to write automated tests for using Cypress.

## Getting started

1. Install dependencies using `npm install`
2. Start the Angular application using `npm start`
    - A local development server will be started on port 4200: `http://localhost:4200`
    - Any changes to the code will be recompiled and the application will be reloaded in your browser
3. Start Cypress using `npm run cypress:open`

## The Application

This is a very simple application that allows a user to login, reset their password, and manage a todo list.

Persistence for the authenticated user is implemented using `sessionStorage`, however the todo list is not persisted
between page loads.

The valid credentials are:
- Username: `test@carelinelive.com`
- Password: `password`

## Task Requirements

A number of user stories are listed at the bottom of this document. You'll be expected to write tests for each of these
stories.

### Optional (bonus)

We've listed a number of optional tasks that you can complete if you have time. These are not required, but will be
considered as a bonus.

- GitHub Action workflow to run the tests
- Modify the application to use `data-testid=""` attributes instead of relying on other selectors.
- Unit tests for components or services using `ng test`
- [Cypress Component](https://docs.cypress.io/guides/component-testing/angular/quickstart) tests for TaskComponent

# User Stories

## Login

1. As a user, I need to be able to log in
2. As a user, I expected an indicator to be shown when logging in
3. As a user, I shouldn't be able to click the "Sign In" if the form is invalid
4. As a user, I shouldn't be able to click the "Sign In" button once whilst the login request is in progress
5. As a user, I need to be able to log out of the application
6. As a user that's logged in, I should be redirected to the home page if I try to access the login page
7. As a user that's logged in, I should be redirected to the home page if I try to access the password reset page

## Forgotten password

1. As a user that's forgotten their password, I need to be able to submit the password reset form
2. As a user, I should not be able to submit the form if the inputs are invalid
3. As a user, I should see an error message if I do not type anything
4. As a user, I should see an error message if I do not enter a valid email address

## Home

1. As an authenticated user, I should see my email address on the home page
2. As a user, I should see my todo list on the home page
3. As a user, I should be able to add new tasks
4. As a user, I should be able to cancel adding a new task
5. As a user, I should not be able to add a new task if the input is empty
6. As a user, I should be able to remove tasks and the list update
7. As a user, I should be able to edit tasks and the list update
8. As a user, I should see an error message if I try to edit a task to be empty
9. As a user, I should be able to mark a test as done
10. As a user, I should have a visual indication that a task is done
11. As a user, I should be able to mark all tasks as done
12. As a user, I should be able to mark a task as not done
