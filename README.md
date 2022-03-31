# MUST
this repo for must website

#### data stored at data/courses.json
### course example
- code: the course code MATH251, CS101, PHY102, extra...
- url: array of Objects structured as following..

#### one course example
- platform: whatsapp, facebook, ....
- name: the name of the course
- url: the url of the course
- note: the note of the course
```
// ---- course ----
// "code": "CS-352",
// "name": "Compiler Design",
// "groups": [group1, group2, group3],

// ----- group -----
// "platform": "whatsapp",
// "note": "#2",
// "url": "https://chat.whatsapp.com/He5G9M1dcrn5J3q5cLMO9E",
// "term": "Spring/2022"

// ------ end ------
```
``` json
{
    
    "code": "MATH251",
    "url": [
        {
            "platform": "whatsapp",
            "name": null,
            "url": "https://chat.whatsapp.com/link-here"
        },
        {
            "platform": "whatsapp",
            "name": null,
            "note": "#2",
            "url": "https://chat.whatsapp.com/link-here"
        },
        {
            "platform": "facebook",
            "name": null,
            "url": null
        }
    ]

}
```