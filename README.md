# Renew Financial Code Challenge

## Task

Create an application that uses the Google Maps Places Autocomplete function to collect information and approve or deny a loan application.

## Requirements

Below are the requirements put forth by the challenge.
This challenge should take no more than 3 hours to complete.

### Form Submission

Steps:

- [] Create React component to hold the form.
- [] Create custom validation for each input.
  - [] Name required. Type string.
  - [] Address required. Type String
    - [] The address field should be filled out by the [Google Maps Autocomplete API](#google-maps-places-auto=-complete).
  - [] Annual income required. Type int.
  - [] Loan amount required. Type int.

### Decisioning

- [] Loan cannot be less than $5000
- [] Loan cannot be more than $50000.
- [] Loan cannot exceed 30% of the annual income.
- [] Loan can only be accepted if the applicant lives in CA, FL, or OR.

### Google Maps Places Auto Complete

- [] Should be separate component from the form.
- [] Integrate type a head feature provided through google maps places API
- [] Send response from type a head to form component.

### Persistance

- [] Integrate Redux for state management. I will not use a DB. Just Redux to hold local state information.
- [] Create object with the following properties:
  - Name
  - Address
  - Annual Income
  - Loan Amount
  - Loan status
  - Loan status message (if not approved then why)
- [] Create a selector to filter loans by approved vs not approved.

### Display Data

- [] Create a component to hold loan application information held in Redux state.
- [] Create functionality to toggle between approved and unapproved loans.

___

## Dependencies
| Name | Reason Added |
|---|---|
| [React Redux](https://react-redux.js.org/introduction/quick-start) | To hold applications in state as a means of locally persisiting data. |

___

## Tests

I will write tests for the decisioning logic:

___

## Time Table

| Activity | Time Spent | Total Time On Project |
|---|---|---|
| Planning and writing initial documentation | 15 mins | 0:15 |
| Create Redux Components | 