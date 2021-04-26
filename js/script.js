/*
Procedimento:
1) Al via il computer genera 5 numeri
2) Vengono mostrati per 5 secondi i numeri generati. L'utente deve indovinare i 5 numeri
3) Una volta inserito il quinto numero viene mostrato per 3 secondi “Calcolo in corso”
4) Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”
5) Far apparire un bottone “restart”
 */

$(document).ready(function(){

  reset();

  var arrRandom = [];
  var arrUser = [];
  var arrResult = [];

  $('#btn-start').click(function(){
    $(this).hide();
    while (arrRandom.length < 5) {
      arrRandom.push(getRandomNumber(1, 100));
      printDisplay(arrRandom.join(', '), '#display');
      setTimeout(function() {
        printDisplay('Indovina i numeri!', '#display');
        $('#user-input').show();
        $('#push-number').show();
      }, 5000);
    }
  }); 

  $('#push-number').click(function(){
    var arrResult = [];
    arrUser.push(parseInt($('#user-input').val()));
    $('#user-input').val('');
    if (arrUser.length === 5) {
      $('#user-input').hide();
      $(this).hide();
      printDisplay('Calcolo in corso..', '#display');
      for (var i = 0; i < arrUser.length; i++) {
        if(arrRandom.includes(arrUser[i])) {
          arrResult.push(arrUser[i]);
        }
        console.log(arrResult);
      }
      setTimeout(function(){
        if (arrResult.length == 0) {
          printDisplay('Hai perso, nessun numero indovinato!', '#display');
        } else {
          printDisplay('Hai indovinato ' + arrResult.length + ' numeri: ' + arrResult.join(', '), '#display');
        }
        $('#restart').show();
      }, 3000);
    }
  });

  $('#restart').click(function(){
    reset();
  }); 


  /* FUNCTIONS */

  function reset() {
    $('#display').text('Premi il bottone "Via" quando vuoi giocare');
    $('#btn-start').show();
    $('#user-input').hide();
    $('#push-number').hide();
    $('#restart').hide();
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function printDisplay(output, target) {
    $(target).text(output);
  }


});