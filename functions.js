$(document).ready(function() {
    $('.fade').hide();
    $('img').hide();
});

var count = 0;

function main() {
$('a').click(function() {
    var vera = $('#vera'); var wer = $('#wer'); var next = $('#next'); var last = $('#last');  
    var button = $('.buttonE'); var img = $('img'); var main = $('main');
    
   count = count + 1;
    
    
     if(count === 1) {
       vera.fadeIn(2000);
       wer.hide();
     }
    
     else if(count === 2) {
         next.fadeIn(2000);
         vera.hide();
     }
    
     else if(count === 3) {
         last.fadeIn(5000);
         next.hide();
         button.text('Drück !');
     }
    
     else if (count === 4) {
        var window = prompt('So du hast nur noch eine Chance dich und den PC zu retten, anderenfalls wird erst der Computer, dann Du zerstört. Du musst jetzt Joseph in zwei Worten beschreiben', 'Zwei Wörter das Erste beschreibt sein Aussehen, das Zweite seinen Geruch, mit Komma getrennt.');
         
         if(window === 'hässlich, stinkt') {
             img.show();
             main.text('Du wolltest es ja unbedingt...');
             last.text('Da hast du den Salat ! Ich mein das will ja Keiner sehen');
             
             button.click(function() {
               var w = 0;
               while (w<8) { 
                img.slideToggle(1500);
                 w = w +1;
               }
             });
                 
         }
             

         
          else {
               while(count !== 6) {
//                 alert('Falsche Antwort. Tipp: Er ist nicht schön und gut riechen tut Er sicher nicht.');
                   var ran = Math.floor(Math.random())*100;
                   $('img').css('align-left', ran + 'px');
                   $('img').css('margin-top', ran + 'px');
                   $('img').fadeIn(10000);
               }
          }
     }
        
});
}
      



$(document).ready(main);