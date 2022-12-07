let title = "";
if (typeof document !== "undefined") {
  title = document.title;
}
console.log(title);

//oblicza długość drogi całkowitej (dlugosc trasy wyznaczonej przez COŚ + dlugosc przerw * liczba przerw)

//daily driving time of 9h
var max_hours_work_daily = 9;
//breaks of at least 45 minutes
var min_hours_break = 0.75;
var break1 = 0.25;
var break1_min = 15;
var break2 = 0.5;
var break2_min = 30;
//weekly driving time
var max_hours_work_weekly = 56;
//daily rest with exceptions
var min_hours_rest_daily = 11;
var min_hours_rest_daily_exception = 9;
var max_days_with_an_exception_weekly = 3;
//wekly rest
var min_hours_rest_weekly = 45;
//max drive time without a break
var max_work_till_break = 4.5;

const max_velocity=90;
const avr_velocity=80;

time_total = document.getElementById("time");

var plan_button = document.getElementById("plan_button");

function route(){
    var city = document.getElementById("city_end").value;
    var route = document.getElementById("route");
    var route_to_time = get_route(city);
    route.innerHTML=route_to_time;
    var journ_time = document.getElementById("journ_time");
    var route_time = route_to_time/avr_velocity;
    var route_time_hours=Math.floor(route_time);
    var route_time_minutes = (route_time - route_time_hours)*60;
    journ_time.innerHTML = route_time_hours + "h " + route_time_minutes.toPrecision(2) + "min";
};

function breaks(){
    var time = document.getElementById("time").value;
    var daily_breaks_15 = document.getElementById("breaks15");
    var daily_breaks_30 = document.getElementById("breaks30");
    var breaks11 = document.getElementById("breaks11");
    var break_time = document.getElementById("breaks_time");
    var break15, break30, break11, break_time;

    for (let i = 0; i <= time; i += max_hours_work_daily){
        if(time>max_work_till_break){
            break15++;
            break30++;
        }
        break11++;
    }
    break_time = daily_breaks_15*15 + daily_breaks_30*30 + breaks11*11*60;
    break_time/=60;
    vtime_total = route_time + break_time;
    daily_breaks_15.innerHTML = break15;
    daily_breaks_30.innerHTML = break30;
    breaks11.innerHTML = break11;
    break_time.innerHTML = break_time;
    time_total.innerHTML = time_total;
};
plan_button.addEventListener('click', route);

// plan_button.addEventListener('keypress', function  (e) {
//     if (e.key === 'Enter') {
//         breaks();
//     }
// });
