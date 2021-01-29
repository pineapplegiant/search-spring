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


For builtin deployment instructions view: <a href="./REACT.md">The React README</a>

# Style Choices

