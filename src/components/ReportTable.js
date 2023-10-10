function ReportTable({ reports, onDelete }) {
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  
    if (!reports || reports.length === 0) {
      return <h2>No Cookie Stands Available</h2>;
    }
  
    return (
        <div className="flex justify-center mb-3 mt-3">
        <table className="table-auto border-collapse border border-gray-500">
          <thead className="bg-red-300">
  
          <tr >
          <th className="border border-gray-500">Location</th>
            {hours.map(hour => (
              <th key={hour} className="border border-gray-500">{hour}</th>
              ))}
            <th className="border border-gray-500">Total</th>
            <th className="border border-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.location}</td>
              {Array.isArray(report.hourlySales) && report.hourlySales.map((sale, index) => (
                <td key={index}>{sale}</td>
              ))}
              <td>{Array.isArray(report.hourlySales) ? report.hourlySales.reduce((a, b) => a + b, 0) : 0}</td>
              <button
                onClick={() => onDelete(report.id)} 
                className="text-red-500 hover:text-red-900"
              >
                Delete
                </button>
            </tr>
          ))}
        </tbody>
        <tfoot className="font-bold">
          <tr>
            <td>Totals</td>
            {hours.map((hour, index) => (
              <td key={index}>
                {reports.reduce((total, report) => total + (Array.isArray(report.hourlySales) ? report.hourlySales[index] : 0), 0)}
              </td>
            ))}
            <td>{reports.reduce((total, report) => total + (Array.isArray(report.hourlySales) ? report.hourlySales.reduce((a, b) => a + b, 0) : 0), 0)}</td>
          </tr>
        </tfoot>
      </table>
      </div>
    );
  }
  
  export default ReportTable;
  