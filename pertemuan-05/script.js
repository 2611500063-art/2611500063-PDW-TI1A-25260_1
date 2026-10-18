const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
const isOpen = navMenu.classList.toggle("nav-open");
navToggle.setAttribute("aria-expanded", isOpen);
if (isOpen) {
navToggle.setAttribute("aria-label", "Tutup navigasi");
} else {
navToggle.setAttribute("aria-label", "Buka navigasi");
}});


const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");
const tanggalInput = document.getElementById("tanggal");
const prodiInput = document.getElementById("prodi");
const pesanInput = document.getElementById("pesan");
contactForm.addEventListener("submit", (event) => {
event.preventDefault();formFeedback.className = "form-feedback-error";
const nama = namaInput.value.trim();
if (nama.length < 3 || nama.length > 50) {
formFeedback.textContent = "Nama lengkap harus diisi";
return;
}
const email = emailInput.value.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    formFeedback.textContent = "Masukkan Email anda";
    return;
}