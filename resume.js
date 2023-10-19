ss = sessionStorage;

document.querySelector("#ph_number").textContent = ss.getItem("ph_number");
document.querySelector("#mail").textContent = ss.getItem("mail");
document.querySelector("#linkdin").textContent = ss.getItem("linkdin");
document.querySelector("#address").textContent = ss.getItem("address");
document.querySelector("#first_name").textContent = ss.getItem("first_name");
document.querySelector("#last_name").textContent = ss.getItem("last_name");
document.querySelector("#defines_you").textContent = ss.getItem("defines_you");

document.querySelector("#image").src  = ss.getItem("image");


//******************skills*************************//


let arr = ss.getItem("skills");
arr = JSON.parse(arr);

let ul = document.querySelector("#skills-ul");
for(let i = 0; i < arr.length; i++)
{
    let li = document.createElement("li");
    li.textContent = arr[i];
    ul.appendChild(li);
}



// **********************achivements********************** //
arr = ss.getItem("skills");
arr = JSON.parse(arr);

ul = document.querySelector("#achivements");

arr.forEach((val, i, arr)=>{
    let li = document.createElement("li");
    li.textContent = val;
    ul.appendChild(li);
})


// ********************education**************************** //

arr = ss.getItem("education");
arr = JSON.parse(arr);

let education = document.getElementsByClassName("education-list-box")[0];
for(let i = 0; i < arr.length; i++)
{
    let obj = arr[i];   
    let list = document.createElement("div");
    list.innerHTML = `
        <p>${obj.course}</p>
        <p>${obj.college}</p>
        <p>${obj.from.split("-")[0]}-${obj.to.split("-")[0]}</p>
    `;
    
    list.classList.add("education-list")
    education.appendChild(list);
}



// ********************professional**************************** //

arr = ss.getItem("prof");
arr = JSON.parse(arr);

let work = document.getElementsByClassName("work-experience")[0];
for(let i = 0; i < arr.length; i++)
{
    let obj = arr[i];   
    let list = document.createElement("div");
    list.innerHTML = `
    <div class = "we-card-row1">
        <p>${obj.position}</p>
        <p>${obj.prof_from.split("-")[0]}-${obj.prof_to.split("-")[0]}</p>
    </div>
    <h5>${obj.company}</h5>
    <p>
        ${obj.about}
    </p>
    `;
    
    list.classList.add("we-card")
    work.appendChild(list);
}









// **********print***************** //

