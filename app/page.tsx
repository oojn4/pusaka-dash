"use client";
import logo from "@/public/img/Network AI Team-3.png";
import BG from "@/public/img/cloud-forest-landscape.jpg";
import logo1 from "@/public/img/forkestra.png";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
const pieLabels = ['B Pertambangan dan Penggalian', 'C Industri Pengolahan', 'F Konstruksi', 'A Pertanian,Kehutanan,dan Perikanan', 'G Perdagangan', 'H Transportasi dan Pergudangan','J Informasi dan Komunikasi','O Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial Wajib','L Real Estat','P Jasa Pendidikan','K Jasa Keuangan dan Asuransi','I Penyediaan Akomodasi dan Makan Minum','Q Jasa Kesehatan dan Kegiatan Sosial','Lainnya'];
const pieDatasetLabel = 'PDRB';
const pieData = [10.38, 20.35, 10.79, 22.66, 13.54, 3.96,3.83,3.32,2.68,2.19,2.13,1.55,1.02,1.6];

export default function Home() {
  const router = useRouter(); // Initialize the useRouter hook

  const handleDashboardClick = () => {
    router.push('/dashboard'); // Navigate to the /dashboard page
  };
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
        <div className={`w-[600px] flex items-center`}>
          <Image alt="" src={logo} width={100} />
          <Image alt="" src={logo1} height={10}  width={70} />
        </div>
        <ul className="w-[600px] flex justify-between items-center">
          <li className="font-semibold text-[#eaeaea]"><a href="/">Beranda</a></li>
          <li className="font-semibold text-[#eaeaea]"><a href="/dashboard">Dashboard</a></li>
          <li></li>
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
              style={{ fontSize: "50px", marginLeft: '-20px' }}
            >
             Strategi Optimalisasi Potensi Kelurahan/Desa 
              </motion.h1>
              <motion.h1
              className={`lg:text-8xl sm:text-5xl text-xl text-yellow-200 tracking-tighter font-bold`}
              variants={textAnimate2}
              custom={80}
              style={{ fontSize: "50px", marginLeft: '-20px' }}
            >
             di Jawa Tengah Sebagai Penumpu Pangan Nasional dengan Pemetaan Granular Penginderaan Jauh dan Model Kecerdasan Artifisial
              </motion.h1>
            <motion.h1
              className={`lg:text-8xl sm:text-5xl text-xl text-yellow-200 tracking-tighter font-bold`}
              variants={textAnimate2}
              custom={80}
              style={{ fontSize: "20px" , marginLeft: '-20px' }}
            >
              
            </motion.h1>
          </motion.div>
          <br /><br />
          <motion.div
          className="relative left-200 center"
            variants={textAnimate1}
            initial="hidden"
            animate="show"
            style={{left:500}}>
            <Button
              className="pt-12"
              style={{
                backgroundColor: "blue",
                borderRadius: "30px", // Make the button fully rounded
                color: "white", // Set the text color to white
                padding: "10px 20px", // Optional: Add padding to the button
                border: "none", // Optional: Remove border if any
                cursor: "pointer", // Optional: Change cursor to pointer
                alignItems:"center"
              }}
              onClick={handleDashboardClick}
            >
              Dashboard
            </Button>
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

      
    </main>
  );
}
