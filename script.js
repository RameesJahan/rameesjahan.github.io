//pre loader
window.addEventListener("load", loaderHide);
function loaderHide() {
  let loaderIcon = document.getElementById("loader");
  loaderIcon.classList.add("hide");
}

//Contact send button action
var contact_form = document.getElementById("contact-form");

var ipt_con_name = document.getElementById("contact-name");
var ipt_con_mail = document.getElementById("contact-mail");
var ipt_con_sub = document.getElementById("contact-subject");
var ipt_con_msg = document.getElementById("contact-disc");

var err_msg_name = document.getElementById("err-msg-name");
var err_msg_mail = document.getElementById("err-msg-mail");
var err_msg_sub = document.getElementById("err-msg-subject");
var err_msg_msg = document.getElementById("err-msg-disc");

function onSend(e){
  e.preventDefault();
  hideElem(err_msg_name);
  hideElem(err_msg_mail);
  hideElem(err_msg_sub);
  hideElem(err_msg_msg);
  
  window.open("mailto:inramees@gmail.com?" +
               "subject=" + ipt_con_sub.value + 
               "&body=" + ipt_con_msg.value);
               
  contact_form.reset();
}

ipt_con_name.oninvalid = function(e) {
  e.preventDefault();
  err_msg_name.style.display = "block";
};

ipt_con_mail.oninvalid = function(e) {
  e.preventDefault();
  err_msg_mail.style.display = "block";
};

ipt_con_sub.oninvalid = function(e) {
  e.preventDefault();
  err_msg_sub.style.display = "block";
};

ipt_con_msg.oninvalid = function(e) {
  e.preventDefault();
  err_msg_msg.style.display = "block";
};
contact_form.addEventListener('submit',onSend);

function hideElem(item){
  console.log(item.style.display);
  item.style.display = "none";
}
