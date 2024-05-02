let count = 0;

const value = document.querySelector("span");
const btns = document.querySelectorAll(".buttonContainer button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    value.style.color = count > 0 ? "green" : count == 0 ? "black" : "red";
    value.textContent = count;
  });
});
