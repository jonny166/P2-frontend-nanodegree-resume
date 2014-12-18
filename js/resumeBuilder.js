var name = "Kathy Church";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {"name": "Kathy Church",
	   "role": "Web Developer",
	   "contacts": {
	       "mobile":  "404-536-3569",
	       "email": "kathy.church@gmail.com",
	       "location": "Avondale Estates, GA"
	   },
	   "bioPic": "http://placehold.it/350x150",
	   "welcomeMessage": "Welcome to my interactive resume!",
	   "skills": ["Python", "Web Development", "Gittin r done"]};

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedBioPic);

var work = {};
work.jobs = [
    {
	"employer": "CSG Invotas",
	"position": "Sr Software Developer",
	"dates": "Dec 2013 - Present",
	"location": "Atlanta, GA",
	"description": "Developer for CSG Invotas Security Orchestrator Product",
    },
    {
	"employer": "Intec Billing/CSG International",
	"position": "Application Development Consultant",
	"dates": "Nov 2007 - Dec 2013",
	"location": "Atlanta, GA",
	"description": "Developer for CSG International Government Solutions",
    },
    {
	"employer": "Harris Corporation",
	"position": "Software Engineer 1",
	"dates": "2006 - 2007",
	"location": "Melbourne, FL",
	"description": "Software developer at Harris corporation",
    },
    {
	"employer": "Intec Telecom Systems",
	"position": "Development Consultant",
	"dates": "2004 - 2006",
	"location": "Atlanta, GA",
	"description": "Developer for Intec Professional Services",
    },
];

var education = {};
education.schools = [
    {
	"name": "Georgia Tech",
	"degree": "BS",
	"graduated": "2004",
	"location": "Atlanta, Georgia",
	"major": "Computer Science"
    }
];
education.onlineCourses = [
    {
	"title": "Intro to HTML and CSS",
	"school": "Udacity",
	"date": "November 2014",
	"url": "Udacity.com"
    },
    {
	"title": "JavaScript Basics",
	"school": "Udacity",
	"date": "December 2014",
	"url": "Udacity.com"
    }
];

var projects = {};
projects.projects = [
    {
	"title": "Interactive Resume",
	"date": "December 2014",
	"description": "Interactive resume built using JavaScript",
	"images": ["http://placehold.it/350x150",
		   "http://placehold.it/350x150"
		  ]
    }
];

if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

displayWork(work);

function displayWork(work){
    for (jobIndex in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer); 
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].position);
	$(".work-entry:last").append(formattedEmployer + formattedTitle); 
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates)); 
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description)); 
    }
}


projects.display = function (){
    for (projectIndex in projects.projects){
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectIndex].title); 
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[projectIndex].date);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectIndex].description);
	$(".project-entry:last").append(formattedTitle); 
	$(".project-entry:last").append(formattedDates); 
	$(".project-entry:last").append(formattedDescription); 
	for (imgIndex in projects.projects[projectIndex].images){
	    var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[projectIndex].images[imgIndex]);
	$(".project-entry:last").append(formattedImg); 
	}
    }
}

projects.display();

if (!String.prototype.format) {
    String.prototype.format = function() {
        var str = this.toString();
        if (!arguments.length)
            return str;
        var args = typeof arguments[0],
            args = (("string" == args || "number" == args) ? arguments : arguments[0]);
        for (arg in args)
            str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), args[arg]);
        return str;
    }
}

function inName(myName){
    console.log(myName);
    console.log("got name {0}".format(myName));
    nameArray = myName.split(" ");
    firstName = nameArray[0];
    lastName = nameArray[1];
    inFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    inLastName = lastName.toUpperCase();
    var fullName = [inFirstName, inLastName];
    return fullName.join(" ");
}



$("#main").append(internationalizeButton);
$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

// Display a map
$("#mapDiv").append(googleMap);

/*
for (i = 0; i < education.schools.length; i++) {
    $("#main").append(HTMLschoolName.replace("%data%", education.schools[i].name));
    $("#main").append(HTMLschoolDates.replace("%data%", education.schools[i].graduated));
    $("#main").append(HTMLschoolDegree.replace("%data%", education.schools[i].major));
    $("#main").append(HTMLschoolStart.replace("%data%", education.schools[i].startDate));
}
$("#main").append(HTMLworkTitle.replace("%data%", work["position"]));
*/

