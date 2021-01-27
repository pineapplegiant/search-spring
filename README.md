# Search-Spring Requirements

We’d like you to build out a very simple search page for us using our Search API. You can find our documentation for our Search API at the link below.

> https://searchspring.zendesk.com/hc/en-us/sections/115000119223-Search-API


You can ignore the `Request Headers` section of any of the API documentation. You should only need to use `q`, `resultsFormat` and `page` query parameters.

We don’t expect you to build out a full implementation we just need the following:

* An input box for a search bar with a search button next to it.
* When someone types into the search bar and hits enter or clicks the search button display product results below the search bar.
    - Use site ID “scmq7n” for this example.
    - You’ll want to use “resultsFormat=native” as part of the API request to get your results back as JSON.
    - You’ll want to pass the search query using the “q” parameter.
    - Display the product image using the “thumbnailImageUrl”, the product “name” and “price”.
    - If the product has an “msrp” field and it’s greater than “price” field display the “msrp” next to the price crossed out.
* Above and below the results show pagination with next and previous buttons. You could also display some pages before/after the current page as applicable.
    - If you’re on the first page you shouldn’t show the previous button or it should be disabled.
    - If you’re on the last page you shouldn’t show the next button or it should be disabled.
    - You’ll be able to change the page by making another request to our Search API with the “page” parameter set to the page you’d like to request.
* I’ve included a sample search request below that does a search for jeans and gets the 2nd page of results.
    - http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=jeans&resultsFormat=native&page=2
* If you want to see an example of what a full integration looks like see the following link.
    - http://try.searchspring.com/search?q=jeans
    - Yours does not need to be nearly as involved and only needs to worry about pagination, not filter or sorting or anything like that.
* You can use whatever JS frameworks or CSS libraries you’d like. We’ll not only be reviewing the JS functionality here but also the design. We’re eagerly awaiting to see what you can come up with. If you need any help or guidance, please don't hesitate to ask.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
