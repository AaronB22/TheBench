# The Bench

* Sam - SamuelM007
* Jamison - JamHudson
* Aaron - AaronB22
* Buay - Buaypd

**Affordable Sports Gear Retailer**

Server-Side Web Development Project

## Overview

The Bench is a web-app storefront providing affordable sports gear. This project is intended to demonstrate a full-stack web application. Features of this project include:

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

SESSION_SECRET=example_secret
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

Default route; home. Public.

#### GET `/login`

Account login page. Public.

#### POST `/login`

Logs the user into an account. Public.

```json
{
    username: "username",
    password: "password",
}
```

#### GET `/logout`

Logs the user out of an existing session. Private.

#### GET `/register`

Account creation page. Public.

#### POST `/register`

Creates a new account. Public.

```json
{
    username: "username",
    password: "password",
    confirm: "password"
}
```

#### GET `/products`

All products page. Must be logged in to view; Private

#### GET `/products/:id`

Individual product page. Private.


### API

All API routes are protected (private).

#### GET `/api/products`

Provides the data on all products.

```json
[
  {
    "id": 1,
    "name": "Pro Football Helmet",
    "price": "149.99",
    "type": "football"
  },
  {
    "id": 2,
    "name": "Official NFL Game Ball",
    "price": "89.99",
    "type": "football"
  }
]
```

#### GET `/api/products/:id`

Provides the data on an individual product.

Example: `/api/products/5`
```json
{
  "id": 5,
  "name": "Football Gloves",
  "price": "34.99",
  "type": "football"
}
```

Returns a `404` if the product is not found.

#### GET `/api/cart`

Provides the current session cart

#### POST `/api/cart`

Adds the provided item to the cart
```json
{
    productId: 1
}
```
Returns a `404` if the product is not found.

#### DELETE `/api/cart`

Deletes all contents of the cart

#### DELETE `/api/cart/:id`

Deletes a specific product from the cart