import { SetStateAction, useState } from "react";

const quadrantData = [
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

const ITEMS_PER_PAGE = 5;
const TableKabkot = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: 'label', direction: 'asc' });
    const handleSort = (key: string) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
          direction = 'desc';
        }
        setSortConfig({ key, direction });
      };
    
      const sortedData = [...quadrantData].sort((a:any, b:any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
  
    const totalPages = Math.ceil(quadrantData.length / ITEMS_PER_PAGE);
  
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
                  onClick={() => handleSort('label')}
                  className={`flex items-center ${sortConfig.key === 'label' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Kabupaten/Kota
                  {sortConfig.key === 'label' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('x')}
                  className={`flex items-center ${sortConfig.key === 'x' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Konektivitas
                  {sortConfig.key === 'x' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
              <button
                  type="button"
                  onClick={() => handleSort('y')}
                  className={`flex items-center ${sortConfig.key === 'y' ? (sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-red-500') : ''}`}
                >
                  Aksesibilitas
                  {sortConfig.key === 'y' ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                </button>
              </th>
              {/* <th className="min-w-[120px] px-4 py-4 font-medium text-white">
                Status
              </th> */}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-gray-700 px-4 py-5 pl-9 xl:pl-11">
                  <h5 className="font-medium text-white">
                    {packageItem.label}
                  </h5>
                </td>
                <td className="border-b border-gray-700 px-4 py-5">
                  <p className="text-white">
                    {-packageItem.x}
                  </p>
                </td>
                <td className="border-b border-gray-700 px-4 py-5">
                  <p className="text-white">
                    {packageItem.y}
                  </p>
                </td>
                {/* <td className="border-b border-gray-700 px-4 py-5">
                  <p
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Zona Optimum"
                        ? "bg-success text-success"
                        : packageItem.status === "Zona Terisolasi"
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

export default TableKabkot;
