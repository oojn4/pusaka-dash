import { SetStateAction, useState } from "react";

const ITEMS_PER_PAGE = 10;
const TableLokasi = ({ data = [] }: { data: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: 'label', direction: 'asc' });
    const handleSort = (key: string) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
          direction = 'desc';
        }
        setSortConfig({ key, direction });
      };
    
      const sortedData = [...data].sort((a:any, b:any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
  
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  
    const handlePageChange = (pageNumber: SetStateAction<number>) => {
      setCurrentPage(pageNumber);
    };
  
    // Calculate the current data slice based on the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = sortedData.slice(startIndex, endIndex);
  return (
    <div className=" bg-gray-800 rounded-sm rounded-lg border-strokedark bg-boxdark px-5 pb-2.5 pt-6 sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-darkgray text-left">
              <th className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11">
              <button
                  type="button"
                  onClick={() => handleSort('Kecamatan')}
                  className={`flex items-center ${sortConfig.key === 'Kecamatan' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Kecamatan
                  {sortConfig.key === 'Kecamatan' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11">
              <button
                  type="button"
                  onClick={() => handleSort('Kelurahan')}
                  className={`flex items-center ${sortConfig.key === 'Kelurahan' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Desa/Kelurahan
                  {sortConfig.key === 'Kelurahan' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11">
              <button
                  type="button"
                  onClick={() => handleSort('RWI')}
                  className={`flex items-center ${sortConfig.key === 'RWI' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  RWI
                  {sortConfig.key === 'RWI' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('PopulationDensity')}
                  className={`flex items-center ${sortConfig.key === 'PopulationDensity' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Population Density
                  {sortConfig.key === 'PopulationDensity' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('NDVI')}
                  className={`flex items-center ${sortConfig.key === 'NDVI' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 NDVI
                  {sortConfig.key === 'NDVI' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('NDWI')}
                  className={`flex items-center ${sortConfig.key === 'NDWI' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 NDWI
                  {sortConfig.key === 'NDWI' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('NDDI')}
                  className={`flex items-center ${sortConfig.key === 'NDDI' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 NDDI
                  {sortConfig.key === 'NDDI' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('SoilMoisture')}
                  className={`flex items-center ${sortConfig.key === 'SoilMoisture' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Soil Moisture
                  {sortConfig.key === 'SoilMoisture' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('NDBI')}
                  className={`flex items-center ${sortConfig.key === 'NDBI' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 NDBI
                  {sortConfig.key === 'NDBI' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('SAVI')}
                  className={`flex items-center ${sortConfig.key === 'SAVI' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 SAVI
                  {sortConfig.key === 'SAVI' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('NTL')}
                  className={`flex items-center ${sortConfig.key === 'NTL' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 NTL
                  {sortConfig.key === 'NTL' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('Elevation')}
                  className={`flex items-center ${sortConfig.key === 'Elevation' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Elevation
                  {sortConfig.key === 'Elevation' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('Slope')}
                  className={`flex items-center ${sortConfig.key === 'Slope' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Slope
                  {sortConfig.key === 'Slope' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('JumlahPenduduk')}
                  className={`flex items-center ${sortConfig.key === 'JumlahPenduduk' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Jumlah Penduduk
                  {sortConfig.key === 'JumlahPenduduk' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('RLS')}
                  className={`flex items-center ${sortConfig.key === 'RLS' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 RLS
                  {sortConfig.key === 'RLS' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('AHH')}
                  className={`flex items-center ${sortConfig.key === 'AHH' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 AHH
                  {sortConfig.key === 'AHH' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('AksesAirBersih')}
                  className={`flex items-center ${sortConfig.key === 'AksesAirBersih' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Akses Air Bersih
                  {sortConfig.key === 'AksesAirBersih' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>              
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('Rasio')}
                  className={`flex items-center ${sortConfig.key === 'Rasio' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Rasio
                  {sortConfig.key === 'Rasio' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('Stunting')}
                  className={`flex items-center ${sortConfig.key === 'Stunting' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Stunting
                  {sortConfig.key === 'Stunting' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('IKP2023')}
                  className={`flex items-center ${sortConfig.key === 'IKP2023' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                IKP2023
                  {sortConfig.key === 'IKP2023' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-gray-700 px-1 py-1 pl-9 xl:pl-11">
                  <h5 className="font-medium text-white">
                    {packageItem.Kelurahan}
                  </h5>
                </td>
                <td className="border-b border-gray-700 px-1 py-1 pl-9 xl:pl-11">
                  <h5 className="font-medium text-white">
                    {packageItem.Kelurahan}
                  </h5>
                </td>
                <td className="border-b border-gray-700 px-1 py-1 pl-9 xl:pl-11">
                  <h5 className="font-medium text-white">
                  {packageItem.RWI}
                  </h5>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                  {packageItem.PopulationDensity}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                  {packageItem.NDVI}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.NDWI}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.NDDI}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.SoilMoisture}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.NDBI}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.SAVI}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.NTL}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.Elevation}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.Slope}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.JumlahPenduduk}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.RLS}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.AHH}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.AksesAirBersih}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.Rasio}
                  </p>
                </td>
                
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.Stunting}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                <p
                className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                  packageItem.IKP2023 >= 83.255
                    ? "bg-success text-success"
                    : packageItem.IKP2023 >= 65.704
                    ? "bg-orange-500 text-warning"
                    : packageItem.IKP2023 >= 62.141
                    ? "bg-[#fb6a4a] text-warning"
                    : packageItem.IKP2023 >= 59.012
                    ? "bg-[#ef3b2c] text-warning"
                    : packageItem.IKP2023 >= 55.927
                    ? "bg-[#cb181d] text-warning"
                    : packageItem.IKP2023 >= 52.593
                    ? "bg-[#a50f15] text-warning"
                    : packageItem.IKP2023 >= 45.033
                    ? "bg-[#67000d] text-warning"
                    : "bg-danger text-danger"
                }`}
              >
                {packageItem.IKP2023.toFixed(2)}
              </p>
                </td>
                {/* <td className="border-b border-gray-700 px-1 py-1">
                  <p
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      packageItem.IKP2023 >=0.8 
                        ? "bg-success text-success"
                        : packageItem.IKP2023 <= 0.4
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-500"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableLokasi;
