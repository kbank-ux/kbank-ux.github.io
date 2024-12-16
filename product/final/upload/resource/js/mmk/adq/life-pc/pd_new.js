$(function () {
    var isApp = !!$('.page-inner-scroll').length;
    var page = isApp ? $('.page-inner-scroll') : window;
    var header = $('#header');
    var proDetail = $('.proDetail');

    var setHeader = (function() {
        var set = function() {
            var headerHeight = (header.height() + proDetail.height()) + 'px';
            document.documentElement.style.setProperty('--header-height', headerHeight);
        }

        set();
    })();

    var section01 = function () {
        var animation = LottieInteractivity.create({
            player: '.ui-lottie-life-section01-intro',
            mode: 'scroll',
            container: '.ui-life-section01-stage',
            actions: [
                {
                    visibility: [0,0.9],
                    type: 'seek',
                    frames: [0, 189],
                },
            ]
        });
    }

    var section02 = function () {
        var animation = LottieInteractivity.create({
            player: '.ui-lottie-life-section02',
            mode: 'scroll',
            container: '.ui-life-sticky-wrappper-section02',
            actions: [
                {
                    visibility: [0, 1],
                    type: 'seek',
                    frames: [0, 145],
                },
            ]
        });
    }

    var section03 = function () {
        var animation = LottieInteractivity.create({
            player: '.ui-lottie-life-section03',
            mode: 'chain',
            container: '.ui-life-sticky-wrappper-section03',
            actions: [
                {
                    state: 'stop',
                    type: 'seek',
                    frames: [20],
                },
            ]
        });

        var animationBlue = LottieInteractivity.create({
            player: '.ui-lottie-life-section03-blue',
            mode: 'scroll',
            container: '.ui-life-section03-blue-stage-book',
            actions: [
                {
                    visibility: [0, 0.2],
                    type: 'stop',
                    frames: [0],
                },
                {
                    visibility: [0.2, 0.5],
                    type: 'seek',
                    frames: [0, 40],
                },
            ]
        });

        gsap.set('.ui-life-section03-blue', {
            clipPath: "inset(100% 0% 0% 0%)",
            ease: "none",
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section03-blue-stage',
                scrub: true,
                // pin: true,
                start: 'top bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to('.ui-life-section03-blue', {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
            })
    }

    var section04 = function () {
        gsap.set('.ui-life-section04-charge-image', {
            translateY: '-100%',
            ease: "none",
        });

        gsap.set('.ui-life-section04-charge-door', {
            y: 0,
            ease: "none",
        });

        gsap.set(['.ui-life-section04-title-block01', '.ui-life-section04-title-block02', '.ui-life-section04-title-block03'], {
            opacity: 0,
            y: 50,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section04',
                scrub: true,
                // pin: true,
                start: 'top+=80 bottom',
                end: 'top bottom-=300',
                //markers: true,
                scroller: page[0],
            }
        })
            .to('.ui-life-section04-title-block01', {
                y: 0,
                opacity: 1,
            })
            .to(['.ui-life-section04-title-block02', '.ui-life-section04-title-block03'], {
                y: 0,
                opacity: 0.5,
            })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section04-charge-box',
                scrub: true,
                // pin: true,
                start: 'top bottom',
                end: 'bottom bottom',
                // end: 'bottom bottom-=' + (866 / 3),
                //markers: true,
                scroller: page[0],
            }
        })
            .addLabel('image')
            .to('.ui-life-section04-charge-image', {
                translateY: '0%',
                ease: "none",
            }, 'image')
            .to(['.ui-life-section04-title-block02', '.ui-life-section04-title-block03'], {
                opacity: 1,
            }, 'image');
    }

    var section05 = function () {
        gsap.set(['.ui-life-section05-title', '.life-section05-subtext', '.ui-lottie-life-section05-dial'], {
            y: 100,
            opacity: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section05',
                scrub: true,
                // pin: true,
                start: 'top+=20% bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to(['.ui-life-section05-title', '.life-section05-subtext', '.ui-lottie-life-section05-dial'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 0.5,
                }
            })

        var animation = LottieInteractivity.create({
            player: '.ui-lottie-life-section05-dial',
            mode: 'scroll',
            container: '.ui-life-section05-dial-stage',
            actions: [
                {
                    visibility: [0,0.5],
                    type: 'seek',
                    frames: [20, 134],
                },
            ]
        });
    }

    var section06 = function () {
        gsap.set(['.ui-life-section06-title', '.life-section06-subtext', '.ui-life-section06-button-link', '.ui-life-section06-calendar'], {
            y: 50,
            opacity: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section06',
                scrub: true,
                // pin: true,
                start: 'top center',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to(['.ui-life-section06-title', '.life-section06-subtext', '.ui-life-section06-button-link', '.ui-life-section06-calendar'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })

        var animation = LottieInteractivity.create({
            player: '.ui-life-section06-calendar',
            mode: 'scroll',
            container: '.ui-life-section06-calendar-stage',
            actions: [
                {
                    visibility: [0,0.5],
                    type: 'seek',
                    frames: [0, 160],
                },
            ]
        });
    }

    var section07 = function () {
        var that = $('.ui-life-section07');
        var uiSwiper = $('.ui-swiper', that);
        var visualItems = null;
        var animations = [];

        gsap.set(['.ui-life-section07-title-block01', '.ui-life-section07-title-block02', '.ui-life-section07 .ui-swiper'], {
            y: 50,
            opacity: 0,
        });

        var swiper = new Swiper(uiSwiper, {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopAdditionalSlides: 1,
            init: false,
            pagination: {
                el: '.ui-life-section07 .swiper-pagination',
                type: 'bullets',
            },
        });

        swiper.on('init', function () {
            visualItems = $('.ui-lottie-section07-visual-item');
            visualItems.each(function (index, item) {
                animations.push(lottie.loadAnimation({
                    container: $(item)[0],
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: $(item).data().src,
                }));
            });
        });
        swiper.init();

        var changeAnimations = function () {
            animations[swiper.activeIndex].play();

            animations[swiper.activeIndex].onComplete = function () {
                swiper.slideNext();
            }
        }

        swiper.on('slideChange', function () {
            $.each(animations, function (index, item) {
                animations[index].stop();
            });

            changeAnimations();
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section07',
                scrub: true,
                // pin: true,
                start: 'top bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
                onEnter: function () {
                    changeAnimations();
                }
            }
        })
            .to(['.ui-life-section07-title-block01', '.ui-life-section07-title-block02', '.ui-life-section07 .ui-swiper'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })
    }

    section01();
    section02();
    section03();
    section04();
    section05();
    section06();
    section07();
});