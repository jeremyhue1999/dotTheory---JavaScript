function isFieldEmpty() {
  const field = document.querySelector(".info2");
  if (!field.value) {
    return true;
  } else {
    return false;
  }
}
const fieldTest = isFieldEmpty();

if (fieldTest) {
  alert("please provide information");
} else {
  console.log("Field is not empty");
}
