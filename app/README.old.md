<img src="https://user-images.githubusercontent.com/478864/29585764-2e2a863c-873d-11e7-8c68-49af939ab39b.png" 
width=50> Cute Bunny Image Gallery
===

For this assignment, build and image gallery view that has:
* Three different possible components views for a list of images
  * A wrapper component that switches between the views
* Add and remove functionality for the list of images:
  * Actions
    * Add a new image
    * Remove an existing image
  * Use immutability
  * Use action functions to modify state
  
## Data

The image data looks like:

```js
{ 
  title: 'Cute Bunny',
  description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
  url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}
```

You can use your own URL, or work with these cute bunnies:

* http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg 
* http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg
* http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg

For now, hard code an initial list of images and store as component state.

## Components

The three image viewer component(s) you should build are:

1. "list" 
    1. tabular list - show the list like a table
    1. list item - display the title of the image, the link (not the  actual image), and description.  
1. "thumbnail" -  
    1. float or inline-block list - show "cards" for each image
    1. each image card shows a "thumbnail" (~ 100x100 pixel scale) and the title (above or below).
1. "gallery" - 
    1. display one image at a time, have left and right arrows to advance/go back
    1. Display the title, description and the full-size image.
    1. (Note: Gallery has own state for which image index it is on)

Then you need a view selector wrapper component that has state and has buttons or some selection mechanism for which view to show.

The image "state" can live in top level App component.

## PropTypes

Include PropTypes for all components (that take props)

## Testing

You also need to snapshot test:
* your imaging viewing components
* the wrapper component (in each view state)
Unit test:
* Data edit actions

## Rubric *10pts*
- "list" component *2pt*
- "thumbnail" component *2pt*
- "gallery" component *2pt*
- view selector component *1pts*
- Tests *2pts*
- Code quality *1pt*
