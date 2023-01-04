document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

  const tabs = () => { // объявляем основную функцию для вкладок, чтобы вся логика была в одном месте
    const tabsHead = document.querySelector('.tabs__head') // ищем элемент с кнопками и записываем в константу
    const body = document.querySelector('.tabs__body') // ищем элемент с контентом и записываем в константу
    
    const getActiveTabName = () => { // объявляем функцию для получения названия активной вкладки
      return tabsHead.querySelector('.tabs__caption_active').dataset.tab
    }
    
    const setActiveContent = () => { // объявляем функцию для установки активного элемента контента
      if (body.querySelector('.tabs__content_active')) { // если уже есть активный элемент контента
        body.querySelector('.tabs__content_active').classList.remove('tabs__content_active') // то скрываем его
      }
        body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('tabs__content_active') // затем ищем элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
    }
    
    // проверяем при загрузке страницы, есть ли активная вкладка
    if (!tabsHead.querySelector('.tabs__caption_active')) {  // если активной вкладки нет
      tabsHead.querySelector('.tabs__caption').classList.add('tabs__caption_active') // то делаем активной по-умолчанию первую вкладку
    }

    setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы
    
    tabsHead.addEventListener('click', e => { // при клике на .tabs__head
      const caption = e.target.closest('.tabs__caption') // узнаем, был ли клик на кнопке
      if (!caption) return // если клик был не на кнопке, то прерываем выполнение функции
      if (caption.classList.contains('tabs__caption_active')) return // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем
    
      if (tabsHead.querySelector('.tabs__caption_active')) { // если уже есть активная кнопка
        tabsHead.querySelector('.tabs__caption_active').classList.remove('tabs__caption_active') // то удаляем ей активный класс
      }
    
      caption.classList.add('tabs__caption_active') // затем добавляем активный класс кнопке, на которой был клик
    
      setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой
    })
  }
  
  tabs() // вызываем основную функцию
})

// Слайд
var slideIndex = 1;
  showSlides(slideIndex);
      
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
      
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
    
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow__mySlides");
    var dots = document.getElementsByClassName("slideshow__dot");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }


// Menu burger
  const burger = document.querySelector('.header__logo-menu');
  const tabsHead = document.querySelector('.tabs__head');
  if(burger) {
    burger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      tabsHead.classList.toggle('tabs__head-active');
      burger.classList.toggle('header__logo-menu-active')
    })
  }

  if(tabsHead) {
    tabsHead.addEventListener("click", function (e) {
      document.body.classList.remove('_lock');
      tabsHead.classList.remove('tabs__head-active');
      burger.classList.remove('header__logo-menu-active')
    })
  }

  // footer

  // mobile adaptive
  const contanctUsArrow = document.querySelector('.contanct-us__title');
  const quickLinksArrow = document.querySelector('.quick-links__title');
  const contanctUsContent = document.querySelector('.contanct-us__content');
  const quickLinksContent = document.querySelector('.quick-links__content');
  if(contanctUsArrow) {
    contanctUsArrow.addEventListener("click", function (e) {
    contanctUsArrow.classList.toggle('contanct-us__title-active')
    })
  }
  if(contanctUsArrow) {
    contanctUsArrow.addEventListener("click", function (e) {
    contanctUsContent.classList.toggle('contanct-us__content-active')
    })
  }
  if(quickLinksArrow) {
    quickLinksArrow.addEventListener("click", function (e) {
    quickLinksArrow.classList.toggle('quick-links__title-active')
    })
  }
  if(quickLinksArrow) {
    quickLinksArrow.addEventListener("click", function (e) {
    quickLinksContent.classList.toggle('quick-links__content-active')
    })
  }

  // switch tabs through quick links
  document.getElementById('footer_home').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').click();
  });
  document.getElementById('footer_about-us').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-us').click();
  });
  document.getElementById('footer_service').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('service').click();
  });
  document.getElementById('footer_hosting-plans').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('hosting-plans').click();
  });
  document.getElementById('footer_domain').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('domain').click();
  });
  document.getElementById('footer_faq').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('faq').click();
  });
  document.getElementById('footer_testimonials').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('testimonials').click();
  });
  document.getElementById('footer_blog').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('blog').click();
  });
  document.getElementById('footer_support').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('support').click();
  });
  document.getElementById('footer_contacs-us').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contacs-us').click();
  });