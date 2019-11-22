document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const form = document.querySelector(".list-container form");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const ul = document.getElementById('sf-places');
    const li = document.createElement('li');
    const input = form.getElementsByClassName('favorite-input');
    const inputVal = input[0].value;
    // debugger;
    input[0].value = "";
    li.textContent = inputVal;
    ul.appendChild(li);
  });
  



  // adding new photos

  const button = document.getElementsByClassName("photo-show-button")[0];
  // debugger;
  button.addEventListener('click', function(e) {
    // e.preventDefault();
    const formContainer = document.getElementsByClassName("photo-form-container")[0];
    // debugger;
    if ([].slice.call(formContainer.classList).includes("hidden")) {
      formContainer.classList.remove("hidden");
    } else {
      formContainer.classList.add("hidden");
    }
  });

  const addNewPhotoForm = document.querySelector(".photo-form-container form");
  addNewPhotoForm.addEventListener("submit", function(e){
    e.preventDefault();
    const ul = document.getElementsByClassName("dog-photos")[0];
    const li = document.createElement("li");
    const img = document.createElement("img");

    const input = addNewPhotoForm.querySelector(".photo-url-input");
    const imgUrl = input.value;
    input.value = "";

    img.setAttribute("src", imgUrl);
    li.appendChild(img);
    ul.appendChild(li);
  });



});
