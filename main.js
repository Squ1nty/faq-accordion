const faqContainer = document.querySelectorAll(".faqContainer");

faqContainer.forEach(selectedContainer => {
  selectedContainer.addEventListener("click", (e) => {
    e.preventDefault();

    // Narrow down the DOM to find the current FAQ container
    let currentFAQContainerID = e.currentTarget.getAttribute("id");
    let currentFAQContainer = document.getElementById(currentFAQContainerID);

    // Identify which answerContainer is currently being focused/interacted with
    let currentAnswer = currentFAQContainer.getElementsByClassName("answerContainer")[0];
    
    // Obtain the container element that is storing the plus or minus SVG
    let currentFAQIconContainer = currentFAQContainer.getElementsByClassName("faqInteractionIconContainer")[0];

    /*
      Add or remove the "show" class for the currentAnswer container element, as well as
      inserting respective plus or minus icon
    */
    if(currentAnswer.classList.contains("show")){
      currentAnswer.classList.remove("show");

      // Add the "inert" attribute to the current answerContainer
      currentAnswer.setAttribute("inert", true);

      // Change the innerHTML of the container to include the plus icon SVG text
      currentFAQIconContainer.innerHTML = 
      `
        <svg class="faqPlusIcon" alt="Frequently Asked Question Plus or Expansion Icon Signifier" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
          <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
        </svg>
      `
    }
    else{
      currentAnswer.classList.add("show");

      // Remove the "inert" attribute off the current answerContainer
      currentAnswer.removeAttribute("inert");

      // Change the innerHTML of the container to include the minus icon SVG text
      currentFAQIconContainer.innerHTML = 
      `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
          <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
        </svg>
      `
    }
  });
});