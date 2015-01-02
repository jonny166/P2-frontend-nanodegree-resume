var name = "Kathy Church";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


/*** BIO ***/
var bio = {"name": "Kathy Church",
	   "role": "Web Developer",
	   "contacts": {
	       "mobile":  "404-536-3569",
	       "email": "kathy.church@gmail.com",
	       "location": "Avondale Estates, GA"
	   },
	   //"bioPic": "http://placehold.it/350x150",
	   "bioPic": "images/me.jpg",
	   "welcomeMessage": "Welcome to my interactive resume!",
	   "skills": ["Python", "Web Development", "Gittin-r-done"]};

bio.display = function() {
    var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedLocation);

    $("#header").append(formattedWelcome);
    
    $("#header").append(formattedBioPic);
    if (this.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < this.skills.length; i++) {
	    $("#skills").append(HTMLskills.replace("%data%", this.skills[i]));
	}
    }
};

bio.display();


/*** WORK ***/
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
	"dates": "May 2006 - Nov 2007",
	"location": "Melbourne, FL",
	"description": "Software developer at Harris corporation",
    },
    {
	"employer": "Intec Telecom Systems",
	"position": "Development Consultant",
	"dates": "July 2004 - May 2006",
	"location": "Atlanta, GA",
	"description": "Developer for Intec Professional Services",
    },
];

work.display = function (){
    for (jobIndex in this.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[jobIndex].employer); 
	var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[jobIndex].position);
	$(".work-entry:last").append(formattedEmployer + formattedTitle); 
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[jobIndex].dates)); 
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[jobIndex].description)); 
    }
}

work.display();


/*** EDUCATION ***/
var education = {};
education.schools = [
    {
	"name": "Georgia Tech",
	"degree": "BS",
	"dates": "Aug 2000 - May 2004",
	"location": "Atlanta, Georgia",
	"majors": ["Computer Science",],
	"url": "www.gatech.edu"
    }
];
education.onlineCourses = [
    {
	"title": "Intro to HTML and CSS",
	"school": "Udacity",
	"dates": "Nov 2014 - Dec 2014",
	"url": "Udacity.com"
    },
    {
	"title": "JavaScript Basics",
	"school": "Udacity",
	"dates": "Dec 2014 - Jan 2015",
	"url": "Udacity.com"
    }
];

education.display = function (){
    for (schoolIndex in this.schools){
	$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%", this.schools[schoolIndex].name); 
	var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[schoolIndex].degree);
	var formattedDates = HTMLschoolDates.replace("%data%", this.schools[schoolIndex].dates); 
	var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[schoolIndex].location);
	$(".education-entry:last").append(formattedName + formattedDegree); 
	$(".education-entry:last").append(formattedDates); 
	$(".education-entry:last").append(formattedLocation); 
	for (majorIndex in this.schools[schoolIndex].majors){
	    var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[schoolIndex].majors[majorIndex]);
	    $(".education-entry:last").append(formattedMajor); 
	}
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    $("#onlineClasses").css("padding-left", "0px");
    for (courseIndex in this.onlineCourses){
	var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[courseIndex].title); 
	var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[courseIndex].school);
	var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[courseIndex].dates); 
	var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[courseIndex].url);
	$(".education-entry:last").append(formattedTitle + formattedSchool); 
	$(".education-entry:last").append(formattedDates); 
	$(".education-entry:last").append(formattedURL); 
   }

}

education.display();



/*** PROJECTS ***/
var projects = {};
projects.projects = [
    {
	"title": "Interactive Resume",
	"date": "December 2014",
	"description": "Interactive resume built using JavaScript",
	"images": ["images/project_pic2.jpg",
		   "images/project_pic1.jpg",
		  ]
    }
];

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


createTimeline();


// Add string formatting functionality
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



/*** NAME INTERNATIONALIZATION ***/

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


