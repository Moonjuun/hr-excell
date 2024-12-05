import axios from "axios";

export const ExcellApi = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};