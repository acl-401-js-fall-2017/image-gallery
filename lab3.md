Full Stack Cute Bunny
===

## Objective:
1. **Go Fullstack!** Use a backend server to retrieve, save, and delete data needed by the front end application
1. **Add Albums that contain Images.** Handle multi level application data
1. **Development _and_ Production.** Create build system that supports working with `server` and `app` repo 

## Instructions

Many of you have asked for more guidence on where to start and how to proceeed. For this lab I am providing
more detail instructions you can follow if you need/want more "next" steps.

### Go Fullstack!

1. Clone the [image-gallery-server](https://github.com/acl-401-js-fall-2017/image-gallery-server) 
repo in the class github org (or you can make your own). Make sure tests run and/or API works via Postman.
1. Temporarily allow the images model to _not_ require an album id. This will allow you to 
convert just the image api without having to tackle adding albums to the data model
1. Add the `proxy` setting to your app `package.json`
1. Convert your imageApi to use the server rather than local storage.
    * Use the built in `fetch` api,  or 
    * `> npm i superagent -S` then `import request from 'superagent';` 

### Add Albums
1. Add the top level `<Route to="/albums" component={Albums}/>` and build out 
your `<Albums/>` component. Don't worry about link to images yet. Small steps:
    1. Get the component to render a static list of albums defined in `this.state`
    1. Add `albumsApi` service
        * Start wth method for getting list of albums. 
        * Import into service into `Albums.js` and call from `componentDidMount`
        * Log out the asynchronously result to verify you are getting album data
    1. Create an `loadAlbums` action
        * Action "reducer" function that transforms Albums state to 
    contain the fetched albums. 
        * This replaces the log statement from previous step. 
        * Call `this.setState()` with the returned new state. 
        * Don't forget to set take out the dummy data and set initial state to `{ albums: [] }`
    1. Repeat this process for `add` and `remove` of albums. (Repurpose existing `<AddImage/>` 
    component. You do *not* need to to create a generic form element component like I 
    showed in class.)
1. Time to link to images, but first **assign an album id your development datbase to existing images**. Using Robo3T or mongo cli:
    * Get the id of an album
    * Update all the images: `db.getColletion('images').update({}, { album: ObjectId(<albumid>) })`
    * Re-enable the model requirement that images have an album id
1. Link from album to its images
    * Add `<Link>` components to the Albums list that use the `_id` of each album. 
    * Change `<Route>` for `/images` in `App.js` to `/albums/:id`.
1. In the `<Images/>` component (same things as ViewSelector), call `imagesApi` get with 
the album id from the `match` prop and log async result so you know you are fetch the images
for a specific album.
1. Add action "reducer" function to change state to contain loaded images. Replace log statement from
prior step, call with images data, and set new state.
1. Change header routes to use `/albums/:id/` in view selection
1. Misc
    * Change `<Link>` on home page to point to albums
    * Review and manually test app for anything you may have missed!

## Add Production Build To Server

* Create npm scripts for copying to `server` public folder on `npm build`
* BONUS: Deploy to Heroku!

## Rubric *20pts*
- Use service calls and backend server for all data *6pts*
- Add Albums concept
    - New components and presentation *4pts*
    - New actions that use services *4pts*
    - Integrated with images via Router *3pts* 
- Dev and Build setup *3pts*