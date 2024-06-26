/* eslint-disable prettier/prettier */
import axios from 'axios';

async function fetchReportData() {
  try {
    const response = await axios.get("http://39.103.151.139:3001/apis/reportdata");
    return response.data;
  } catch (error) {
    console.error("Error fetching report data:", error);
    throw error;
  }
}

export { fetchReportData };
