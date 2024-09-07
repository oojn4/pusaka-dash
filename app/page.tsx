"use client";
import logo from "@/public/img/Network AI Team-3.png";
import BG from "@/public/img/cloud-forest-landscape.jpg";
import SATELITE from "@/public/img/earth-observation-abstract-concept-vector-illustration-space-engineering-planetary-science-satellite-service-geoinformation-applied-earth-observation-remote-sensing-abstract-metaphor.png";
import logo1 from "@/public/img/forkestra.png";
import METHODS from "@/public/img/metod.jpg";
import MONEY_INFRA from "@/public/img/sustainable-development-goals-still-life-removebg-preview.png";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PieChart from "../components/PieChart";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
const quadrantData = [
  { x: -18.13, y: 0.00686, label: 'PT SSU', kabupaten_kota: 'Kabupaten Bombana' },
  { x: -20.34, y: 0.08891, label: 'PT AF', kabupaten_kota: 'Kabupaten Kolaka' },
  { x: -20.34, y: 0.08891, label: 'PT AP', kabupaten_kota: 'Kabupaten Kolaka' },
  { x: -20.54, y: 0.08519, label: 'PT BDM', kabupaten_kota: 'Kabupaten Kolaka' },
  { x: -19.69, y: 0.10238, label: 'PT CMP', kabupaten_kota: 'Kabupaten Kolaka' },
  { x: -20.26, y: 0.08961, label: 'PT DRI', kabupaten_kota: 'Kabupaten Kolaka' },
  { x: -20.15, y: 0.09042, label: 'PT PMS', kabupaten_kota: 'Kabupaten Kolaka' },
  { x: -17.20, y: 0.17069, label: 'PT PRT', kabupaten_kota: 'Kabupaten Kolaka Utara' },
  { x: -23.05, y: 0.03578, label: 'PT VDNI', kabupaten_kota: 'Kabupaten Konawe' },
  { x: -22.33, y: 0.05348, label: 'PT BSI', kabupaten_kota: 'Kabupaten Konawe Selatan' },
  { x: -22.23, y: 0.05271, label: 'PT IMN', kabupaten_kota: 'Kabupaten Konawe Selatan' },
  { x: -22.20, y: 0.05299, label: 'PT MMM', kabupaten_kota: 'Kabupaten Konawe Selatan' },
  { x: -22.20, y: 0.05299, label: 'PT MMI', kabupaten_kota: 'Kabupaten Konawe Selatan' },
  { x: -22.20, y: 0.05146, label: 'PT WIM', kabupaten_kota: 'Kabupaten Konawe Selatan' },
  { x: -19.67, y: 0.07498, label: 'PT BP', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -21.94, y: 0.05066, label: 'PT BKA', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -21.11, y: 0.05762, label: 'PT CJ', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -19.67, y: 0.07498, label: 'PT CDS', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -19.60, y: 0.07833, label: 'PT KKU', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -19.64, y: 0.07485, label: 'PT KNN', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -21.10, y: 0.05618, label: 'PT MPR', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -19.63, y: 0.07522, label: 'PT SMA', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -19.63, y: 0.07524, label: 'PT SPR', kabupaten_kota: 'Kabupaten Konawe Utara' },
  { x: -23.48, y: 0.67455, label: 'BDE', kabupaten_kota: 'Kota Kendari' },
  { x: -23.72, y: 0.66248, label: 'PT BMR', kabupaten_kota: 'Kota Kendari' },
  { x: -23.32, y: 0.68691, label: 'PT MK', kabupaten_kota: 'Kota Kendari' },
  { x: -23.73, y: 0.66938, label: 'PT NPM', kabupaten_kota: 'Kota Kendari' },
  { x: -23.75, y: 0.66226, label: 'PT PS', kabupaten_kota: 'Kota Kendari' },
  { x: -23.65, y: 0.66774, label: 'PT SMM', kabupaten_kota: 'Kota Kendari' },
  { x: -23.66, y: 0.66726, label: 'PT SR', kabupaten_kota: 'Kota Kendari' },
  { x: -23.71, y: 0.66345, label: 'PT TMM', kabupaten_kota: 'Kota Kendari' },
];

