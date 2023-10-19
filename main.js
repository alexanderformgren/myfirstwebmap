var map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.maptiler.com/maps/9d332490-33ee-4a5c-a35c-b647c7359173/style.json?key=9AGDz9GCfOvvWjhLxRWH', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1, // starting zoom
    hash: true
});
let nav = new maplibregl.NavigationControl();
map.addControl(nav, 'top-left');