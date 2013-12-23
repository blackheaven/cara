function setCity(selector, url, title)
{
    $(selector).on('click', function()
    {
        location.href = url;
    });
    $(selector).mouseenter(function()
    {
        $('#caption').html('<h2>' + title + '</h2>');
    }).mouseleave(function()
    {
        if ($('#caption').html() == ('<h2>' + title + '</h2>'))
            $('#caption').html('');
    });
}

$(document).ready(function()
{
    setCity('#lyon', 'http://lyon.clubagilerhonealpes.org/', 'Lyon');
    setCity('#grenoble', 'http://clubagilerhonealpes.org/', 'Grenoble');
    setCity('#annecy', 'http://www.cara74.org/', 'Annecy');
    setCity('#valence', 'http://groupspaces.com/CARAValence/', 'Valence');
});
