$(function(){
  
  let searchText = '';
  let targetText = '';
  
  function searchWord(){
    
    searchText = $('#search-text').val(), 
    
    $('.target-area li').each(function() {
      
      targetText = $(this).find('span').text();

      if (targetText.indexOf(searchText) != -1) {
        $(this).show();
        
      } else {
        $(this).hide();
      }
      
    });
    
  }

  $('#search-text').on('input', searchWord);
});