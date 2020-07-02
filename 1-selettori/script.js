//Aggiungere la classe test a tutti questi selettori

//Tutti gli h1
$('h1').addClass('pippo');
// console.log($('h1'));
//l'Id prova
$('#prova').addClass('test');
// console.log($('#prova'));

//Tutti i li con classe active
$('li.active').addClass('test');
//tutti gli strong dentro un p con classe big
$('p.big strong').addClass('test');
//
//
//Tutti gli small figli (solo figli) di una section
$('section > small').addClass('test');
//agli h3 e h4
$('h3, h4').addClass('test');
