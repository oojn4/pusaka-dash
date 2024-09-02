import { SetStateAction, useState } from "react";

const quadrantData = [
    { x: -18.13, y: 0.00686, label: 'PT SSU', status: 'Zona Terbatas' },
    { x: -20.34, y: 0.08891, label: 'PT AF', status: 'Zona Terbatas' },
    { x: -20.34, y: 0.08891, label: 'PT AP', status: 'Zona Terbatas' },
    { x: -20.54, y: 0.08519, label: 'PT BDM', status: 'Zona Terbatas' },
    { x: -19.69, y: 0.10238, label: 'PT CMP', status: 'Zona Terbatas' },
    { x: -20.26, y: 0.08961, label: 'PT DRI', status: 'Zona Terbatas' },
    { x: -20.15, y: 0.09042, label: 'PT PMS', status: 'Zona Terbatas' },
    { x: -17.20, y: 0.17069, label: 'PT PRT', status: 'Zona Terbatas' },
    { x: -23.05, y: 0.03578, label: 'PT VDNI', status: 'Zona Terisolasi' },
    { x: -22.33, y: 0.05348, label: 'PT BSI', status: 'Zona Terisolasi' },
    { x: -22.43, y: 0.05271, label: 'PT IMN', status: 'Zona Terisolasi' },
    { x: -23.23, y: 0.05299, label: 'PT MMM', status: 'Zona Terisolasi' },
    { x: -23.14, y: 0.05299, label: 'PT MMI', status: 'Zona Terisolasi' },
    { x: -22.20, y: 0.05146, label: 'PT WIM', status: 'Zona Terisolasi' },
    { x: -19.67, y: 0.07498, label: 'PT BP', status: 'Zona Terbatas' },
    { x: -21.94, y: 0.05066, label: 'PT BKA', status: 'Zona Terisolasi' },
    { x: -21.11, y: 0.05762, label: 'PT CJ', status: 'Zona Terbatas' },
    { x: -19.67, y: 0.07498, label: 'PT CDS', status: 'Zona Terbatas' },
    { x: -19.60, y: 0.07833, label: 'PT KKU', status: 'Zona Terbatas' },
    { x: -19.64, y: 0.07485, label: 'PT KNN', status: 'Zona Terisolasi' },
    { x: -21.10, y: 0.05618, label: 'PT MPR', status: 'Zona Terbatas' },
    { x: -19.63, y: 0.07522, label: 'PT SMA', status: 'Zona Terbatas' },
    { x: -19.63, y: 0.07524, label: 'PT SPR', status: 'Zona Terbatas' },
    { x: -23.48, y: 0.67455, label: 'BDE', status: 'Zona Padat' },
    { x: -23.72, y: 0.66248, label: 'PT BMR', status: 'Zona Padat' },
    { x: -23.32, y: 0.68691, label: 'PT MK', status: 'Zona Padat' },
    { x: -23.73, y: 0.66938, label: 'PT NPM', status: 'Zona Padat' },
    { x: -23.75, y: 0.66226, label: 'PT PS', status: 'Zona Padat' },
    { x: -23.65, y: 0.66774, label: 'PT SMM', status: 'Zona Padat' },
    { x: -23.66, y: 0.66726, label: 'PT SR', status: 'Zona Padat' },
    { x: -23.71, y: 0.66345, label: 'PT TMM', status: 'Zona Padat' }
];
const ITEMS_PER_PAGE = 5;
const Table = () => {
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
                  Industri Pengolahan Pertambangan
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
              <th className="min-w-[120px] px-4 py-4 font-medium text-white">
                Status
              </th>
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
                <td className="border-b border-gray-700 px-4 py-5">
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
                </td>
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

export default Table;
