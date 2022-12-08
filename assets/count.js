let title = "";
if (typeof document !== "undefined") {
  title = document.title;
}
console.log(title);

//oblicza długość drogi całkowitej (dlugosc trasy wyznaczonej przez COŚ + dlugosc przerw * liczba przerw)

//daily driving time of 9h
const max_hours_work_daily = 9;
//breaks of at least 45 minutes
const min_hours_break = 0.75;
const break1 = 0.25;
const break1_min = 15;
const break2 = 0.5;
const break2_min = 30;
//weekly driving time
const max_hours_work_weekly = 56;
//daily rest with exceptions
const min_hours_rest_daily = 11;
const min_hours_rest_daily_exception = 9;
const max_days_with_an_exception_weekly = 3;
//wekly rest
const min_hours_rest_weekly = 45;
//max drive time without a break
const max_work_till_break = 4.5;

const max_velocity=90;
const avr_velocity=80;

time_total = document.getElementById("time");

var plan_button = document.getElementById("plan_button");

function route(){
    var city = document.getElementById("city_end").value;
    var route = document.getElementById("route");
    var route_to_time = get_route(city);
    route.innerHTML=route_to_time+"km";
    var journ_time = document.getElementById("journ_time");
    var route_time = route_to_time/avr_velocity;
        var route_time_hours=Math.floor(route_time);
        var route_time_minutes = (route_time - route_time_hours)*60;
        var p=2;
        if(route_time_minutes<10){
            p=1;
        }
    journ_time.innerHTML = route_time_hours + "h " + route_time_minutes.toPrecision(p) + "min";
};

function breaks(){
    var city = document.getElementById("city_end").value;
    var route_to_time = get_route(city);
    var journ_time = route_to_time/avr_velocity;
    var breaks_15 = document.getElementById("breaks15");
    var breaks_30 = document.getElementById("breaks30");
    var breaks_11 = document.getElementById("breaks11");
    var break_time = document.getElementById("break_time");
    var total_time = document.getElementById("total_time");
    var stops = document.getElementById("stops");
    var break15=0, break30=0, break11=0, breaks, total;
    
    for(let i=max_work_till_break; i<journ_time; i+=max_hours_work_daily){
        break15++;
    }
    for(let j=2*max_work_till_break; j<journ_time; j+=max_hours_work_daily){
        break30++;
    }
    for(let i=max_hours_work_daily; i<journ_time; i+=max_hours_work_daily){
        break11++;
    }
    
    breaks = break15*break1_min + break30*break2_min + break11*min_hours_rest_daily*60;
    breaks_hours = Math.floor(breaks/60);
    breaks_minutes = breaks - breaks_hours*60;
    var p1=2;
        if(breaks_minutes<10){
            p1=1;
        }

    total = journ_time*60 + breaks;
    total_hours = Math.floor(total/60);
    total_minutes = total - total_hours*60;
    var p2=2;
        if(total_minutes<10){
            p2=1;
        }

    breaks_15.innerHTML = break15;
    breaks_30.innerHTML = break30;
    breaks_11.innerHTML = break11;
    break_time.innerHTML = breaks_hours + "h " + breaks_minutes.toPrecision(p1) + "min";
    total_time.innerHTML = total_hours + "h " + total_minutes.toPrecision(p2) + "min";
    stops.innerHTML=break15+break30+break11;

    var time = document.getElementById("time").value;
    var deadline = document.getElementById("deadline");
    var total_time_to_dead=total_hours+total_minutes/60;
    if(time!=""){
        if (time>total_time_to_dead){
            deadline.innerHTML="The plan meets the deadline";
        }
        else{
            deadline.innerHTML="The plan doesn't meet the deadline";
        }
    }
};
plan_button.addEventListener('click', route);
plan_button.addEventListener('click', breaks);
document.addEventListener('keypress', function  (e) {
    if (e.key === 'Enter') {
        breaks();
        route();
    }
});
