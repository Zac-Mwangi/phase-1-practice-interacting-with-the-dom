// INITIALIZE THE VALUES
let counterr = document.getElementById("counter");
let intervals = setInterval(counter, 1000);
let counterrValue = parseInt(counterr.innerHTML);
let likes = document.querySelector(".likes");
let comment = document.getElementById("list");
let submit = document.getElementById("submit");
let add = document.getElementById("plus");
add.addEventListener("click", ()=> {
  return (counterr.innerHTML = counterrValue++);
});

let sub = document.getElementById("minus");
sub.addEventListener("click", () => {
  return counterr.innerHTML = counterrValue--;
});

let heartlike = document.getElementById("heart");
heartlike.addEventListener("click", () => {
  li = document.createElement("li");
  li.innerHTML = `${counterr.innerHTML = counterrValue++} has been liked ${heartlike.innerHTML + " 1 times"}`;
  likes.appendChild(li);
});


let form = document.getElementById("comment-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  commentArea = document.createElement("p");
  commentArea.textContent = `${e.target.comment.value}`;
  comment.appendChild(commentArea);
});

// counter
function counter() {
    counterrValue += 1;
    counterr.innerText = counterrValue;
}


// pause
let pause = document.getElementById("pause");
pause.addEventListener("click", () => {
if (pause.innerText === "pause") {
//   set the TEXT to resume
    pause.innerText = "resume";
    add.dissabled = true;
    sub.disabled = true;
    heartlike.disabled = true;
    submit.disabled = true;
    clearInterval(intervals);
} else {
//  set the TEXT to pause
    pause.innerText = "pause";
    add.disabled = false;
    sub.disabled = false;
    heartlike.disabled = false;
    submit.disabled = false;
    intervals = setInterval(counter, 1000);
}
});