# Pagination

[Pagination](https://www.youtube.com/watch?v=99hWWSkBerw) is the process of breaking a large content in to a set of smaller pages. This makes it easier for users to consume information and reduces stress on the system.

Your task is to create a class that will handle content pagination. 
The class should take two parameters in its constructor: 

1. `items` (default: `[]`): An array of the contents to paginate, the content could be any data type but will always be the same. eg. all strings or all integers.
2. `pageSize` (default: `10`): Number of items to show on each page

It should have a property `currentPage` that starts on the first page when initialized.

You will have to implement the following methods:

1. `prevPage` Turn to previous page. If already at first page, notify user with the string `You are on the first page`
2. `nextPage` Turn to next page. If already at last page, notify user with the string `You are on the last page`
3. `firstPage` Go to first page 
4. `lastPage` Go to last page
5. `goToPage` Takes an integer as input and goes to that page. If page doesn't exist, stay on current page, and notify user that page doesn't exist `Page not found` 

**Note**: The above methods should be [chainable](https://blog.segunolalive.com/posts/understanding-method-chaining-in-javascript/):

```js
const pagination = new Pagination();
pagination.nextPage().nextPage();
pagination.currentPage(); // => 3, starts on one, and next page called twice.
```

6. `getVisibleItems` Return all items on current page (this will be an array of length pageSize)
