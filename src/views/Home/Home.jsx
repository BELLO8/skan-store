import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { features, helps, steps } from "../../Utils/constant";
import { Step } from "../../components/Step";
export const Home = () => {
  const [storeLink, setStoreLink] = useState("");

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipad|ipod/g.test(userAgent);
      const isAndroid = /android/g.test(userAgent);

      if (isAndroid) {
        setStoreLink(
          "https://play.google.com/store/apps/details?id=com.skan.treiize.taxi&pcampaignid=web_share"
        );
        console.log("android");
      } else if (isIOS) {
        setStoreLink(
          "https://apps.apple.com/bf/app/treiize-taxi/id6482293997?l=fr-FR "
        );
      } else {
        setStoreLink(
          "https://play.google.com/store/apps/details?id=com.skan.treiize.taxi&pcampaignid=web_share"
        );
      }
    };

    handleDeviceDetection();
  });

  return (
    <>
      {/* banner with image */}
      <div
        className="lg:flex mx-auto py-20 lg:px-[120px]"
        style={{
          backgroundImage: `url("")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="my-4 lg:px-36 md:items-center grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4  ">
          <div className="max-sm:px-4 max-md:px-12 max-lg:px-8">
            <h1 className="text-[32px] lg:text-[50px] leading-10 text-white font-bold">
              Aller n'importe où, n'importe quand
            </h1>
            <p className="mt-4 mb-8 lg:text-[18px] font-medium text-white">
              Treiize Taxi est l'appli de mobilité tout-en-un. Soyez pris en
              charge par un chauffeur avec un service première classe en
              quelques minutes et profitez d'un trajet confortable où que vous
              alliez.
            </p>
            <Link
              to={storeLink}
              className="border-none text-[14px] text-white btn btn-sm rounded-full font-semibold w-[215px] h-[47px] bg-[#F15625] hover:bg-[#F15625]"
            >
              Télécharger l'application
            </Link>
          </div>
          {/* <div className='w-full h-full mx-auto'>
                        <img src={mock} alt="" />
                    </div> */}
        </div>
      </div>

      {/* application steps */}

      <div className="bg-[#1F1F1F] mb-20">
        <div className="px-4 py-8 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 max-sm:gap-6 sm:gap-6 md:gap-8 lg:px-38 xl:px-48">
          {steps.map((item) => (
            <Step
              icon={item.icon}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="text-center px-4">
          <h1 className="text-[#F15625] max-sm:text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-bold">
            L’appli qu’il vous faut pour tous vos trajets
          </h1>
          <p className="text-wrap mx-auto xl:w-[564px]">
            Finis les longues minutes d’attente, les tarifs élévés, et les
            prises de tête avec le chauffeur ! Simplifiez vous la vie avec
            Treiize Taxi.
          </p>
        </div>

        <div className="px-4 mt-10 xl:px-64 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {features.map((item) => (
            <div className="bg-white shadow-sm rounded-[18px] p-6">
              <img src={item.icon} alt="" />
              <p className="font-semibold text-[21px] text-[#000000]">
                {item.name}
              </p>
              <p className="text-[15px] text-[#444444]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between xl:px-24 mx-auto max-w-7xl">
        <div className="px-4 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center my-4">
          <div className="xl:w-[514px] xl:h-[385]"></div>
          <div className="">
            <h1 className="leading-6  lg:leading-10 text-[#F15625] text-[19px] lg:text-[35px] font-bold">
              Restez en sécurité durant toutes la durée du trajet
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
                    <h1 className="font-bold text-[16px] text-[#000000]">
                      {item.name}
                    </h1>
                    <p className="text-sm text-[#484848]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 md:items-center my-4">
          <div className="bg-[#3C3C3C] h-full py-8 px-4 lg:px-10 flex items-center">
            <div className="lg:px-20">
              <h1 className="leading-10 text-white text-[30px] lg:text-[40px] font-bold">
                Devenez conducteur sur Treiize Taxi
              </h1>
              <p className="my-3 text-[18px] font-medium text-white">
                Rejoingez Treiize Taxi en tant que conducteur, définissez votre
                planning et percevez des revenus en conduisant !
              </p>
              <button className="border-none text-[14px] text-white btn btn-sm rounded-full font-semibold w-[268px] h-[37px] bg-[#F15625] hover:bg-[#F15625]">
                S’inscrire en tant que conducteur
              </button>
            </div>
          </div>

          <div className="w-full h-ful">
            <img src={""} alt="" />
          </div>
        </div>
      </div>

      <div className="mb-8 mt-8 text-center">
        <h1 className="text-[#000000] text-[22px] lg:text-[40px] font-bold">
          Téléchargez l’application Treiize Taxi
        </h1>
        <div className="flex justify-center mt-14 px-8">
          <div className="relative">
            {/* <Link to={'/conducteur'} className='absolute right-[313px] bottom-4 bg-green-200 px-16 py-4'></Link>

                        <Link to={'/partenaire'} className='absolute max-sm:right-[74px] lg:right-[168px] bottom-1.5 bg-white px-6 py-2'></Link> */}
            <img src={""} alt="" width={1016} height={913} />
          </div>
        </div>
      </div>
    </>
  );
};
