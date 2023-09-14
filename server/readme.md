# E-commerce MERN Stack Project

- /test -> Health check (D)
- /seed -> seeding some data (D)

-/api/users (D)
    - POST /register -> create the user account (D)
    - POST /activate -> activate the user account (D)
    - GET /profile -> get the user account (D)
    - DELETE/:id -> delete the user account (D)
    - PUT/:id -> update the user account (D)
    - PUT/update-password/:id(D) -> update the password
    - POST/forget-password (D) -> forget the password
    - PUT/reset-password (D) -> reset the password
    - PUT - Admin /ban/:id (D) -> ban the user
    - PUT - Admin /unban/:id (D) -> unban the user
    - GET - Admin /export-users (D) -> export all the users
    - GET - Admin /all-users (D) -> get all the users including searching

- /api/auth (JWT Auth)
    - POST /login -> isLoggedOut -> user login (D)
    - POST /logout -> isLoggedIn -> user logout (D)
    - GET /refresh -> get refresh token (D)

- Middleware
    - isLoggedIn (D)
    - isLoggedOut (D)
    - isAdmin (D)
    - uploadFile (D)
    - getRefreshToken (D)
    - userValidation (D)
    - runValidation (D)

- /api/categories (CRUD)
    - POST / -> create the category (Admin)
    - GET / -> get all the category (Admin)
    - GET /:id -> get single category (Admin)
    - POST / -> create a category (Admin)
    - DELETE /:id -> delete a category (Admin)
    - PUT /:id -> update a category (Admin)

- /api/products (CRUD)
    - POST / -> create the product (Admin)
    - GET / -> get all the products
    - GET /:id -> get single product
    - POST / -> create a blog (Admin)
    - DELETE /:id -> delete a product (Admin)
    - PUT /:id -> update a product (Admin)

- /api/orders (CRUD)
    - POST / -> create the order (User/Admin)
    - GET / -> get  the order (User/Admin)
    - GET /all-orders -> get all the orders (Admin)
    - DELETE /:id -> delete a order (Admin)
    - PUT /:id -> update a order (Admin)

- /api/payment
    - GET /token -> get  the payment token (User/Admin)
    - POST /process-payment -> process the payment (User/Admin)

- package that we used
    `npm install express cors http-errors multer body-parser bcrypt jsonwebtoken nodemailer cookie-parser`
    `npm install --save-dev morgan nodemon`

