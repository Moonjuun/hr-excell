import axios from "axios";

export const ExcellApi = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file); // 파일 데이터 추가

    const response = await axios.post(
      "http://localhost:4000/api/excell/data",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // 반드시 설정
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
