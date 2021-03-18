# PokeWiki

This project is a Pokédex based on the anime and games Pokémon.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can access PokeWiki here: [GitHub Pages](https://luisfagottani.github.io/pokewiki/).

## :gem: Stack

This project uses [ReactJS](https://reactjs.org/) as the main lib, bootstraped with [create-react-app](https://github.com/facebook/create-react-app). The styling is done with [css-modules](https://github.com/css-modules/css-modules) and the automated tests with [jest](https://jestjs.io/) + [testing-library](https://testing-library.com/).

I'm using [yarn](https://yarnpkg.com) as the package manager, [GitHub Pages](https://pages.github.com/) to render the app, [React Redux](https://react-redux.js.org/) to manage the state of the application, [Redux Sagas](https://redux-saga.js.org/) to make application side effects and [@FormatJs/React-Intl](https://formatjs.io/docs/react-intl/) to manage the internationalization of the application

## :clipboard: Requirements

- [NodeJS](https://nodejs.org/en/) (LTS is fine);
- [yarn](https://classic.yarnpkg.com/en/docs/install/) - it can be installed as a [npm package](https://www.npmjs.com/package/yarn) or you can follow the instructions on the official website.

## :checkered_flag: How to start

You need have `node 12+` installed in your machine.

1. Clone this project:

```
git clone git@github.com:luisfagottani/pokewiki.git
```

2. Install dependencies:

```
$ yarn
```

3. Run the project:

```
$ yarn start
```

## :microscope: Testing

Was used testing library and jest to create unit tests in the application. If you want run manually, run the following command:

```
$ yarn test
```

## :hammer: Building

To building the project, run the following commands:

```
$ yarn build
```

## :rocket: Deploying

This project uses gh-pages from GitHub as hosting. After making your changes, you need run:

```
$ yarn deploy:publish
```

This command will make the automatic deploy of the branch `gh-pages` and your site will be automatically published.
