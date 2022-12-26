import "../styles/main.scss";

import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";

function scroll() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

// scroll();

const loader = gsap.timeline();

loader.to(
  ".loader-text > h4:first-child",
  {
    y: -30,
  },
  1
);

loader.to(
  ".loader-text > h4:nth-child(2)",
  {
    y: -80,
  },
  1
);

loader.to(
  ".loader-text > h4:nth-child(3)",
  {
    y: -120,
  },
  1
);

loader.to(
  ".loader-text > h4:nth-child(4)",
  {
    y: -65,
  },
  1
);

loader.to(
  ".loader",
  {
    translateY: "-100%",
    duration: 1.25,
  },
  1
);
