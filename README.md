<img alt="GoStack Banner" src="./banner.png" />

<h3 align="center">
  Challenge 02: Node.js Concepts
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thadeucity/go-stack_challenge_02?color=%2304D361">

  <a href="https://github.com/thadeucity">
    <img alt="Made by Victor Alvarenga" src="https://img.shields.io/badge/made%20by-Victor Alvarenga-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

</p>

<p align="center">
  <a href="#rocket-about-the-challenge">About the Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: About the Challenge

This was the second challenge for the Go-Stack Bootcamp. It involved the creation of a Node.app to hold repositories information. Allowing users to create new entries, update old ones, list all, and remove, besides that the app should allow users to like those entries.

Click [HERE](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs) to see the full challenge page (PT-BR).

### Improvements

Besides the original requests for the challenge I built a new App Route to receive the same input data but this time filtering the url and using it to gather more information about the Repository using the Github API.

### App Routes

- **`(bonus) POST /git_repositories`**: Receive `title`, `url` and `techs` inside the request.body uses the Github API to gather more info and create an object as listed bellow:
```js
  { 
    id: uuid(),
    title: 'Desafio Node.js',
    url: 'http://github.com/...',
    techs: ["Node.js", "Javascript", "Axios"],
    likes: 0,
    git_title: 'Node.js Challenge 1',
    git_description: 'Exercise to measure the basic knowledge in Node.js',
    git_techs: ["JavaScript"],
    git_owner: {
      name: "thadeucity",
      avatar: "//avatarurl//",
      url: "https://github.com/thadeucity"
    }

  };

  // Universally unique identifier,
  // Text Title
  // Github URL
  // Techs as an Array
  // Likes starting at 0
  // Repository Name (Github API)
  // Repository Description (Github API)
  // Repository languages (Github API)
  // Repository Owner Info (Github API)
```

- **`POST /repositories`**: Should receive `title`, `url` and `techs` inside the request.body and create an object following: 
```js
  { 
    id: uuid(),
    title: 'Desafio Node.js',
    url: 'http://github.com/...',
    techs: ["Node.js", "..."],
    likes: 0 
  };

  // Universally unique identifier,
  // Text Title
  // Github URL
  // Techs as an Array
  // Likes starting at 0
```

- **`GET /repositories`**: List all Repositories;

- **`PUT /repositories/:id`**: Update only `title`, `url` and `techs` and only where `:id` is equal to `repository.id` ;

- **`DELETE /repositories/:id`**: Delete repository information where `:id` match `repository.id`

- **`POST /repositories/:id/like`**: increment `repository.id` by 1;

### Tests

To pass the challenge the project:

- **`should be able to create a new repository`**: 
  
- **`should be able to list the repositories`**: 

- **`should be able to update repository`**: 

- **`should not be able to update a repository that does not exist`**: 

- **`should not be able to update repository likes manually`**: 

- **`should be able to delete the repository`**: 

- **`should not be able to delete a repository that does not exist`**: 

- **`should be able to give a like to the repository`**: 

- **`should not be able to like a repository that does not exist`**: 


## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for details.

---

Made with ♥ by Victor Alvarenga :wave: [Get in touch!](https://www.linkedin.com/in/victoralvarenga/)