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
                  onClick={() => handleSort('tahun')}
                  className={`flex items-center ${sortConfig.key === 'tahun' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Tahun
                  {sortConfig.key === 'tahun' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11">
              <button
                  type="button"
                  onClick={() => handleSort('provinsi')}
                  className={`flex items-center ${sortConfig.key === 'provinsi' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Provinsi
                  {sortConfig.key === 'provinsi' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11">
              <button
                  type="button"
                  onClick={() => handleSort('kabupaten_kota')}
                  className={`flex items-center ${sortConfig.key === 'kabupaten_kota' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Kabupaten/Kota
                  {sortConfig.key === 'kabupaten_kota' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('ika')}
                  className={`flex items-center ${sortConfig.key === 'ika' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  IKA
                  {sortConfig.key === 'ika' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('iku')}
                  className={`flex items-center ${sortConfig.key === 'iku' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 IKU
                  {sortConfig.key === 'iku' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('konsumsi_listrik')}
                  className={`flex items-center ${sortConfig.key === 'konsumsi_listrik' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Konsumsi Listrik
                  {sortConfig.key === 'konsumsi_listrik' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('pdrb')}
                  className={`flex items-center ${sortConfig.key === 'pdrb' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 PDRB
                  {sortConfig.key === 'pdrb' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('tk')}
                  className={`flex items-center ${sortConfig.key === 'tk' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 Tenaga Kerja
                  {sortConfig.key === 'tk' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('pmtb')}
                  className={`flex items-center ${sortConfig.key === 'pmtb' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                 PMTB
                  {sortConfig.key === 'pmtb' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('gtfp')}
                  className={`flex items-center ${sortConfig.key === 'gtfp' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                GTFP
                  {sortConfig.key === 'gtfp' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-gray-700 px-1 py-1 pl-9 xl:pl-11">
                  <h5 className="font-medium text-white">
                    {packageItem.tahun}
                  </h5>
                </td>
                <td className="border-b border-gray-700 px-1 py-1 pl-9 xl:pl-11">
                  <h5 className="font-medium text-white">
                    {packageItem.provinsi}
                  </h5>
                </td>
                <td className="border-b border-gray-700 px-1 py-1 pl-9 xl:pl-11">
                  <h5 className="font-medium text-white">
                  {packageItem.kabupaten_kota}
                  </h5>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                  {packageItem.ika}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                  {packageItem.iku}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.konsumsi_listrik}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.pdrb}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.tk}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                  <p className="text-white">
                    {packageItem.pmtb}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-1 py-1">
                <p
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      packageItem.gtfp >=0.8 
                        ? "bg-success text-success"
                        : packageItem.gtfp >=0.6 ? "bg-warning text-warning"
                        :packageItem.gtfp >= 0.4
                          ? "bg-orange-500 text-warning"
                          : "bg-danger text-danger"
                    }`}
                  >
                    {packageItem.gtfp}
                  </p>
                </td>
                {/* <td className="border-b border-gray-700 px-1 py-1">
                  <p
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      packageItem.gtfp >=0.8 
                        ? "bg-success text-success"
                        : packageItem.gtfp <= 0.4
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
