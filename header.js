function showMenu() { document.querySelector("header #navLinks").style.right = "0";}
function hideMenu() { document.querySelector("header #navLinks").style.right = "-200px";}
var bodyDOM = document.querySelector('body');

(()=>{
const currentThemeColor = (localStorage.getItem('darkmode')=='true')?'theme-darkmode':'theme-lightmode' ;
if(currentThemeColor !== null){
    bodyDOM.classList.add(currentThemeColor);
    if (currentThemeColor==='theme-darkmode')
        document.querySelector(`#theme-darkmode`).classList.add('active');
}
})();

function switchColorTheme(){
    if(document.querySelector('#theme-darkmode').classList.contains('active')){
        bodyDOM.classList.remove('theme-darkmode');
        bodyDOM.classList.add('theme-lightmode');
        document.querySelector('#theme-darkmode').classList.remove('active');
        localStorage.setItem('darkmode','false');
    }else{
        bodyDOM.classList.add('theme-darkmode');
        bodyDOM.classList.remove('theme-lightmode');
        document.querySelector('#theme-darkmode').classList.add('active');
        // document.querySelector('')
        localStorage.setItem('darkmode','true');
    }
}
