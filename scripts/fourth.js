let myParagraph = $('#myParagraph');

document.getElementById('catFact').addEventListener('click', () => {
    $.get('https://catfact.ninja/fact', data => myParagraph.text(data['fact']));
});

document.getElementById('dogPic').addEventListener('click', () => {
    $.get('https://dog.ceo/api/breeds/image/random', data =>
        myParagraph.html('<img src="' + data['message'] + '" alt="pies zaginal">'));
});

document.getElementById('randActivity').addEventListener('click', () => {
    $.get('https://www.boredapi.com/api/activity', data => myParagraph.text(data['activity']));
});