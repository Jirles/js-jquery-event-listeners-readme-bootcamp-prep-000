// define functions here

function getIt(){
  return $('p').on('click', function(){ 
    alert('Hey!');
    }
  );
}

function frameIt(){
  return $('img').on('load', function(e){
    return e.addClass('tasty');
  });
}

function pressIt(){
  return $('form').on('keydown', function(e){
    if (e.which === )
  });
}

$(document).ready(function(){

// call functions here

});
