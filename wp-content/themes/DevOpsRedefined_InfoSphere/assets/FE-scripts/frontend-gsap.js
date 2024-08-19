// // wait until DOM is ready
// document.addEventListener("DOMContentLoaded", function (event) {
//   console.log("DOM loaded");

//   //wait until images, links, fonts, stylesheets, and js is loaded
//   window.addEventListener(
//     "load",
//     function (e) {
//       //custom GSAP code goes here
//       // This tween will rotate an element with a class of .my-element
//       gsap.to(".my-element", {
//         rotation: 360,
//         duration: 2,
//         ease: "bounce.out",
//       });
//       gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//       //   ScrollTrigger.normalizeScroll(true); // enable
//       //   ScrollTrigger.normalizeScroll(false); // disable

//       //   let normalizer = ScrollTrigger.normalizeScroll(); // gets the Observer instance that's handling normalization (if enabled, of course)
//       ScrollTrigger.normalizeScroll(true); // enable

//       // create the scrollSmoother before your scrollTriggers
//       let smoother = ScrollSmoother.create({
//         smooth: 500, // how long (in seconds) it takes to "catch up" to the native scroll position
//         effects: true, // looks for data-speed and data-lag attributes on elements
//         smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
//       });

//       //   ScrollTrigger.normalizeScroll({
//       //     allowNestedScroll: true,
//       //     lockAxis: false,
//       //     momentum: (self) => Math.min(3, self.velocityY / 1000), // dynamically control the duration of the momentum when flick-scrolling
//       //     type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
//       //   });

//       console.log("window loaded");
//     },
//     false
//   );
// });

/***
 *
 *
 */

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.utils.toArray("a[href^='#']").forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();

//       gsap.to(window, {
//         scrollTo: {
//           y: this.getAttribute("href"),
//           offsetY: 50, // Adjust this value based on your header height
//         },
//         duration: 1,
//       });
//     });
//   });
// });

/*****
 *
 *
 *
 */

// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(function () {
//     gsap.registerPlugin(ScrollSmoother);

//     ScrollSmoother.create({
//       wrapper: "#smooth-wrapper",
//       content: "#smooth-content",
//       smooth: 1.5, // The larger the number, the smoother the scrolling
//       effects: true, // This enables the "effects" feature
//     });
//   }, 10000); // Adjust the delay time as needed

// });

/*******/

// document.addEventListener("DOMContentLoaded", function () {
//   const scrollSpeed = 0.7; // Adjust the scroll speed here

//   let lastScrollY = window.scrollY;
//   let currentScrollY = window.scrollY;

//   function smoothScroll() {
//     currentScrollY += (window.scrollY - currentScrollY) * scrollSpeed;
//     window.scrollTo(0, currentScrollY);
//     lastScrollY = window.scrollY;

//     requestAnimationFrame(smoothScroll);
//   }

//   requestAnimationFrame(smoothScroll);
// });

/*****
 *
 *
 *
 */

// document.addEventListener("DOMContentLoaded", function () {
//   debugger;
//   const smootherScroll = {
//     target: document.scrollingElement || document.documentElement,
//     ease: 0.1, // Adjust the ease factor (0.1 means 10% of the distance per frame)
//     endY: 0,
//     y: 0,
//     resizeRequest: 1,
//     scrollRequest: 0,
//   };

//   const requestTick = () => {
//     if (!smootherScroll.ticking) {
//       requestAnimationFrame(update);
//     }
//     smootherScroll.ticking = true;
//   };

//   const update = () => {
//     smootherScroll.ticking = false;
//     const resized = smootherScroll.resizeRequest > 0;

//     if (resized) {
//       const height = document.body.offsetHeight;
//       document.documentElement.style.height = height + "px";
//       smootherScroll.resizeRequest = 0;
//     }

//     const scrollY = window.pageYOffset || smootherScroll.target.scrollTop;
//     smootherScroll.endY = scrollY;
//     smootherScroll.y += (scrollY - smootherScroll.y) * smootherScroll.ease;

//     if (Math.abs(scrollY - smootherScroll.y) < 0.05 || resized) {
//       smootherScroll.y = scrollY;
//       smootherScroll.scrollRequest = 0;
//     }

//     smootherScroll.target.style.transform =
//       "translateY(" + -smootherScroll.y + "px)";

//     if (smootherScroll.scrollRequest > 0) {
//       requestTick();
//     }
//   };

//   const onScroll = () => {
//     smootherScroll.scrollRequest++;
//     requestTick();
//   };

//   const onResize = () => {
//     smootherScroll.resizeRequest++;
//     requestTick();
//   };

//   window.addEventListener("scroll", onScroll);
//   window.addEventListener("resize", onResize);

//   requestTick();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const smootherScroll = {
//     target: document.scrollingElement || document.documentElement,
//     ease: 0.1, // Adjust the ease factor (0.1 means 10% of the distance per frame)
//     endY: 0,
//     y: 0,
//     resizeRequest: 1,
//     scrollRequest: 0,
//     ticking: false,
//   };

//   const requestTick = () => {
//     if (!smootherScroll.ticking) {
//       requestAnimationFrame(update);
//     }
//     smootherScroll.ticking = true;
//   };

//   const update = () => {
//     smootherScroll.ticking = false;
//     const resized = smootherScroll.resizeRequest > 0;

//     if (resized) {
//       const height = document.body.offsetHeight;
//       document.documentElement.style.height = height + "px";
//       smootherScroll.resizeRequest = 0;
//     }

//     const scrollY = window.pageYOffset || smootherScroll.target.scrollTop;
//     smootherScroll.endY = scrollY;
//     smootherScroll.y += (scrollY - smootherScroll.y) * smootherScroll.ease;

