import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const updloadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};

export default updloadImage;