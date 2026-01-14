function unlock() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;

  if (day == 15 && month == 1) {
    goToSlide(2);
    document.getElementById("birthdayMusic").play();
    setTimeout(() => goToSlide(3), 6000);
  } else {
    alert("Wrong date, baby 😝");
  }
}

function goToSlide(n) {
  document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
  document.getElementById("slide" + n).classList.add("active");
}

setTimeout(() => {
  if (document.getElementById("slide3").classList.contains("active")) {
    goToSlide(4);
  }
}, 6000);

const startDate = new Date("2024-07-24T00:00:00");
setInterval(() => {
  const diff = new Date() - startDate;
  document.getElementById("days").innerText = Math.floor(diff / 86400000);
  document.getElementById("hours").innerText = Math.floor(diff / 3600000) % 24;
  document.getElementById("minutes").innerText = Math.floor(diff / 60000) % 60;
  document.getElementById("seconds").innerText = Math.floor(diff / 1000) % 60;
}, 1000);

function openLetter() {
  document.getElementById("letter").style.display = "block";
}

function playVideo() {
  document.getElementById("finalVideo").play();
}
