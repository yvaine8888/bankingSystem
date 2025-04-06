document.getElementById("#signup").addEventListener("click", function() { 
    show('createPage', 'loginPage');
});

document.getElementById("#back").addEventListener("click", function() { 
    show('loginPage', 'createPage');
});

function show(show, hide) {
    document.getElementById(show).style.display='block';
    document.getElementById(hide).style.display='none';
    return false;
}