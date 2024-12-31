import React from "react";
import { useTranslation } from "react-i18next";

const FacilitySection = () => {
  const { t } = useTranslation();
  return (
    <section id="facility" className="bg-slate-100 p-4 md:p-5" aria-label="Facilities and cattle breeds section">
      <div className="container mx-auto  md:my-10 bg-white p-4 md:p-8 rounded text-center lg:max-w-[50vw]">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-lg md:text-2xl font-semibold text-center text-primary">
            {t("facilitySection.title")}
          </h3>
          <svg
            className="h-12 w-12 text-primary"
            viewBox="0 0 147 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Cattle icon"
          >
            <path
              d="M55.941 54.787C54.418 54.536 52.896 54.284 51.373 54.033C50.879 53.952 50.331 53.837 50.046 53.426C49.893 53.205 49.842 52.93 49.743 52.68C49.406 51.832 48.513 51.311 47.615 51.149C46.717 50.987 45.795 51.119 44.887 51.213C42.017 51.509 39.101 51.416 36.272 50.849C39.893 51.768 43.661 52.104 47.387 51.84C47.991 51.797 48.693 51.776 49.091 52.232C49.575 52.785 49.24 53.721 48.619 54.113C47.997 54.505 47.216 54.508 46.481 54.498C46.891 54.88 47.465 55.015 47.979 55.237C48.494 55.458 49.016 55.856 49.057 56.415C49.107 57.091 48.447 57.59 47.836 57.885C45.529 59 41.25 59.815 39.387 57.449C38.689 56.562 34.821 57.206 33.838 57.302C32.044 57.478 30.198 57.846 28.432 57.421C27.887 57.29 26.836 57.216 26.456 56.902C25.907 56.448 25.676 54.985 25.525 54.326C25.125 52.577 25.059 50.768 24.599 49.031C24.083 50.191 24.059 51.516 24.244 52.772C24.429 54.028 24.811 55.246 25.079 56.487C25.494 58.405 23.261 58.871 21.836 58.965C21.166 59.009 19.921 59.241 19.302 58.986C18.284 58.566 17.879 56.991 17.797 56.023C17.686 54.727 17.909 53.411 17.705 52.127C17.658 51.834 17.583 51.53 17.383 51.31C17.052 50.945 16.497 50.92 16.004 50.903C13.263 50.807 10.543 50.131 8.07497 48.933C7.16797 48.492 6.17996 47.799 6.17096 46.791C6.16596 46.254 6.45096 45.762 6.74496 45.313C7.19096 44.63 7.67697 43.973 8.19997 43.346C10.179 40.972 12.256 39.463 12.644 36.142C12.88 34.126 12.615 32.09 12.475 30.065C12.228 26.484 12.086 21.573 14.793 18.886C17.7 16.001 20.999 15.288 24.698 13.826C28.433 12.35 32.292 10.365 35.71 8.259C36.118 8.008 37.802 8.46299 38.304 8.51999C39.244 8.62699 40.182 8.74599 41.119 8.87399C42.73 9.09399 44.337 9.345 45.946 9.577C48.794 9.988 51.661 10.34 54.545 10.233C61.506 9.975 67.768 6.11498 74.726 6.18698C75.123 6.19098 75.52 6.20699 75.916 6.23499C77.95 6.37899 80.006 6.832 82.008 6.439C83.118 6.221 84.159 5.74998 85.242 5.42398C87.815 4.64898 90.526 4.71899 93.179 4.88699C95.416 5.02799 97.928 4.849 100.041 5.633C102.319 6.479 104.715 6.95199 107.116 7.35599C108.803 7.63999 110.607 7.786 112.294 7.595C114.595 7.335 117.027 7.79599 119.357 7.82999C118.394 7.52899 117.467 7.11001 116.604 6.58701C116.054 6.25301 115.504 5.84698 115.249 5.25598C114.936 4.53198 115.142 3.66799 115.578 3.01099C116.015 2.35399 116.654 1.86299 117.282 1.38599C117.831 1.81499 117.07 2.67199 117.182 3.35999C117.239 3.70999 117.528 3.97498 117.83 4.16098C118.819 4.76898 120.061 4.80099 121.209 4.62299C122.357 4.44599 123.471 4.079 124.625 3.952C126.018 3.798 127.44 3.99498 128.819 3.74698C130.418 3.45898 131.883 2.58399 133.5 2.42599C134.778 2.30099 136.057 2.63398 137.34 2.63498C139.94 2.63698 142.328 1.299 144.579 0C144.738 1.621 143.542 3.10099 142.14 3.92999C140.738 4.75899 139.116 5.12398 137.62 5.76898C136.605 6.20598 135.512 7.00598 135.581 8.10898C137.202 7.14698 139.196 6.97499 141.06 7.25699C142.924 7.53899 144.695 8.24099 146.446 8.93799C146.231 9.17599 146.011 9.40899 145.785 9.63699C144.117 11.326 142.171 12.741 140.049 13.804C139.726 13.007 139.126 12.326 138.377 11.904C140.88 13.314 139.571 19.798 139.499 22.065C139.474 22.844 139.454 23.651 139.755 24.37C140.056 25.09 140.645 25.643 141.217 26.174C141.867 26.776 142.517 27.378 143.167 27.979C143.509 28.296 143.867 28.638 143.99 29.088C144.084 29.433 144.026 29.801 143.935 30.147C143.324 32.446 141.063 34.198 138.683 34.216C139.268 34.512 139.902 34.709 140.552 34.797C139.661 35.515 138.576 36.027 137.434 36.102C136.292 36.178 135.096 35.781 134.328 34.933C133.96 34.526 133.694 34.029 133.288 33.66C131.736 32.252 128.626 32.743 126.741 32.902C125.367 33.018 123.916 33.042 122.693 32.405C123.146 33.155 123.944 33.688 124.81 33.82C123.953 33.688 121.755 35.255 121.047 35.72C119.685 36.616 118.386 37.613 117.091 38.602C115.167 40.073 113.232 41.552 111.573 43.316C110.236 44.738 108.272 46.403 107.409 48.167C107.91 48.033 108.41 48.401 108.717 48.819C109.024 49.236 109.242 49.734 109.649 50.055C109.899 50.253 110.223 50.388 110.362 50.675C110.465 50.889 110.44 51.14 110.406 51.374C110.263 52.342 109.99 53.29 109.596 54.186C109.453 54.511 109.277 54.849 108.967 55.022C108.679 55.183 108.33 55.172 108.001 55.157C104.405 54.994 100.809 54.831 97.213 54.668C97.195 55.938 97.028 57.46 95.894 58.033C95.394 58.286 94.807 58.285 94.247 58.26C91.708 58.148 89.195 57.665 86.655 57.584C81.904 57.433 77.022 58.681 72.464 57.33C72.284 57.277 72.101 57.217 71.953 57.102C71.343 56.625 71.707 55.656 72.115 54.998C72.703 54.049 73.291 53.1 73.88 52.151C72.681 53.339 71.776 55.778 70.128 56.369C67.832 57.192 64.264 56.161 61.945 55.778C59.943 55.447 57.942 55.117 55.941 54.787Z"
              fill="currentColor"
            />
            <path
              d="M3.46687 54.5868C1.97687 53.1658 2.11787 50.7458 2.71587 48.7758C4.04887 44.3828 7.06687 40.5518 7.79187 36.0188C8.10787 34.0448 7.97388 31.9988 8.51288 30.0728C9.54788 26.3738 12.8119 23.8148 15.0709 20.7088L14.9979 19.2368C13.3119 19.9818 11.9149 21.2678 10.7449 22.6928C8.57587 25.3328 7.08387 28.5238 6.44787 31.8818C5.99987 34.2488 5.97287 36.6788 5.53587 39.0478C5.05187 41.6708 4.07287 44.1808 2.91087 46.5818C1.68587 49.1128 0.222876 51.6418 0.0188761 54.4468C-0.0491239 55.3908 0.0488735 56.3998 0.606874 57.1638C1.07887 57.8108 1.81687 58.2008 2.53887 58.5468C4.45087 59.4628 6.43387 60.2218 8.41387 60.9798C9.18687 59.9008 9.11287 58.2938 8.24288 57.2908C7.03487 55.8968 4.80287 55.8608 3.46687 54.5868Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <p className="my-4 text-left md:leading-relaxed">
          {t("facilitySection.description")}
        </p>
        <p className="my-4 text-left md:leading-relaxed">
          {t("facilitySection.description2")}
        </p>
        <p className="font-semibold"> {t("facilitySection.subtitle1")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="bg-primaryDark p-2 m-2 rounded relative">
            <img
              className="h-full w-full object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./Deoni.webp"
              alt="Deoni Cattle"
              loading="lazy"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-xs text-black bg-white/50 p-1">
              {t("facilitySection.Deoni")}
            </p>
          </div>
          <div className="bg-primaryDark p-2 m-2 rounded relative">
            <img
              className="h-full w-full object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./Geer.webp"
              alt="Geer Cattle"
              loading="lazy"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-xs text-black bg-white/50 p-1">
              {t("facilitySection.Geer")}
            </p>
          </div>
          <div className="bg-primaryDark p-2 m-2 rounded relative">
            <img
              className="h-full w-full object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./Kankrej.webp"
              alt="Kankrej Cattle"
              loading="lazy"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-xs text-black bg-white/50 p-1">
              {t("facilitySection.Kankrej")}
            </p>
          </div>
          <div className="bg-primaryDark p-2 m-2 rounded relative">
            <img
              className="h-full w-full object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./Hallikar.webp"
              alt="Hallikar Cattle"
              loading="lazy"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-xs text-black bg-white/50 p-1">
              {t("facilitySection.Hallikar")}
            </p>
          </div>
          <div className="bg-primaryDark p-2 m-2 rounded relative">
            <img
              className="h-full w-full object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./Khillari.webp"
              alt="Khillari Cattle"
              loading="lazy"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-xs text-black bg-white/50 p-1">
              {t("facilitySection.Khillari")}
            </p>
          </div>
          <div className="bg-primaryDark p-2 m-2 rounded relative">
            <img
              className="h-full w-full object-cover hover:scale-105 transition-all ease-in-out duration-300 "
              src="./malnad-gidda.webp"
              alt="Malnad Gidda Cattle"
              loading="lazy"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center font-semibold text-xs text-black bg-white/50 p-1">
              {t("facilitySection.MalnadGidda")}
            </p>
          </div>
        </div>
        <p className="mt-10 font-semibold">{t("facilitySection.subtitle2")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="p-2 m-2 rounded relative overflow-clip shadow ">
            <img
              className="h-full w-full rounded object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./facility1.webp"
              alt="Facility Image 1"
              loading="lazy"
            />
          </div>
          <div className="p-2 m-2 rounded relative overflow-clip shadow">
            <img
              className="h-full w-full rounded object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./facility2.webp"
              alt="Facility Image 2"
              loading="lazy"
            />
          </div>
          <div className="p-2 m-2 rounded relative overflow-clip shadow">
            <img
              className="h-full w-full rounded object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./facility3.webp"
              alt="Facility Image 3"
              loading="lazy"
            />
          </div>
          <div className="p-2 m-2 rounded relative overflow-clip shadow">
            <img
              className="h-full w-full rounded object-cover hover:scale-105 transition-all ease-in-out duration-300"
              src="./facility4.webp"
              alt="Facility Image 4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
