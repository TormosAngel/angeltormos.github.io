    function toggleLanguage(language) {
      const espanolSection = document.querySelector('.espanol');
      const englishSection = document.querySelector('.english');
      const valencianoSection = document.querySelector('.valenciano');

      const espanolButton = document.querySelector('.espanol-button');
      const englishButton = document.querySelector('.english-button');
      const valencianoButton = document.querySelector('.valenciano-button');

      if (language === 'espanol') {
        espanolSection.style.display = 'block';
        englishSection.style.display = 'none';
        valencianoSection.style.display = 'none';
        espanolButton.classList.add('active-button');
        englishButton.classList.remove('active-button');
        valencianoButton.classList.remove('active-button');
      } else if (language === 'english') {
        espanolSection.style.display = 'none';
        englishSection.style.display = 'block';
        valencianoSection.style.display = 'none';
        espanolButton.classList.remove('active-button');
        englishButton.classList.add('active-button');
        valencianoButton.classList.remove('active-button');
      } else if (language === 'valenciano') {
        espanolSection.style.display = 'none';
        englishSection.style.display = 'none';
        valencianoSection.style.display = 'block';
        espanolButton.classList.remove('active-button');
        englishButton.classList.remove('active-button');
        valencianoButton.classList.add('active-button');
      }
    }
      
