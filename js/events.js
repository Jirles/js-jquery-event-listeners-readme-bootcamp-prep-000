// define functions here

function getIt(){
  return $('p').on('click', function(){ 
    alert('Hey!');
    }
  );
}

function frameIt(){
  return $(document).on('load', function(e){
    return $('img').addClass('tasty');
  });
}

$(document).ready(function(){

// call functions here

});
