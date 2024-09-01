"use client";
import BG from "@/public/img/Smelter-1024x576.jpg";
import MONEY_INFRA from "@/public/img/f2.webp";
import logo from "@/public/img/logo.jpg";
import METHODS from "@/public/img/metod.jpg";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import PieChart from "./components/PieChart";
import QuadrantAnalysis from "./components/QuadrantAnalysis";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
const quadrantData = [
  { x: 18.13, y: 0.00686, label: 'PT SSU' },
  { x: 20.34, y: 0.08891, label: 'PT AF' },
  { x: 20.34, y: 0.08891, label: 'PT AP' },
  { x: 20.54, y: 0.08519, label: 'PT BDM' },
  { x: 19.69, y: 0.10238, label: 'PT CMP' },
  { x: 20.26, y: 0.08961, label: 'PT DRI' },
  { x: 20.15, y: 0.09042, label: 'PT PMS' },
  { x: 17.20, y: 0.17069, label: 'PT PRT' },
  { x: 23.05, y: 0.03578, label: 'PT VDNI' },
  { x: 22.33, y: 0.05348, label: 'PT BSI' },
  { x: 22.43, y: 0.05271, label: 'PT IMN' },
  { x: 23.23, y: 0.05299, label: 'PT MMM' },
  { x: 23.14, y: 0.05299, label: 'PT MMI' },
  { x: 22.20, y: 0.05146, label: 'PT WIM' },
  { x: 19.67, y: 0.07498, label: 'PT BP' },
  { x: 21.94, y: 0.05066, label: 'PT BKA' },
  { x: 21.11, y: 0.05762, label: 'PT CJ' },
  { x: 19.67, y: 0.07498, label: 'PT CDS' },
  { x: 19.60, y: 0.07833, label: 'PT KKU' },
  { x: 19.64, y: 0.07485, label: 'PT KNN' },
  { x: 21.10, y: 0.05618, label: 'PT MPR' },
  { x: 19.63, y: 0.07522, label: 'PT SMA' },
  { x: 19.63, y: 0.07524, label: 'PT SPR' },
  { x: 23.48, y: 0.67455, label: 'BDE' },
  { x: 23.72, y: 0.66248, label: 'PT BMR' },
  { x: 23.32, y: 0.68691, label: 'PT MK' },
  { x: 23.73, y: 0.66938, label: 'PT NPM' },
  { x: 23.75, y: 0.66226, label: 'PT PS' },
  { x: 23.65, y: 0.66774, label: 'PT SMM' },
  { x: 23.66, y: 0.66726, label: 'PT SR' },
  { x: 23.71, y: 0.66345, label: 'PT TMM' }
];

const pieLabels = ['B Pertambangan dan Penggalian', 'C Industri Pengolahan', 'F Konstruksi', 'A Pertanian,Kehutanan,dan Perikanan', 'G Perdagangan', 'Lainnya'];
const pieDatasetLabel = 'PDRB';
const pieData = [21.08, 6.47, 14.03, 22.95, 12.76, 4.89];

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
      <br />
      <br />
      <section className="py-16 px-6 z-1">
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
          <motion.div className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg flex gap-4">
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <h1></h1>
                <p>
                Sektor pertambangan merupakan salah satu <b>penopang utama</b> perkonomian Sulawesi Tenggara (21,08%)
                </p>
                <br />
                <p>
                Namun, potensi ekonomi dari sektor ini <b>belum sepenuhnya dilakukan hilirisasi ke dalam industri pengolahan</b>. Pengembangan industri pengolahan selain memberikan nilai tambah yang lebih besar juga memungkinkan memberikan <b><i>multiplier effect</i></b> seperti penciptaan lapangan pekerjaan.
                </p>
                <br />
              </div>
            </div>
            <div style={{ width: '50%' }}>
              <PieChart labels={pieLabels} datasetLabel={pieDatasetLabel} data={pieData} />
            </div>
            <br />
          </motion.div>
          <br />
          <motion.div className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg flex gap-4">
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column'}}>
              <div>
              <Image
                alt=""
                src={MONEY_INFRA}
                width={"300"}
              />
              </div>
            </div>
            <div style={{ width: '50%' , justifyContent: 'center' ,textAlign: 'right' }} className="pt-16">
              <p></p>
              <p><b>Investasi infrastruktur transportasi</b> di wilayah pertambangan dapat <b>meningkatkan konektivitas</b> dan <b>pertumbuhan ekonomi</b> secara <b>signifikan</b> (Asian Development Bank)</p>
              <p></p>
            </div>
            <br />
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
              <QuadrantAnalysis data={quadrantData} />
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
