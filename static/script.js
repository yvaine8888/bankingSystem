var currentPage = "firstPage";

function goFirstPage() {
    show('firstPage', currentPage);
    currentPage = "firstPage";
}

function login(details) {
    var x = details
    alert("Logged in");
}

function create(details) {
    var x = details
    alert("Created an account");
}

function show(showing, hide) {
    document.getElementById(hide).style.display='none';
    document.getElementById(showing).style.display='block';
}

function goSignUp(){
    alert("Going to sign up");
    show('createPage', currentPage);
    currentPage = "createPage";
};

function goLogin(){
    show('loginPage', currentPage);
    alert("Going to log in");
    currentPage = "loginPage";
};