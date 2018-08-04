# reddit-viewer
explore react + rails
## Tech Stack
- MongoDB
- Rails
- React

## Install
```
git clone git@github.com:arbind/reddit-viewer.git
cd reddit-viewer
bundle install
yarn build
```

## RUN LOCALLY
```
foreman start -f Procfile.dev
```

## API ENDPOINTS
POST /members
GET /members/:id


## Deployment
This app is setup and deployed to a pipeline on heroku:

- The `dev` branch is auto deployed to [redit-viewer-staging.herokuapp.com](https://redit-viewer-staging.herokuapp.com/)
- The `master` branch is auto deployed to [redit-viewer.herokuapp.com](https://redit-viewer.herokuapp.com/)

The buildpack is configured to use :
- heroku/nodejs
- heroku/ruby
