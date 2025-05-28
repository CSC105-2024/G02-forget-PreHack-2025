# Abb Sabb (YumMystery)

Abb Sabb is a website where users can share and discover delicious dishes that are not well known. The goal is to help people find secret menu items or local hidden gems that are worth trying. Users can create accounts, post reviews, browse food by category, and leave comments.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CSC105-2024/G02-forget-PreHack-2025.git
cd G02-forget-PreHack-2025
```

## Frontend - React

### Tech Stack

- React  
- Axios  
- React Router DOM  
- Tailwind CSS  

### Getting Started - React Client

1. Navigate to the frontend directory:

    ```bash
    cd Frontend
    ```

2. Install dependencies:

    ```bash
    npm i
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. The client will be running on [http://localhost:5173](http://localhost:5173)

## Backend - Hono

### Tech Stack

 - Hono
 - MySQL
 - Prisma

## API Endpoints

### User

| Method | Endpoint                            | Description                                                  |
|--------|-------------------------------------|--------------------------------------------------------------|
| POST   | `/user/createUser`                 |   Create a new user account                                 |
| GET    | `/user/getAllUser`                 |   Get a list of all users                                   |
| GET    | `/user/getInfoUser/:id`            |   Get user information by user ID                           |
| POST   | `/user/loginUser/login`            |   Login a user and return authentication token              |
| PATCH  | `/user/editUsername/:id`           |   Update username of a specific user                        |
| GET    | `/user/getMe/:userId`              |   Get profile of the currently logged-in user               |
| POST   | `/user/getSavedPost/:userId`       |   Get all posts saved by a specific user                    |

### People

| Method | Endpoint                            | Description                                                  |
|--------|-------------------------------------|--------------------------------------------------------------|
| POST   | `/user/createPeople`                 |   Create a new person entity                              |
| POST   | `/user/isAlreadyLike/:userId/:commenId`|   Check if user already liked a specific comment        |
| GET    | `/user/getPeople`                    |     Get list of all people entities                       |
| DELETE | `/user/deletePeople/:id`             |     Delete a person entity by ID                          |

### Like

| Method | Endpoint                            | Description                                                  |
|--------|-------------------------------------|--------------------------------------------------------------|
| POST   | `/user/createPost`                 |  Create a new post                                          |
| PATCH  | `/user/editPost/:id`               |  Edit an existing post by post ID                            |
| PATCH  | `/user/editImage/image/:id`        |  Update the image of a specific post                        |
| GET    | `/user/getAllPost`                 |  Get all posts from all users                              |
| GET    | `/user/getDetailPost/detail/:id`   |  Get detailed information of a post by ID                  |
| GET    | `/user/getPostFromUser/:id`        |   Get all posts created by a specific use                  |
| DELETE | `/user/deletePost/:id`             |   Delete a post by its ID                                   

### Comment

| Method | Endpoint                            | Description                                                  |
|--------|-------------------------------------|--------------------------------------------------------------|
| POST   | `/user/createComment`              |  Create a new comment on a post                             |
| PATCH  | `/user/editComment/:id`            |   Edit an existing comment by its ID                        |
| PATCH  | `/user/editLike/like/:id`          |  Toggle like status on a comment by its ID                  |
| DELETE | `/user/deleteComment/:id/:userId`  |    Delete a comment by its ID and the user's ID who owns it |
| GET    | `/user/getCommentFromPost/:foodPostId`|  Get all comments related to a specific food post        |
| GET    | `/user/getCommentFromUser/:userId` |   Get all comments made by a specific user                  |

### Category

| Method | Endpoint                            | Description                                                  |
|--------|-------------------------------------|--------------------------------------------------------------|
| POST   | `/user/createCategory`              |    Create a new food category                               |
| PATCH  | `/user/editCategory/:id`            |    Edit an existing category by its ID                      |
| DELETE | `/user/deleteCategory/:id`          |    Delete a category by its ID                              |
| GET    | `/user/getCategoryFromPost/:foodPostId`|   Get the category assigned to a specific food post      |

### Node JS Server

1. Navigate to the frontend directory:

    ```bash
    cd Backend
    ```

2. Install dependencies:

    ```bash
    npm i
    ```

3. Create a .env file and configure the following variables:

    ```bash
    DATABASE_URL="file:./dev.db"
    JWT_SECRET="your_super_secret_key"
    ```

4. The server will be running on [http://localhost:3000](http://localhost:3000)
