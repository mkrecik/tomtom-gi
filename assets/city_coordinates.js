function get_cord(city){
    switch(city){
        case "Czeladź":
            return{lat:50.38245053885933, lng:19.077009938097365};
        case "Gliwice":
            return{lat:50.43871808624632, lng:18.687973999157993};
        case "Lublin":
            return{lat:51.303781686188216, lng:22.6599183213868};
        case "Łódź":
            return{lat:51.859502738472834, lng:19.433391512520288};
        case"Poznań":
            return{lat:52.42886777996042, lng:16.944812250093012};
        case "PoznańWest":
            return{lat:52.419726234508154, lng:16.780070640299336};
        case "PruszkówI":
            return{lat:52.18319922548114, lng:20.812755495119607};
        case "PruszkówII":
            return{lat:52.182049557958344, lng:20.745534043143127};
        case "Teresin":
            return{lat:52.227811255456714, lng:20.415527429475933};
        case "Wrocław":
            return{lat:51.24711033402472, lng:17.12977277282152};
        case "WrocławWest":
            return{lat:51.147308754165536, lng:16.93180945261786};
        case "ParkPoznań":
            return{lat:52.44895980409809, lng:16.887441693838113};
        case"Gorzów":
            return{lat:52.91851736217094, lng:15.239960257744078};
        case"Vienna":
            return{lat:52.17856788597538, lng:20.813442140627572};
        case"Berlin":
            return{lat:52.37741143164078, lng:13.160128061448656};
        case"Niederrhein":
            return{lat:51.780722780952416, lng:6.476814623782894};
        case"Unna":
            return{lat:51.9907731360565, lng:7.165018754603798};
        case"Schalke":
            return{lat:51.96930751626973, lng:7.098528980721935};
        case"Bucharest":
            return{lat:44.732465060657674, lng:25.944349185617874};
    }
};

const R = 6371e3; // metres

function get_route(city1,city2){
    var cord1 = get_cord(city1);
    var cord2 = get_cord(city2);
    const φ1 = cord1.lat * Math.PI/180; // φ, λ in radians
    const φ2 = cord2.lat * Math.PI/180;
    const Δφ = (cord2.lat-cord1.lat) * Math.PI/180;
    const Δλ = (cord2.lng-cord1.lng) * Math.PI/180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c / 1000; // in kilometres
    return d.toPrecision(6);
};

    


