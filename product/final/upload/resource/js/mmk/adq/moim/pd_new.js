$(function () {
    var isApp = !!$('.page-inner-scroll').length;
    var page = isApp ? $('.page-inner-scroll') : $(window);
    var header = isApp ? $('.component-header') : $('.header');

    var setHeader = (function() {
        var set = function() {
            var headerHeight = header.height() + 'px';
            document.documentElement.style.setProperty('--header-height', headerHeight);
        }

        set();
    })();

    var isSection02Animation = true;
    var section01 = function () {
        var uiLottieMoimSection01 = $('.ui-lottie-moim-section01');
        var uiLottieMoimSection02 = $('.ui-lottie-moim-section02');
        var isScroll = false;

        var animation01 = lottie.loadAnimation({
            container: uiLottieMoimSection01[0],
            renderer: 'svg',
            loop: uiLottieMoimSection01.data().loop,
            autoplay: uiLottieMoimSection01.data().autoplay,
            path: uiLottieMoimSection01.data().src
        });

        page.on('scroll', function () {
            if (page.scrollTop()) {

                //animation.setSpeed(30);
                isScroll = false;
                animation01.goToAndPlay(185, true);
            }
        });

        animation01.onComplete = function () {
            gsap.to('.ui-moim-section02', {
                    clipPath: "inset(0% 0% 0% 0%)",
                    ease: "none",
                    duration: 0.4,
                })

            if (isSection02Animation) {
                uiLottieMoimSection02[0].seek(10);
                uiLottieMoimSection02[0].play();

                uiLottieMoimSection02.on('complete', function () {
                    uiLottieMoimSection02[0].seek(36);
                    uiLottieMoimSection02[0].play();
                });
            }
        }
    }

    var section02 = function () {
        var uiLottieMoimSection02 = $('.ui-lottie-moim-section02');

        gsap.set('.ui-moim-section02', {
            clipPath: "inset(100% 0% 0% 0%)",
        });

        page.on('scroll', function () {
            if (isSection02Animation) {
                isSection02Animation = false;
                uiLottieMoimSection02[0].stop();
            }
        });

        var animation = LottieInteractivity.create({
            player: '.ui-lottie-moim-section02',
            mode: 'scroll',
            container: '.ui-moim-section02-stage',
            actions: [
                {
                    visibility: [0, 0.1],
                    type: 'loop',
                    frames: [36, 130],
                },
                {
                    visibility: [0.1, 1.0],
                    type: 'seek',
                    frames: [36, 150],
                }
            ]
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-section02-stage',
                scrub: true,
                // pin: true,
                start: 'bottom bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0]
            }
        })
            .to('.ui-moim-section02', {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
            })
    }

    var section03 = function () {
        var uiLottieMoimSection03Arrow = $('.ui-lottie-moim-section03-arrow');

        gsap.set(['.ui-moim-section03-title-block01', '.ui-moim-section03-title-block02', '.ui-moim-section03-subtext-block01', '.ui-moim-section03-subtext-block02', '.ui-moim-section03-link'], {
            y: 50,
            opacity: 0,
        });

        gsap.set(['.ui-moim-section03-pink', '.ui-moim-section03-green'], {
            y: 50,
        });

        gsap.set('.ui-moim-section03-pink .moim-section03-icon-percent', {
            left: '0%',
            opacity: 0,
            rotate: 0,
        });

        gsap.set('.ui-moim-section03-green .moim-section03-icon-percent', {
            left: '80%',
            opacity: 0,
            rotate: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-section03',
                scrub: true,
                // pin: true,
                start: 'top bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0]
            }
        })
            .addLabel('trigger')
            .to(['.ui-moim-section03-title-block01', '.ui-moim-section03-title-block02', '.ui-moim-section03-subtext-block01', '.ui-moim-section03-subtext-block02', '.ui-moim-section03-link'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })
            .to(['.ui-moim-section03-pink', '.ui-moim-section03-green'], {
                y: 0,
                stagger: {
                    amount: 0.5,
                }
            })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-section03-stage',
                scrub: true,
                // pin: true,
                start: 'top+=10% bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0]
            }
        })
            .addLabel('trriger01')
            .to('.ui-moim-section03-pink .moim-section03-icon-percent', {
                duration: 0.1,
                opacity: 1,
            })
            .to('.ui-moim-section03-pink .moim-section03-icon-percent', {
                left: '80%',
                duration: 0.5,
                rotate: 1440,
            }, 'trriger01')
            .addLabel('trriger02')
            .to('.ui-moim-section03-green .moim-section03-icon-percent', {
                duration: 0.1,
                opacity: 1,
            })
            .to('.ui-moim-section03-green .moim-section03-icon-percent', {
                left: '10%',
                duration: 0.5,
                rotate: -1440,
            }, 'trriger02')
            .to('.ui-moim-section03-green .moim-section03-icon-percent', {
                left: '0%',
                duration: 0.1,
                opacity: 0,
            })

        var animation = LottieInteractivity.create({
            player: '.ui-lottie-moim-section03-arrow',
            mode: 'scroll',
            container: '.moim-section03-stage',
            actions: [
                {
                    visibility: [0, 0.1],
                    type: 'seek',
                    frames: [0, 40]
                }
            ]
        });
    }

    var section04 = function () {
        var that = $('.ui-moim-section04');
        var uiSwiperVisual = $('.ui-swiper-section04-visual', that);
        var uiSwiperKeywords = $('.ui-swiper-keywords-container', that);

        gsap.set(['.ui-moim-section04-title-block01', '.ui-moim-section04-title-block02', '.ui-moim-section04-subtext', '.ui-moim-section04-keywords', '.ui-swiper-section04-visual'], {
            y: 50,
            opacity: 0,
        });

        gsap.set('.ui-moim-section04-icon-percent', {
            left: '0%',
            opacity: 0,
            rotate: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-section04',
                scrub: true,
                // pin: true,
                start: 'top+=130 bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0]
            }
        })
            .addLabel('trigger')
            .to(['.ui-moim-section04-title-block01', '.ui-moim-section04-title-block02', '.ui-moim-section04-subtext', '.ui-moim-section04-keywords', '.ui-swiper-section04-visual'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-section04',
                scrub: true,
                // pin: true,
                start: 'top+=130 bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0]
            }
        })
            .addLabel('trriger01')
            .to('.ui-moim-section04-icon-percent', {
                duration: 0.1,
                opacity: 1,
            })
            .to('.ui-moim-section04-icon-percent', {
                left: '100%',
                duration: 0.5,
                rotate: 1440,
            }, 'trriger01')

        var animation = LottieInteractivity.create({
            player: '.ui-lottie-moim-section04-arrow',
            mode: 'scroll',
            container: '.ui-swiper-section04-visual',
            actions: [
                {
                    visibility: [0, 1],
                    type: 'seek',
                    frames: [0, 60]
                }
            ]
        });

        var swiperKeywords = new Swiper(uiSwiperKeywords, {
            direction: 'vertical',
            simulateTouch: false,
            touchRatio: 0,
            slidesPerView: 'auto',
            //effect: 'slide',
            loop: true,
            loopAdditionalSlides: 1,
        });

        var swiperVisual = new Swiper(uiSwiperVisual, {
            slidesPerView: uiSwiperVisual.data().slidesPerView,
            spaceBetween: 10,
            centeredSlides: !!uiSwiperVisual.data().centeredSlides,
            loop: true,
            loopAdditionalSlides: 1,
            autoplay: {
                delay: uiSwiperVisual.data().delay * 1,
            },
        });

        swiperVisual.controller.control = swiperKeywords;
    }

    var section05 = function () {
        var name = LottieInteractivity.create({
            player: '.ui-lottie-moim-section05-name',
            mode: 'scroll',
            container: '.ui-moim-section05',
            actions: [
                {
                    visibility: [0, 0.1],
                    type: 'loop',
                    frames: [0, 196]
                }
            ]
        });

        var arrow = LottieInteractivity.create({
            player: '.ui-lottie-moim-section05-arrow',
            mode: 'scroll',
            container: '.ui-moim-section05-title',
            actions: [
                {
                    visibility: [0, 1],
                    type: 'seek',
                    frames: [0, 40]
                }
            ]
        });
    }

    var section06 = function () {
        gsap.set(['.ui-moim-section06-title-block01', '.ui-moim-section06-title-block02', '.ui-moim-section06-title-block03', '.ui-moim-section06-subtext'], {
            y: 50,
            opacity: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-sticky-wrappper-section06',
                scrub: true,
                // pin: true,
                start: 'top bottom',
                end: 'center bottom',
                //markers: true,
                scroller: page[0]
            }
        })
            .addLabel('trigger')
            .to(['.ui-moim-section06-title-block01', '.ui-moim-section06-title-block02', '.ui-moim-section06-title-block03', '.ui-moim-section06-subtext'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })

        var arrow = LottieInteractivity.create({
            player: '.ui-lottie-moim-section06',
            mode: 'scroll',
            container: '.ui-moim-section06-stage',
            actions: [
                {
                    visibility: [0, 1],
                    type: 'seek',
                    frames: [0, 105]
                }
            ]
        });

        gsap.set('.ui-moim-section06-blue', {
            clipPath: "inset(100% 0% 0% 0%)",
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-section06-blue-stage',
                scrub: true,
                // pin: true,
                start: 'top top+=' + header.height(),
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to('.ui-moim-section06-blue', {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
            })
    }

    var section07 = function () {
        gsap.set(['.ui-moim-section07-title', '.ui-moim-section07-subtext', '.ui-moim-section07-arrow', '.ui-moim-section07-visual', '.ui-lottie-moim-section07-visual'], {
            opacity: 0,
            y: 50,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-sticky-wrappper-section07',
                scrub: true,
                // pin: true,
                start: 'top center',
                end: 'center bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to(['.ui-moim-section07-title', '.ui-moim-section07-subtext', '.ui-moim-section07-arrow', '.ui-moim-section07-visual', '.ui-lottie-moim-section07-visual'], {
                opacity: 1,
                y: 0,
                stagger: {
                    amount: 1,
                }
            })

        var visual = LottieInteractivity.create({
            player: '.ui-lottie-moim-section07-visual',
            mode: 'scroll',
            container: '.ui-moim-section07-stage',
            actions: [
                {
                    visibility: [0, 0.7],
                    type: 'seek',
                    frames: [0, 105]
                }
            ]
        });
    }

    var section08 = function () {
        var chatItems = $('.moim-section08-item');

        gsap.set('.ui-moim-section08-title', {
            y: 50,
            opacity: 0,
        });

        gsap.set([chatItems], {
            opacity: 0,
            y: 100,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.moim-section08',
                scrub: true,
                // pin: true,
                start: 'top bottom',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to('.ui-moim-section08-title', {
                y: 0,
                opacity: 1,
            })
            .addLabel('trigger01')
            .to([chatItems], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })

        var emoji01 = LottieInteractivity.create({
            player: '.ui-moim-section08-emoji01',
            mode: 'scroll',
            container: '.ui-moim-section08-emoji01',
            actions: [
                {
                    visibility: [0, 0.1],
                    type: 'loop',
                    frames: [0, 30]
                }
            ]
        });

        var emoji02 = LottieInteractivity.create({
            player: '.ui-moim-section08-emoji02',
            mode: 'scroll',
            container: '.ui-moim-section08-item-emoji02',
            actions: [
                {
                    visibility: [0, 0.1],
                    type: 'loop',
                    frames: [0, 60]
                }
            ]
        });

        var emoji03 = LottieInteractivity.create({
            player: '.ui-moim-section08-emoji03',
            mode: 'scroll',
            container: '.ui-moim-section08-item-emoji03',
            actions: [
                {
                    visibility: [0, 0.1],
                    type: 'loop',
                    frames: [0, 60]
                }
            ]
        });
    }

    section01();
    section02();
    section03();
    section04();
    section05();
    section06();
    section07();
    section08();
});