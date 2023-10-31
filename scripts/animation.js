let skillsAnim = document.querySelectorAll(".logo img");

let currentIndex = 0;

function animateElements() {
  if (currentIndex == skillsAnim.length) {
    currentIndex = 0;
  }

  if (currentIndex < skillsAnim.length) {
    const currentElement = skillsAnim[currentIndex];
    currentElement.classList.add("skillsAnim");
    //затримка перед видаленням класу з анімацією. 
    //Якщо клас не видаляти - анімація відпрацює тільки по одному разу.
    setTimeout(() => {
      currentElement.classList.remove("skillsAnim");
    }, 1500);
    currentIndex++;
    // Затримка перед анімацією наступного елементу (2 секунди)
    setTimeout(animateElements, 1500);
  }
}

//Початок анімації
animateElements();
