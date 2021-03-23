# Dark Side Social Network

## 🧭 Description

The Social Network from the Dark Side. Come with use, we have cookies!

This is an exercise to use the most common things used in React in a same project.
You can access to https://hectormanrique.com/dark-side-social-network/ and see the result!

## 💡 To take in consideration

-   There is no API here.
-   The app have some initial data stored on files (users and messages).
-   The service layer which connect to the backend/API/DB isn't optimized - we don't have any API to store and get data
-   The app is storing data of user interactions using localStorage Web API
    -   So don't use any browser with this API blocked, like Safari in private browsing.
-   There is a fake Login page. There isn't password validation (there isn't password on user's data), but it can be used to switch between the different users.

## 🔌 How to use it

-   You can run the project in your local machine, or compile it before and use a "production mode" version. See "**Useful scripts**" section on this document.
-   The login page have a user filled by default (_dvader_), but you can use any other user present in user's file (**src/app/mocks/users.js**).

## 📜 Required software

-   node v14.15.4
-   npm v6.14.10 (in case you use npm) [not recommended]
-   yarn v1.22.10 (in case you use yarn) [recommended]

## 💻 Useful scripts

> ## Start
>
> `Yarn`
>
> ```
> yarn start
> ```
>
> &nbsp;
>
> `NPM`
>
> ```
> npm start
> ```
>
> &nbsp;

> ## Test
>
> `Yarn`
>
> ```
> // pass tests
> yarn test
>
> // update snapshots
> yarn test:snapshots
> ```
>
> &nbsp;
>
> `NPM`
>
> ```
> // pass tests
> npm test
>
> // update snapshots
> npm run test:snapshots
> ```
>
> &nbsp;

> ## Lint
>
> `Yarn`
>
> ```
> yarn lint
> ```
>
> &nbsp;
>
> `NPM`
>
> ```
> npm run lint
> ```
>
> &nbsp;

> ## Build
>
> -   ### The build process will generate a **dist** folder into the root of the project
>
> `Yarn`
>
> ```
> yarn build
> ```
>
> &nbsp;
>
> `NPM`
>
> ```
> npm run build
> ```
>
> &nbsp;
