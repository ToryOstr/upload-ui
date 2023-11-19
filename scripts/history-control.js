let btnHistoryControl = document.querySelector('.history-control');
let historyContainer = document.querySelector('.history');
function toggleHistoryActiveClass() {
  historyContainer.classList.toggle('active');
  let isActive = historyContainer.classList.contains('active');
  if (isActive) {
    btnHistoryControl.innerHTML = (
      `<span>
        Close history
        <svg style='transform: rotate(0)'>
          <use href="./images/icons/symbol-defs.svg#icon-arrow"></use>
        </svg>
      </span>`
    );
  } else {
    btnHistoryControl.innerHTML = `<span>
        Open history
        <svg>
          <use href="./images/icons/symbol-defs.svg#icon-arrow"></use>
        </svg>
      </span>`;
  }
}

btnHistoryControl.addEventListener('click', toggleHistoryActiveClass);