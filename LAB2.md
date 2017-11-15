Cute Bunny Routing
===

## Key enhancements:
* Introduce "albums" into the data model. These contain sets of images lists (what you have already built).
* Add React Router to navigate between home and specific images list

## Adding albums
* Can be added and removed
* Contain images
* Need albums component that shows list of albums
* State needs to maintain "imagesByAlbumId"
* Add some local storage to maintain your sanity

** Add routing
* The `/` (home) route should either show the albums list or have a link to take user to the albums list.
* Add an `about` "page" component that says something about your image gallery. This is an excuse to have another page
* From the albums list, clicking on a specific album goes to that image list (changes the route to `/albums/<id-of-album>`
* Add navigation links for switching between the main routes (`/` (home), `/ablums` (if not on home), `/about`)
* (For now, the view selection will *not* be part of the router)

## Rubric *10pts*
- Add albums concept into data *5pts*
- Basic Routing (home, about, images) *5pt*
