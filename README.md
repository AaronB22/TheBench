# The Bench

* Sam - SamuelM007
* Jamison - JamHudson
* Aaron - AaronB22
* Buay - Buaypd

**Affordable Sports Gear Retailer**

Server-Side Web Development Project

## Overview

The Bench is a web-app storefront providing affordable sports gear. This project is intended to demonstrate a full-stack web application. Technologies used in this project include:

* Server Side Rendering
* Express.js
* MySQL database integration
* REST-style API endpoints
* MVC (Model View Controller) Architecture

## Setup Instructions

Open the project in an IDE of your choice and open a terminal at the root of the repository.

Install the [Node.js](https://nodejs.org/en) dependencies.

    npm i

Then, configure the environment variables (create a file in the top level of the repository called ".env"). Here's a template you can use:

```
PORT=8000

DB_USER=Ex_User
DB_PASSWORD=Ex_Password
DB_NAME=bench_dev
DB_PORT=3307
DB_ROOT_PASS=Root_Password
DB_HOST=localhost
```

This app is set up to use a [Docker](https://www.docker.com/resources/what-container/) container. If you're using Docker, then you can create the container.

    docker compose up -d

The database should be automatically seeded.

Now, start the app.

    npm run dev

The website will now be running on the port assigned in the .env. If using the template, go to <a href="http://localhost:8000">`localhost:8000`</a> in your browser.

## Endpoints / Routes

### Rendered
#### GET `/`

    Default route; home.

#### GET `/products`

    All products page.

#### GET `/products/:id`

    Individual product page.


### API

#### GET `/api/products`

    Provides the data on all products.

#### GET `/api/products/:id`

    Provides the data on an individual product.