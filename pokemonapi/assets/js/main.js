/**
 * Created by tiess on 29-11-2016.
 */

$(function(){
    var data;
    var dataString;

    //events
    document.getElementById('box1',).addEventListener('mouseenter',function()
    {

        getData(this);

        $(this).attr('color','green');

    });

    document.getElementById('box1').addEventListener('mouseleave',function()
    {
        $(this).attr('color','blue');
    });

    document.getElementById('box2',).addEventListener('mouseenter',function()
    {

        getData(this);

        $(this).attr('color','green');

    });

    document.getElementById('box2').addEventListener('mouseleave',function()
    {
        $(this).attr('color','blue');
    });

    document.getElementById('box3',).addEventListener('mouseenter',function()
    {

        getData(this);

        $(this).attr('color','green');

    });

    document.getElementById('box3').addEventListener('mouseleave',function()
    {
        $(this).attr('color','blue');
    });

    function getData(data)
    {

        switch (data.id)
        {
            case "box1":
                ranNum = Math.floor((Math.random() * 90) + 1);
                dataString = $(data).attr('data')  + ranNum.toString();
                break;

            case "box2":

                ranNum = Math.floor((Math.random() * 140) + 1);
                dataString = $(data).attr('data')  + ranNum.toString();
                break;

            case "box3":

                dataString = $(data).attr('data')  + "1";

                break;
        }

        $.ajax({
            url: 'https://pokeapi.co/api/v1' + dataString,
            method: 'GET', // or GET
            dataType : "json",
            success: function(msg) {
                var x = msg['name'] !== undefined ? msg['name'] : msg['name'];
                //var y = msg['abilities'] !== undefined ? msg['ability'] : msg['name'];

                /*if msg['name'] !== undefined:
                    x = msg['name']
                else:
                    x = msg['ability']*/



                $('#text').attr('text','text: ' + x);


            }
        });
    }




/*$(document).ready(function () {

    for(var i = 1; i < 4; i++){
        document.getElementById('box' + i).addEventListener('mouseemter', function () {
            $(this).attr('color', 'red')
            getData(this);
        });
        document.getElementById('box' + i).addEventListener('mouseleave', function () {
            $(this).attr('color', 'blue')
            getData(this);
        });


    }

    $.ajax({
        url: 'https://swapi.co/api' + dataString,
        method: 'GET', // or GET
        dataType: "json",
        succes: function(msg){
            var x = msg['name'] !== undefined ? msg['name'] : msg['title'];

            $('#text'.attr('text', 'text: ' + x));
        }
    })

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