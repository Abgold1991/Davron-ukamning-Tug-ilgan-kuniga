document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.getElementById("greeting");
  const button = document.getElementById("nextBtn");
  const footer = document.getElementById("footer");
  const music = document.getElementById("birthdayMusic"); // Musiqa elementini chaqiramiz

  let step = 1;

  button.addEventListener("click", function () {
    // Musiqani faqat birinchi bosishda ijro etamiz
    if (step === 1) {
      if (music) {
        music.play().catch((err) => {
          console.log("Musiqa autoplay bloklandi:", err);
        });
      }

      greeting.innerHTML = `
        Hurmatli Davron ukajon,<br>
        Senga bugun faqat bir tilak emas — butun bir minnatdorchilikni yo‘llayman.<br>
        Senning o'zinga xos jiddiyliging, dunyo qarashing, fikrlaring hamda o'ziga hos mehr oqibating haqiqiy ukalik belgisidir.<br><br>
        Tug‘ilgan kuningda senga sog‘lik, quvonch, va har kuni yangi ilhom tilayman.<br>
        Sen bilan birga Kursdosh hamda aka uka bo‘lish — bu katta baxt! 🌟
      `;
      button.textContent = "So‘nggi tilak 💫";
      step++;
    } else if (step === 2) {
      greeting.innerHTML = `
        Hurmatli Davon ukam,<br>
        Sening borliging — men uchun xaqiqiy akaligimni bundan tashqari qo'llab quvvatlovchi yordam beruvchi gohida to'g'ri yo'l ko'rsatuvchi ukam borligidadir. Sen turgan har bir joyda, menda ilhom, ishonch va kulgu bo‘ladi.<br><br>
        Tug‘ilgan kuningda senga shunchaki tilak emas, balki chin yurakdan rahmat aytmoqchiman.<br>
        Senga sog‘lik, tinchlik, va qalbingdagi har bir orzuning ro‘yobini tilayman! Olloh bergan umringni mazmunli va go'zal onlari ko'p bo'lsin!<br><br>
        🎁 Xurmat bilan yana bir bor Allanazarov Bobur!.
      `;
    
      button.remove(); // tugmani olib tashlaymiz

      setTimeout(() => {
        greeting.innerHTML = `<strong>Tabrik tugamaydi yana davom etadi... 😊</strong><br><br>Yana ko‘rishguncha!`;
        footer.style.display = "none";

        // Musiqani to‘xtatamiz
        if (music) {
          music.pause();
          music.currentTime = 0;
        }
      }, 180000); // 3 daqiqa
      step++;
    }
  });
});

