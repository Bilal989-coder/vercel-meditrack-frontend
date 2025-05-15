import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const MyLabReports = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 3;

  const fetchReports = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/lab`, {
        headers: { token },
      });

      if (data.success) {
        setReports(data.reports);
      } else {
        toast.error("Could not load reports.");
      }
    } catch (err) {
      console.error("Error fetching lab reports", err);
      toast.error("Error loading reports.");
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * reportsPerPage;
  const indexOfFirst = indexOfLast - reportsPerPage;
  const filteredReports = reports
    .filter(r => r.reportType.toLowerCase().includes(search.toLowerCase()));
  const currentReports = filteredReports.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>My Lab Reports</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by report type..."
        className="border px-4 py-2 mb-4 w-full sm:max-w-xs rounded"
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset to first page on new search
        }}
      />

      {reports.length === 0 ? (
        <p className='text-gray-500'>No lab reports found.</p>
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {currentReports.map((report, index) => (
              <div key={index} className='p-4 border rounded shadow bg-white'>
                <p className='font-semibold text-blue-700'>{report.reportType}</p>
                <p className='text-sm text-gray-600'>Date: {report.reportDate}</p>
                <p className='text-sm text-gray-500 mb-2'>{report.description}</p>
                <a
                  href={report.fileUrl}
                  target='_blank'
                  rel='noreferrer'
                  download
                  className='bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm inline-block'
                >
                  Download Report
                </a>
              </div>
            ))}
          </div>

          {/* Pagination buttons */}
          {totalPages > 1 && (
            <div className='mt-6 flex gap-2 flex-wrap'>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${i + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyLabReports;
