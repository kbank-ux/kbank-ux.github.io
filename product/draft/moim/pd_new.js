$(function () {
    var page = $('.page-inner-scroll') ? $('.page-inner-scroll') : $(window);
    var section01 = function () {
        // var introAnimation = LottieInteractivity.create({
        //     player: '.ui-lottie-moim-section01',
        //     mode: 'scroll',
        //     container: '.ui-moim-section01-stage',
        //     actions: [
        //         {
        //             visibility: [0, 1],
        //             type: "seek",
        //             frames: [0, 185]
        //         }
        //     ]
        // });

        var uiLottieMoimSection01 = $('.ui-lottie-moim-section01');

        var animation = lottie.loadAnimation({
            container: uiLottieMoimSection01[0],
            renderer: 'svg',
            loop: uiLottieMoimSection01.data().loop,
            autoplay: uiLottieMoimSection01.data().autoplay,
            path: uiLottieMoimSection01.data().src
        });

        page.on('scroll', function () {
            if (page.scrollTop()) {
                animation.setSpeed(10);
            }
        });

        animation.onComplete = function () {
            // if (!page.scrollTop()) {
            //     page.animate({
            //         scrollTop: intro.height()
            //     }, 300);
            // }
            //anim.destroy();
            //section01.addClass('close');

            gsap.to('.ui-moim-section02', {
                    clipPath: "inset(0% 0% 0% 0%)",
                    ease: "none",
                })
        }
    }

    var section02 = function () {
        var lottieItems = $('.ui-lottie-moim-section02-item');
        var params = [];
        var animations = [];

        gsap.set('.ui-moim-section02', {
            clipPath: "inset(100% 0% 0% 0%)",
        });

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: $('.ui-moim-section02-stage'),
        //         scrub: true,
        //         // pin: true,
        //         start: 'top bottom',
        //         end: 'bottom bottom',
        //         // markers: true,
        //         scroller: page,
        //     }
        // })
        //     .to('.ui-moim-section02', {
        //         clipPath: "inset(0% 0% 0% 0%)",
        //         ease: "none",
        //     })

        lottieItems.each(function (index, item) {
            params.push({
                    container: $(item)[0],
                    renderer: 'svg',
                    loop: $(item).data().loop,
                    autoplay: $(item).data().autoplay,
                    path: $(item).data().src
                });

            animations.push(lottie.loadAnimation(params[index]));
        });
    }

    var section04 = function () {
        var that = $('.ui-moim-section04');
        var uiSwiper = $('.ui-swiper', that);

        var swiper = new Swiper(uiSwiper, {
            slidesPerView: uiSwiper.data().slidesPerView,
            centeredSlides: !!uiSwiper.data().centeredSlides,
            loop: !!uiSwiper.data().loop,
            autoplay: !!uiSwiper.data().autoplay,
            delay: uiSwiper.data().delay * 1,
        });
    }

    var section06 = function () {
        gsap.set('.ui-moim-section06-blue', {
            clipPath: "inset(100% 0% 0% 0%)",
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-section06-blue-stage',
                scrub: true,
                // pin: true,
                start: 'top top+=' + $('.component-header').height(),
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
        gsap.set(['.ui-moim-section07-title', '.ui-moim-section07-description', '.ui-moim-section07-arrow', '.ui-moim-section07-visual'], {
            opacity: 0,
            y: 50,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-moim-section07',
                scrub: true,
                // pin: true,
                start: 'top center',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to(['.ui-moim-section07-title', '.ui-moim-section07-description', '.ui-moim-section07-arrow', '.ui-moim-section07-visual'], {
                opacity: 1,
                y: 0,
                stagger: {
                    amount: 1,
                }
            })
    }

    var section08 = function () {
        gsap.set(['.ui-moim-section07-title', '.ui-moim-section07-description', '.ui-moim-section07-arrow', '.ui-moim-section07-visual'], {
            opacity: 0,
            y: 50,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: $('.ui-moim-section07'),
                scrub: true,
                // pin: true,
                start: 'top center',
                end: 'bottom bottom',
                markers: true,
                scroller: page[0],
            }
        })
            .to(['.ui-moim-section07-title', '.ui-moim-section07-description', '.ui-moim-section07-arrow', '.ui-moim-section07-visual'], {
                opacity: 1,
                y: 0,
                stagger: {
                    amount: 1,
                }
            })
    }


    section01();
    section02();
    section04();
    section06();
    section07();

    // console.log(gsap);
    // console.log(window.Swiper);
});