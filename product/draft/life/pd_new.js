$(function () {
    // LottieInteractivity.create({
    //     player: '#ui-lottie-intro',
    //     mode: 'scroll',
    //     actions: [
    //         {
    //             visibility: [0,1],
    //             type: 'seek',
    //             frames: [0, 180],
    //         },
    //     ]
    // });

    var page = $('.page-inner-scroll') ? $('.page-inner-scroll') : $(window);
    var section01 = function () {
        gsap.set('.ui-life-section01-title-block01', {
            left: '-30%',
            ease: "none",
        });

        gsap.set('.ui-life-section01-title-block02', {
            left: '30%',
            ease: "none",
        });

        gsap.set('.ui-life-section01-hash', {
            y: 100,
            opacity: 0,
            ease: "none",
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-sticky-wrappper-section01',
                scrub: true,
                // pin: true,
                start: 'top bottom',
                end: 'bottom top',
                //markers: true,
                scroller: page[0],
            }
        })
            .addLabel('target')
            .to(['.ui-life-section01-title-block01', '.ui-life-section01-title-block02'], {
                left: '0',
                ease: "none",
            }, 'target')
            .to('.ui-life-section01-hash', {
                y: 0,
                opacity: 1
            })
    }

    var section02 = function () {
        // var that = $('.section02');
        // var lottieItems = $('.ui-lottie-item');
        // var params = [];
        // var animations = [];

        var animation = LottieInteractivity.create({
            player: '.ui-lottie-life-section02',
            mode: 'scroll',
            container: '.ui-life-section02-stage',
            actions: [
                {
                    visibility: [0,1],
                    type: 'seek',
                    frames: [0, 150],
                },
            ]
        });

        // lottieItems.each(function (index, item) {
        //     params.push({
        //             container: $(item)[0],
        //             renderer: 'svg',
        //             loop: $(item).data().loop,
        //             autoplay: $(item).data().autoplay,
        //             path: $(item).data().src
        //         });
        //
        //     animations.push(lottie.loadAnimation(params[index]));
        // });

        // var params = {
        //     container: intro[0],
        //     renderer: 'svg',
        //     loop: intro.data().loop,
        //     autoplay: intro.data().autoplay,
        //     path: intro.data().src
        // };
        // var animation = lottie.loadAnimation(params);
    }

    var section03 = function () {
        gsap.set('.ui-life-section03-blue', {
            clipPath: "inset(100% 0% 0% 0%)",
            ease: "none",
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section03-blue-stage',
                scrub: true,
                // pin: true,
                start: 'top top+=' + $('.component-header').height(),
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
        gsap.set('.ui-life-section04-charge-box', {
            height: 0,
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
                trigger: '.ui-life-section04-charge-box',
                scrub: true,
                // pin: true,
                start: 'top bottom',
                end: 'top bottom-=350',
                //markers: true,
                scroller: page[0],
            }
        })
            .to('.ui-life-section04-charge-box', {
                height: 953 / 3,
                ease: "none",
            })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section04-charge-box',
                scrub: true,
                // pin: true,
                start: 'top bottom-=322',
                end: 'top bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to('.ui-life-section04-charge-door', {
                y: 28,
                ease: "none",
            })
            .to(['.ui-life-section04-title-block02', '.ui-life-section04-title-block03'], {
                y: 0,
                opacity: 1,
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
            });
    }

    var section05 = function () {
        gsap.set(['.ui-life-section05-title-block01', '.ui-life-section05-title-block02', '.life-section05-description', '.ui-life-section05-dial'], {
            y: 50,
            opacity: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section05',
                scrub: true,
                // pin: true,
                start: 'top center',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to(['.ui-life-section05-title-block01', '.ui-life-section05-title-block02', '.life-section05-description', '.ui-life-section05-dial'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })
    }

    var section06 = function () {
        gsap.set(['.ui-life-section06-title-block01', '.ui-life-section06-title-block02', '.life-section06-description', '.ui-life-section06-calendar', '.ui-life-section06-button-link'], {
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
            .to(['.ui-life-section06-title-block01', '.ui-life-section06-title-block02', '.life-section06-description', '.ui-life-section06-calendar', '.ui-life-section06-button-link'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })
    }

    var section07 = function () {
        var that = $('.ui-life-section07');
        var uiSwiper = $('.ui-swiper', that);

        gsap.set(['.ui-life-section07-title-block01', '.ui-life-section07-title-block02', '.ui-life-section07 .ui-swiper'], {
            y: 50,
            opacity: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.ui-life-section07',
                scrub: true,
                // pin: true,
                start: 'top center',
                end: 'bottom bottom',
                //markers: true,
                scroller: page[0],
            }
        })
            .to(['.ui-life-section07-title-block01', '.ui-life-section07-title-block02', '.ui-life-section07 .ui-swiper'], {
                y: 0,
                opacity: 1,
                stagger: {
                    amount: 1,
                }
            })

        var swiper = new Swiper(uiSwiper, {
            slidesPerView: uiSwiper.data().slidesPerView,
            centeredSlides: !!uiSwiper.data().centeredSlides,
            loop: !!uiSwiper.data().loop,
            autoplay: !!uiSwiper.data().autoplay,
            delay: uiSwiper.data().delay * 1,
        });
    }

    section01();
    section02();
    section03();
    section04();
    section05();
    section06();
    section07();


    // console.log(gsap);
    // console.log(window.Swiper);
});