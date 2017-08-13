// Bio Object
var bio = {
    "name": "Shubham Bhadani",
    "role": "Full Stack Javascript Developer",
    "contacts": {
        "mobile": "+91-9110910756",
        "email": "<a href='mailto:shubham.bhadani07@gmail.com'>shubham.bhadani07@gmail.com</a>",
        "github": "<a href='https://github.com/shubham0794x'>shubham0794x</a>",
        "twitter": "@shubham0794",
        "location": "Kolkata"
    },
    "welcomeMessage": "The only way to great work is to love what you do.",
    "skills": ["Web Development", "JavaScript", "HTML5", "CSS", "Bootstrap", "Reactjs"],
    "biopic": "images/me.jpg"
};

// displayBio fuction
bio.display = function () {
    var i;
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for ( i=0; i<bio.skills.length;i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for ( i=0; i<formattedContactInfo.length;i++) {
        $("#topContacts,#footerContacts").append(formattedContactInfo[i]);
    }
};

bio.display();
//Work Object
var work = {
    'jobs': [{
        "employer": "HITK",
        "title": "Student",
        "dates": "2014 - Present",
        "location": "Chowbaga Road, Anandapur, P.O East Kolkata Township, Kolkata, West Bengal 700107",
        "description": "I am pursuing my Bachelor degree here."
    }]
};

//displayWork function
work.display = function() {
    for (var job=0; job<work.jobs.length;job++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title), HTMLworkDates.replace("%data%", work.jobs[job].dates), HTMLworkLocation.replace("%data%", work.jobs[job].location), HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
};

work.display();

//Education Object
var education = {
    "schools": [{
        "name": "Narbheram Hansraj English School",
        "location": "Narbheram Hansraj English School,Bistupur,Jamshedpur",
        "degree": "High School",
        "majors": ["PCM"],
        "dates": "2013",
        "url": "www.nhes.ac.in/"
    }, {
        "name": "HITK",
        "location": "HITK,Kolkata,West Bengal",
        "degree": "B.tech",
        "majors": ["Biotech"],
        "dates": "2014-2018",
        "url": "www.heritageit.edu"
    }],
    "onlineCourses": [{
        "title": "1. JavaScript Promises",
        "school": "Udacity",
        "date": "January ,2017",
        "url": "https://in.udacity.com/course/javascript-promises--ud898/"
    }, {
        "title": "2. JavaScript Basics",
        "school": "Udacity",
        "date": "February ,2017",
        "url": "https://in.udacity.com/course/javascript-basics--ud804/"
    }, {
        "title": "3. Intro to Html and Css",
        "school": "Udacity",
        "date": "March ,2017",
        "url": "https://in.udacity.com/course/intro-to-html-and-css--ud304/"
    }]
};

//displayEducation function
education.display = function() {
    for (var school=0; school<education.schools.length;school++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree), HTMLschoolDates.replace("%data%", education.schools[school].dates), HTMLschoolLocation.replace("%data%", education.schools[school].location), HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }

    //online Courses
    $("#education").append(HTMLonlineClasses);
    for (var course=0; course<education.onlineCourses.length;course++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school), HTMLonlineDates.replace("%data%", education.onlineCourses[course].date), HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url));
    }
};

education.display();

//Projects Object
var projects = {
    "projects": [{
            "title": "Forum Gen Discussion App",
            "dates": "2017",
            "description": "I have made this movie website using Javascript",
            "images": ["images/forum.png"]
        },

        {
            "title": "Alarm Clock App",
            "dates": "2017",
            "description": "I have made this alarm as a part of online free course.",
            "images": ["images/alarm.gif"]
        },

        {
            "title": " My portfolio",
            "dates": "2017",
            "description": "I have made a responsive portfolio page using bootstrap.",
            "images": ["images/portfolio.png"]
        }
    ]
};

projects.display = function() {
    for (var project=0; project<projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title), HTMLprojectDates.replace("%data%", projects.projects[project].dates) + HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            for (var image=0; image<projects.projects[project].images.length;image++)
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
    }
};

projects.display();

// adding map
$('#mapDiv').append(googleMap);
