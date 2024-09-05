"use client";
import BarChart from "@/components/BarChart";
import QuadrantAnalysis1 from "@/components/QuadrantAnalysis1";
import QuadrantAnalysis2 from "@/components/QuadrantAnalysis2";
import TableLokasi from "@/components/TableLokasi";
import BG from "@/public/img/cloud-forest-landscape.jpg";
import logo1 from "@/public/img/forkestra.png";
import logo from "@/public/img/Network AI Team-3.png";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { SetStateAction, useState } from 'react';

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const gtfpData = [
  {
    tahun: 2021,
    provinsi: "Sulawesi Tenggara",
    kabupaten_kota: "Kabupaten Bombana",
    ika: -18.13,
    iku: 0.00686,
    konsumsi_listrik: 5000,
    gtfp: 0.008,
    status: "Rendah",
    morans_index_1: 0.12,  // Indeks Moran pertama
    morans_index_2: 0.15,  // Indeks Moran kedua
    variabel_lainnya: 1.5, // Contoh variabel numeric lainnya
  },
  {
    tahun: 2021,
    provinsi: "Sulawesi Tenggara",
    kabupaten_kota: "Kabupaten Kolaka",
    ika: -20.34,
    iku: 0.08891,
    konsumsi_listrik: 6200,
    gtfp: 0.045,
    status: "Rendah",
    morans_index_1: 0.18,
    morans_index_2: 0.22,
    variabel_lainnya: 2.3,
  },
  {
    tahun: 2021,
    provinsi: "Sulawesi Tenggara",
    kabupaten_kota: "Kabupaten Konawe",
    ika: -23.05,
    iku: 0.03578,
    konsumsi_listrik: 5400,
    gtfp: 0.032,
    status: "Rendah",
    morans_index_1: 0.15,
    morans_index_2: 0.20,
    variabel_lainnya: 1.8,
  },
  {
    tahun: 2022,
    provinsi: "Sulawesi Tenggara",
    kabupaten_kota: "Kota Kendari",
    ika: -23.71,
    iku: 0.66345,
    konsumsi_listrik: 8000,
    gtfp: 0.669,
    status: "Tinggi",
    morans_index_1: 0.65,
    morans_index_2: 0.70,
    variabel_lainnya: 3.9,
  },
  {
    tahun: 2022,
    provinsi: "Sulawesi Tenggara",
    kabupaten_kota: "Kabupaten Konawe Utara",
    ika: -19.63,
    iku: 0.07522,
    konsumsi_listrik: 7000,
    gtfp: 0.5,
    status: "Sedang",
    morans_index_1: 0.35,
    morans_index_2: 0.40,
    variabel_lainnya: 2.8,
  },
  {
    tahun: 2022,
    provinsi: "Sulawesi Tenggara",
    kabupaten_kota: "Kabupaten Konawe Selatan",
    ika: -22.23,
    iku: 0.05271,
    konsumsi_listrik: 6300,
    gtfp: 0.12,
    status: "Sedang",
    morans_index_1: 0.25,
    morans_index_2: 0.30,
    variabel_lainnya: 2.2,
  },
];

// Dapatkan unique kabupaten/kota dan tahun untuk dropdown
const uniqueKabupatenKota = [...new Set(gtfpData.map(item => item.kabupaten_kota))];
const uniqueTahun = [...new Set(gtfpData.map(item => item.tahun))];

export default function Home() {
  const router = useRouter(); // Initialize the useRouter hook
  const [activeTab, setActiveTab] = useState("lokasi"); // State to manage active tab
  const [selectedKabupaten, setSelectedKabupaten] = useState(""); // State to manage selected kabupaten
  const [selectedTahun, setSelectedTahun] = useState(""); // State for selected year

  // Handle filter change
  const handleKabupatenChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedKabupaten(e.target.value);
  };

  // Filter gtfpData based on selected kabupaten
  // Filter data based on selected kabupaten/kota and year
  const filteredData = gtfpData.filter(item => {
    return (
      (selectedKabupaten ? item.kabupaten_kota === selectedKabupaten : true) &&
      (selectedTahun ? item.tahun === parseInt(selectedTahun) : true)
    );
  });

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

          {/* Filter Dropdowns */}
          <div className="flex justify-between mb-6">
            <div>
              <label className="text-[#eaeaea]">Kabupaten/Kota: </label>
              <select
                className="px-4 py-2 bg-gray-800 text-yellow-200"
                value={selectedKabupaten}
                onChange={(e) => setSelectedKabupaten(e.target.value)}
              >
                <option value="">Semua</option>
                {uniqueKabupatenKota.map(kabupaten => (
                  <option key={kabupaten} value={kabupaten}>{kabupaten}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[#eaeaea]">Tahun: </label>
              <select
                className="px-4 py-2 bg-gray-800 text-yellow-200"
                value={selectedTahun}
                onChange={(e) => setSelectedTahun(e.target.value)}
              >
                <option value="">Semua</option>
                {uniqueTahun.map(tahun => (
                  <option key={tahun} value={tahun}>{tahun}</option>
                ))}
              </select>
            </div>
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
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <BarChart provinsi={filteredData.map(item => item.provinsi)} labels={filteredData.map(item => item.kabupaten_kota)} data={filteredData.map(item => item.ika)} title="Indeks Kualitas Air" />
                </div>
                <div style={{ width: '30%' }}>
                  <BarChart provinsi={filteredData.map(item => item.provinsi)} labels={filteredData.map(item => item.kabupaten_kota)} data={filteredData.map(item => item.iku)} title="Indeks Kualitas Udara" />
                </div>
                <div style={{ width: '30%' }}>
                  <BarChart provinsi={filteredData.map(item => item.provinsi)} labels={filteredData.map(item => item.kabupaten_kota)} data={filteredData.map(item => item.konsumsi_listrik)} title="Konsumsi Listrik" />
                </div>
              </motion.div>
              <div className="flex flex-col rounded-lg">
                <br />
                <TableLokasi data={filteredData} />
                <br />
              </div>
            </div>
          ) : (
            <div>
              {/* Content for Evaluasi Kabupaten/Kota */}
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Analisis Kuadran Hasil Morans I</h2>
              <br /> 
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <QuadrantAnalysis1 data={filteredData} />
              </div>
              <br />
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Analisis Kuadran GTFP dengan Variabel Lainnya</h2>
              <br /> 
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <QuadrantAnalysis2 data={filteredData} />
              </div>
              <br />
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Rekomendasi</h2>
              <br /> 
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum illum dolore, tenetur repudiandae sit soluta earum eligendi fuga totam et, sed veniam quo optio nulla. Laboriosam dolorem molestias voluptatem qui?</p>
              </div>
              <br />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}