<h1 align="center">We Cookin'</h1>
<br />

# ##: built using MENN STACK (Mongo, Express, Next.JS, Node)

## Table of contents

- 🚀 [Deployed Application](#deployed-application)
- 📖 [Installation](#installation)
- 📚 [Environment Variables](#environment-variables)
- 📍 [Postman Collection](#postman-collection)
- 📦 [Database Collection](#database-collection)
- 💻 [Application Routes](#application-routes)
- ✨ [Contributors](#contributors)

## Deployed Application

The deployed API can be found at the following link: [wecookinapi](https://cook.fly.dev/).

## Installation

To install all the dependencies used in the project, simply run the command:

```
$ npm install
```

## Environment Variables

You will need to create a .env (or .env.local) file if you want to run this project locally. The structure of such file can be found at .env.template file.

## Postman Collection

In the root directory of the project, you will find a JSON file called "wecookin.postman_collection.json". Throughout the development of this project, Postman is used to test our API. This file can be imported directly as a collection in Postman to view all the testing work. The requests are organized by folders according to their corresponding routes. Each request includes different samples of responses.

## Database Collection

In the project's root directory, there's a folder named "DBInfo" containing JSON files. Use these files to populate your database with the essential information required for this project.
All user passwords are hashed to match '1234' for login purposes.
Currently, 'yayi' is the only user who can perform complete CRUD (Create, Read, Update, Delete) operations on restaurants due to their ADMIN permissions.
This can be modified for any user in the database by changing their 'role' field from 'USER' to 'ADMIN', or vice versa.

## Application Routes:

## **Auth Routes**:

|       URL path        | HTTP Method |    Action    | Protected |
| :-------------------: | :---------: | :----------: | :-------: |
|   /api/auth/signup    |    POST     |   Sign Up    |    ❌     |
|    /api/auth/login    |    POST     |    Log In    |    ❌     |
|   /api/auth/verify    |     GET     | Veryfy Token |    ✅     |
| /api/auth/updateToken |     GET     | Update Token |    ✅     |

## **User Routes**:

|                  URL path                   | HTTP Method |          Action          | Protected |
| :-----------------------------------------: | :---------: | :----------------------: | :-------: |
|      /api/users/getFavoriteRestaurants      |     GET     | Get User Fav Restaurants |    ✅     |
|         /api/users/getMyRestaurants         |     GET     |   Get User Restaurants   |    ✅     |
|  /api/users/likeRestaurant/:restaurant_id   |     PUT     |     Like Restaurant      |    ✅     |
| /api/users/dislikeRestaurant/:restaurant_id |     PUT     |    Deslike Restaurant    |    ✅     |
|             /api/users/editUser             |     PUT     |      Edit User Info      |    ✅     |

## **Restaurants Routes**:

|                     URL path                     | HTTP Method |          Action           | Protected |
| :----------------------------------------------: | :---------: | :-----------------------: | :-------: |
|             /api/restaurants/getAll              |     GET     |    Get All Restaurants    |    ❌     |
|     /api/restaurants/getById/:restaurant_id      |     GET     |    Get One Restaurant     |    ❌     |
| /api/restaurants/getAvgRatingById/:restaurant_id |     GET     | Get Restaurant AVG Rating |    ❌     |
|            /api/restaurants/getRandom            |     GET     | Get 10 Random Restaurants |    ❌     |
|             /api/restaurants/create              |    POST     |     Create Restaurant     |    ✅     |
|       /api/restaurants/edit/:restaurant_id       |     PUT     |     Update Restaurant     |    ✅     |
|      /api/restaurants/delete/:restaurant_id      |   DELETE    |     Delete Restaurant     |    ✅     |

## **Cuisines Routes**:

|   URL path    | HTTP Method |      Action      | Protected |
| :-----------: | :---------: | :--------------: | :-------: |
| /api/cuisines |     GET     | Get All Cuisines |    ❌     |

## **Reviews Routes**:

|                URL path                | HTTP Method |    Action     | Protected |
| :------------------------------------: | :---------: | :-----------: | :-------: |
|      /api/reviews/:restaurant_id       |    POST     | Create Review |    ✅     |
| /api/reviews/:review_id/:restaurant_id |   DELETE    | Delete Review |    ✅     |

## **Upload Routes**:

|  URL path   | HTTP Method |           Action           | Protected |
| :---------: | :---------: | :------------------------: | :-------: |
| /api/upload |    POST     | Upload Image to Cloudinary |    ✅     |

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/jaddesuarez"><img src="https://avatars.githubusercontent.com/u/114647907?v=4" width="64px;" alt="Jadde Suarez"/><br /><sub><b>Jadde Suarez</b></sub></a><br /><a href="https://www.linkedin.com/in/jaddesuarez/" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

This challenge has been developed by Jadde Suarez for [Tailor Hub](https://github.com/TailorHub-Mad/TailorChallenge/blob/master/instructions.md).