//     if (Math.abs(scrollY - smootherScroll.y) < 0.05 || resized) {
//       smootherScroll.y = scrollY;
//       smootherScroll.scrollRequest = 0;
//     }

//     smootherScroll.target.style.transform =
//       "translateY(" + -smootherScroll.y + "px)";

//     if (smootherScroll.scrollRequest > 0) {
//       requestTick();
//     }
//   };

//   const onScroll = () => {
//     smootherScroll.scrollRequest++;
//     requestTick();
//   };

//   const onResize = () => {
//     smootherScroll.resizeRequest++;
//     requestTick();
//   };

//   window.addEventListener("scroll", onScroll);
//   window.addEventListener("resize", onResize);

//   requestTick();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let currentScrollY = 0;
//   let targetScrollY = 0;
//   let ease = 0.8; // Adjust the ease factor

//   const updateScroll = () => {
//     // Calculate the difference between current and target scroll positions
//     let difference = targetScrollY - currentScrollY;

//     // Apply easing to the difference
//     currentScrollY += difference * ease;

//     // Scroll the window to the current scroll position
//     window.scrollTo(0, currentScrollY);

//     // Request the next animation frame if not close enough to target
//     if (Math.abs(difference) > 0.5) {
//       requestAnimationFrame(updateScroll);
//     }
//   };

//   window.addEventListener("scroll", () => {
//     targetScrollY = window.pageYOffset;
//     requestAnimationFrame(updateScroll);
//   });
// });

/*** */
// import Lenis from "lenis";
// gsap.registerPlugin(ScrollTrigger);

// const lenis = new Lenis();

const lenis = new Lenis({
  duration: 1.5,
  // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  easing: (t) => 1 - Math.pow(1 - t, 4), // Use a smoother easing function
  smooth: true,
});

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// Set up ScrollTrigger to use Lenis
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? lenis.scrollTo(value, { duration: 0 })
      : lenis.scroll;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

// Refresh ScrollTrigger after Lenis update
lenis.on("scroll", ScrollTrigger.update);

// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// });
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
// const tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".wp-block-image img",
//       // scrub: true,
//     },
//   })
//   .from(".wp-block-image img", {
//     // stagger: 0.2,
//     y: -70,

//     // scrub: true,
//   })
//   .to(".wp-block-image img", {
//     // stagger: 0.2,
//     y: 0,
//     // scrub: true,
//   });
const images = document.querySelectorAll(
  ".wp-block-image.gsap-default-animation img"
);

const imagesTriggers = document.querySelectorAll(
  ".wp-block-image.gsap-default-animation"
);

images.forEach((image) => {
  // imagesTriggers.forEach((imagesTrigger) => {
  // })
  gsap.fromTo(
    image,
    {
      y: -50, // Start 100px above
      opacity: 1,
    },
    {
      y: 0, // End at original position
      opacity: 1,
      // ease: "power1.out", // Use a smoother easing function
      scrollTrigger: {
        trigger: image, //not selecting parent in images case
        // trigger: imagesTrigger,
        // ".wp-block-image.gsap-default-animation",
        start: "top 80%", // Trigger animation when image container is in view (adjust as needed)
        end: "top 20%", // End animation when image is further up (adjust as needed)
        scrub: true, // Link animation progress to scroll position
        toggleActions: "play none none none", // Optional: play the animation when the trigger is reached
      },
    }
  );
  // });
});

const textGroup = document.querySelectorAll(
  ".wp-block-group.gsap-group-text-animation"
);

// const textGroupTrigger = document.querySelectorAll(
//   ".wp-block-group.gsap-group-text-animation .wp-block-group"
// ).firstChild;

textGroup.forEach((textGroup) => {
  const firstChild = textGroup.querySelector(":first-child");
  console.log("firstChild", firstChild);
  gsap.fromTo(
    textGroup,
    {
      x: -30, // Start 100px above
      opacity: 1,
    },
    {
      x: 0, // End at original position
      opacity: 1,
      ease: "power2.out", // Use a smoother easing function
      scrollTrigger: {
        // trigger: ".wp-block-group.gsap-group-text-animation",
        trigger: firstChild,
        start: "top 80%", // Trigger animation when image container is in view (adjust as needed)
        end: "top 20%", // End animation when image is further up (adjust as needed)
        scrub: 1, // Link animation progress to scroll position
        toggleActions: "play none none none", // Optional: play the animation when the trigger is reached
      },
    }
  );
});

// Apply GSAP animation and ScrollTrigger to each image
// images.forEach((image) => {
//   gsap.fromTo(
//     image,
//     {
//       y: -100, // Start 100px above
//       opacity: 0,
//     },
//     {
//       y: 0, // End at original position
//       opacity: 1,
//       duration: 1,
//       ease: "power1.out",
//       scrollTrigger: {
//         scrub: true,
//         trigger: image,
//         start: "top 80%", // Trigger animation when image container is in view (adjust as needed)
//         toggleActions: "play none none reset", // Play the animation when the trigger is reached, reset when out of view
//         onEnter: () => {
//           gsap.fromTo(
//             image,
//             {
//               y: -100,
//               opacity: 0,
//             },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1,
//               ease: "power1.out",
//             }
//           );
//         },
//       },
//     }
//   );
// });

// gsap.fromTo(
//   ".wp-block-image img",
//   {
//     y: -100, // Start 100px above
//     opacity: 0,
//   },
//   {
//     y: 0, // End at original position
//     opacity: 1,
//     duration: 1,
//     ease: "power1.out",
//     scrollTrigger: {
//       trigger: ".wp-block-group figure",
//       start: "top 80%", // Trigger animation when image container is in view (adjust as needed)
//       toggleActions: "play none none none", // Play the animation when the trigger is reached
//     },
//   }
// );
