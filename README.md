# KidVentures - Travel with your kids

## 1. Initialize Project
- [x] Initialize git repo
- [x] Add server (Softuni Practice Server)
- [x] Add base vite react project as client
- [x] CleanUp client
- [x] Add project components

## 2. React Router
- [x] Install react-router-dom
- [x] Setup react-router-dom
- [x] Add routes in App.jsx
- [x] Add links in navigation
  
## 3. Create Service Layer
- [x] Service layer architecture - feature based / function based
- [x] Abstract requester - single endpoint fetcher
- [x] Add trips api
- [x] Preseed practice server - after creating trips in postman, copy the objects and paste them in a new file in server/data

## 4. Page Implementations
- [x] Trip list
- [x] Details 
    - Details link
    - Details route
    - API function - getOne
- [x] Home - Latest Trips

## 5. Comments (Advanced)
- [x] Create service for nested resource comments
- [x] Post comment to server
- [x] Read comments from server
- [x] Add comments in the component
- [x] Clear form

## 6. API Hooks
- [x] Form Hook
- [x] TripAPI Hooks
- [x] Comment Hooks

## 7. Authentication
- [x] Auth API
    - [x] Login
    - [x] Register
    - [x] Logout
- [x] Auth API hook
- [x] Auth state & context - state of authenticated user
- [x] Token management
- [x] Login
- [x] Register
- [x] Logout
- [ ] Route guards

## 8. UI Implementation
- [x] Dynamic navigation
- [x] Create a trip
    - [x] API function
    - [x] Hook
- [x] Latest trips
- [x] Edit Trip
- [x] Delete Trip

## 9. Refactoring
- [x] Extract auth state from App component
- [x] Persist auth state
- [x] Comments - refactored
- [x] Add route guards

## 10. Unit testing
- [x] Installation - npm i -D vitest + config
- [x] DOM creation - npm i -D jsdom + config

## !!!!!!!!!!!!!!!! Fix Profile Edit !!!!!!!!!!!!!!!!!!

## 11. Final touches
- [x] Remove Add to favorites for guests
- [ ] Spinner for waiting to fetch data - continue with tripDetails!!!
- [ ] Error handling
- [x] Data validation 
- [ ] Documentation
- [ ] CSS files?
- [x] Route guards - logged in users must not see login and register pages!
- [ ] Unit tests
- [ ] Connect to an external API? - login with facebook or google
- [ ] Deploy?


## Notes
1. Latest Trips
    1. URL `http://localhost:3030/data/trips?sortBy=_createdOn%20desc&pageSize=3`
    2. Use URLSearchParams
2. seedData - line 1341 in server.js