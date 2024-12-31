import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative h-[70vh] md:h-[80vh] bg-cover"
      style={{ 
        backgroundImage: 'url("./hero_img.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      aria-label="Hero section with cow protection mission statement"
      loading="lazy"
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-60">
        <div className="text-white text-center rounded-lg md:bg-white/5 m-2 md:m-4 p-2 md:px-6 md:py-10 md:backdrop-blur lg:max-w-[50vw]  md:shadow md:border md:border-white/10">
          <h3 className="text-xl md:text-2xl"> {t("heroSection.welcome")} </h3>
          <h1 className="text-2xl font-bold md:text-5xl text-primary shadow-2xl mt-2">
            {t("heroSection.name")}
          </h1>
          <h3 className="text-sm md:text-lg italic md:tracking-widest">
            {t("heroSection.subtitle")}
          </h3>
          <hr className="h-px my-5 md:my-6 bg-white/10 border-0" />

          <p className="text-base md:text-lg lg:text-xl shadow rounded w-full max-w-prose">
            {t("heroSection.description")}
          </p>
          <button
            className="group bg-primary hover:bg-primaryLight hover:text-green-950 px-6 py-2 rounded shadow m-8 font-bold flex items-center justify-center gap-1 mx-auto transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Scroll to donate section"
            onClick={() => {
              const donateSection = document.getElementById("donate");
              if (donateSection) {
                donateSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {t("heroSection.button")}
            <svg
              className="h-4 w-4 group-hover:animate-bounce"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Down arrow icon"
            >
              <path
                d="M9.16667 3.33332L10.8333 3.33332L10.8333 13.3333L15.4167 8.74999L16.6 9.93333L10 16.5333L3.40001 9.93332L4.58334 8.74999L9.16667 13.3333L9.16667 3.33332Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
