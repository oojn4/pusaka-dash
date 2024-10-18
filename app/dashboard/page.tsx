"use client";
import BarChart from "@/components/BarChart";
import MapVisualization from "@/components/MapVisualization";
import QuadrantAnalysis1 from "@/components/QuadrantAnalysis1";
import TableLokasi from "@/components/TableLokasi";
import BG from "@/public/img/cloud-forest-landscape.jpg";
import logo1 from "@/public/img/forkestra.png";
import logo from "@/public/img/Network AI Team-3.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';

import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});


type DataItem = {
    AksesAirBersih: number;
    AngkaHarapanHidup: number;
    Elevation: number;
    IKP2023: number;
    JumlahPenduduk: number;
    Kabkot: string;        // Kabupaten/Kota
    Kecamatan: string;     // District/Sub-district
    Kelurahan: string;     // Village/Area
    NDBI: number;
    NDDI: number;
    NDVI: number;
    NDWI: number;
    NTL: number;
    PopulationDensity: number;
    RWI: number;
    Rasio: number;
    RataRataLamaSekolahKel: number;
    SAVI: number;
    Slope: number;
    SoilMoisture: number;
    Stunting: number;
    DanaDesa: number;
    DanaDesaPerkapita:number;
  };
  

// Function to convert numeric strings in the FeatureCollection to numbers
const convertGeoJSONPropertiesToNumbers = (featureCollection: FeatureCollection): FeatureCollection => {
  const numericProperties = [
    "Shape_Leng",
    "Shape_Area",
    "Merged_Dataset_of_Jateng_and_PredictData_IKP_2023_Random_Forest",
    "Merged_Dataset_of_Jateng_and_PredictData_RWI",
    "Merged_Dataset_of_Jateng_and_PredictData_PopulationDensity",
    "Merged_Dataset_of_Jateng_and_PredictData_NDVI",
    "Merged_Dataset_of_Jateng_and_PredictData_NDWI",
    "Merged_Dataset_of_Jateng_and_PredictData_NDDI",
    "Merged_Dataset_of_Jateng_and_PredictData_Soil_Moisture",
    "Merged_Dataset_of_Jateng_and_PredictData_NDBI",
    "Merged_Dataset_of_Jateng_and_PredictData_SAVI",
    "Merged_Dataset_of_Jateng_and_PredictData_NTL",
    "Merged_Dataset_of_Jateng_and_PredictData_Elevation",
    "Merged_Dataset_of_Jateng_and_PredictData_Slope",
    "Merged_Dataset_of_Jateng_and_PredictData_Jumlah_Penduduk",
    "Merged_Dataset_of_Jateng_and_PredictData_RLS",
    "Merged_Dataset_of_Jateng_and_PredictData_Angka_Harapan_Hidup",
    "Merged_Dataset_of_Jateng_and_PredictData_Akses_Air_Bersih",
    "Merged_Dataset_of_Jateng_and_PredictData_Rasio",
    "Merged_Dataset_of_Jateng_and_PredictData_Stunting"
  ];

  // Create a new FeatureCollection with numeric properties converted
  const updatedFeatures = featureCollection.features.map((feature) => {
    const updatedProperties = { ...feature.properties };

    numericProperties.forEach((prop) => {
      if (updatedProperties[prop]) {
        updatedProperties[prop] = parseFloat(updatedProperties[prop]);
      }
    });

    return {
      ...feature,
      properties: updatedProperties
    };
  });

  return {
    ...featureCollection,
    features: updatedFeatures
  };
};


