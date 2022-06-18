// INITIALIZE THE VALUES
let add = document.getElementById("plus");
let sub = document.getElementById("minus");
let show = document.getElementById("counter");
let showValue = parseInt(show.innerHTML);
let heartlike = document.getElementById("heart");
let submitLikesNo = document.querySelector(".likes");
let form = document.getElementById("comment-form");
let comment = document.getElementById("list");
let submit = document.getElementById("submit");
let pause = document.getElementById("pause");
let intervals = setInterval(counter, 1000);

add.addEventListener("click", ()=> {
  return (show.innerHTML = showValue++);
});

sub.addEventListener("click", () => {
  return show.innerHTML = showValue--;
});

heartlike.addEventListener("click", () => {
  li = document.createElement("li");
  li.innerHTML = `${show.innerHTML = showValue++} has been liked ${
    heartlike.innerHTML + " 1 times"
  }`;
  submitLikesNo.appendChild(li);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  comInput = document.createElement("p");
  comInput.textContent = `${e.target.comment.value}`;
  comment.appendChild(comInput);
});

pause.addEventListener("click", () => {
  if (pause.innerText === "pause") {
    pause.innerText = "Resume";
    add.disabled = true;
    sub.disabled = true;
    heartlike.disabled = true;
    submit.disabled = true;
    ResetIntervals();
  } else {
    pause.innerText = "pause";
    add.disabled = false;
    sub.disabled = false;
    heartlike.disabled = false;
    submit.disabled = false;
    intervals = setInterval(counter, 1000);
  }
});

function ResetIntervals() {
  clearInterval(intervals);
}


// counter


function counter() {
    showValue += 1;
    show.innerText = showValue;
}
