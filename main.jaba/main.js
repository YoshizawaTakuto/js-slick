$(function(){
    'use strict';

    var timer = document.getElementById('timer');
    
    var start = document.getElementById('start');
    
    var stop = document.getElementById('stop');
    
    var reset = document.getElementById('reset');

    var startTime;
    
    var timerId;

    var updateTime = 0;

    var timeNoStop = 0;


    function TimetText(){

        var h = Math.floor(updateTime/ 3600000);
        
        var m = Math.floor(updateTime / 60000);

        var s = Math.floor(updateTime % 60000 / 1000);

        var ms = Math.floor(updateTime % 1000 / 100 );
   

        timer.textContent = h + ': ' + m + ': ' + s + ': ' + ms ;
    }

    function countUp(){

        timerId = setTimeout(function(){

            updateTime = Date.now() - startTime + timeNoStop;
            
            TimetText()

            countUp();

        },);
        
    }


    $('#start').click(function(){

        startTime = Date.now();

        countUp();
        
        $(this).removeClass('active');
        $('#stop, #reset').addClass('active');
        
    });


    $('#stop').click(function(){

       clearTimeout(timerId);

       timeNoStop += Date.now() - startTime;
       
       $(this).removeClass('active');
       $('#start, #reset').addClass('active');
       
    });


    $('#reset').click(function(){

        updateTime = 0;

        timeNoStop = 0;

        TimetText();
        
        $(this).removeClass('active');
        $('#start').addClass('active');
        
    });

});