$(document).ready(function(){

    // $('.owl-carousel').owlCarousel({
    //     items:4,
    //     loop:false,
    //     center:true,
    //     margin:10,
    //     URLhashListener:true,
    //     autoplayHoverPause:true,
    //     startPosition: 'URLHash'
    // });




    $('.carousel').carousel({
        interval: 38000
    })

    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        dots:false,
        URLhashListener:true
    })
    $('.slider2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:3,
        dots:false,
        center: true,
        URLhashListener:true
    })

// fashion
// $(".fashion-js-hook").each(function(){
//
//     const fashionController = new ScrollMagic.Controller()
//
//     const fashionTween = gsap.timeline()
//
//     fashionTween.fromTo(this, {autoAlpha:0, duration:2}, {autoAlpha:1})
//
//
//     const fashionScene = new ScrollMagic.Scene({
//         triggerElement: this
//     })
//
//         .addIndicators({
//             name: 'fade scene',
//             colorTrigger: 'black',
//             indent: 200,
//             colorStart: '#75C695'
//         })
//         .setTween(fashionTween)
//         .addTo(fashionController)
//
// })
//
    $(".hero").each(function(){
        const slideDownController = new ScrollMagic.Controller()

        const slideDownTween = gsap.from(this, {autoAlpha:0, position:"relative", top:"-20px",duration:1})


        const slideDownScene = new ScrollMagic.Scene({
            triggerElement:this
        })
            .setTween(slideDownTween)
            .addTo(slideDownController)
    })

// fashion
    const fashionController = new ScrollMagic.Controller()

    const fashionTween = gsap.from(".fashion", {stagger:0.7, y:"-5px", autoAlpha:0})

    const fashionScene = new ScrollMagic.Scene({
        triggerHook: ".fashion"
    })

        .setTween(fashionTween)
        .addTo(fashionController)


// delassus

    const delassusController = new ScrollMagic.Controller()

    const delassusTimeLine = gsap.timeline()

    delassusTimeLine.from(".delassus__media", {scaleX:0, left:0, transformOrigin:"left", duration:1})
    delassusTimeLine.from(".delassus-right-js", {scaleX:0,right:0, transformOrigin:"right", duration:1})
    delassusTimeLine.from(".delassus__content", {autoAlpha:0, duration:1.5})

    delassusScene = new ScrollMagic.Scene({
        triggerElement: "#delassus"
    })

        .setTween(delassusTimeLine)
        .addTo(delassusController)

// history
    const historyController = new ScrollMagic.Controller()

    const historyTween = gsap.timeline()
    historyTween.from(".history__media--bg-colour", {transformOrigin:"bottom", scaleY:0, bottom:0, duration:1.2})
    historyTween.from(".history__media img", {autoAlpha:0, duration:1.4})


    const historyScene = new ScrollMagic.Scene({
        triggerElement: ".history"
    })

        .setTween(historyTween)
        .addTo(historyController)
});

$(document).ready(function(){
// utility
    const utilityController = new ScrollMagic.Controller()

    const utilityTween = gsap.timeline()
    utilityTween.fromTo(".utility-1-media-js", {display:"block"},{display:"none", duration:0.2})
    utilityTween.fromTo(".utility-2-media-js", {display:"none"},{display:"block", duration:0.5})
    utilityTween.fromTo(".utility-1-js", {display:"block"},{display:"none", duration:0.2})
    utilityTween.fromTo(".utility-2-js", {display:"none"},{display:"block", duration:0.5})

    const utilityScene = new ScrollMagic.Scene({
        triggerElement: "#utility",
        triggerHook:0
    })
        // .addIndicators({
        //     name:"utility"
        // })
        .setTween(utilityTween)
        .addTo(utilityController)

});

$(document).ready(function(){
    const reviewController = new ScrollMagic.Controller()

    const reviewTween = gsap.timeline()
    reviewTween.from(".review--bg-image", {scaleX:0, transformOrigin:"right", duration:1})
    reviewTween.from(".review--card", {scaleX:0, transformOrigin:"left", duration:1})

    const reviewScene = new ScrollMagic.Scene({
        triggerElement: ".review"
    })
        .setTween(reviewTween)
        .addTo(reviewController)
});
