## how to run the app

In order to run the project, one should have an environmental variable REACT_APP_RAPID_API_SECRET_KEY set with RapidApi key.
In the project directory, you can run:

### `npm start`

the project will automatically show a page with Trending Feed.

## Application logic

The application does not use any state management relying instead on "page components" retrieveing data.
(I decied not to use Redux because the App is very small)
The app has 2 pages: `/feed` and `/userProfile/:name`.
The `/feed` page is represented with the component `Feed.jsx`. `Feed.jsx` is not a pure component, it has a sideeffect of calling API for the data. In order to build UI the component `Post.jsx` is used.`Post.jsx` is a pure component, it depends only on the props received from `Feed.jsx`.Basically the `/feed` page consists of list of `Post.jsx` only.
The `/userProfile/:name` is represented with the component `UserInfo.jsx` that is not a pure component since it receives data from server. While `UserProfile.jsx` is a pure component used to show user information on the page, it depends only on the props received from `UserInfo.jsx`.

## User Feed

Due to some API misfunctioning, one can see Trending feed instead of User feed on User Page.

## UI

Ant design library for React is used to build UI.
