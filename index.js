function _isEmpty(e) { return !(e == undefined || e == null || e == ''); }

(async () => { // add data
    const data = (await (await fetch(`data/courses.json`)).json()).data;
    console.log(data);
    data.forEach((e) => {
        if (e.hidden === true) return;
        var one_course = "";
        e.groups.forEach((group) => {
            try {
                const url = new URL(group.url);
            } catch (error) {
                return console.error(error);   // => TypeError, "Failed to construct URL: Invalid URL"
            }
            const note = `${!_isEmpty(group.note) ? "" : "(" + group.note + ")"}`
    
            one_course += `<div class="one-link hero-btn gray-btn">
            <a href="${group.url}" target="_blank">
            <i class="fa fa-${group.platform}"></i>${group.platform} ${note}</a> 
            </div>`;
        });
        const name = `${e.code}${!_isEmpty(e.name) ? "" : ": " + e.name}`;
        document.querySelector("#group-container").innerHTML += `<div class="course-col">
            <h3>${name}</h3>
                <div class="one-course"> ${one_course == "" ? "<p>No data available.</p>" : one_course} </div>
            </div>`;
    });
})();