import { Button } from "@/components/ui/button";
import macbook from "/macbook-exposed.png";
import {  motion } from "framer-motion";


const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };
  const introChildren = {
    hidden: { opacity: 0, y: -300 },
    visible: {
      opacity: 1,
        y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  const laptop = {
    initial: { y: 0,scale:5},
    animate: {
      y: 50,
      rotate: -30,
      scale:1,
      transition: {
        duration:1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <div className="overflow-hidden">
        <div className="grid md:grid-cols-2 h-screen place-content-center">
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className="ps-10"
      >
        <motion.h1
          variants={introChildren}
          className="text-5xl lg:text-8xl font-bold text-gray"
        >
          Don't worry<span className="">.</span>
        </motion.h1>
        <motion.h1
          variants={introChildren}
          className="text-5xl lg:text-8xl font-bold"
        >
          We'll fix it<span className="text-primary">.</span>
        </motion.h1>
        <motion.p
          variants={introChildren}
          className="text-gray mt-10 max-w-[50ch] mb-5"
        >
          welcome to <span className="text-black font-semibold">iRepair</span>,
          your one-step place for all kind of{" "}
          <span className="text-black font-semibold"> Macbook repairs</span> and
          diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="mx-auto"
        variants={laptop}
        initial="initial"
        animate="animate"
      >
        <img
          className="object-contain h-[80%] w-[80%] mx-auto"
          src={macbook}
          alt=""
        />
      </motion.div>
    </div>
    </div>
  );
};

export default HeroSection;
