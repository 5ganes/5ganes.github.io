$(() => {
    'use strict';
    let start = $('#start');
    let end = $('#end');
    let boundaries = $('.boundary');
    start.click(() => {
        let start = true;
        $('#status').text('Move mouse to End in order to win the game.'); // .html() can also be used
        if(boundaries.hasClass('youlose')) 
            boundaries.removeClass('youlose');
        boundaries.mouseover(() => start ? loseFunction() : '');
        end.mouseover(() => {
            if(start){
                start = false;
                $('#status').html('Congratulations ! You have won the game. Click S to start gama again.');
            }
        });
        let loseFunction = () => {
            start = false;
            boundaries.addClass('youlose');
            $('#status').html('Sorry ! You have lost the game.');
        };
        $('#maze').mouseleave(() => start ? loseFunction(): '');   
    });
});