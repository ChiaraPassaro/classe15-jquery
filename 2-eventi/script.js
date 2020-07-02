// Creare un bottone che on hover aggiunga una classe che cambia il colore del testo e la toglie quando il mouse esce dal bottone.
// Con il doppio click cambio il testo in “cliccato”.
// Con un click solo non fa niente
// 
//
// $('button').mouseenter(
//   function () {
//     // $('button').removeAttr('class');
//     $('button').addClass('new-color');
//     console.log('sono passata sul bottone');
//   }
// );
//
// $('button').mouseleave(
//   function (){
//     $('button').removeClass('new-color');
//     console.log('sono uscita dal bottone');
//   }
// );

//
// $('button').mouseenter(changeColor);
//
// function changeColor() {
//   $('button').addClass('new-color');
//   console.log('sono passata sul bottone');
// }
//
$('button').dblclick(
  function (){
    // console.log($('button').text());
    // $('button').text('<strong>Pippo</strong>');
    $('button').html('<strong>Pippo</strong>');
    console.log($('button').html());
  }
);

$('button').click(
  function () {
    console.log('click singolo');
  }
);
