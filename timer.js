var time_limit = 60;



var timer = setInterval(function(){
    if (time_limit > 0 ) {
        cur_time = time_interval;
        console.log(cur_time);
        time_limit --; 
    }
},1000)
;

return timer;