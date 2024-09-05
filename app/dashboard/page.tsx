"use client";
import BarChart from "@/components/BarChart";
import QuadrantAnalysis from "@/components/QuadrantAnalysis";
import TableLokasi from "@/components/TableLokasi";
import logo1 from "@/public/img/forkestra.png";
import logo from "@/public/img/Network AI Team-3.png";
import BG from "@/public/img/Smelter-1024x576.jpg";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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


const kabkotData = [
  { x: -24.36967, y: 0.45456701, label: 'Kabupaten Buton', status: 'Zona Terbatas' },
  { x: -24.84098, y: 0.65483124, label: 'Kabupaten Muna', status: 'Zona Terbatas' },
  { x: -22.12250, y: 0.47721178, label: 'Kabupaten Konawe', status: 'Zona Terbatas' },
  { x: -20.18453, y: 0.69797817, label: 'Kabupaten Kolaka', status: 'Zona Terbatas' },
  { x: -22.00859, y: 0.86215093, label: 'Kabupaten Konawe Selatan', status: 'Zona Terbatas' },
  { x: -19.27890, y: 0.41286409, label: 'Kabupaten Bombana', status: 'Zona Terbatas' },
  { x: -28.03653, y: 0.27188396, label: 'Kabupaten Wakatobi', status: 'Zona Terisolasi' },
  { x: -18.17569, y: 0.44885879, label: 'Kabupaten Kolaka Utara', status: 'Zona Terbatas' },
  { x: -23.61369, y: 0.32681904, label: 'Kabupaten Buton Utara', status: 'Zona Terbatas' },
  { x: -20.20635, y: 0.31528563, label: 'Kabupaten Konawe Utara', status: 'Zona Terbatas' },
  { x: -20.96893, y: 0.38844034, label: 'Kabupaten Kolaka Timur', status: 'Zona Terbatas' },
  { x: -26.73254, y: 0.37360547, label: 'Kabupaten Konawe Kepulauan', status: 'Zona Terbatas' },
  { x: -23.50126, y: 0.92441280, label: 'Kabupaten Muna Barat', status: 'Zona Terbatas' },
  { x: -21.85805, y: 0.68017289, label: 'Kabupaten Buton Tengah', status: 'Zona Terbatas' },
  { x: -25.28948, y: 0.47680299, label: 'Kabupaten Buton Selatan', status: 'Zona Terbatas' },
  { x: -23.29112, y: 6.19170773, label: 'Kota Kendari', status: 'Zona Padat' },
  { x: -25.97746, y: 2.09533925, label: 'Kota Baubau', status: 'Zona Padat' }
];

const pieLabels = ['B Pertambangan dan Penggalian', 'C Industri Pengolahan', 'F Konstruksi', 'A Pertanian,Kehutanan,dan Perikanan', 'G Perdagangan', 'Lainnya'];
const pieDatasetLabel = 'PDRB';
const pieData = [21.08, 6.47, 14.03, 22.95, 12.76, 4.89];

const quadrantDataX = [...quadrantData].sort((a, b) => b.x - a.x);
const quadrantDataY = [...quadrantData].sort((a, b) => b.y - a.y);
const kabkotDataX = [...kabkotData].sort((a, b) => b.x - a.x);
const kabkotDataY = [...kabkotData].sort((a, b) => b.y - a.y);

export default function Home() {
  const router = useRouter(); // Initialize the useRouter hook
  const [activeTab, setActiveTab] = useState("lokasi"); // State to manage active tab

  const handleDashboardClick = () => {
    router.push('/dashboard'); // Navigate to the /dashboard page
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
      >
        <div className={`text-xl font-bold text-yellow-200 underline ${pacifico.className}`}>
          <div className={`w-[600px] flex items-center`}>
            <Image alt="" src={logo} width={100} />
            <Image alt="" src={logo1} height={10} width={70} />
          </div>
        </div>
        <ul className="w-[600px] flex justify-between items-center">
          <li className="font-semibold text-[#eaeaea]"><a href="/">Penjelasan Umum</a></li>
          <li className="font-semibold text-[#eaeaea]"><a href="/dashboard">Dashboard</a></li>
          <li></li>
          <li></li>
        </ul>
      </motion.nav>

      <section className="py-16 px-6 z-1">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="pt-20 text-4xl font-bold text-yellow-200 mb-8 text-center"
            id="background"
            style={{ justifyContent: 'center' }}
          >
            Dashboard
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 font-semibold ${activeTab === "lokasi" ? "bg-yellow-200 text-gray-800" : "bg-gray-800 text-yellow-200"}`}
              onClick={() => setActiveTab("lokasi")}
            >
              Green Total Factor Productivity
            </button>
            <button
              className={`px-4 py-2 font-semibold ${activeTab === "kabupaten" ? "bg-yellow-200 text-gray-800" : "bg-gray-800 text-yellow-200"}`}
              onClick={() => setActiveTab("kabupaten")}
            >
              Analisis Regresi
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "lokasi" ? (
            <div>
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Peta Estimasi GTFP</h2>
              
              <iframe
                src="https://oojn4.github.io/forkestra-webmap/"
                style={{ width: '100%', height: '600px', border: 'none' }}
                title="Dashboard"
                className="pt-8 rounded-lg"
              />
              <br />
              <motion.div className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 shadow-lg flex gap-4">
                <div style={{ flex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <BarChart kabupaten_kota = {quadrantDataX.map(item => item.kabupaten_kota)} labels={quadrantDataX.map(item => item.label)} data={quadrantDataX.map(item => -item.x)} title="Indeks Kualitas Air" />
                </div>
                <div style={{ width: '30%' }}>
                  <BarChart kabupaten_kota = {quadrantDataX.map(item => item.kabupaten_kota)} labels={quadrantDataY.map(item => item.label)} data={quadrantDataY.map(item => item.y)} title="Indeks Kualitas Udara" />
                </div>
                <div style={{ width: '30%' }}>
                  <BarChart kabupaten_kota = {quadrantDataX.map(item => item.kabupaten_kota)} labels={quadrantDataY.map(item => item.label)} data={quadrantDataY.map(item => item.y)} title="Konsumsi Listrik" />
                </div>
              </motion.div>
              <div className="flex flex-col rounded-lg">
                <br />
                <TableLokasi />
                <br />
              </div>
            </div>
          ) : (
            <div>
              {/* Content for Evaluasi Kabupaten/Kota */}
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Analisis Kuadran Hasil Moran's I</h2>
              <br /> 
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <QuadrantAnalysis data={quadrantData} />
              </div>
              <br />
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Analisis Kuadran GTFP dengan Variabel Lainnya</h2>
              <br /> 
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <QuadrantAnalysis data={quadrantData} />
              </div>
              <br />
              <div className="flex flex-col rounded-lg">
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Rekomendasi</h2>
              <br />
              <div className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 rounded-lg shadow-lg flex gap-4">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt totam, odit aspernatur corporis deserunt mollitia perferendis quidem esse nihil minima sunt laudantium assumenda. Quae magni voluptatem impedit nihil, aspernatur ab!</p>
                
              </div>
                {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <QuadrantAnalysis data={kabkotData} />
                </div> */}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
