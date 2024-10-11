const carouselElement = document.getElementById('carouselExampleAutoplaying');
        const carouselTrack = document.getElementById('carouselExampleIndicators')
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000, // интервал между слайдами в миллисекундах
            pause: "hover" // пауза при наведении
        });
    
        // Обработка события смены слайда
        carouselElement.addEventListener('slide.bs.carousel', function (event) {
            const indicators = document.querySelectorAll('.productivity .carousel-indicators button');
            indicators.forEach((indicator, index) => {
                indicator.classList.remove('active');
            });
            
            indicators[event.to].classList.add('active'); // Добавление класса active на текущий слайд
        });

        carouselTrack.addEventListener('slide.bs.carousel', function (event) {
            const indicators = document.querySelectorAll('.start .carousel-indicators button');
            indicators.forEach((indicator, index) => {
                indicator.classList.remove('active');
            });
            
            indicators[event.to].classList.add('active'); // Добавление класса active на текущий слайд
        });