export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("kabupaten"); 
  const [selectedKabupaten, setSelectedKabupaten] = useState("");   
  const [selectedKecamatan, setSelectedKecamatan] = useState(""); 
  const [data, setData] = useState<DataItem[]>([]);
  const [uniqueKabupatenKota, setUniqueKabupatenKota] = useState<string[]>([]);
  const [uniqueKecamatan, setUniqueKecamatan] = useState<string[]>([]); 
  const [geojsonData, setGeojsonData] = useState<GeoJSON.FeatureCollection>();

  
  useEffect(() => {
    fetch('/formatted_data.json')
      .then((response) => response.json())
      .then((jsonData: DataItem[]) => {
        setData(jsonData);

        const kabupaten = [...new Set(jsonData.map((item) => item.Kabkot))];
        setUniqueKabupatenKota(kabupaten);
      })
      .catch((error) => console.error('Error fetching JSON data:', error));
  }, []);


  useEffect(() => {
    // Fetch the GeoJSON data from the public folder
    fetch('/JatengVis.geojson')
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(convertGeoJSONPropertiesToNumbers(data));
      })
      .catch((error) => {
        console.error('Error loading GeoJSON data:', error);
      });
  }, []);
  useEffect(() => {
    const filteredData = data.filter((item) => item.Kabkot === selectedKabupaten);
    const kecamatan = [...new Set(filteredData.map((item) => item.Kecamatan))];
    setUniqueKecamatan(kecamatan);
}, [selectedKabupaten, data]);

  // Handle filter change
  const handleKabupatenChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedKabupaten(e.target.value);
  };

  const filteredData = data.filter((item: { Kabkot: string; Kecamatan: string; }) => {
    return (
      (selectedKabupaten ? item.Kabkot === selectedKabupaten : true) &&
      (selectedKecamatan ? item.Kecamatan === selectedKecamatan : true)
    );
  });
  
  // Ensure geojsonData is defined before using it
  const filteredDataGeoJSON: FeatureCollection<Geometry, GeoJsonProperties> | undefined = geojsonData
    ? {
        type: "FeatureCollection", // Explicitly set the type
        features: geojsonData.features.filter((item: any) => {
          const properties = item.properties;

          if (!properties) return false;

          return (
            (selectedKabupaten ? properties.ADM2_EN === selectedKabupaten : true) &&
            (selectedKecamatan ? properties.ADM3_EN === selectedKecamatan : true)
          );
        }),
      }
    : undefined; // Return undefined if geojsonData isn't ready yet
  
    


  const sortBy = (filteredData: any[], key: string) => {
    return filteredData.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0; 
    });
  };
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
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
          <div className={`w-[600px] flex items-center z-10`}>
            <Image alt="" src={logo} width={100} />
            <Image alt="" src={logo1} width={100} />
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
              Indeks Ketahanan Pangan
            </button>
            <button
              className={`px-4 py-2 font-semibold ${activeTab === "kabupaten" ? "bg-yellow-200 text-gray-800" : "bg-gray-800 text-yellow-200"}`}
              onClick={()  => console.log(filteredData)}
            >
              Rekomendasi Kebijakan
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex justify-between mb-6">
            <div>
              <label className="text-[#eaeaea]">Provinsi: </label>
              <select
                className="px-4 py-2 bg-gray-800 text-yellow-200"
                value={selectedKabupaten}
                onChange={(e) => setSelectedKabupaten(e.target.value)}
              >
                <option value="">Semua</option>
                
                {uniqueKabupatenKota.map(Kabupaten => (
                  <option key={Kabupaten} value={Kabupaten}>{Kabupaten}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[#eaeaea]">Kecamatan: </label>
              <select
                className="px-4 py-2 bg-gray-800 text-yellow-200"
                value={selectedKecamatan}
                onChange={(e) => setSelectedKecamatan(e.target.value)}
              >
                <option value="">Semua</option>
                {uniqueKecamatan.map(Kecamatan => (
                  <option key={Kecamatan} value={Kecamatan}>{Kecamatan}</option> 
                ))}
              </select>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "lokasi" ? (
            <div>
              <h2  style={{ marginLeft: '-20px' }} className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Peta Estimasi IKP</h2>
              <motion.div style={{ marginLeft: '-20px' }} className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 shadow-lg flex">
              <MapVisualization geojsonData={filteredDataGeoJSON}></MapVisualization>
              </motion.div>

              <br />
              <motion.div style={{ marginLeft: '-20px' }} className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 shadow-lg flex">
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                  <BarChart kabupaten={sortBy(filteredData,'PopulationDensity').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'PopulationDensity').map(item => item.Kecamatan)} labels={sortBy(filteredData,'PopulationDensity').map(item => item.Kelurahan)} data={sortBy(filteredData,'PopulationDensity').map(item => item.PopulationDensity)} title="Population Density" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'RWI').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'RWI').map(item => item.Kecamatan)} labels={sortBy(filteredData,'RWI').map(item => item.Kelurahan)} data={sortBy(filteredData,'RWI').map(item => item.RWI.toFixed(2))} title="RWI" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'NDVI').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'NDVI').map(item => item.Kecamatan)} labels={sortBy(filteredData,'NDVI').map(item => item.Kelurahan)} data={sortBy(filteredData,'NDVI').map(item => item.NDVI.toFixed(2))} title="NDVI" />
                </div>
              </motion.div>

              <br />
              <motion.div style={{ marginLeft: '-20px' }} className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 shadow-lg flex">
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                  <BarChart kabupaten={sortBy(filteredData,'NDWI').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'NDWI').map(item => item.Kecamatan)} labels={sortBy(filteredData,'NDWI').map(item => item.Kelurahan)} data={sortBy(filteredData,'NDWI').map(item => item.NDWI.toFixed(2))} title="NDWI" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'NDDI').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'NDDI').map(item => item.Kecamatan)} labels={sortBy(filteredData,'NDDI').map(item => item.Kelurahan)} data={sortBy(filteredData,'NDDI').map(item => item.NDDI.toFixed(2))} title="NDDI" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'SoilMoisture').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'SoilMoisture').map(item => item.Kecamatan)} labels={sortBy(filteredData,'SoilMoisture').map(item => item.Kelurahan)} data={sortBy(filteredData,'SoilMoisture').map(item => item.SoilMoisture.toFixed(2))} title="SoilMoisture" />
                </div>
              </motion.div>
              <br />
              <motion.div style={{ marginLeft: '-20px' }} className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 shadow-lg flex">
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                  <BarChart kabupaten={sortBy(filteredData,'NDBI').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'NDBI').map(item => item.Kecamatan)} labels={sortBy(filteredData,'NDBI').map(item => item.Kelurahan)} data={sortBy(filteredData,'NDBI').map(item => item.NDBI.toFixed(2))} title="NDBI" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'SAVI').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'SAVI').map(item => item.Kecamatan)} labels={sortBy(filteredData,'SAVI').map(item => item.Kelurahan)} data={sortBy(filteredData,'SAVI').map(item => item.SAVI.toFixed(2))} title="SAVI" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'NTL').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'NTL').map(item => item.Kecamatan)} labels={sortBy(filteredData,'NTL').map(item => item.Kelurahan)} data={sortBy(filteredData,'NTL').map(item => item.NTL.toFixed(2))} title="NTL" />
                </div>
              </motion.div>
              
              <br />
              <motion.div style={{ marginLeft: '-20px' }} className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 shadow-lg flex">
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                  <BarChart kabupaten={sortBy(filteredData,'Elevation').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'Elevation').map(item => item.Kecamatan)} labels={sortBy(filteredData,'Elevation').map(item => item.Kelurahan)} data={sortBy(filteredData,'Elevation').map(item => item.Elevation.toFixed(2))} title="Elevation" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'Slope').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'Slope').map(item => item.Kecamatan)} labels={sortBy(filteredData,'Slope').map(item => item.Kelurahan)} data={sortBy(filteredData,'Slope').map(item => item.Slope.toFixed(2))} title="Slope" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'JumlahPenduduk').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'JumlahPenduduk').map(item => item.Kecamatan)} labels={sortBy(filteredData,'JumlahPenduduk').map(item => item.Kelurahan)} data={sortBy(filteredData,'JumlahPenduduk').map(item => item.JumlahPenduduk.toFixed(2))} title="Jumlah Penduduk" />
                </div>
              </motion.div>
              
              <br />
              <motion.div style={{ marginLeft: '-20px' }} className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 shadow-lg flex">
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                  <BarChart kabupaten={sortBy(filteredData,'RLS').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'RLS').map(item => item.Kecamatan)} labels={sortBy(filteredData,'RLS').map(item => item.Kelurahan)} data={sortBy(filteredData,'RLS').map(item => item.RLS.toFixed(2))} title="RLS" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'AHH').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'AHH').map(item => item.Kecamatan)} labels={sortBy(filteredData,'AHH').map(item => item.Kelurahan)} data={sortBy(filteredData,'AHH').map(item => item.AHH.toFixed(2))} title="AHH" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'AksesAirBersih').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'AksesAirBersih').map(item => item.Kecamatan)} labels={sortBy(filteredData,'AksesAirBersih').map(item => item.Kelurahan)} data={sortBy(filteredData,'AksesAirBersih').map(item => item.AksesAirBersih.toFixed(2))} title="Akses Air Bersih" />
                </div>
              </motion.div>
              <br />
              <motion.div style={{ marginLeft: '-20px' }} className="pt-8 text-lg text-[#eaeaea] bg-gray-800 p-6 shadow-lg flex">
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                  <BarChart kabupaten={sortBy(filteredData,'Rasio').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'Rasio').map(item => item.Kecamatan)} labels={sortBy(filteredData,'Rasio').map(item => item.Kelurahan)} data={sortBy(filteredData,'Rasio').map(item => item.Rasio.toFixed(2))} title="Rasio" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'Stunting').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'Stunting').map(item => item.Kecamatan)} labels={sortBy(filteredData,'Stunting').map(item => item.Kelurahan)} data={sortBy(filteredData,'Stunting').map(item => item.Stunting.toFixed(2))} title="Stunting" />
                </div>
                <div style={{ width: '33.3%' }}>
                  <BarChart kabupaten={sortBy(filteredData,'IKP2023').map(item => item.Kabkot)} kecamatan={sortBy(filteredData,'IKP2023').map(item => item.Kecamatan)} labels={sortBy(filteredData,'AksesAirBersih').map(item => item.Kelurahan)} data={sortBy(filteredData,'IKP2023').map(item => item.IKP2023.toFixed(2))} title="Estimasi IKP 2023" />
                </div>
              </motion.div>
              <div  style={{ marginLeft: '-20px' }} className="flex flex-col rounded-lg">
                <br />
                <TableLokasi data={filteredData} />
                <br />
              </div>
            </div>
          ) : (
            <div>
              {/* Content for Evaluasi Kabupaten/Kota */}
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Analisis Kuadran IKP dengan Dana Desa Per Kapita</h2>
              <br /> 
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <QuadrantAnalysis1 data={filteredData} />
              </div>
              {/* <br />
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Analisis Kuadran GTFP dengan Kapasitas Fiskal</h2>
              <br /> 
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                 <QuadrantAnalysis1 data={filteredData} />
              </div> */}
              <br />
              <h2 className="pt-2 text-lg text-[#eaeaea] bg-gray-800 p-2 shadow-lg text-center">Rekomendasi</h2>
              <br /> 
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
  <p style={{color: "white"}}>Berdasarkan hasil analisis kuadran antara GTFP dan kapasitas fiskal, berikut adalah rekomendasi kebijakan untuk masing-masing kuadran:</p>
  
  <div className="mt-4">
    <h2 className="text-xl font-bold text-green-400">Kuadran I (GTFP tinggi, Kapasitas Fiskal tinggi):</h2>
    <ul className="list-disc ml-5 mt-2">
      <li><span style={{color: "white"}}><strong>Investasi Hijau:</strong> Dorong investasi hijau dengan inisiatif inovatif dan berkelanjutan.</span></li>
      <li><span style={{color: "white"}}><strong>Pembangunan Teknologi:</strong> Fokus pada pengembangan teknologi ramah lingkungan.</span></li>
      <li><span style={{color: "white"}}><strong>Kolaborasi Publik-Swasta:</strong> Perkuat kolaborasi untuk mempertahankan momentum pertumbuhan.</span></li>
      <li><span style={{color: "white"}}><strong>Diversifikasi Ekonomi:</strong> Implementasikan kebijakan fiskal untuk diversifikasi ekonomi guna ketahanan jangka panjang.</span></li>
    </ul>
  </div>

  <div className="mt-6">
    <h2 className="text-xl font-bold text-yellow-400">Kuadran II (GTFP rendah, Kapasitas Fiskal tinggi):</h2>
    <ul className="list-disc ml-5 mt-2">
      <li><span style={{color: "white"}}><strong>Efektivitas Alokasi Anggaran:</strong> Fokus pada peningkatan efektivitas alokasi anggaran dengan perencanaan yang lebih baik.</span></li>
      <li><span style={{color: "white"}}><strong>Proyek Hijau:</strong> Pastikan dana digunakan untuk proyek lingkungan dan pelatihan di sektor berkelanjutan.</span></li>
      <li><span style={{color: "white"}}><strong>Monitoring dan Evaluasi:</strong> Perketat kebijakan monitoring dan evaluasi penggunaan anggaran.</span></li>
    </ul>
  </div>

  <div className="mt-6">
    <h2 className="text-xl font-bold text-red-400">Kuadran III (GTFP rendah, Kapasitas Fiskal rendah):</h2>
    <ul className="list-disc ml-5 mt-2">
      <li><span style={{color: "white"}}><strong>Bantuan Kapasitas Fiskal:</strong> Tingkatkan kapasitas fiskal melalui transfer dan bantuan teknis dari pemerintah pusat.</span></li>
      <li><span style={{color: "white"}}><strong>Infrastruktur dan Pendidikan:</strong> Prioritaskan peningkatan infrastruktur dasar dan pendidikan lingkungan.</span></li>
      <li><span style={{color: "white"}}><strong>Investasi Hijau Swasta:</strong> Mendorong masuknya investasi hijau dari sektor swasta untuk meningkatkan produktivitas.</span></li>
    </ul>
  </div>

  <div className="mt-6">
    <h2 className="text-xl font-bold text-blue-400">Kuadran IV (GTFP tinggi, Kapasitas Fiskal rendah):</h2>
    <ul className="list-disc ml-5 mt-2">
      <li><span style={{color: "white"}}><strong>Penguatan Kapasitas Fiskal Lokal:</strong> Arahkan kebijakan fiskal untuk memperkuat kapasitas fiskal lokal.</span></li>
      <li><span style={{color: "white"}}><strong>Insentif Fiskal:</strong> Berikan insentif fiskal dan kemudahan dalam pengumpulan pendapatan daerah.</span></li>
      <li><span style={{color: "white"}}><strong>Kemitraan Sektor Swasta:</strong> Fasilitasi kemitraan dengan sektor swasta atau donor internasional untuk pembiayaan proyek ramah lingkungan.</span></li>
    </ul>
  </div>
</div>


              <br />
            </div>
          )}
        </div>
      </section>
    </main>
    </QueryClientProvider>
  );
}