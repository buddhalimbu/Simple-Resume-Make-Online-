//JavaScript

const gensimple = document.querySelector(".gen-simple");
const genunique = document.querySelector(".gen-unique");

const cvbtns = document.querySelector(".cv-btns");

const inputimg = document.querySelector("#hide-on-simple");

const resumeS = document.querySelector(".resumeS");
const iwraps = document.querySelector(".input-wraps");
//logging
const loading = document.querySelector(".loading");
const resume = document.querySelector(".resume");
const errorpage = document.querySelector(".errorpage");



function display(){
  let fileUpload = document.querySelector(".input-img").value;
  //alert(fileUpload);
  // let image = document.getElementById("img");
//  img.src = fileUpload;

document.querySelector(".red").innerHTML=fileUpload;

}

//inputs first 
function generateU(){

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

const fw1= document.querySelector('.input-work1').value;
const fw2 = document.querySelector(".input-work2").value;

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

const fwork = document.querySelector(".fw1");
const swork = document.querySelector(".fw2");

const btngen = document.querySelector(".btn-gen1");

const btngen2 = document.querySelector(".btn-gen2");

var f = document.querySelector(".input-img");

const uidno = document.querySelector(".idno").value;
const ums = document.querySelector(".ms").value;

const uidnoholder = document.querySelector(".uidnoholder");
const umsholder = document.querySelector(".umsholder");


//initiate the itmes

if(inputname==="" || inputage==="" || inputadd==="" || inputbg==="" || inputdate==="" || inputemail==="" || inputphone==="" || inputnationality==="" || inputfname==="" || f.files.length===0){
  errorpage.classList.add("show");
  errorpage.innerHTML = "<div> Error, Loading ... </div><span class='spin'></span>";
  setTimeout(()=>{
    errorpage.classList.remove("show")
  },4000);
}

else {
  
  let reader = new FileReader();
  let input = document.querySelector(".input-img");
    reader.onload = () => {
      let img = document.querySelector('.img');
      
      const imgUrl = reader.result;
      img.style.backgroundImage = `url('${imgUrl}')`;
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
  uidnoholder.innerHTML=uidno;
umsholder.innerHTML=ums;
  nationality.innerHTML=inputnationality;
  clg.innerHTML=inputcollage;
  cp.innerHTML=inputcomputer;
  fwork.innerHTML=fw1;
  swork.innerHTML=fw2;
  loading.classList.add("show");
  iwraps.classList.remove("visible");
  
  
  window.scrollTo(0, loading.scrollHeight);
  
  
  //setimeout
  setTimeout(()=>{
    loading.classList.remove("show");
    resume.classList.add("show");
    genunique.classList.add("visible");
    
  },4000);
  
  
}
  
  
}


//Simple GEN
function generateS(){
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

const work1= document.querySelector('.input-work1').value;
const work2 = document.querySelector(".input-work2").value;

  
const names = document.querySelector(".names");


const ages = document.querySelector(".ages");

const dofs = document.querySelector(".dobs");

const adds = document.querySelector(".adds");

const fnames = document.querySelector(".fnames");

const bgroups = document.querySelector(".bgroups");

const emails = document.querySelector(".emails");
const phones = document.querySelector(".phones");
const nationalitys = document.querySelector(".nationalitys");


const clgs = document.querySelector(".clgs");

const cps = document.querySelector(".cps");
const firstwork = document.querySelector(".firstwork");
const secondwork = document.querySelector(".secondwork");

const idno = document.querySelector(".idno").value;
const ms = document.querySelector(".ms").value;

const idnoholder = document.querySelector(".idnoholder");
const msholder = document.querySelector(".msholder");


if(inputname==="" || inputage==="" || inputadd==="" || inputbg==="" || inputdate==="" || inputemail==="" || inputphone==="" || inputnationality==="" || inputfname===""){
  errorpage.classList.add("show");
  errorpage.innerHTML = "<div> Error, Loading ... </div><span class='spin'></span>";
  setTimeout(()=>{
    errorpage.classList.remove("show")
  },4000);
}

else {
  
  
  //merge values of input 
  names.innerHTML= inputname;
  ages.innerHTML=inputage;
  adds.innerHTML=inputadd;
  dofs.innerHTML=inputdate;
  fnames.innerHTML=inputfname;
  bgroups.innerHTML=inputbg;
  phones.innerHTML=inputphone;
  emails.innerHTML=inputemail;
  nationalitys.innerHTML=inputnationality;
  idnoholder.innerHTML=idno;
msholder.innerHTML=ms;
  clgs.innerHTML=inputcollage;
  cps.innerHTML=inputcomputer;
  firstwork.innerHTML=work1;
  secondwork.innerHTML=work2;
  loading.classList.add("show");
  iwraps.classList.remove("visible");
  
  
  window.scrollTo(0, loading.scrollHeight);
  
  
  //setimeout
  setTimeout(()=>{
    loading.classList.remove("show");
    resumeS.classList.add("visible");
    gensimple.classList.add("visible");
  
  },4000)
  
  
}
  
  
}







//Check
function check(x){
  var f = document.querySelector(".input-img");
  var imgholder = document.querySelector(".imgholder");
  var imgholderImg = imgholder.querySelector("img");
  
  if(f.files.length == 0){
    document.querySelector(".alert").innerHTML = " Failed : Img Not Found. ";
  }
  else {

    document.querySelector(".alert").innerHTML = " Success : " + f.value + "Img Found.";
    document.querySelector(".alert").classList.add("color");
    imgholder.classList.add("flex");
    let reader = new FileReader();
  let input = document.querySelector(".input-img");
    reader.onload = () => {
      let img = document.querySelector('.imgholder img');
      img.src = reader.result;
    };
    reader.readAsDataURL(input.files[0]);
  
  }
}


  function download(x) {
const d = document.querySelector(".download");
const orihtml = d.innerHTML;
d.innerHTML = "Downloading..";
setTimeout(()=>{
  d.innerHTML=orihtml
},5000);
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

//Download S

function downloadS() {
const d = document.querySelector(".download");
const orihtml = d.innerHTML;
d.innerHTML = "Downloading..";
setTimeout(()=>{
  d.innerHTML=orihtml
},4000);
    const captureElement = document.querySelector(".resumeS");

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



function genS(){
  cvbtns.classList.add("hide");
  inputimg.classList.add("hide");
  iwraps.classList.add("visible");
  document.querySelector(".genS").classList.add("visible");
  errorpage.classList.add("show");
  errorpage.innerHTML = "<span class='spin'></span>";
  setTimeout(()=>{
    errorpage.classList.remove("show")
  },4000);
}

function genU(){
  cvbtns.classList.add("hide");
  iwraps.classList.add("visible");
  document.querySelector(".genU").classList.add("visible");
  errorpage.classList.add("show");
  errorpage.innerHTML = "<span class='spin'></span>";
  setTimeout(()=>{
    errorpage.classList.remove("show")
  },4000);
}



function Closeme(){
  var x = document.querySelector(".imgholder").classList.remove("flex")
}

function openov(){
  document.querySelector('.ov').style.display='flex'
}


