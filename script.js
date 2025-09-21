// Smooth scroll untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Ambil semua card dengan data-modal
const cards = document.querySelectorAll(".exp-card");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close");
const backBtns = document.querySelectorAll(".back-btn");

// Event klik card -> buka modal
cards.forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

// Event klik tombol X atau Kembali -> tutup modal
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

// Tutup modal kalau klik di luar isi modal
window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.querySelectorAll(".toggle-card").forEach(card => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    const targetList = document.getElementById(targetId);

    // Tutup semua list & hilangkan active di card lain
    document.querySelectorAll(".project-list").forEach(list => {
      if (list !== targetList) list.classList.remove("active");
    });
    document.querySelectorAll(".project-card").forEach(c => {
      if (c !== card) c.classList.remove("active");
    });

    // Toggle card & list yang diklik
    card.classList.toggle("active");
    targetList.classList.toggle("active");
  });
});
