window.addEventListener("submit", (e) =>{
    e.preventDefault();
    let ss = sessionStorage;

    ss.setItem("first_name", document.querySelector("#first-name").value);
    ss.setItem("last_name", document.querySelector("#last-name").value);
    ss.setItem("defines_you", document.querySelector("#defines-you").value);

    ss.setItem("ph_number", document.querySelector("#phone-number").value);
    ss.setItem("mail", document.querySelector("#mail").value);
    ss.setItem("linkdin", document.querySelector("#linkdin").value);
    ss.setItem("address", document.querySelector("#address").value);

    let size = 0;

    let education = document.getElementsByClassName("education-box");
    size = education.length;
    let arr = [];
    let obj = {};

    for(let i = 0; i < size; i++)
    {
        obj.course = document.getElementsByClassName("course")[i].value;
        obj.college = document.getElementsByClassName("college")[i].value;
        obj.from = document.getElementsByClassName("from")[i].value;
        obj.to = document.getElementsByClassName("to")[i].value;

        arr.push(JSON.parse(JSON.stringify(obj)));
    }
    
    ss.setItem("education", JSON.stringify(arr));

    arr = [];
    let skills = document.getElementsByClassName("skill");
    size = skills.length;

    for(let i = 0; i < size; i++)
    {
        arr.push(skills[i].value);
    }

    ss.setItem("skills", JSON.stringify(arr));



    let prof = document.getElementsByClassName("professional");
    size = prof.length;
    arr = [];
    obj = {};

    for(let i = 0; i < size; i++)
    {
        obj.position = document.getElementsByClassName("position")[i].value;
        obj.company = document.getElementsByClassName("company")[i].value;
        obj.about = document.getElementsByClassName("about")[i].value;
        obj.prof_from = document.getElementsByClassName("prof_from")[i].value;
        obj.prof_to = document.getElementsByClassName("prof_to")[i].value;

        arr.push(JSON.parse(JSON.stringify(obj)));
    }

    ss.setItem("prof", JSON.stringify(arr));


    arr = [];
    let achi = document.getElementsByClassName("achivement");
    size = achi.length;

    for(let i = 0; i < size; i++)
    {
        arr.push(achi[i].value);
    }

    ss.setItem("achi", JSON.stringify(arr));

    window.location.href = "./resume.html";
    
});


// ***********saving image********************** //
document.querySelector("#image").addEventListener("change", function(){
    console.log("change");
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener("load", ()=>{
        sessionStorage.setItem("image", reader.result);
    })
})


function add_education()
{
    let education_box = document.getElementsByClassName("education-box")[0];

    let new_box = document.createElement("div");
    new_box.classList.add("education-box");
    new_box.innerHTML = education_box.innerHTML;

    // let education = document.querySelector("#education");
    $("#education").append(new_box);
    // education.appendChild(new_box);
}



function pop_education()
{
    let education_box = document.getElementsByClassName("education-box");
    if(education_box.length == 1)
        return;

    education_box = education_box[education_box.length-1];

    education_box.style.animation = "hide_animation";
    education_box.style.animationDuration = "300ms";
    setTimeout(()=>{
        education_box.remove();
    }, 300);
}


function add_skill(){
    let skill_box = document.querySelectorAll(".skill-box")[0];
    let new_box = document.createElement("div");
    new_box.classList.add("skill-box");
    new_box.innerHTML = skill_box.innerHTML;
    let skills = document.querySelector("#skills");
    skills.append(new_box);
}

function pop_skill()
{
    let skill_box = document.querySelectorAll(".skill-box");
    if(skill_box.length === 1)
        return;

    skill_box = skill_box[skill_box.length-1]
    skill_box.style.animation = "hide_animtion";
    skill_box.style.animationDuration = "300ms";

    setTimeout(()=>{
        skill_box.remove();
    }, 300);
}


function add_professional()
{
    let education_box = document.getElementsByClassName("professional")[0];

    let new_box = document.createElement("div");
    new_box.classList.add("professional");
    new_box.innerHTML = education_box.innerHTML;

    // let education = document.querySelector("#education");
    $("#prof").append(new_box);
    // education.appendChild(new_box);
}
function pop_professional()
{
    let skill_box = document.querySelectorAll(".professional");
    if(skill_box.length === 1)
        return;

    skill_box = skill_box[skill_box.length-1]
    skill_box.style.animation = "hide_animtion";
    skill_box.style.animationDuration = "300ms";

    setTimeout(()=>{
        skill_box.remove();
    }, 300);
}


function add_achivement(){
    let skill_box = document.querySelectorAll(".achivement-box")[0];
    let new_box = document.createElement("div");
    new_box.classList.add("achivement-box");
    new_box.innerHTML = skill_box.innerHTML;
    let skills = document.querySelector("#achivements");
    skills.append(new_box);
}

function pop_achivement()
{
    let skill_box = document.querySelectorAll(".achivement-box");
    if(skill_box.length === 1)
        return;

    skill_box = skill_box[skill_box.length-1]
    skill_box.style.animation = "hide_animtion";
    skill_box.style.animationDuration = "300ms";

    setTimeout(()=>{
        skill_box.remove();
    }, 300);
}