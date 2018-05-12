    /*       JAVASCRIPT FOR THE EDITABLE SITE 
             Its the working document, that, by now hides the sidebar and saves 
             the changes made on the text, its align and colour */

$('.graph').hide();


var ta = 'text-align';
var fs = 'font-size';
var co = 'color';
var element = ['#subhead', '#prob', 'main', '#last', '#five', '#six', '#seven'];
var sT = [ 't1', 't2', 't3', 't4', 't5', 't6', 't7' ];
var sA = [ 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7' ];
var sF = [ 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7' ];
var sC = [ 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7' ];
var count = 0;


 

$(document).ready(function ready () {
    $('#sidebar').hide();
    restoreContent_n_Style();

    function CCount() {
        if (count === NaN) { localStorage['C'] = 0; }
        if (count>5) { count = 4 }
    }
    
    
    $('.save').bind('click', saveContent_n_Style);
    
    

    function saveContent_n_Style() {
        for ( i=0; i<element.length; i++){
            localStorage[sT[i]] = $(element[i]).html();
            localStorage[sA[i]] = $(element[i]).css(ta);
            localStorage[sF[i]] = $(element[i]).css(fs);
            localStorage[sC[i]] = $(element[i]).css(co);
            localStorage['C'] = count; CCount();
        }
    }

    function restoreContent_n_Style() {    
         if(localStorage[sT[0]] !== undefined) {
             for ( i=0; i<element.length; i++ ){
                 $(element[i]).html(   localStorage[sT[i]]);
                 $(element[i]).css(ta, localStorage[sA[i]]);
                 $(element[i]).css(fs, localStorage[sF[i]]);
                 $(element[i]).css(co, localStorage[sC[i]]);
                 count = localStorage['C']; newParagraph();
             }
         }
    }
    
    
                        /*SIDEBAR*/

    $('#style').bind('click', styleEditor); $('#close').bind('click', styleEditor);

    function styleEditor() {
        $('#sidebar').toggle(707);
    }

                        /* TEXT-ALIGN, button and text-clicking functions*/

    var selector = undefined;
    var E = [ $('#subhead'), $('#prob'), $('main'), $('#last'), $('#five'), $('#six'), $('#seven') ];
    
    

    E[0].click( function() {  selector = E[0]; cssPS(); });
    E[1].click( function() {  selector = E[1]; cssPS(); });
    E[2].click( function() {  selector = E[2]; cssPS(); });
    E[3].click( function() {  selector = E[3]; cssPS(); });
    E[4].click( function() {  selector = E[4]; cssPS(); });
    E[5].click( function() {  selector = E[5]; cssPS(); });
    E[6].click( function() {  selector = E[6]; cssPS(); });
    
    function cssPS() {
        var fsC = selector.css(fs); var fsI = fsC.slice(-6,-2); $('#fontS').val(fsI);
    }

    $('#left').click(   function() {  selector.css(ta, 'left');    });
    $('#middle').click( function() {  selector.css(ta, 'center');  });
    $('#right').click(  function() {  selector.css(ta, 'right');   });

    $('#fontS').on('change', function(){  var cN = $(this).val(); selector.css(fs, cN+'px');  });
    $('#color').on('change', function(){  var cC = $(this).val(); selector.css(co, cC);       });
    
    
                            /* NEW PARAGRAPH */
    
    
    $('#new').bind( 'click', Count ); $('#new').bind( 'click', newParagraph );
    
    function Count() {
        if (count<5) { count++; }
        if (count>3) { alert('Die Textfelder sind leider ausgegangen, neue gibts für nur 1,99€'); }
        alert(count);
    }
    
    function newParagraph() {
        for ( b=0; b<count; b++ ) {
            var s = b + 4; 
            $(element[s]).css('display', 'block');
        }
      
    }

    
    
    browser.tabs.onRemoved.addListener(handleRemoved);
    
    function handleRemoved(tabId, removeInfo) {
        alert('tab '+tabId+'is closing');
        alert('window ID: '+removeInfo.windowID);
    }
});