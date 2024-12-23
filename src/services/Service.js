import clientAxios from "../Utils/axios";

export const getData = async (url) => {
  return await clientAxios.get(url);
};

export const exportFile = async (url) => {
  return await clientAxios.get(url, {
    responseType: "blob",
  });
};

export const download = async (url) => {
  return await clientAxios.get(url, {
    responseType: "blob",
  });
};

export const downLoadFile = (file, fileName) => {
  const url = window.URL.createObjectURL(new Blob([file]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
};
