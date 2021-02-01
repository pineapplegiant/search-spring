# Search-Spring Take-home project Requirements

> https://searchspring.zendesk.com/hc/en-us/sections/115000119223-Search-API

- An input box for a search bar with a search button next to it.
- When someone types into the search bar and hits enter or clicks the search button display product results below the search bar.
  - You’ll want to use “resultsFormat=native” as part of the API request to get your results back as JSON.
  - You’ll want to pass the search query using the “q” parameter.
  - Display the product image using the “thumbnailImageUrl”, the product “name” and “price”.
  - If the product has an “msrp” field and it’s greater than “price” field display the “msrp” next to the price crossed out.
- Above and below the results show pagination with next and previous buttons. You could also display some pages before/after the current page as applicable.
  - If you’re on the first page you shouldn’t show the previous button or it should be disabled.
  - If you’re on the last page you shouldn’t show the next button or it should be disabled.
  - You’ll be able to change the page by making another request to our Search API with the “page” parameter set to the page you’d like to request.
- I’ve included a sample search request below that does a search for jeans and gets the 2nd page of results.
  - http://api.searchspring.net/api/search/search.json?siteId=lol&q=jeans&resultsFormat=native&page=2
- If you want to see an example of what a full integration looks like see the following link.
  - http://try.searchspring.com/search?q=jeans
  - Yours does not need to be nearly as involved and only needs to worry about pagination, not filter or sorting or anything like that.

For React deployment instructions view: <a href="./REACT.md">The React README</a>

# Useful Readings used in this project:

- [Data fetching with react](https://www.robinwieruch.de/react-hooks-fetch-data)
- [Conditional rendering data errors](https://www.debuggr.io/react-map-of-undefined/)

# Style Choices

Fashion, elegant, high-end, simple flat-design, pink accents for softer appeal. 
Serif font for more serious polished tone.

## Font

- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)

## Colors

- Black -#000000
- White - #ffffff
- Pink - #ff9599
- Background - #fffef7
- Search Form Background - rgba(112, 112, 112, 0.1)

## Icons

Font-awesome:

- [shopping-cart](https://fontawesome.com/icons/shopping-cart/)
- [search](https://fontawesome.com/icons/search?style=solid)

# Todo
* Update pagination logic 
* Enhance mobile experience (hamburger menu etc) 
* Visual design with more borders in header
* Implement routing for additional views
