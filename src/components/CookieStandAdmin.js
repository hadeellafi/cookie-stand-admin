'use client';
import Head from 'next/head';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import Footer from './Footer';
import React, { useState,useEffect } from 'react';
import axios from 'axios';

// import Footer from '../components/Footer';

function CookieStandAdmin() {
    const [reports, setReports] = useState([]);
  
    const addReport = (newReport) => {
        setReports([...reports, newReport]);
      };
      const deleteReport = async (id) => {
        try {
          await axios.delete(`https://cookiestandapi3.azurewebsites.net/api/CookieStands/${id}`);
          setReports(reports.filter(report => report.id !== id));
        } catch (error) {
          console.error('Error deleting cookie stand:', error);
        }
      };
    useEffect(() => {
      async function fetchReports() {
        try {
          const response = await axios.get('https://cookiestandapi3.azurewebsites.net/api/CookieStands');
          console.log(response.data);
          setReports(response.data);
        } catch (error) {
          console.error('Error fetching reports:', error);
        }
      }
  
      fetchReports();
    }, []);
      return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <main>
      <CreateForm onCreate={addReport} />
      <ReportTable reports={reports} onDelete={deleteReport} />
      </main>
      <Footer reports={reports} />
    </div>
  );
}
export default CookieStandAdmin;


