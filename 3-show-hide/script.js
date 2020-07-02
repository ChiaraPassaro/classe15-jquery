var hidden = true;

$('#bottone').click(
  function(){
    if(hidden == true){
      $('p').addClass('show');
      hidden = false;
    } else {
      $('p').removeClass('show');
      hidden = true;
    }
  }
);

$('#bottone').click(
  function(){
    var hidden = $('p').hasClass('hidden');
    if(hidden == true){
      $('p').removeClass('hidden');
    } else {
      $('p').addClass('hidden');
    }
  }
);
