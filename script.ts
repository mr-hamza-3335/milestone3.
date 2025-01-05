interface Education {
    degree: string;
    year: string;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeContainer = document.getElementById("resume-container") as HTMLElement;
  
    const addEducationBtn = document.getElementById("add-education") as HTMLButtonElement;
    const educationContainer = document.getElementById("education-container") as HTMLDivElement;
  
    addEducationBtn.addEventListener("click", () => {
      const newEducation = document.createElement("div");
      newEducation.classList.add("education-item");
      newEducation.innerHTML = `
        <label>Degree:</label>
        <input type="text" class="degree" placeholder="Enter degree" required>
        <label>Year:</label>
        <input type="text" class="year" placeholder="Enter year" required>
      `;
      educationContainer.appendChild(newEducation);
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Personal Information
      (document.getElementById("display-name") as HTMLElement).textContent = (document.getElementById("name") as HTMLInputElement).value;
      (document.getElementById("display-title") as HTMLElement).textContent = (document.getElementById("title") as HTMLInputElement).value;
      (document.getElementById("display-email") as HTMLElement).textContent = (document.getElementById("email") as HTMLInputElement).value;
      (document.getElementById("display-contact") as HTMLElement).textContent = (document.getElementById("contact") as HTMLInputElement).value;
      (document.getElementById("display-address") as HTMLElement).textContent = (document.getElementById("address") as HTMLTextAreaElement).value;
  
      // Objective
      (document.getElementById("display-objective") as HTMLElement).textContent = (document.getElementById("objective") as HTMLTextAreaElement).value;
  
      // Education
      const educationItems = document.querySelectorAll(".education-item") as NodeListOf<HTMLDivElement>;
      const displayEducation = document.getElementById("display-education") as HTMLElement;
      displayEducation.innerHTML = "";
      educationItems.forEach((item) => {
        const degree = (item.querySelector(".degree") as HTMLInputElement).value;
        const year = (item.querySelector(".year") as HTMLInputElement).value;
        displayEducation.innerHTML += `<li>${degree} (${year})</li>`;
      });
  
      // Skills
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(",");
      const displaySkills = document.getElementById("display-skills") as HTMLElement;
      displaySkills.innerHTML = skills.map((skill) => `<li>${skill.trim()}</li>`).join("");
  
      // Work Experience
      const experience = (document.getElementById("experience") as HTMLTextAreaElement).value.split(",");
      const displayExperience = document.getElementById("display-experience") as HTMLElement;
      displayExperience.innerHTML = experience.map((exp) => `<li>${exp.trim()}</li>`).join("");
  
      // Show Resume
      resumeContainer.style.display = "block";
    });
  });
  