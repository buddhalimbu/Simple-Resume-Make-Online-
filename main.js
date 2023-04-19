//JavaScript

function display(){
  let fileUpload = document.querySelector(".input-img").value;
  //alert(fileUpload);
  // let image = document.getElementById("img");
//  img.src = fileUpload;

document.querySelector(".red").innerHTML=fileUpload;

}


//inputs first 
function generate(){
  
const inputname = document.querySelector('.input-name').value;

const inputage= document.querySelector('.input-age').value;

const inputdate = document.querySelector('.input-date').value;

const inputfname = document.querySelector('.input-fname').value;

const inputadd = document.querySelector('.input-add').value;

const inputbg= document.querySelector('.input-bg').value;

const inputphone = document.querySelector('.input-phone').value;

const inputemail = document.querySelector('.input-email').value;

const inputnationality = document.querySelector('.input-nationality').value;

const inputcollage = document.querySelector('.input-collage').value;

const inputcomputer = document.querySelector('.input-computer').value;

const inputwork= document.querySelector('.input-work').value;

//items after clicks
const img = document.querySelector(".img img");
const tname = document.querySelector(".tname");
const tadd = document.querySelector(".tadd");

const name = document.querySelector(".name");


const age = document.querySelector(".age");

const dof = document.querySelector(".dob");

const add = document.querySelector(".add");

const fname = document.querySelector(".fname");

const bgroup = document.querySelector(".bgroup");

const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const nationality = document.querySelector(".nationality");


const clg= document.querySelector(".clg");

const cp = document.querySelector(".cp");

const work = document.querySelector(".work");

//logging
const loading = document.querySelector(".loading");
const resume = document.querySelector(".resume");
const iwraps = document.querySelector(".input-wraps");

const btngen = document.querySelector(".btn-gen1");

const btngen2 = document.querySelector(".btn-gen2");

var f = document.querySelector(".input-img");

const errorpage = document.querySelector(".errorpage");
//initiate the itmes

if(inputname==="" || inputage==="" || inputadd==="" || inputbg==="" || inputdate==="" || inputemail==="" || inputphone==="" || inputnationality==="" || inputfname==="" || f.files.length===0){
  errorpage.classList.add("show");
  errorpage.innerHTML = "Alert !! Check your details.<br/> Reloading page.......! ";
  setTimeout(()=>{
    errorpage.classList.remove("show")
  },4000);
}

else {
  
  let reader = new FileReader();
  let input = document.querySelector(".input-img");
    reader.onload = () => {
      let img = document.querySelector('.img img');
      img.src = reader.result;
    };
    reader.readAsDataURL(input.files[0]);
  
  //merge values of input 
  name.innerHTML= inputname;
  tname.innerHTML=inputname;
  tadd.innerHTML=inputadd;
  age.innerHTML=inputage;
  add.innerHTML=inputadd;
  dof.innerHTML=inputdate;
  fname.innerHTML=inputfname;
  bgroup.innerHTML=inputbg;
  phone.innerHTML=inputphone;
  email.innerHTML=inputemail;
  nationality.innerHTML=inputnationality;
  clg.innerHTML=inputcollage;
  cp.innerHTML=inputcomputer;
  work.innerHTML=inputwork;
  loading.classList.add("show");
  iwraps.classList.add("hide");
  
  
  window.scrollTo(0, loading.scrollHeight);
  
  
  //setimeout
  setTimeout(()=>{
    loading.classList.remove("show");
    resume.classList.add("show");
    btngen.classList.add("show");
    btngen2.classList.add("show")
  },4000)
  
  
}
  
  
}




function check(){
  var f = document.querySelector(".input-img");
  if(f.files.length == 0){
    document.querySelector(".alert").innerHTML = " Failed : Not found Img ";
  }
  else {
    document.querySelector(".alert").innerHTML = " Success : " + f.value;
    document.querySelector(".alert").classList.add("color")
  }
}


  function download(x) {

    const captureElement = document.querySelector(".resume");

    html2canvas(captureElement)
        .then((canvas) => {
            canvas.style.display = "none";

            document.body.appendChild(canvas);

            return canvas;
        })

        .then((canvas) => {
            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

            const a = document.createElement("a");

            a.setAttribute("download", "my-image.png");

            a.setAttribute("href", image);

            a.click();

            canvas.remove();
        });

}