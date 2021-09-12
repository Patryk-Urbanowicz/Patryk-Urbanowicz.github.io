document.getElementById('ajaxButton').addEventListener( 'click',  () => {
    $.get('file.txt', data => {
        $('#myParagraph').text(data);
    })
})