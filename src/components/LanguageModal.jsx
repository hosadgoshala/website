import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

/**
 * LanguageModal component to prompt the user to choose a language on their first visit.
 * @returns {JSX.Element} The rendered component.
 */
const LanguageModal = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    // Check if the user has already seen the modal
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      setIsVisible(true);
    }

    // Add event listener to detect clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        i18n.changeLanguage("en");
        localStorage.setItem("hasSeenModal", "true");
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [i18n]);

  const chooseLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("hasSeenModal", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black text-green-900 bg-opacity-50 backdrop-blur flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white py-4 px-8 rounded shadow-lg text-center"
      >
        <h3 className="text-lg pt-4">Please choose your preferred language</h3>
        <h3 className="text-lg pb-4">
          ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ
        </h3>
        <div className="flex justify-center gap-8 items-center my-4">
          <button
            onClick={() => chooseLanguage("en")}
            className="bg-primaryDark p-2 rounded text-white hover:bg-primary"
          >
            English
          </button>
          <button
            onClick={() => chooseLanguage("kn")}
            className="bg-primaryDark p-2 rounded text-white hover:bg-primary"
          >
            ಕನ್ನಡ
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
