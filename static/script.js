document.getElementById("#signup").addEventListener("click", show('createPage', 'loginPage'));

document.getElementById("#back").addEventListener("click", show('loginPage', 'createPage'));

function show(showing, hide) {
    document.getElementById(showing).style.display='block';
    document.getElementById(hide).style.display='none';
}