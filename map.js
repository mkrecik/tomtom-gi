var WARSZAWA = {lat: 52.229675, lng: 21.012230};

const map = tt.map({
    key: APIKEY,
    container: 'map',
    center: WARSZAWA,
    zoom: 3,
});
tt.setProductInfo('a happy truck driver', '1.0');
map.addControl(new tt.FullscreenControl(),"top-right");
map.addControl(new tt.NavigationControl(), "top-right");

const ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
map.addControl(ttSearchBox, 'top-left');
let[placeholder, setPlaceholder] = useState("Search a destination");

var options = {
    idleTimePress: 100,
    minNumberOfCharacters: 0,
    searchOptions: {
            key: APIKEY,
            language: 'en-GB',
            limit: 5
        },
    autocompleteOptions: {
            key: APIKEY,
            language: 'en-GB'
        },
    labels: {
        noResultsMessage: 'No results found.'
    },
    units: meters
    };  

var moveMap = function (lnglat) {
    map.flyTo({
        center: lnglat,
        zoom: 14
    })
}

var handleResults=function(result){
    console.log(result);
    if (result.results){
        moveMap(result.results[0].position);
    }
}

var element = document.createElement('div');
element.id = 'marker';

var search = document.getElementById("search");
search.onclick = function(){
    tt.services.fuzzySearch({
        key:APIKEY,
        query:document.getElementById("query").value,
        boundingBox: map.getBounds()
    }).go().then(handleResults)
}
