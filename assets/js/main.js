/**
 * Created by tiess on 29-11-2016.
 */
$(document).ready(function () {

    var camera = document.getElementById('camera');

    var bank_kamer = document.getElementById('bank_kamer');
    var bank_kamer_links = document.getElementById('bank_kamer_links');
    var bank_kamer_rechts = document.getElementById('bank_kamer_rechts');

    var showbank_middle= document.getElementById('showbank_middle');
    var showbank_rechts= document.getElementById('showbank_rechts');
    var showbank_links= document.getElementById('showbank_links');
    
    
    var kleurRood= document.getElementById('kleurRood');
    var kleurBlauw= document.getElementById('kleurBlauw');
    var kleurGroen= document.getElementById('kleurGroen');

    var kleurKamerWit= document.getElementById('kleurKamerWit');
    var kleurKamerGeel= document.getElementById('kleurKamerGeel');
    var kleurKamerRoze= document.getElementById('kleurKamerRoze');
    
    var panonoBalText = document.getElementById('panonoBalText');
    var bal = document.getElementById('bal');
    var text = document.getElementsByClassName('text')
    var bergen = document.getElementById('bergen')
    var showSky = document.getElementById('showSky')
    var grond = document.getElementById('grond')

    $(bergen).attr('visible', 'false')
    $(panonoBalText).attr('visible', 'false')

    showSky.addEventListener('mouseenter', function () {
        $(bergen).attr('visible', 'true')
        $(bal).attr('visible', 'false')
        $(grond).attr('visible', 'false')
        $(showSky).attr('visible', 'false')

    })
    
    bal.addEventListener('mouseenter', function () {
        document.getElementById("panonoBalText").setAttribute('visible', 'true')
    });

    bal.addEventListener('mouseleave', function () {
        document.getElementById("panonoBalText").setAttribute('visible', 'false')
        console.log("leave")
    });

    /*bank_kamer_links.addEventListener('mouseenter', function () {
        document.getElementById("panonoBalText").setAttribute('visible', 'false')
    });

    bank_kamer_links.addEventListener('mouseleave', function () {
        document.getElementById("panonoBalText").setAttribute('visible', 'true')
        console.log("leave")
    });
    //kleur van het behang kiezen
    /*kleurKamerWit.addEventListener('mouseenter', function () {
        for(i in kamer.children){
            if($.isNumeric(i)){
                $(kamer.children[i]).attr('color', 'white');
            }
        };
    });

    kleurKamerGeel.addEventListener('mouseenter', function () {
        for(i in kamer.children){
            if($.isNumeric(i)){
                $(kamer.children[i]).attr('color', 'yellow');
            }
        };
    });

    kleurKamerRoze.addEventListener('mouseenter', function () {
        for(i in kamer.children){
            if($.isNumeric(i)){
                $(kamer.children[i]).attr('color', 'pink');
            }
        };
    });

    //de kleuren om de bank mee te veranderen!!
    
    kleurRood.addEventListener('mouseenter', function () {


        var kleurCamera =  $(camera).attr('color', 'red');

        console.log("rood")

        /*for(i in kamer.children){
            if($.isNumeric(i)){
                $(kamer.children[i]).attr('color', 'red')
            }
        };

        for(j in bank_kamer.children){
            if($.isNumeric(j)){
                $(bank_kamer.children[j]).attr('color','red')
            }
        };
        for(j in bank_kamer_rechts.children){
            if($.isNumeric(j)){
                $(bank_kamer_rechts.children[j]).attr('color','red')
            }
        };
        for(j in bank_kamer_links.children){
            if($.isNumeric(j)){
                $(bank_kamer_links.children[j]).attr('color','red')
            }
        };
    });

    kleurBlauw.addEventListener('mouseenter', function () {
        for(j in bank_kamer.children){
            if($.isNumeric(j)){
                $(bank_kamer.children[j]).attr('color','blue')
            }
        };
        for(j in bank_kamer_rechts.children){
            if($.isNumeric(j)){
                $(bank_kamer_rechts.children[j]).attr('color','blue')
            }
        };
        for(j in bank_kamer_links.children){
            if($.isNumeric(j)){
                $(bank_kamer_links.children[j]).attr('color','blue')
            }
        };
    });

    kleurGroen.addEventListener('mouseenter', function () {
        for(j in bank_kamer.children){
            if($.isNumeric(j)){
                $(bank_kamer.children[j]).attr('color','green')
            }
        };
        for(j in bank_kamer_rechts.children){
            if($.isNumeric(j)){
                $(bank_kamer_rechts.children[j]).attr('color','green')
            }
        };
        for(j in bank_kamer_links.children){
            if($.isNumeric(j)){
                $(bank_kamer_links.children[j]).attr('color','green')
            }
        };
    });





    //Het laten zien van de banken in de kamer
    $(bank_kamer_links).attr('visible', true);
    $(bank_kamer_rechts).attr('visible', false);
    $(bank_kamer).attr('visible', false);

    showbank_middle.addEventListener('mouseenter', function () {
        $(bank_kamer).attr('visible', true);
        $(bank_kamer_links).attr('visible', false);
        $(bank_kamer_rechts).attr('visible', false);
    });

    showbank_rechts.addEventListener('mouseenter', function () {
        $(bank_kamer).attr('visible', false);
        $(bank_kamer_links).attr('visible', false);
        $(bank_kamer_rechts).attr('visible', true);
    });

    showbank_links.addEventListener('mouseenter', function () {
        $(bank_kamer).attr('visible', false);
        $(bank_kamer_links).attr('visible', true);
        $(bank_kamer_rechts).attr('visible', false);
    });*/

});