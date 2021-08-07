$(() => {

    let css = '';
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 6 && hour <= 18) css = 'day';
    else css = 'night';
    let link = $('<link>', {
        'rel': 'stylesheet',
        'href': 'css/' + css + '.css'
    });
    $('head').append(link);

});