let nameinp = document.querySelector(".name");
let fullname = document.querySelector(".secname");
let numb = document.querySelector(".numb");
let pwd = document.querySelector(".pwd");
let chk = document.querySelector(".chk");

// output
let nameoup = document.querySelector(".firstnameoup");
let fullnameoup = document.querySelector(".secnameoup");
let numboup = document.querySelector(".numboup");
let pwdoup = document.querySelector(".pwdoup");

// button login and logout
let sub = document.querySelector(".sub");
let logOut = document.querySelector(".logout");

// Adding event listeners to the signup button

sub.addEventListener(("click"), (e)=>{
    e.preventDefault();

    if (nameinp.value == "" || fullname.value == "" || numb.value == "" || pwd.value == "") {
        let alt = document.querySelector(".alert").style.display = "block";

        let x = window.setTimeout(none, 2000);

        function none(){
            let alt = document.querySelector(".alert").style.display = "none"
        }

    } else {
        // Upload cont should display none;
        let upldform = document.querySelector(".upload-form").style.display = "none";
        let resultform = document.querySelector(".result-form").style.display = "block";

        nameoup.textContent ='First Name:' + nameinp.value;
        fullnameoup.textContent ='Second Name:' +  fullname.value;
        numboup.textContent ='Phonenumber:' +  numb.value;
        pwdoup.textContent ='Password:' +  pwd.value;
    }

    let img = document.querySelector(".img").style.display = "none";

    nameinp.value = "";
    fullname.value = "";
    pwd.value = "";
    numb.value = "";
});

logOut.addEventListener("click", (e)=>{
    e.preventDefault();

    let upldform = document.querySelector(".upload-form").style.display = "block";
    let resultform = document.querySelector(".result-form").style.display = "none";

});

// uploading profile pics
let addbtn = document.querySelector(".add");
let fileinp= document.querySelector("#file");

fileinp.addEventListener("change", (e)=>{
    e.preventDefault();

    let url = URL.createObjectURL(fileinp.files[0]);
    let img = document.querySelector(".img");
    let img_2 = document.querySelector("#img");
    img.src = url;
    img_2.src = url;
})


// hide and see

chk.addEventListener("click", ()=>{

    if (pwd.type == "password") {
        pwd.type = "text"
    } else {
        pwd.type = "password"
    }
})















