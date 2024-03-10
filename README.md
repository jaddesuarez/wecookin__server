<h1 align="center">We Cookin'</h1>
<br />

# ##: built using MENN STACK (Mongo, Express, Next.JS, Node)

## Table of contents

- 🚀 [Deployed Application](#deployed-application)
- 📖 [Installation](#installation)
- 📚 [Environment Variables](#environment-variables)
- 💻 [Application Routes](#application-routes)
- ✨ [Contributors](#contributors)

## Deployed Application

The deployed application can be found at the following link: [wecookinapi](https://cook.fly.dev/).

## Installation

To install all the dependencies used in the project, simply run the command:

```
$ yarn
```

## Environment Variables

You will need to create a .env (or .env.local) file if you want to run this project locally. The structure of such file can be found at .env.template file.

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

|                URL path                 | HTTP Method |          Action           | Protected |
| :-------------------------------------: | :---------: | :-----------------------: | :-------: |
|         /api/restaurants/getAll         |     GET     |    Get All Restaurants    |    ❌     |
| /api/restaurants/getById/:restaurant_id |     GET     |    Get One Restaurant     |    ❌     |
|       /api/restaurants/getRandom        |     GET     | Get 10 Random Restaurants |    ❌     |
|         /api/restaurants/create         |    POST     |     Create Restaurant     |    ✅     |
|  /api/restaurants/edit/:restaurant_id   |     PUT     |     Update Restaurant     |    ✅     |
| /api/restaurants/delete/:restaurant_id  |   DELETE    |     Delete Restaurant     |    ✅     |

## **Cuisines Routes**:

|    URL path    | HTTP Method |      Action      | Protected |
| :------------: | :---------: | :--------------: | :-------: |
| /api/cuisines/ |     GET     | Get All Cuisines |    ❌     |

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
