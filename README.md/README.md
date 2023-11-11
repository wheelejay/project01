## Description

My wife and I want to try some new recipes so we want  a place where we can make a wishlist of  these recipes that includes a link to the website, date the recipe was added to the list, if we have tried the recipe yet and the rating of the recipe.

When you click on the recipe a table below the recipe will be brought up where you can make a shopping list of ingredients that will allow you to add, check off as purchased, edit or remove items so that you can be prepared before shopping and while you shop you can check off or remove items from the list that you have purchased.

I would also like to add a comment section where we can add comments on what we thought of the recipe, as well as a rating system that will display on the page with the listed recipes.

&NewLine;
&NewLine;

## How To Use

When you open the page you will see the recipe list and a button at the bottom that says "Add Recipe".
Click that button to add a recipe to the list of recipes. You can edit this recipe by hitting the "Edit" button. This is where you can add the name of the recipe, the url of the recipe, date added to your list, the rating of the recipe out of 5 and where you can hit a toggle check mark to show that you have tried the recipe.

To make a Shopping list for the recipe hit the "Make Shopping List" button.
You will then be able to add ingredients to a shopping list each ingredient will have a purchased check mark toggle switch and a remove button. Below the ingredients there will be a recipe comment section where you can make notes of recipes that you have made before, simply hit the "Edit comment" button to be able to type in the comment box. If you wish to delete a comment hit the "Remove comment" button to remove the commment.

You may then add another recipe and continue to fill the recipe list with all your favorite recipes.

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

&NewLine;
&NewLine;

#### Feature You Like

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

When you click the "Make a Shopping List" button after you have made one already it clear out the old shopping list and makes a new one. I would like to prevent that from happening. Also state gets transfered through the different recipes. If you had a recipe with ingredients and you delete the one above, it will keep the ingredients of the recipe above. This can be fixed by assigning  a unique id to each row.

### Future Development

More Styling development, I spent a lot of time to get the app functioning and didn't have a lot of time to make it look unique. I also want to move the shopping list to a different page and have it saved to a specific recipe.

### Contact

If you have any feedback our questions, please reach me by [email](wheeler7591@gmail.com) or [GitHub](https://github.com/wheelejay)!