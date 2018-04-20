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
    if (e.which === 71){
      alert("'g' has been pressed");
    }
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
