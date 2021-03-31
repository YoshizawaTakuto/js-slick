$(function(){

var pushNumber = '';
var displayNumber = 0;
var totalNumber = 0;

var tasuBtn = 0;
var tasuNumber = 0;

var hikuBtn = 0;
var hikuNumber = 0;

var kakeruBtn = 0;
var kakeruNumber = 0;

var waruBtn = 0
var waruNumber = 0;

var dottoBtn = 0;


    $('.number-btn').click(function(){
        
        pushNumber = $(this).attr('data-btn');
        
        if(displayNumber === 0){
            
            displayNumber = pushNumber;
            
            $('#display').val(displayNumber);
            
        }else{
        
            displayNumber = String(displayNumber) + parseInt(pushNumber, 10);
    
            $('#display').val(displayNumber);
  
        }
    });

    $('#single0').click(function(){
        
        displayNumber = displayNumber * 10;
        
        $('#display').val(displayNumber);
  
    });
    
    $('#double0').click(function(){
        
        displayNumber = displayNumber * 100;
        
        $('#display').val(displayNumber);
  
    });


    $('#clear').click(function(){
   
        displayNumber = 0; 
        tasuBtn = 0;
        tasuNumber = 0;
        hikuBtn = 0;
        hikuNumber = 0;
        kakeruBtn = 0;
        kakeruNumber = 0;
        waruBtn = 0
        waruNumber = 0;
        totalNumber = 0;
        dottoBtn = 0;
   
        $('#display').val(displayNumber);
    
    });

    
    $('#tasu').click(function(){
        dottoBtn = 0;
        
        if (tasuBtn === 0){
        
            tasuBtn += 1;
        
            totalNumber = displayNumber
        
        
            displayNumber = 0;
        
        }else{
            
            totalNumber  = totalNumber + displayNumber ;
        
            $('#display').val(totalNumber);
        
            displayNumber = 0;
        
        }
    });
    
    
    $('#hiku').click(function(){
        
        dottoBtn = 0;
        
        if (hikuBtn === 0){
            hikuBtn += 1;
        
            totalNumber = displayNumber;
        
            displayNumber = 0;
        
        }else{
            
            totalNumber  = totalNumber - displayNumber ;
        
        $('#display').val(totalNumber);
        
            displayNumber = 0;
        
        }
    });
    
    $('#kakeru').click(function(){
        dottoBtn = 0;
        
        if (kakeruBtn === 0){
            
            kakeruBtn += 1;
        
            totalNumber = displayNumber;
        
            displayNumber = 0;
        
        }else{
            
            totalNumber  = totalNumber * displayNumber ;
        
        $('#display').val(totalNumber);
        
            displayNumber = 0;
        
        }
    });
    
    $('#waru').click(function(){
        dottoBtn = 0;
        
        if (waruBtn === 0){
            
            waruBtn += 1;
        
            totalNumber = displayNumber;
        
            displayNumber = 0;
        
        }else{
            
            totalNumber  = totalNumber / displayNumber ;
        
        $('#display').val(totalNumber);
        
            displayNumber = 0;
        
        }
    });  
    
    $('#result').click(function(){
        dottoBtn = 0;
        if(tasuBtn > 0){
            
            tasuBtn = 0;
            
            displayNumber =Number(totalNumber) + Number(displayNumber);
            
            $('#display').val(displayNumber);
            
        }else if(hikuBtn > 0){
            
            hikuBtn = 0;
            
            displayNumber = totalNumber - displayNumber;
            
            $('#display').val(displayNumber);
        }else if(kakeruBtn > 0){
            
            kakeruBtn = 0;
            
            displayNumber = totalNumber * displayNumber;
            
            $('#display').val(displayNumber);
            
        }else if(waruBtn > 0){
            
            waruBtn = 0;
            
            displayNumber = totalNumber / displayNumber;
            
            $('#display').val(displayNumber);
        }
    });
        
        $('#dotto').click(function(){
            if (dottoBtn === 0){
            dottoBtn += 1;
            displayNumber = Number(displayNumber) + '.';
            $('#display').val(displayNumber);
            }
        
        
         });
});

