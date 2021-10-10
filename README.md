# Rails as an API
  * A web application using JavaScript to render frontend and Rails API to manage backend.

# Features

- Shows ability to make fetch requests to API via AJAX
- Uses vanilla JavaScript to render HTML and CSS elements to the DOM
- Allows user to view trips
- Allows user to add new, edit, update & delete trips

# Backend API
    https://github.com/Gebre2020/JS-Visitor-Project-Backend

# Installation

**To Install Backend**

* Using the Command Line to Create a New App
  * API and Postgres flags
  * `rails new JS-Visitor-Project-Backend --api --database=postgresql`

  1. Clone this repo to local machine using terminal git clone <this-repo>
  2. cd into fresh-find-backend/fresh-find-backend and run  bundle install to install dependencies
  3. Run rails db:migrate to create tables
  4. Run rails db:seed to generate seed data
  5. Run rails s to run server

**To install Frontend**

1. Open another tab in terminal and cd into fresh-find-frontend directory.
2. Inside fresh-find-frontend directory, type open index.html to open index.html in the browser to begin navigating through this application.

  - Simply clone this repository to your local directory.

  - Once cloned in your terminal type the following command

  - open index.html

** Configuring the App

  * Adding Rack-CORS Middleware
  * Setting up our Routes

# Tech Used
  * Rendering Info as JSON
  * Controller setup
  * Rendering objects as JSON
  * Ruby [2.6.1]
  * Rails [6.0.3] - generated as an API only
  * Postgresql - database
  * FastJSON API / serializer to manage seeded data in json format