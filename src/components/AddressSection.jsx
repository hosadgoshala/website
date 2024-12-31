import React from "react";
import { useTranslation } from "react-i18next";

const AddressSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="bg-slate-100 p-4 md:p-5">
      <div className="container mx-auto flex flex-col md:flex-row md:my-10 bg-white p-4 md:p-8 rounded text-center lg:max-w-[50vw]">
        <div className="md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">
            {t("addressSection.title")}
          </h2>
          <hr className="my-4" />
          <p className="text-gray-700"> {t("addressSection.description")} </p>
          <p> {t("addressSection.description2")} </p>
          <p> {t("addressSection.description3")} </p>
          <p>
            Ph:&nbsp;&nbsp;
            <a href="tel:8277542358" className="underline">
              {t("addressSection.description4")}
            </a>
          </p>
        </div>
        <div className="md:w-1/2">
          <iframe
            width="100%"
            height="100%"
            className="rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.191615246582!2d74.512786!3d14.4312825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc21455b579115%3A0x32928421f8317626!2sAmritadhara%20Gou%20Shala%2C%20Hosad!5e0!3m2!1sen!2sin!4v1635866724731!5m2!1sen!2sin"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
