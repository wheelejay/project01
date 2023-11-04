User Story:

My wife and I want to try some new recipes so we want  a place where we can make a wishlist of  these recipes that includes a link to the website, date the recipe was added to the list, if we have tried the recipe yet and the rating of the recipe.

When you click on the recipe a new page will be brought up where you can make a shopping list of ingredients that will allow you to add, edit or remove items so that you can be prepared before shopping and while you shop you can remove items from the list that you have purchased.

I would also like to add a comment section where we can add comments on what we thought of the recipe, as well as a rating system that will display on the page with the listed recipes.


# New Project

<!-- This is how you would show a photo -->
<!-- ![App hero image](/public/assets/img/readme/app.png) -->

## Description

Write something about how your app works

&NewLine;
&NewLine;

## How To Use

## Table of Contents

- [New Project](#new-project)
  - [Description](#description)
  - [How To Use](#how-to-use)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
    - [Technology Overview](#technology-overview)
    - [Dependencies/Packages](#dependenciespackages)
      - [Dev Dependencies](#dev-dependencies)
    - [Client](#client)
      - [Persisting User Data](#persisting-user-data)
      - [Setting and Updating State](#setting-and-updating-state)
    - [Bugs](#bugs)
- [Future Development](#future-development)
- [Resources](#resources)
- [Contact](#contact)

## Development

- [Technology Overview](#technology-overview)
- [Dependencies/Packages](#dependenciespackages)
- [Client](#client)

### Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – Vite React, CSS3 
Backend – Node, Express
```

&NewLine;
&NewLine;

### Dependencies/Packages

&NewLine;
&NewLine;

<!-- This is how you make a table -->

| | | |
| ------ | ------ | ------ |
| [express](https://www.npmjs.com/package/express) | [vite-express](https://www.npmjs.com/package/vite-express) | [morgan](https://www.npmjs.com/package/morgan) |

&NewLine;
&NewLine;

#### Dev Dependencies

&NewLine;
&NewLine;

| | |
| ------ | ------ |
| [vite](https://www.npmjs.com/package/vite) | [nodemon](https://www.npmjs.com/package/nodemon) |

&NewLine;
&NewLine;

> [Back To Development](#development) || [Back To Table of Contents](#table-of-contents)

### Client

Here you can describe what creates your front end (react using Vite) and highlight bits of code you're proud of

&NewLine;
&NewLine;

#### Feature You Like

You can highlight features you like

<!-- this is how you make coding snippets -->

``` js
import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = '8000';

// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

ViteExpress.config(
    { printViteDevServerHost: true }
);


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
```

> [Back To Client](#client) || [Back To Development](#development)



### Bugs

We're all learning! You can list any issues the app may have, why you think it's happening, and how you might fix it 

### Future Development

You can list anything you want to add! (or didn't have time for 😅)

### Resources

If you use any 3rd party resources, list them here

### Contact

If you have any feedback our questions, please reach me by [email](example@outlook.com), [GitHub](https://github.com/MyUserName), or [LinkedIn](https://www.linkedin.com/)!