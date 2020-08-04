<h1 align="center">
    :snowflake: REST API
</h1>

<h4 align="center">
    A CRUD application make with Test Driven Development
</h4>

<p align="center">
    <a href="#tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#quick-start">Quick Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#requets-to-aPI">Requets to API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#how-to-contribute">How to contribute</a>
</p>

<br>

### 💻 Technologies

This project was developed with the following technologies:

- [NodeJS](https://nodejs.org/en)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Mongoose](https://mongoosejs.com)
- [Git](https://git-scm.com)
- [Joi Validator](https://hapi.dev/module/joi/#install)
- [Jest Testing Framework](https://jestjs.io)



### :pencil: Project Functional resources
* Create, List, Update and Delete person with addresses
* Create multiples addresses

## :rocket: Quick Start

#### First step 

* [Install yarn](https://classic.yarnpkg.com/en/docs/install) Or You can run with `npm`

* **run:** `$ yarn` for install dependencies

### :wrench: Set-up your Credentials in .env file

* First, copy all variables from .env.example and paste in .env file and configure with your data

### 💻 Run Project

* **run:** `$ yarn dev` to development

* **run:** `$ yarn start` to production


### 💻 Run Tests

* **run:** `$ yarn test --runInBand` to run tests separately


### :outbox_tray: Requets to API

* To `Create Person with address` make a `POST` request to `http://localhost:{APP_PORT}/v1/person` with example body:

```
{
    "type": "value" (legal/individual) [required],
    "name": "value" [required],
    "company_name": "value" [required if you put "type": "legal"]",
    "cpf": "value" [required if you put "type": "individual"],
    "cnpj": "value" [required if you put "type": "legal"],
    "gender": "value" [required if you put "type": "individual"],
    "email": "value", [optional]
    "phone": "value", [optional]
    "cell_phone": "value", [optional]
    "photo_url": "value", [optional]
    "address": [
        {
            "name": "value" [required],
            "number": "value" [required],
            "complement": "value", [optional]
            "neighborhood": "value", [optional]
            "city": "value" [required],
            "state": "value" [required],
            "zip_code": "value" [optional]
        }, 
        {
            "you can add many addresses"
        }
    ]
}
```

* To `Update Person with address` make a `PUT` request to `http://localhost:{APP_PORT}/v1/person` with example body:

```
{
    "_id": "5f28e8c5491d374b5ca64a5c"
    "type": "value" (legal/individual) [required],
    "name": "value" [required],
    "company_name": "value" [required if you put "type": "legal"]",
    "cpf": "value" [required if you put "type": "individual"],
    "cnpj": "value" [required if you put "type": "legal"],
    "gender": "value" [required if you put "type": "individual"],
    "email": "value", [optional]
    "phone": "value", [optional]
    "cell_phone": "value", [optional]
    "photo_url": "value", [optional]
    "address": [
        {
            "_id": "5k5dl35491d373gd67g8aj" [optional]
            "name": "value" [required],
            "number": "value" [required],
            "complement": "value", [optional]
            "neighborhood": "value", [optional]
            "city": "value" [required],
            "state": "value" [required],
            "zip_code": "value" [optional]
        }, 
        {
            "you can add many addresses"
        }
    ]
}
```

* To `List All People` make a `GET` request to `http://localhost:{APP_PORT}/v1/people` if you want paginate put the query string `?page={value}&size={value}`
 
* To `Get one Person` make a `GET` request to `http://localhost:{APP_PORT}/v1/person/:id`

* To `Delete one Person` make a `DELETE` request to `http://localhost:{APP_PORT}/v1/person/:id`
 


### :loudspeaker: How to contribute

- Fork this repository
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'my new feature'`
- Push to your branch: `git push origin my-feature`
- Open a pull request

After the merge of your pull request is done, you can delete your branch.


## Authors

* **Richard Pinheiro** - [GitHub](https://github.com/RichardPinheiro)
