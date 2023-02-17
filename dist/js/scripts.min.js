var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


//lang control

let langBlock = [...document.querySelectorAll('.lang > span')];

function controlLang() {
    if (langBlock.length) {
        langBlock.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.lang').classList.toggle('active');
            })
        })
    }
}

controlLang();
//lang control


//controling sub menus

let firstSub = [...document.querySelectorAll('.menu-item-has-children > a')];
let secondSub = [...document.querySelectorAll('.menu-sub > li > a')];
let addressKey = [...document.querySelectorAll('.address-key')];
let companyKey = [...document.querySelectorAll('.footer-company span')];

function controlSubs() {
    if (firstSub.length) {
        firstSub.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.closest('.menu-item-has-children').classList.toggle('active');
            })
        });
        secondSub.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.closest('li').classList.toggle('active');
            })
        });
        addressKey.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.closest('.address-block').classList.toggle('active');
            })
        });
        companyKey.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.closest('.footer-company').classList.toggle('active');
            })
        })
    }
}

controlSubs();

//controling sub menus

var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');

// var backdrop = document.querySelector('.backdrop');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                // backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

//chars hovering

$('.rating-stars').raty(
    {
        readOnly: true,
        starHalf: './img/heart-ic.svg',
        starOn: './img/heart-ic.svg',
        starOff: './img/heart-em.svg',
        hints: ['a', null, '', null, '', null]
    }
);
//sliders


let homeBanner = [...document.querySelectorAll('.home-banner')];

function startHomeBanner() {
    if (!homeBanner.length) {

    } else {


        homeBanner.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                centeredSlides: true,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 0,

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'single-dot',
                    bulletActiveClass: 'active',
                }


            });


        })

    }
}

startHomeBanner();

//bestsellers
let bestsellersSlider = [...document.querySelectorAll('.bestsellers')];

function startBestsellers() {
    if (!bestsellersSlider.length) {

    } else {


        bestsellersSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.sellers-slider');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 20,

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'single-dot',
                    bulletActiveClass: 'active',
                },
                breakpoints: {
                    767: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                        spaceBetween: 24,
                    }
                }


            });


        })

    }
}

startBestsellers();
//chars hovering


let photoGallery = [...document.querySelectorAll('.product-gallery')];

function startPhotosGallery() {
    if (!photoGallery.length) {

    } else {
        photoGallery.forEach((blc) => {
            let mainSlides = blc.querySelector('.product-photos .swiper');
            let thumbsSlides = blc.querySelector('.product-thumbs .swiper');

            let sldNext = blc.querySelector('.product-photos .slider-btn--next');
            let sldPrev = blc.querySelector('.product-photos .slider-btn--prev');
            let pagin = blc.querySelector('.product-photos .dots');


            let sldNextTh = blc.querySelector('.product-thumbs .slider-btn--next');
            let sldPrevTh = blc.querySelector('.product-thumbs .slider-btn--prev');



            var swiperThumb = new Swiper(thumbsSlides, {
                spaceBetween: 12,
                slidesPerView: 'auto',
                freeMode: false,
                watchSlidesProgress: true,
                direction: 'horizontal',
                centeredSlides: false,
                loop: false,
                draggable: true,
                navigation: {
                    nextEl: sldNextTh,
                    prevEl: sldPrevTh,
                },
                breakpoints: {
                    1024: {
                        direction: 'vertical',
                    }
                }

            });
            var swiper2 = new Swiper(mainSlides, {
                spaceBetween: 10,
                slidesPerView: 1,
                loop: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'single-dot',
                    bulletActiveClass: 'active',
                },
                thumbs: {
                    swiper: swiperThumb,
                }

            });
        })
    }
}

startPhotosGallery();


//sliders


//modal windows

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();

                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');
                        if (mod.querySelector('.main-title')) {
                            setTimeout(() => {
                                mod.querySelector('.main-title').classList.add('done');

                            }, 500);
                        }
                        if (mod.classList.contains('modal-video')) {
                            mod.querySelector('iframe').src = btn.dataset.link;
                        }
                    }
                })
            })
        });
        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').querySelector('.main-title')) {

                    btn.closest('.modal-window').querySelector('.main-title').classList.remove('done');


                }
                if (btn.closest('.modal-window').classList.contains('modal-video')) {
                    btn.closest('.modal-window').querySelector('iframe').src = '';
                }
            })
        });
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').querySelector('.main-title')) {

                    btn.closest('.modal-window').querySelector('.main-title').classList.remove('done');


                }
                if (btn.closest('.modal-window').classList.contains('modal-video')) {
                    btn.closest('.modal-window').querySelector('iframe').src = '';
                }
            })
        });
        if (clsSecModal.length) {
            clsSecModal.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.modal-window').classList.remove('visible');
                    document.body.classList.remove('no-scroll');

                })
            });
        }
    }
}

controlModal();

//modal windows

//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//tabs

//faq
let faqItems = [...document.querySelectorAll('.single-faq .faq-head')];

function controlFaq() {
    if (faqItems.length) {
        faqItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}

controlFaq();

//faq

//step-filters
let catalogStep = [...document.querySelectorAll('.catalog-step')];
let catalogCloser = [...document.querySelectorAll('.catalog-left .cls')];
let filterBtn = [...document.querySelectorAll('.filter-btn')];


function controlCatalog() {
    if (catalogStep.length) {
        catalogStep.forEach((btn) => {
            btn.querySelector('span').addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        });
        catalogCloser.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.catalog-left').classList.remove('open');
                document.querySelector('main').classList.remove('open');
                document.body.classList.remove('no-scroll');

            })
        });
        filterBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.querySelector('.catalog-left').classList.add('open');
                document.querySelector('main').classList.add('open');
                document.body.classList.add('no-scroll');

            })
        });
    }
}

controlCatalog();



//step-filters

//full compostion

let fullCompos = [...document.querySelectorAll('.full-composition')];

function openCompos() {
    if (fullCompos.length) {
        fullCompos.forEach((btn) => {
            btn.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.classList.toggle('open');
            })
        })
    }
}
openCompos();
//full compostion



