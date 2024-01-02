let count = 1;
let menu = document.querySelectorAll("#menu h2")
let menuBtn = document.querySelectorAll(".btn")
let cbtn = document.querySelectorAll(".c")
let colorArr = ["#FFA8ED", "#D0F467", "#A18BF9", "#FEA8BD", "#FA4A34"]
let color = 0;
let mouse = document.querySelector(".mouse")
let images = document.querySelectorAll("#page4 .images")
let x = screen.width
console.log(x);

images.forEach((element, index) => {
    images[index].addEventListener("mousemove", (e) => {
        gsap.to(".mouse", {
            display: "flex",
            x: e.clientX,
            y: e.clientY,
            delay: 0,
            backgroundColor: colorArr[color],
            duration: 1,
            zIndex:15,
            ease: "power2",
            transform: "translate(-50%,-50%)"
        })
    })
    images[index].addEventListener("mouseleave", (e) => {
        color = Math.floor(Math.random() * 4)
        gsap.to(".mouse", {
            display: "none"
        })
    })
});
menuBtn.forEach((element, index) => {
    menuBtn[index].addEventListener("click", () => {
        color = Math.floor(Math.random() * 4)
        if (menuBtn[0].innerHTML == "close") {
            menuBtn[0].innerHTML = "menu"
            menuBtn[1].style.display = "block"
            cbtn[0].classList.remove("fa-solid")
            cbtn[0].style.display = "none"
            gsap.to("#menu", {
                top: "-150vh"
            })

        }
        else {
            menuBtn[0].innerHTML = "close"
            menuBtn[1].style.display = "none"
            cbtn[0].style.display = "block"
            cbtn[0].classList.add("fa-solid")
            document.querySelector(".main nav").style.backgroundColor = "transparent"
            gsap.to("#menu", {
                top: 0,
                backgroundColor: colorArr[color]
            })

        }
    })
});
cbtn.forEach((element, index) => {
    cbtn[index].addEventListener("click", () => {
        menuBtn[0].innerHTML = "menu"
        menuBtn[1].style.display = "block"
        cbtn[0].classList.remove("fa-solid")
        cbtn[0].style.display = "none"
        gsap.to("#menu", {
            top: "-150vh"
        })
    })
});
function Loading() {
    let count = 0
    let time = setInterval(() => {
        count = count + Math.floor(Math.random() * 15)
        if (count > 100) {
            count = 100
            document.querySelector("#number").innerHTML = `${count} %`
            document.querySelector("#loader div span").style.width = (count /4) + "vw"
            clearInterval(time)
        }
        else {
            document.querySelector("#number").innerHTML = `${count} %`
            document.querySelector("#loader span").style.width = (count / 4) + "vw"
        }
    }, 100);
}


var tl = gsap.timeline()

tl.to("#loader h1", {
    delay: 1,
    onStart: Loading(),
})
tl.to("#loader", {
    top: "-100vh",
    duration: 1,
})
tl.to("#page1 h1", {
    duration: 2,
    fontWeight: 100,
    transform: "translateX(-50%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 0%",
        end: "top -200vh",
        scrub: 2,
        pin: true
    }
})
tl.to("#page2 video", {
    duration: 2,
    width: "100%",
    height: "80vh",
    rotateX: "0deg",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "bottom 95%",
        scrub: 2,
    }
})
tl.to("#page3", {
    duration: 2,
    backgroundColor: "white",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 125%",
        scrub: 2,
    }
})
tl.to(".main nav", {
    duration: 2,
    backgroundColor: "white",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 125%",
        scrub: 2,
    }
})
tl.to(".main nav div", {
    duration: 2,
    color: "black",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 80%",
        end: "bottom 125%",
        scrub: 2,
    }
})
if (x < 400) {
    tl.to("#page3", {
        height: "30vh",
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            // markers: true,
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
        }
    })
    console.log("if" ,x);
}
else {
    tl.to("#page3", {
        height: "60vh",
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            // markers: true,
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
        }
    })
    console.log("else", x);
}
tl.from("#page3 #page3Text", {
    opacity: 0,
    transform: "translateY(100vh)",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "bottom 150%",
        scrub: 2,
    }
})
tl.from("#page3 div p", {
    opacity: 0,
    duration: 5,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "bottom 100%",
        scrub: 2,
    }
})
// tl.to("#page3", {
//     height: "60vh",
//     scrollTrigger: {
//         trigger: "#page3",
//         scroller: "body",
//         // markers: true,
//         start: "top 80%",
//         end: "bottom 100%",
//         scrub: 2,
//     }
// })
tl.to("#page4 #img1", {
    height: "70vh",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "bottom 120%",
        scrub: 2,
        // pin: true
    }
})
tl.to("#page4 #img2", {
    height: "70vh",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "bottom 50%",
        scrub: 2,
    }
})
tl.to("#page4 #img3", {
    height: "70vh",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        // markers: true,
        start: "top -50%",
        end: "bottom 10%",
        scrub: 2,
    }
})
tl.to("#page5", {
    backgroundColor: "black",
    color: "white",
    scrollTrigger: {
        trigger: "#page5 h3",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2
    }
})
tl.to("#page4", {
    backgroundColor: "black",
    color: "white",
    scrollTrigger: {
        trigger: "#page5 h3",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2
    }
})
tl.to("#page4 .text", {
    color: "white",
    scrollTrigger: {
        trigger: "#page5 h3",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2
    }
})
tl.to(".main nav", {
    duration: 2,
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#page5 h3",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
    }
})
tl.to(".main nav div", {
    duration: 2,
    color: "white",
    scrollTrigger: {
        trigger: "#page5 h3",
        scroller: "body",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
    }
})

menu.forEach((element, index) => {
    menu[index].addEventListener("mouseenter", () => {
        gsap.to(menu[index], {
            fontWeight: 200,
            cursor:"pointer",
        })
    })

});
menu.forEach((element, index) => {
    menu[index].addEventListener("mouseleave", () => {
        gsap.to("#menu h2 ", {
            fontWeight: 800,
        })
    })

});


setInterval(() => {
    if (count == 1) {
        count++
        gsap.to("#m", {
            duration: .5,
            scrub: 2,
            fontStretch: "1000%"
        })
        gsap.to("#o", {
            duration: .5,
            scrub: 2,
            fontStretch: "400%"
        })
    }
    else {
        count = 1
        gsap.to("#o", {
            duration: .5,
            scrub: 2,
            fontStretch: "1000%"

        })
        gsap.to("#m", {
            duration: .5,
            scrub: 2,
            fontStretch: "400%"

        })
    }

}, 2000);