document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeContainer = document.getElementById("resume-container");
    var addEducationBtn = document.getElementById("add-education");
    var educationContainer = document.getElementById("education-container");
    addEducationBtn.addEventListener("click", function () {
        var newEducation = document.createElement("div");
        newEducation.classList.add("education-item");
        newEducation.innerHTML = "\n        <label>Degree:</label>\n        <input type=\"text\" class=\"degree\" placeholder=\"Enter degree\" required>\n        <label>Year:</label>\n        <input type=\"text\" class=\"year\" placeholder=\"Enter year\" required>\n      ";
        educationContainer.appendChild(newEducation);
    });
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Personal Information
        document.getElementById("display-name").textContent = document.getElementById("name").value;
        document.getElementById("display-title").textContent = document.getElementById("title").value;
        document.getElementById("display-email").textContent = document.getElementById("email").value;
        document.getElementById("display-contact").textContent = document.getElementById("contact").value;
        document.getElementById("display-address").textContent = document.getElementById("address").value;
        // Objective
        document.getElementById("display-objective").textContent = document.getElementById("objective").value;
        // Education
        var educationItems = document.querySelectorAll(".education-item");
        var displayEducation = document.getElementById("display-education");
        displayEducation.innerHTML = "";
        educationItems.forEach(function (item) {
            var degree = item.querySelector(".degree").value;
            var year = item.querySelector(".year").value;
            displayEducation.innerHTML += "<li>".concat(degree, " (").concat(year, ")</li>");
        });
        // Skills
        var skills = document.getElementById("skills").value.split(",");
        var displaySkills = document.getElementById("display-skills");
        displaySkills.innerHTML = skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("");
        // Work Experience
        var experience = document.getElementById("experience").value.split(",");
        var displayExperience = document.getElementById("display-experience");
        displayExperience.innerHTML = experience.map(function (exp) { return "<li>".concat(exp.trim(), "</li>"); }).join("");
        // Show Resume
        resumeContainer.style.display = "block";
    });
});
