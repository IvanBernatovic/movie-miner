# MovieMiner - TMDB API React client

This is a React single page application that uses [The Movie Database API](https://developers.themoviedb.org/4/getting-started/authorization) to get movie info, ratings, cast, crew etc. You are able to scroll through popular movies, click on movie to get more info, rate the movie and see recommendations/similar movies. You are also able to use movie roullete feature to get the random movie based on the genre you selected. The app is deployed and live, accessible at http://movie-miner.techyfingers.com/ .

## Tech stack

- React
- React Router
- Axios
- TailwindCSS
- PostCSS
- Webpack with code splitting and other bundle optimization methods
- JSLint + Prettier on save

## Highlights

- Small bundle size - ~49KB dependencies, ~21KB app code to load homepage,
  other routes require much smaller chunks because of route based code
  splitting (all values refer to gzipped sizes)
- Fast loading time
- Proggressive web application (PWA) with basic offline support
- Majority of React comopnents are function components + Hooks
- Excellent [Lighthouse score](https://i.ibb.co/yXtYHFG/Screenshot-2020-06-12-Lighthouse-Report.png)

## Initial setup

1. Clone this repository and `cd` into it
2. Run `npm ci` to install all dependencies
3. Copy .env-example to .env `cp .env-example .env`
4. Fill in your .env with TMDB access key obtained from [here](https://www.themoviedb.org/settings/api)
5. For development run `npm run dev` with hot reloading
6. For production build run `npm run build`
7. To serve production build run `npm run start`

## Goals

### Deliverables

- [x] You should provide us with a link to your repository
- [x] Please include a project setup steps into README.md so that we can run your project

### Rules & hints

- [x] Use Movie API
- [x] You can write your app in pure JS or use library of your choice - React (preferred) or Vue
- [x] Styles should be written in Sass (SCSS) or CSS in JS
- [x] Use a repository from the beginning, don't push everything in just one commit
- [x] Pay extra attention to the code quality, formatting and best practices

### Bonus points

- [x] Not using starter-kit like create-react-app
- [ ] Using type checker (Typescript or Flow)
- [x] Using linter
- [x] App is [deployed and live](http://movie-miner.techyfingers.com/)

## Extra mile

- [ ] Snapshot testing
- [ ] Storybook UI documentation
- [x] Performance optimizations (route based code splitting, TailwindCSS Purgecss for purging unused utility classes, almost perfect [Lighthouse score](https://i.ibb.co/yXtYHFG/Screenshot-2020-06-12-Lighthouse-Report.png) )
- [x] Suprise features that we don't expect to get (PWA + offline support)