const pieLabels = ['B Pertambangan dan Penggalian', 'C Industri Pengolahan', 'F Konstruksi', 'A Pertanian,Kehutanan,dan Perikanan', 'G Perdagangan', 'Lainnya'];
const pieDatasetLabel = 'PDRB';
const pieData = [21.08, 6.47, 14.03, 22.95, 12.76, 4.89];

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
          <li className="font-semibold text-[#eaeaea]"><a href="/">Penjelasan Umum</a></li>
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
              style={{ fontSize: "50px" }}
            >
              Pengembangan Sektor Keuangan Berwawasan Lingkungan, Sosial, dan Tata Kelola Berkelanjutan:
              </motion.h1>
            <motion.h1
              className={`lg:text-8xl sm:text-5xl text-xl text-yellow-200 tracking-tighter font-bold`}
              variants={textAnimate2}
              custom={80}
              style={{ fontSize: "40px" }}
            >
              Tinjauan Evaluasi Green Total Factor Productivity dan Keuangan Daerah Pendekatan Big Data
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
         {/* <motion.div >
          <iframe
              src="https://oojn4.github.io/forkestra-webmap/"
              style={{ width: '100%', height: '600px', border: 'none' }}
              title="Dashboard"
              className="pt-8 rounded-lg"
            />
          </motion.div>
          <motion.div className="pt-8">
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
            <br />
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
          </motion.div>
          <motion.div >
          <iframe
              src="https://oojn4.github.io/forkestra-ntlmaps/"
              style={{ width: '100%', height: '600px', border: 'none' }}
              title="Dashboard"
              className="pt-8 rounded-lg"
            />
          </motion.div>
          <motion.div className="pt-8">
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
            <br />
            <p className="text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus, perferendis quas consequuntur vero vel ipsum quam reiciendis placeat! Nisi nemo ipsam iure? Fugiat sed impedit non voluptas tempora culpa?
            </p>
          </motion.div> */}
          <motion.h2
            className="pt-16 text-4xl font-bold text-yellow-200 mb-8"
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
                Perekonomian Sumatera telah lama <b>bergantung pada sektor pertambangan</b> khususnya batu bara, yang menjadi salah satu kontributor utama pertumbuhan ekonomi (BPS, 2023). <b> Eksploitasi</b> sumber daya alam secara intesif memberikan berbagai <b>dampak negatif</b> terhadap lingkungan, seperti polusi udara, kerusakan lahan, dan degradasi ekosistem. 
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
                width={"1500"}
              />
              </div>
            </div>
            <div style={{ width: '50%' , justifyContent: 'center' ,textAlign: 'right' }} className="">
              <p></p>
              <p>Green Total Factor Productivity (GTFP) merupakan salah satu indikator yang digunakan untuk mengukur tingkat produktivitas hijau suatu wilayah. Indikator ini tidak terbatas hanya mengukur seberapa efisien suatu unit produksi dalam menghasilkan output yang diinginkan, melainkan juga memperhitungkan dampak negatif yang timbul pada lingkungan, seperti emisi atau polusi ​(Rusiawan dkk., 2015b)</p>
              <p></p>
            </div>
            <br />
          </motion.div>
          <br />
          <motion.div className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg flex gap-4">
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <h1></h1>
                <p>
                Data pembangun GTFP banyak tidak tersedia pada level kabupaten/kota. Disisi lain, citra satelit dan geospatial big data berpotensi sebagai sumber data alternatif untuk melengkapi data pembangun  GTFP level kabupaten/kota. Hal ini disebabkan data citra satelit dan geospatial big data memiliki keunggulan dalam pengumpulan data yang cepat, mudah, murah, up-to-date, dan dapat mengakses wilayah-wilayah yang sulit dijangkau langsung di lapangan. 
                </p>
                <br />
              </div>
            </div>
            <div style={{ width: '50%' }}>
            <Image
                alt=""
                src={SATELITE}
                width={"1500"}
              />
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
            Sumber data penelitian ini terbagi menjadi 3 bagian yaitu citra satelit, OSM, dan data ofisial statistik milik Badan Informasi Geospasial (BIG), Badan Pusat Statistik (BPS), dan Perusahaan Listrik Negara (PLN). Selanjutnya dilakukan preprocessing untuk menghasilka variabel-variabel yang digunakan sebagai input dan ouput dalam menghitung GTFP. Metode Multicriteria Decision Analysis (MCDA) digunakan untuk membangun variabel Indeks Kualitas Udara (IKU) dan Indeks Kualitas Air (IKA). Sedangkan metode machine learning digunaka untuk mengestimasi konsumsi listrik level kabupaten/kota. Selanjutnya dilakukan analisis spasial untuk mengukur pengaruh regulasi lingkungan, kapasitas fiskal, dan teknologi digital terhadap nilai GTFP 
            </p>
            <br />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
