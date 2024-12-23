import { DownloadIcon, SymbolIcon } from "@radix-ui/react-icons";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import mock from "../../assets/images/mock3.png";
import skan from "../../assets/images/skan.png";
import source from "../../assets/images/sourceInconnu.png";
import { download, downLoadFile, getData } from "../../services/Service";
import { BASE_URL, DOWNLOAD_APK, helps, LOGO_APPS } from "../../Utils/constant";
export default function Home1() {
  const [loading, setLoading] = useState(false);
  const [logoApp, setLogoApp] = useState([]);
  const [isDownload, setIsDownload] = useState(false);

  const getListApp = () => {
    setLoading(true);
    getData(LOGO_APPS)
      .then((res) => {
        setLoading(false);
        setLogoApp(res?.data?.donnee);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    getListApp();
  }, []);

  return (
    <div className="bg-white bg-cover bg-center bg-none">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="lg:flex mx-auto items-center lg:px-[100px]">
          <div className="lg:px-24 md:items-center grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4  ">
            <div className="max-sm:px-4 max-md:px-12 max-lg:px-8">
              <a href="/" className="-m-1.5 p-1.5">
                <img alt="" src={skan} className="h-20 w-auto" />
              </a>
              <div className="flex item-center gap-1 my-3 w-fit relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Android"
                  role="img"
                  height={25}
                  viewBox="0 0 512 512"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect rx="15%"></rect>
                    <path
                      d="m338.1555 305.70985a14.86683 14.86683 0 1 1 14.8641-14.86963 14.88644 14.88644 0 0 1 -14.8641 14.86963m-164.311 0a14.86683 14.86683 0 1 1 14.864-14.86963 14.883638 14.883638 0 0 1 -14.864 14.86963m169.642-89.54555 29.7085-51.45542a6.1820238 6.1820238 0 1 0 -10.704-6.18821l-30.0839 52.10534c-23.0047-10.49951-48.8417-16.34595-76.4099-16.34595s-53.4024 5.85485-76.4072 16.34595l-30.081-52.10534a6.1811349 6.1811349 0 1 0 -10.7068 6.1798l29.7113 51.46383c-51.0156 27.7475-85.9094 79.39341-91.0135 140.41269h357c-5.1097-61.01928-40.0007-112.66519-91.0135-140.41269"
                      fill="#3ddc84"
                    ></path>
                  </g>
                </svg>
                <p className="font-body">Applications 100 % Android</p>
              </div>
              <h1 className="font-title text-[32px] lg:text-[50px] leading-10 text-black font-bold">
                Skan Store – Votre Nouveau Store Android
              </h1>
              <p className="font-body mt-4 mb-8 lg:text-sm font-medium text-gray-500">
                Skan Store est conçu exclusivement pour les utilisateurs
                Android. Découvrez un store moderne, sécurisé et facile à
                utiliser, qui met en avant les applications que vous aimez.
              </p>
              <button
                disabled={isDownload}
                onClick={() => {
                  setIsDownload(true);
                  download(DOWNLOAD_APK)
                    .then((res) => {
                      downLoadFile(res.data, "skanStore.apk");
                      setIsDownload(false);
                    })
                    .catch((err) => {
                      setIsDownload(false);
                      toast.error("Une erreur lors du telechargment");
                    });
                }}
                className="flex item-center gap-1 border-none font-body  text-[#f3b52e] btn btn-md rounded-full font-semibold w-[215px] h-[47px] bg-[#345082] hover:bg-[#f3b52e] hover:text-[#345082]"
              >
                {!isDownload ? (
                  <div className="flex gap-1 items-center">
                    <DownloadIcon />
                    <p>Télécharger Skan store</p>
                  </div>
                ) : (
                  <div className="flex gap-1 items-center">
                    <SymbolIcon className="animate-spin" />
                    <p>Telechargement encours</p>
                  </div>
                )}
              </button>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
                {loading && logoApp.length !== 0 ? (
                  <>
                    {[0, 1, 2].map(() => (
                      <div className="bg-gray-100 w-28 h-28 rounded-2xl flex items-center justify-center"></div>
                    ))}
                  </>
                ) : (
                  logoApp?.map((item) => (
                    <div>
                      <div className="bg-gray-100 w-28 h-28 rounded-2xl flex items-center justify-center">
                        <div>
                          <motion.img
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="rounded-2xl h-20 w-20"
                            src={`${BASE_URL}webfree/charger/${item.logoId}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <p className="hidden lg:block font-body text-center mt-2 text-xs">
                        {item?.nom}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="w-full h-full">
              <img className="lg:h-[600px]" src={mock} alt="" />
            </div>
          </div>
        </div>

        <div className="flex items-center xl:px-24 mx-auto max-w-7xl">
          <div className="px-4 lg:flex gap-4 md:gap-8  md:items-center">
            <div className="hidden lg:flex col-span-1">
              <img className="lg:h-[500px]" src={source} alt="" />
            </div>
            <div className="">
              <h1 className="font-title leading-6  lg:leading-10 text-[#345082] text-[19px] lg:text-[35px] font-bold">
                Étapes d'installation de l'application
              </h1>
              <div className="mt-8 grid grid-rows gap-4">
                {helps.map((item) => (
                  <div className="flex gap-2">
                    <div>
                      <div className="text-white text-center bg-[#32BB78] rounded-[100px] w-6 h-6">
                        {item.id}
                      </div>
                    </div>

                    <div className="">
                      <h1 className="font-title font-bold text-[16px] text-[#000000]">
                        {item.name}
                      </h1>
                      <p className="font-body text-sm text-[#484848]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
