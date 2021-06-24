const btn = document.getElementsByTagName("button");
const emailInput = document.getElementsByTagName("input");
const spanMsg = document.querySelector(".msg");

btn[0].addEventListener("click", () => {
  const email = emailInput[0].value;
  const result = emailValidator(email);

  if (result) {
    spanMsg.innerHTML = "Subscribed Successfully";
    spanMsg.className = "msg-success";
  } else {
    spanMsg.innerHTML = "Please provide a valid email address";
    spanMsg.className = "msg-error";
    emailInput[0].className = "error";
  }
});

emailInput[0].addEventListener("input", () => {
  emailInput[0].className = "";
  spanMsg.innerHTML = "";
  spanMsg.className = "";
});

const emailValidator = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
