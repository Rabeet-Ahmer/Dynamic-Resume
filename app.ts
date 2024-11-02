const generateResume=(event:Event)=>{
  event.preventDefault();

  event.target as HTMLFormElement;

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const gmail = (document.getElementById("gmail") as HTMLInputElement).value;
  const about = (document.getElementById("about") as HTMLInputElement).value;
  const field1 = (document.getElementById("field1") as HTMLInputElement).value;
  const para1 = (document.getElementById("para1") as HTMLInputElement).value;
  const field2 = (document.getElementById("field2") as HTMLInputElement).value;
  const para2 = (document.getElementById("para2") as HTMLInputElement).value;
  const field3 = (document.getElementById("field3") as HTMLInputElement).value;
  const para3 = (document.getElementById("para3") as HTMLInputElement).value;
  const skills1 = (document.getElementById("skills1") as HTMLInputElement).value;
  const skills2 = (document.getElementById("skills2") as HTMLInputElement).value;
  const skills3 = (document.getElementById("skills3") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement).value;


  const resume = 
    `<div class="container">
      <div class="info font">
        <h1>${name}</h1>
      <ul class="lists">
        <li><b>Phone:</b>${phone}</li>
        <li><b>Email:</b> ${gmail}</li>
      </ul>  
      </div>
      <div class="section font">
        <h2>About Me</h2>
        <p>
            ${about}
        </p>
      </div>
      <div class="section font">
        <h2>Education</h2>
        <h3>${field1}:</h3>
        <p>
            ${para1} 
        </p>
        <h3>${field2}:</h3>
        <p>
          ${para2}
        </p>
        <h3>${field3}:</h3>
        <p>
            ${para3}
        </p>
      </div>
      <div class="section font" id="skill" >
        <h2>Skills</h2>
         <div>
          <p>${skills1}</p>
          <p>${skills2}</p>
          <p>${skills3}</p>
        </div> 
      </div>
       <button id="button" class="btn" ">Hide Skills</button> 
      <div class="section font">
        <h2>Experience</h2>
        <p>
            ${experience}
        </p>
      </div>
    </div>`

    
    
    
    const inputTaker = document.getElementById("input-taker") as HTMLDivElement;
  inputTaker.style.display = "none";
  
  const resumeDiv=document.getElementById("resume-div") as HTMLDivElement;
  resumeDiv.innerHTML = resume;
  resumeDiv.style.display = 'block';
  
        const button = document.getElementById("button") as HTMLButtonElement;
        const skill = document.getElementById("skill") as HTMLDivElement;
      
        button.addEventListener("click", () => {
          if (skill.style.display === "none") {
            skill.style.display = "block";
            button.textContent = "Hide Skills";
          } else {
            skill.style.display = "none";
            button.textContent = "Show Skills";
          }
        });

};

const form=document.getElementById("form") as HTMLFormElement;
form.addEventListener("submit",generateResume);
