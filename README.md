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

### App Routes

- **`POST /repositories`**: Should receive `title`, `url` e `techs` inside the request.body and create an object following: 
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

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for details.

---

Made with ♥ by Victor Alvarenga :wave: [Get in touch!](https://www.linkedin.com/in/victoralvarenga/)