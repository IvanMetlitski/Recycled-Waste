window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    $('.reasons_responsive').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
            ]
    });

    const animItems = document.querySelectorAll('.anim-items');

    if (animItems.length > 0 ) {
        window.addEventListener('scroll', animOnScroll)
        function animOnScroll () {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart
                }

                if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemHeight + animItemOffset)) {
                    animItem.classList.add('active')
                } else {
                    if (!animItem.classList.contains('anim-no-hide')) {
                        animItem.classList.remove('active')
                    }

                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

        }
    }
    animOnScroll();

})



