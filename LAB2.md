Cute Bunny Routing
===

## Key enhancements:
* React Router to 
   * navigate between pages (add two new pages)
   * switch between Image view

## Add routing
* Create a new home page (component) that lives the `/` route
    * It has a link to takes the user to the images.
* Add an About "page" component that lives at the `/about` route. It should say something about your image gallery. This is an excuse to have another page, content up to you.
* Add a Header component that is at the top of your app. 
    * It has links for `Home`, `About`, and `Images`.
    * If on an `/images` route, show three links in another area for switching between `Thumbnail`, `List`, and `Gallery` view
* Change the View Selector component to use `<Route>` components to conditional show the view.
  * Routes would be `/images/thumbnail`, `/images/gallery`, and `images/list`
  * Use a `<Switch>` and include a `<Redirect>` to give a default view if missing or not a valid view.

## Rubric *10pts*
- Three pages
    - Header links *2pts*
    - Show Correct Page *2pts*
- View toggle
    - Conditional header links *2pts*
    - Correctly changes view *2pts*
    - Default view *2pts*
