# PokeWiki

This project is a Pokédex based on the anime and games Pokémon.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## :tophat: Prettier

Was set up in the project a hook of the `Husky` to format code in the pre-commit. If you want run manually, run the following command:

```
$ yarn format
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
