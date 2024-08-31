"use client";

import BG from "@/public/img/Smelter-1024x576.jpg";
import logo from "@/public/img/logo.jpg";
import METHODS from "@/public/img/metod.jpg";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import QuadrantAnalysis from "./components/QuadrantAnalysis";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
const data = [
  { x: 10, y: 20, label: 'A' },
  { x: -10, y: -20, label: 'B' },
  { x: 15, y: -25, label: 'C' },
  { x: -15, y: 25, label: 'D' },
];

export default function Home() {

  const bgAnimate = {
    hidden: {
      clipPath: 'polygon(21% 27%, 77% 26%, 77% 77%, 21% 77%)',
    },
    show: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        delay: 1,
      }
    }
  }

  const textAnimate1 = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 1,
      }
    }
  }

  const textAnimate2 = {
    hidden: {
      x: "0"
    },
    show: (i: any) => ({
      x: i,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      }
    })
  };

  const imageAnimate = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
        delayChildren: 3,
        ease: 'easeInOut'
      }
    }
  };

  const imageAnimateChild = {
    hidden: {
      x: 100,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const navAnimate = {
    hidden: {
      y: '-110%'
    },
    show: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 1.5
      }
    }
  };

  const textParagraph = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        delay: 2.8,
      },
    },
  };

  return (
    <main className="min-h-screen px-6 relative z-0">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          alt=""
          src={BG}
          fill
          priority={true}
          sizes="(max-width:786px) 33vw, (max-width:1024px) 50vw, 100vw"
          className="object-cover brightness-50"
        />
      </div>

      {/* Fixed Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md flex sm:flex-row flex-col justify-between py-3 items-center z-10"
        variants={navAnimate}
        initial="hidden"
        animate="show"
      >
        <div className={`text-xl font-bold text-yellow-200 underline ${pacifico.className}`}>
          <Image alt="" src={logo} width={100} />
        </div>
        <ul className="w-[500px] flex justify-between items-center">
          <li className="font-semibold text-[#eaeaea]"><a href="#background">Latar Belakang</a></li>
          <li className="font-semibold text-[#eaeaea]"><a href="#method">Metodologi</a></li>
          <li className="font-semibold text-[#eaeaea]"><a href="#result1">Tujuan 1</a></li>
          <li className="font-semibold text-[#eaeaea]"><a href="#result2">Tujuan 2</a></li>
          <li></li>
        </ul>
      </motion.nav>

      {/* Main Content */}
      <section className="pt-[80px] pb-16 px-6 relative z-1">
        <div className="relative top-[120px]">
          <motion.div
            className="relative left-[40%] sm:left-[25%]"
            variants={textAnimate1}
            initial="hidden"
            animate="show"
          >
            {/* <motion.h1
              className={`lg:text-[7.2rem] sm:text-5xl text-xl text-[#eaeaea] tracking-tight font-bold ${pacifico.className}`}
              variants={textAnimate2}
              custom={-120}
            >
              Forkestra
            </motion.h1> */}
          </motion.div>
          <motion.div
            className="relative left-0"
            variants={textAnimate1}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className={`lg:text-8xl sm:text-5xl text-xl text-yellow-200 tracking-tighter font-bold`}
              variants={textAnimate2}
              custom={80}
              style={{ fontSize: "70px" }}
            >
              Optimalisasi Aksessibilitas dan Konektivitas Smelter Nikel
            </motion.h1>
          </motion.div>
        </div>
        <motion.div
          className="flex sm:flex-row flex-col gap-6 mt-8"
          variants={imageAnimate}
          initial="hidden"
          animate="show"
        >
          {/* Image components here */}
        </motion.div>
      </section>

      {/* New Sections */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="py-16 px-6 relative z-1">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-yellow-200 mb-8"
            variants={textParagraph}
            initial="hidden"
            animate="show"
            id="background"
          >
            Latar Belakang
          </motion.h2>
          <motion.div className="pt-8">
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
            <br />
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
          </motion.div>
          <motion.h2
            className="pt-16 text-4xl font-bold text-yellow-200 mb-8"
            variants={textParagraph}
            initial="hidden"
            animate="show"
            id="method"
          >
            Metodologi
          </motion.h2>
          <Image
            alt=""
            src={METHODS}
            className="object-cover brightness-100"
            style={{ width: "100%" }}
          />
          <motion.div className="pt-8">
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
            <br />
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
          </motion.div>
          <motion.h2
            className="pt-16 text-4xl font-bold text-yellow-200 mb-8"
            variants={textParagraph}
            initial="hidden"
            animate="show"
            id="result1"
          >
            Tujuan 1
          </motion.h2>
          <motion.div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <QuadrantAnalysis data={data} />
            </div>
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
          </motion.div>
          <motion.h2
            className="pt-16 text-4xl font-bold text-yellow-200 mb-8"
            variants={textParagraph}
            initial="hidden"
            animate="show"
            id="result2"
          >
            Tujuan 2
          </motion.h2>
          <motion.div>
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
            <iframe
              src="https://oojn4.github.io/forkestra-webmap/"
              style={{ width: '100%', height: '600px', border: 'none' }}
              title="Dashboard"
              className="pt-8 rounded-lg"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
