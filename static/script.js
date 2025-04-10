var currentPage = "firstPage";

function goFirstPage() {
    show('firstPage', currentPage);
    currentPage = "firstPage";
}

function login(details) {
    var x = details
}

function create(details) {
    var x = details
}

function show(showing, hide) {
    document.getElementById(hide).style.display='none';
    document.getElementById(showing).style.display='block';
}

function goSignUp(){
    show('createPage', currentPage);
    currentPage = "createPage";
};

function goLogin(){
    show('loginPage', currentPage);
    currentPage = "loginPage";
};