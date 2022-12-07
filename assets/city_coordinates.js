var war = {lat: 52.229675, lng: 21.012230};
const R = 6371e3; // metres

function get_cord(city){
    switch(city){
        case "war":
            return{lat: 52.229675, lng: 21.012230};
        case "cra":
            return{lat: 50.064650, lng: 19.944980};
        case "wro":
            return {lat: 51.107885, lng: 17.038538};
        case "poz":
            return {lat: 52.406374, lng: 16.925168};
        case "lod":
            return {lat: 51.759250, lng: 19.455983};
        case "kat":
            return {lat: 50.264892, lng: 19.023781};
        case "gda":
            return {lat: 54.352025, lng: 18.646638};
        case "ven": 
            return {lat: 45.440847, lng: 12.315515};
        case "mil":
            return {lat: 45.464204, lng: 9.189982};
        case "rom":
            return {lat: 41.902783, lng: 12.496366};
        case "mad":
            return {lat: 40.416775, lng: -3.703790};
}}

function get_route(city){
    var cord = get_cord(city);
    const φ1 = war.lat * Math.PI/180; // φ, λ in radians
    const φ2 = cord.lat * Math.PI/180;
    const Δφ = (cord.lat-war.lat) * Math.PI/180;
    const Δλ = (cord.lng-war.lng) * Math.PI/180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c / 1000; // in kilometres
    return d.toPrecision(6);
};

    


