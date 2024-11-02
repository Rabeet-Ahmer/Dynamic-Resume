var generateResume = function (event) {
    event.preventDefault();
    event.target;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var gmail = document.getElementById("gmail").value;
    var about = document.getElementById("about").value;
    var field1 = document.getElementById("field1").value;
    var para1 = document.getElementById("para1").value;
    var field2 = document.getElementById("field2").value;
    var para2 = document.getElementById("para2").value;
    var field3 = document.getElementById("field3").value;
    var para3 = document.getElementById("para3").value;
    var skills1 = document.getElementById("skills1").value;
    var skills2 = document.getElementById("skills2").value;
    var skills3 = document.getElementById("skills3").value;
    var experience = document.getElementById("experience").value;
    var resume = "<div class=\"container\">\n      <div class=\"info font\">\n        <h1>".concat(name, "</h1>\n      <ul class=\"lists\">\n        <li><b>Phone:</b>").concat(phone, "</li>\n        <li><b>Email:</b> ").concat(gmail, "</li>\n      </ul>  \n      </div>\n      <div class=\"section font\">\n        <h2>About Me</h2>\n        <p>\n            ").concat(about, "\n        </p>\n      </div>\n      <div class=\"section font\">\n        <h2>Education</h2>\n        <h3>").concat(field1, ":</h3>\n        <p>\n            ").concat(para1, " \n        </p>\n        <h3>").concat(field2, ":</h3>\n        <p>\n          ").concat(para2, "\n        </p>\n        <h3>").concat(field3, ":</h3>\n        <p>\n            ").concat(para3, "\n        </p>\n      </div>\n      <div class=\"section font\" id=\"skill\" >\n        <h2>Skills</h2>\n         <div>\n          <p>").concat(skills1, "</p>\n          <p>").concat(skills2, "</p>\n          <p>").concat(skills3, "</p>\n        </div> \n      </div>\n       <button id=\"button\" class=\"btn\" \">Hide Skills</button> \n      <div class=\"section font\">\n        <h2>Experience</h2>\n        <p>\n            ").concat(experience, "\n        </p>\n      </div>\n    </div>");
    var inputTaker = document.getElementById("input-taker");
    inputTaker.style.display = "none";
    var resumeDiv = document.getElementById("resume-div");
    resumeDiv.innerHTML = resume;
    resumeDiv.style.display = 'block';
    var button = document.getElementById("button");
    var skill = document.getElementById("skill");
    button.addEventListener("click", function () {
        if (skill.style.display === "none") {
            skill.style.display = "block";
            button.textContent = "Hide Skills";
        }
        else {
            skill.style.display = "none";
            button.textContent = "Show Skills";
        }
    });
};
var form = document.getElementById("form");
form.addEventListener("submit", generateResume);
