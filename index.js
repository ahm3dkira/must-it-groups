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
/***********************************************/


function _isEmpty(e) { return !(e == undefined || e == null || e == ''); }

(async () => { // add data
    const res = await (await fetch(`data/courses.json`)).json();
    console.log(res);
    res.links.forEach((e) => {
        if (e.hidden === true) return;
        var one_course = "";
        e.url.forEach((ee) => {
            if (ee.url == undefined || ee.url == null || ee.url == "") return;
            one_course += `<div class="one-link hero-btn gray-btn">
            <a href="${ee.url}" target="_blank">
            <i class="fa fa-${ee.platform}"></i>${ee.platform} ${!_isEmpty(ee.note) ? "" : "(" + ee.note + ")"}</a> 
            </div>`;
        });
        document.querySelector("#group-container").innerHTML += `<div class="course-col">
            <h3>${e.code}${!_isEmpty(e.name) ? "" : ": " + e.name}</h3>
            <div class="one-course"> ${one_course == "" ? "<p>No data available.</p>" : one_course} </div>
            </div>`;
    });
})();