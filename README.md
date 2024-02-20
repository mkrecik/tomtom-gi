# tomtom-gi
challenge 3 

## Usage
In order to display the map, add an const APIKEY into a .js file which will include your api key.
```javascript
const APIKEY = "<your API Key>";
```
Also, make sure you have tomtom-international-web-sdk-maps-6.21.3 and tomtom-international-web-sdk-services-6.21.3 files downloaded.
They should be in the assets folder.
Alternatively, import these files into the javascript code.

```javascript
  import tt from '@tomtom-international/web-sdk-maps';
  import tt from '@tomtom-international/web-sdk-services';
```
## Contents
  Our solution files:
   - `index.html` - Our website for truck drivers
   - `city_coordinates.js` - Coordinates of logistics centres and a function, and distances between them
   - `map.js` - The map and markers
   - `count.js` - Functions determing the breaks and the total times of the route
   - `main.css` - Styles for the website

