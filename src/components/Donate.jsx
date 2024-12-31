import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Donate = () => {
  const { t } = useTranslation();
  const [accountNumber, setAccountNumber] = useState("");
  const obfuscatedUPI =
    "&#56;&#50;&#55;&#55;&#53;&#52;&#50;&#51;&#53;&#56;&#64;&#107;&#98;&#108;";
  const payeeName =
    "AMRATADHARA GOSHALA HOSAD SRI RAGHAVESHWARA BHARATI MAHASWAMIJI";
  const currency = "INR";

  const decodeHTMLEntities = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  const decodedUPI = decodeHTMLEntities(obfuscatedUPI);
  const upiLink = `upi://pay?pa=${decodedUPI}&pn=${encodeURIComponent(
    payeeName
  )}&cu=${currency}`;

  useEffect(() => {
    const encodedParts = [
      "NDE2Mg==", // 4162
      "NTAwMQ==", // 5001
      "MDk3Mw==", // 0973
      "MzEwMQ==", // 3101
    ];
    const decodeBase64 = (str) => atob(str);
    const decryptedAccountNumber = encodedParts.map(decodeBase64).join("");

    // Set the decrypted account number in the state
    setAccountNumber(decryptedAccountNumber);
  }, []);

  return (
    <section id="donate" className="bg-primaryDark p-4 md:p-5">
      <div className="container mx-auto  md:my-10 bg-white p-4 md:p-8 rounded text-center lg:max-w-[50vw]">
        <div className="flex items-start text-primary justify-center gap-2 my-4">
          <svg
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.22825 10.85L8.33325 13.3333H12.4999V12.5H9.11242C9.03705 12.5 8.9631 12.4795 8.89845 12.4407C8.83381 12.402 8.78088 12.3464 8.7453 12.28C8.70973 12.2136 8.69284 12.1387 8.69644 12.0634C8.70004 11.9881 8.724 11.9152 8.76575 11.8525L9.50575 10.7425C9.65783 10.5143 9.86387 10.3271 10.1056 10.1976C10.3474 10.0681 10.6173 10.0002 10.8916 10H17.4999C17.7209 10 17.9329 10.0878 18.0892 10.2441C18.2455 10.4004 18.3333 10.6123 18.3333 10.8333V15.8333C18.3333 16.2754 18.1577 16.6993 17.8451 17.0118C17.5325 17.3244 17.1086 17.5 16.6666 17.5H8.63409C8.27774 17.5001 7.9255 17.424 7.60097 17.2768C7.27645 17.1296 6.98713 16.9148 6.75242 16.6467L1.66659 10.8333L2.87659 10.43C3.27248 10.2982 3.69507 10.2676 4.10583 10.3409C4.51659 10.4143 4.90246 10.5893 5.22825 10.85ZM3.95159 6.15833C3.57575 5.77083 3.34325 5.235 3.34325 4.64333C3.34325 4.05167 3.57575 3.51583 3.95159 3.12833C4.14174 2.9301 4.36994 2.77227 4.62253 2.66431C4.87512 2.55634 5.14689 2.50046 5.42159 2.5C5.42159 2.5 6.45825 2.4975 7.49992 3.57167C8.54159 2.4975 9.57825 2.5 9.57825 2.5C9.85289 2.50035 10.1246 2.5561 10.3772 2.66392C10.6298 2.77174 10.858 2.92941 11.0483 3.1275C11.4241 3.51583 11.6566 4.05083 11.6566 4.6425C11.6566 5.23417 11.4241 5.77083 11.0483 6.1575L7.49992 10L3.95159 6.15833Z"
              fill="currentColor"
            />
          </svg>

          <p className="text-lg md:text-2xl font-semibold text-center">
            {t("donateSection.title")}
          </p>

          <svg
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7717 10.85L11.6667 13.3333H7.50008V12.5H10.8876C10.9629 12.5 11.0369 12.4795 11.1015 12.4407C11.1662 12.402 11.2191 12.3464 11.2547 12.28C11.2903 12.2136 11.3072 12.1387 11.3036 12.0634C11.3 11.9881 11.276 11.9152 11.2342 11.8525L10.4942 10.7425C10.3422 10.5143 10.1361 10.3271 9.89438 10.1976C9.65264 10.0681 9.38267 10.0002 9.10841 10H2.50008C2.27907 10 2.06711 10.0878 1.91083 10.2441C1.75455 10.4004 1.66675 10.6123 1.66675 10.8333V15.8333C1.66675 16.2754 1.84234 16.6993 2.1549 17.0118C2.46746 17.3244 2.89139 17.5 3.33341 17.5H11.3659C11.7223 17.5001 12.0745 17.424 12.399 17.2768C12.7236 17.1296 13.0129 16.9148 13.2476 16.6467L18.3334 10.8333L17.1234 10.43C16.7275 10.2982 16.3049 10.2676 15.8942 10.3409C15.4834 10.4143 15.0975 10.5893 14.7717 10.85ZM16.0484 6.15833C16.4242 5.77083 16.6567 5.235 16.6567 4.64333C16.6567 4.05167 16.4242 3.51583 16.0484 3.12833C15.8583 2.9301 15.6301 2.77227 15.3775 2.66431C15.1249 2.55634 14.8531 2.50046 14.5784 2.5C14.5784 2.5 13.5417 2.4975 12.5001 3.57167C11.4584 2.4975 10.4217 2.5 10.4217 2.5C10.1471 2.50035 9.87537 2.5561 9.62279 2.66392C9.37021 2.77174 9.14197 2.92941 8.95175 3.1275C8.57591 3.51583 8.34341 4.05083 8.34341 4.6425C8.34341 5.23417 8.57591 5.77083 8.95175 6.1575L12.5001 10L16.0484 6.15833Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="mb-4 md:leading-relaxed text-center">
          {t("donateSection.description")}
        </p>
        <p className="my-2"> {t("donateSection.upi")} </p>
        <a className="font-bold underline text-primary text-xl" href={upiLink}>
          {decodedUPI}
        </a>
        <p className="my-2">{t("donateSection.qrCode")}</p>
        <div className=" p-2 h-56 w-56 mx-auto rounded">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_72_2)">
              <path d="M500 0H0V500H500V0Z" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M70.176 0V17.544H78.948V26.316H70.176V61.404H78.948V52.632H87.72V70.176H78.948V78.948H61.404V70.176H52.632V78.948H35.088V70.176H26.316V78.948H35.088V87.72H17.544V78.948H0V96.492H8.772V87.72H17.544V105.264H26.316V122.808H35.088V131.58H43.86V122.808H35.088V114.036H70.176V96.492H61.404V87.72H78.948V105.264H87.72V122.808H78.948V140.352H70.176V149.124H61.404V140.352H35.088V166.668H43.86V149.124H61.404V157.896H52.632V166.668H61.404V175.44H17.544V166.668H26.316V157.896H17.544V166.668H8.772V175.44H0V201.756H17.544V184.212H26.316V192.984H35.088V201.756H43.86V210.528H35.088V219.3H70.176V210.528H78.948V228.072H35.088V236.844H17.544V245.616H8.772V236.844H0V280.704H35.088V289.476H26.316V298.248H8.772V289.476H0V307.02H26.316V298.248H43.86V289.476H61.404V280.704H70.176V298.248H52.632V307.02H43.86V333.336H17.544V342.108H0V350.88H8.772V359.652H17.544V368.424H8.772V394.74H0V421.056H43.86V412.284H61.404V421.056H52.632V429.828H70.176V438.6H78.948V429.828H70.176V421.056H87.72V429.828H96.492V412.284H114.036V394.74H105.264V403.512H96.492V385.968H105.264V377.196H96.492V385.968H87.72V377.196H78.948V368.424H70.176V394.74H87.72V412.284H78.948V403.512H70.176V412.284H61.404V403.512H43.86V394.74H61.404V385.968H52.632V377.196H61.404V368.424H52.632V359.652H87.72V368.424H105.264V359.652H114.036V368.424H122.808V377.196H114.036V385.968H131.58V394.74H122.808V403.512H131.58V412.284H122.808V421.056H105.264V447.372H114.036V464.916H105.264V456.144H96.492V473.688H78.948V464.916H87.72V447.372H96.492V438.6H87.72V447.372H78.948V464.916H70.176V473.688H78.948V482.46H87.72V491.232H78.948V500.004H87.72V491.232H96.492V500.004H105.264V491.232H96.492V473.688H105.264V482.46H114.036V473.688H122.808V491.232H114.036V500.004H149.124V482.46H140.352V473.688H157.896V482.46H166.668V456.144H175.44V464.916H184.212V482.46H175.44V491.232H184.212V500.004H201.756V491.232H228.072V482.46H219.3V473.688H236.844V491.232H245.616V482.46H254.388V464.916H263.16V473.688H280.704V482.46H289.476V491.232H307.02V482.46H315.792V500.004H333.336V491.232H342.108V482.46H350.88V500.004H359.652V491.232H368.424V500.004H377.196V491.232H385.968V482.46H403.512V500.004H412.284V491.232H421.056V500.004H438.6V491.232H421.056V482.46H412.284V473.688H403.512V464.916H385.968V438.6H368.424V429.828H359.652V421.056H350.88V394.74H342.108V403.512H333.336V394.74H315.792V412.284H324.564V429.828H315.792V421.056H307.02V429.828H280.704V421.056H289.476V412.284H298.248V403.512H307.02V385.968H324.564V377.196H298.248V368.424H324.564V359.652H333.336V350.88H342.108V342.108H350.88V350.88H359.652V342.108H377.196V350.88H368.424V359.652H359.652V368.424H333.336V377.196H342.108V385.968H359.652V394.74H377.196V403.512H359.652V412.284H385.968V429.828H394.74V438.6H412.284V447.372H421.056V464.916H438.6V482.46H447.372V500.004H491.232V491.232H500.004V447.372H482.46V438.6H491.232V429.828H500.004V421.056H491.232V412.284H482.46V403.512H491.232V385.968H482.46V403.512H473.688V412.284H482.46V421.056H456.144V412.284H464.916V403.512H456.144V394.74H438.6V412.284H447.372V421.056H421.056V412.284H429.828V385.968H421.056V377.196H429.828V350.88H438.6V359.652H447.372V350.88H438.6V342.108H447.372V324.564H456.144V315.792H447.372V307.02H438.6V315.792H429.828V324.564H438.6V333.336H429.828V350.88H421.056V324.564H412.284V315.792H403.512V324.564H385.968V315.792H368.424V307.02H394.74V298.248H403.512V307.02H412.284V298.248H403.512V289.476H412.284V280.704H421.056V298.248H438.6V280.704H447.372V298.248H464.916V307.02H473.688V298.248H464.916V289.476H491.232V280.704H482.46V271.932H473.688V263.16H464.916V245.616H473.688V254.388H482.46V245.616H500.004V228.072H473.688V219.3H482.46V210.528H491.232V201.756H500.004V192.984H491.232V184.212H482.46V192.984H473.688V184.212H464.916V175.44H473.688V166.668H482.46V175.44H500.004V166.668H491.232V157.896H500.004V131.58H491.232V122.808H500.004V105.264H491.232V96.492H500.004V87.72H491.232V78.948H500.004V70.176H482.46V87.72H464.916V78.948H473.688V70.176H447.372V78.948H456.144V87.72H464.916V96.492H482.46V105.264H491.232V122.808H473.688V131.58H464.916V122.808H447.372V114.036H473.688V105.264H447.372V96.492H429.828V87.72H421.056V78.948H429.828V70.176H421.056V78.948H403.512V87.72H421.056V96.492H412.284V131.58H438.6V122.808H447.372V131.58H464.916V140.352H473.688V131.58H482.46V149.124H491.232V157.896H473.688V149.124H464.916V157.896H456.144V184.212H447.372V175.44H438.6V184.212H429.828V175.44H421.056V201.756H412.284V192.984H403.512V184.212H412.284V157.896H403.512V175.44H394.74V192.984H385.968V184.212H377.196V192.984H359.652V184.212H350.88V175.44H342.108V184.212H350.88V192.984H359.652V210.528H385.968V228.072H394.74V192.984H403.512V201.756H412.284V210.528H403.512V219.3H429.828V210.528H421.056V201.756H438.6V219.3H447.372V228.072H421.056V263.16H412.284V271.932H403.512V263.16H394.74V245.616H385.968V236.844H377.196V219.3H368.424V228.072H359.652V236.844H377.196V245.616H385.968V263.16H350.88V254.388H359.652V245.616H350.88V254.388H342.108V245.616H333.336V263.16H324.564V254.388H307.02V245.616H298.248V236.844H289.476V245.616H298.248V263.16H324.564V271.932H315.792V280.704H298.248V271.932H280.704V263.16H271.932V254.388H280.704V245.616H271.932V228.072H280.704V210.528H289.476V219.3H298.248V228.072H307.02V236.844H324.564V228.072H333.336V219.3H342.108V236.844H350.88V201.756H333.336V166.668H324.564V192.984H315.792V201.756H333.336V219.3H324.564V210.528H315.792V219.3H324.564V228.072H307.02V219.3H298.248V210.528H307.02V201.756H298.248V192.984H307.02V184.212H315.792V149.124H324.564V157.896H342.108V166.668H377.196V175.44H385.968V166.668H394.74V149.124H429.828V157.896H421.056V166.668H438.6V157.896H447.372V140.352H438.6V149.124H429.828V140.352H403.512V131.58H394.74V140.352H385.968V122.808H403.512V96.492H394.74V87.72H377.196V70.176H385.968V61.404H394.74V52.632H403.512V61.404H412.284V43.86H421.056V0H403.512V8.772H394.74V43.86H385.968V61.404H377.196V52.632H368.424V43.86H377.196V35.088H385.968V26.316H377.196V17.544H368.424V26.316H359.652V8.772H385.968V0H350.88V26.316H342.108V35.088H368.424V43.86H359.652V52.632H350.88V78.948H342.108V87.72H333.336V70.176H315.792V61.404H324.564V52.632H333.336V61.404H342.108V52.632H333.336V43.86H324.564V35.088H333.336V8.772H342.108V0H333.336V8.772H324.564V0H307.02V17.544H315.792V35.088H307.02V43.86H298.248V70.176H289.476V78.948H280.704V70.176H271.932V43.86H280.704V26.316H271.932V17.544H289.476V35.088H298.248V8.772H280.704V0H263.16V8.772H254.388V0H236.844V8.772H228.072V0H219.3V17.544H245.616V26.316H236.844V35.088H228.072V26.316H219.3V35.088H210.528V17.544H201.756V35.088H192.984V26.316H184.212V8.772H192.984V0H175.44V17.544H157.896V8.772H166.668V0H157.896V8.772H149.124V17.544H157.896V26.316H184.212V35.088H166.668V52.632H157.896V43.86H149.124V52.632H140.352V61.404H131.58V52.632H122.808V61.404H114.036V43.86H105.264V35.088H114.036V26.316H105.264V17.544H122.808V26.316H131.58V43.86H140.352V26.316H131.58V17.544H140.352V0H122.808V8.772H105.264V0H87.72V17.544H78.948V0H70.176ZM201.756 0V8.772H210.528V0H201.756ZM245.616 8.772V17.544H254.388V26.316H245.616V35.088H254.388V26.316H263.16V35.088H271.932V26.316H263.16V17.544H271.932V8.772H263.16V17.544H254.388V8.772H245.616ZM403.512 8.772V17.544H412.284V8.772H403.512ZM87.72 17.544V35.088H105.264V26.316H96.492V17.544H87.72ZM368.424 26.316V35.088H377.196V26.316H368.424ZM403.512 26.316V43.86H412.284V26.316H403.512ZM219.3 35.088V43.86H201.756V61.404H192.984V43.86H184.212V70.176H175.44V78.948H184.212V96.492H175.44V114.036H166.668V122.808H157.896V131.58H149.124V140.352H131.58V157.896H140.352V175.44H149.124V140.352H166.668V131.58H175.44V140.352H184.212V149.124H192.984V157.896H184.212V166.668H175.44V157.896H157.896V184.212H149.124V192.984H131.58V175.44H122.808V149.124H114.036V157.896H105.264V140.352H87.72V149.124H78.948V157.896H96.492V166.668H105.264V184.212H114.036V192.984H96.492V210.528H87.72V184.212H96.492V175.44H87.72V166.668H78.948V175.44H61.404V184.212H35.088V192.984H61.404V201.756H52.632V210.528H61.404V201.756H70.176V192.984H78.948V210.528H87.72V219.3H96.492V236.844H78.948V245.616H96.492V236.844H105.264V245.616H114.036V254.388H96.492V263.16H87.72V271.932H78.948V280.704H87.72V271.932H96.492V280.704H105.264V298.248H114.036V307.02H122.808V289.476H114.036V280.704H122.808V271.932H140.352V289.476H131.58V315.792H114.036V324.564H105.264V333.336H114.036V342.108H122.808V359.652H131.58V350.88H140.352V368.424H149.124V350.88H166.668V359.652H175.44V368.424H192.984V394.74H184.212V377.196H166.668V394.74H157.896V377.196H149.124V385.968H140.352V412.284H149.124V394.74H157.896V412.284H166.668V429.828H192.984V421.056H201.756V438.6H192.984V447.372H210.528V456.144H184.212V464.916H192.984V491.232H201.756V482.46H210.528V473.688H219.3V464.916H228.072V456.144H219.3V438.6H228.072V429.828H210.528V412.284H192.984V403.512H210.528V394.74H201.756V377.196H210.528V368.424H219.3V350.88H228.072V368.424H236.844V377.196H228.072V385.968H219.3V421.056H228.072V403.512H236.844V421.056H254.388V412.284H245.616V403.512H271.932V385.968H289.476V394.74H280.704V412.284H289.476V394.74H298.248V377.196H280.704V368.424H271.932V350.88H245.616V333.336H254.388V342.108H271.932V333.336H254.388V324.564H245.616V307.02H254.388V298.248H263.16V307.02H271.932V315.792H263.16V324.564H298.248V342.108H307.02V350.88H315.792V359.652H324.564V350.88H333.336V333.336H350.88V307.02H368.424V298.248H359.652V289.476H377.196V298.248H385.968V289.476H394.74V280.704H403.512V271.932H394.74V280.704H377.196V271.932H368.424V280.704H350.88V271.932H342.108V263.16H333.336V280.704H315.792V298.248H307.02V289.476H298.248V280.704H289.476V289.476H280.704V298.248H263.16V289.476H271.932V280.704H280.704V271.932H271.932V280.704H263.16V271.932H245.616V289.476H236.844V280.704H228.072V219.3H236.844V228.072H245.616V210.528H263.16V219.3H271.932V210.528H280.704V201.756H289.476V192.984H271.932V175.44H280.704V184.212H298.248V149.124H315.792V131.58H307.02V114.036H315.792V105.264H333.336V114.036H324.564V140.352H333.336V149.124H350.88V131.58H342.108V114.036H350.88V105.264H359.652V96.492H368.424V105.264H377.196V114.036H359.652V122.808H368.424V131.58H359.652V157.896H368.424V140.352H377.196V157.896H385.968V140.352H377.196V122.808H385.968V105.264H394.74V96.492H368.424V87.72H359.652V78.948H350.88V96.492H342.108V105.264H333.336V87.72H307.02V78.948H298.248V87.72H307.02V96.492H289.476V87.72H280.704V78.948H271.932V96.492H263.16V87.72H254.388V78.948H228.072V87.72H219.3V96.492H201.756V87.72H210.528V78.948H201.756V61.404H210.528V52.632H219.3V70.176H228.072V52.632H219.3V43.86H228.072V35.088H219.3ZM87.72 43.86V52.632H96.492V61.404H105.264V70.176H114.036V61.404H105.264V43.86H87.72ZM236.844 43.86V70.176H263.16V43.86H236.844ZM307.02 43.86V61.404H315.792V52.632H324.564V43.86H307.02ZM149.124 52.632V61.404H140.352V78.948H131.58V61.404H122.808V78.948H105.264V87.72H114.036V96.492H96.492V87.72H87.72V78.948H78.948V87.72H87.72V96.492H96.492V105.264H114.036V114.036H122.808V131.58H131.58V114.036H140.352V122.808H149.124V114.036H140.352V105.264H149.124V96.492H157.896V87.72H140.352V78.948H157.896V70.176H149.124V61.404H157.896V52.632H149.124ZM166.668 52.632V61.404H175.44V52.632H166.668ZM245.616 52.632V61.404H254.388V52.632H245.616ZM280.704 52.632V61.404H289.476V52.632H280.704ZM359.652 52.632V70.176H377.196V61.404H368.424V52.632H359.652ZM421.056 52.632V61.404H429.828V52.632H421.056ZM184.212 70.176V78.948H192.984V87.72H201.756V78.948H192.984V70.176H184.212ZM52.632 78.948V87.72H61.404V78.948H52.632ZM122.808 78.948V87.72H131.58V96.492H122.808V114.036H131.58V96.492H140.352V87.72H131.58V78.948H122.808ZM35.088 87.72V96.492H26.316V105.264H35.088V96.492H43.86V105.264H61.404V96.492H43.86V87.72H35.088ZM245.616 87.72V96.492H228.072V105.264H201.756V96.492H184.212V105.264H201.756V122.808H219.3V140.352H210.528V131.58H192.984V122.808H184.212V131.58H192.984V149.124H201.756V140.352H210.528V192.984H201.756V184.212H192.984V201.756H210.528V210.528H192.984V228.072H184.212V201.756H175.44V192.984H166.668V201.756H157.896V219.3H149.124V201.756H140.352V210.528H122.808V201.756H131.58V192.984H114.036V210.528H96.492V219.3H114.036V228.072H122.808V236.844H131.58V245.616H122.808V263.16H131.58V245.616H140.352V236.844H131.58V228.072H166.668V245.616H149.124V254.388H140.352V263.16H149.124V254.388H166.668V245.616H175.44V254.388H192.984V245.616H201.756V254.388H210.528V245.616H219.3V228.072H210.528V219.3H228.072V201.756H236.844V210.528H245.616V201.756H263.16V210.528H271.932V201.756H263.16V184.212H228.072V157.896H236.844V175.44H254.388V166.668H280.704V175.44H289.476V149.124H298.248V140.352H263.16V131.58H280.704V105.264H271.932V114.036H263.16V131.58H254.388V122.808H245.616V96.492H254.388V105.264H263.16V96.492H254.388V87.72H245.616ZM307.02 96.492V105.264H298.248V114.036H289.476V122.808H298.248V114.036H307.02V105.264H315.792V96.492H307.02ZM421.056 96.492V105.264H429.828V96.492H421.056ZM0 105.264V114.036H8.772V105.264H0ZM438.6 105.264V114.036H447.372V105.264H438.6ZM219.3 114.036V122.808H228.072V149.124H236.844V157.896H245.616V166.668H254.388V157.896H245.616V149.124H254.388V140.352H245.616V131.58H236.844V122.808H228.072V114.036H219.3ZM421.056 114.036V122.808H429.828V114.036H421.056ZM8.772 122.808V131.58H0V149.124H8.772V140.352H17.544V122.808H8.772ZM52.632 122.808V131.58H61.404V122.808H52.632ZM87.72 122.808V131.58H96.492V122.808H87.72ZM105.264 122.808V131.58H114.036V122.808H105.264ZM236.844 140.352V149.124H245.616V140.352H236.844ZM263.16 149.124V157.896H280.704V149.124H263.16ZM192.984 166.668V175.44H201.756V166.668H192.984ZM8.772 175.44V184.212H17.544V175.44H8.772ZM78.948 175.44V184.212H87.72V175.44H78.948ZM114.036 175.44V184.212H122.808V175.44H114.036ZM219.3 184.212V192.984H210.528V201.756H219.3V192.984H228.072V184.212H219.3ZM438.6 184.212V192.984H447.372V184.212H438.6ZM456.144 184.212V210.528H447.372V219.3H456.144V228.072H464.916V219.3H456.144V210.528H482.46V201.756H491.232V192.984H482.46V201.756H464.916V184.212H456.144ZM377.196 192.984V201.756H385.968V192.984H377.196ZM8.772 210.528V228.072H17.544V210.528H8.772ZM114.036 210.528V219.3H122.808V210.528H114.036ZM166.668 219.3V228.072H175.44V245.616H192.984V236.844H201.756V245.616H210.528V228.072H192.984V236.844H184.212V228.072H175.44V219.3H166.668ZM403.512 228.072V236.844H412.284V228.072H403.512ZM43.86 236.844V263.16H70.176V236.844H43.86ZM236.844 236.844V263.16H263.16V236.844H236.844ZM429.828 236.844V263.16H456.144V236.844H429.828ZM473.688 236.844V245.616H482.46V236.844H473.688ZM52.632 245.616V254.388H61.404V245.616H52.632ZM245.616 245.616V254.388H254.388V245.616H245.616ZM438.6 245.616V254.388H447.372V245.616H438.6ZM8.772 254.388V271.932H35.088V280.704H61.404V271.932H35.088V263.16H17.544V254.388H8.772ZM491.232 254.388V271.932H500.004V254.388H491.232ZM96.492 263.16V271.932H105.264V280.704H114.036V263.16H96.492ZM166.668 263.16V289.476H157.896V271.932H149.124V298.248H140.352V307.02H157.896V298.248H175.44V315.792H184.212V333.336H192.984V350.88H201.756V359.652H192.984V368.424H201.756V359.652H210.528V350.88H219.3V342.108H228.072V350.88H236.844V359.652H245.616V368.424H254.388V377.196H245.616V385.968H228.072V394.74H236.844V403.512H245.616V385.968H263.16V359.652H245.616V350.88H236.844V342.108H228.072V333.336H245.616V324.564H210.528V315.792H201.756V298.248H210.528V307.02H228.072V315.792H236.844V307.02H245.616V298.248H254.388V289.476H263.16V280.704H254.388V289.476H245.616V298.248H236.844V307.02H228.072V280.704H219.3V271.932H210.528V280.704H192.984V298.248H175.44V289.476H184.212V271.932H192.984V263.16H184.212V271.932H175.44V263.16H166.668ZM421.056 271.932V280.704H438.6V271.932H421.056ZM342.108 280.704V289.476H324.564V298.248H315.792V307.02H298.248V324.564H315.792V333.336H307.02V342.108H324.564V324.564H342.108V307.02H350.88V280.704H342.108ZM78.948 289.476V298.248H87.72V315.792H70.176V307.02H52.632V315.792H70.176V324.564H78.948V333.336H61.404V324.564H52.632V333.336H43.86V342.108H35.088V350.88H43.86V359.652H52.632V350.88H70.176V342.108H87.72V324.564H96.492V298.248H87.72V289.476H78.948ZM210.528 289.476V298.248H219.3V289.476H210.528ZM482.46 298.248V315.792H473.688V324.564H500.004V298.248H482.46ZM280.704 307.02V315.792H289.476V307.02H280.704ZM315.792 307.02V315.792H333.336V307.02H315.792ZM192.984 315.792V333.336H201.756V350.88H210.528V342.108H219.3V333.336H210.528V324.564H201.756V315.792H192.984ZM359.652 315.792V333.336H377.196V342.108H385.968V350.88H377.196V359.652H385.968V377.196H377.196V368.424H368.424V377.196H359.652V385.968H385.968V394.74H394.74V403.512H403.512V394.74H421.056V385.968H385.968V377.196H394.74V333.336H385.968V324.564H368.424V315.792H359.652ZM438.6 315.792V324.564H447.372V315.792H438.6ZM0 324.564V333.336H8.772V324.564H0ZM114.036 324.564V333.336H122.808V342.108H140.352V350.88H149.124V333.336H140.352V324.564H131.58V333.336H122.808V324.564H114.036ZM166.668 324.564V350.88H175.44V359.652H184.212V350.88H175.44V324.564H166.668ZM403.512 324.564V333.336H412.284V324.564H403.512ZM52.632 333.336V342.108H61.404V333.336H52.632ZM456.144 333.336V342.108H482.46V359.652H491.232V377.196H500.004V342.108H482.46V333.336H456.144ZM280.704 342.108V359.652H289.476V342.108H280.704ZM403.512 342.108V368.424H412.284V377.196H421.056V359.652H412.284V342.108H403.512ZM87.72 350.88V359.652H105.264V350.88H87.72ZM456.144 350.88V368.424H464.916V377.196H456.144V385.968H464.916V394.74H473.688V377.196H482.46V368.424H473.688V350.88H456.144ZM43.86 368.424V377.196H35.088V394.74H26.316V377.196H17.544V394.74H26.316V412.284H43.86V403.512H35.088V394.74H43.86V377.196H52.632V368.424H43.86ZM438.6 368.424V377.196H447.372V368.424H438.6ZM166.668 394.74V403.512H175.44V421.056H192.984V412.284H184.212V394.74H166.668ZM8.772 403.512V412.284H17.544V403.512H8.772ZM412.284 403.512V412.284H403.512V429.828H412.284V438.6H421.056V421.056H412.284V412.284H421.056V403.512H412.284ZM263.16 412.284V421.056H271.932V412.284H263.16ZM131.58 421.056V429.828H122.808V447.372H131.58V456.144H122.808V473.688H140.352V464.916H149.124V456.144H140.352V447.372H131.58V438.6H149.124V447.372H157.896V456.144H166.668V447.372H175.44V438.6H149.124V421.056H131.58ZM342.108 421.056V429.828H324.564V438.6H315.792V429.828H307.02V438.6H289.476V447.372H280.704V456.144H271.932V464.916H298.248V473.688H289.476V482.46H298.248V473.688H324.564V482.46H342.108V473.688H350.88V456.144H359.652V447.372H342.108V429.828H350.88V421.056H342.108ZM236.844 429.828V456.144H263.16V429.828H236.844ZM429.828 429.828V456.144H456.144V429.828H429.828ZM464.916 429.828V456.144H473.688V464.916H482.46V473.688H464.916V464.916H447.372V473.688H464.916V482.46H456.144V491.232H473.688V482.46H491.232V456.144H482.46V447.372H473.688V438.6H482.46V429.828H464.916ZM245.616 438.6V447.372H254.388V438.6H245.616ZM307.02 438.6V447.372H315.792V464.916H324.564V473.688H333.336V456.144H342.108V447.372H333.336V438.6H324.564V447.372H315.792V438.6H307.02ZM438.6 438.6V447.372H447.372V438.6H438.6ZM368.424 447.372V464.916H377.196V447.372H368.424ZM131.58 456.144V464.916H140.352V456.144H131.58ZM210.528 456.144V464.916H219.3V456.144H210.528ZM298.248 456.144V464.916H307.02V456.144H298.248ZM368.424 482.46V491.232H377.196V482.46H368.424ZM157.896 491.232V500.004H166.668V491.232H157.896ZM254.388 491.232V500.004H263.16V491.232H254.388ZM271.932 491.232V500.004H280.704V491.232H271.932ZM0 0H61.404V61.404H0V0ZM8.772 8.772V52.632H52.632V8.772H8.772ZM17.544 17.544H43.86V43.86H17.544V17.544ZM438.6 0H500.004V61.404H438.6V0ZM447.372 8.772V52.632H491.232V8.772H447.372ZM456.144 17.544H482.46V43.86H456.144V17.544ZM0 438.6H61.404V500.004H0V438.6ZM8.772 447.372V491.232H52.632V447.372H8.772ZM17.544 456.144H43.86V482.46H17.544V456.144Z"
                fill="#14532D"
              />
            </g>
            <defs>
              <clipPath id="clip0_72_2">
                <rect width="500" height="500" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="my-2">{t("donateSection.accountDetails")}</p>
        <div className="rounded my-2 ">
          <table className="min-w-full text-slate-800 rounded bg-slate-100 ">
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Account Name</td>
                <td className="py-2 px-4 border-b font-bold">
                  Amruthadhara Goushala Hosad
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Account Number</td>
                <td className="py-2 px-4 border-b font-bold">
                  {accountNumber}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Bank</td>
                <td className="py-2 px-4 border-b font-bold">Karnataka Bank</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Branch</td>
                <td className="py-2 px-4 border-b font-bold">Kumta</td>
              </tr>
              <tr>
                <td className="py-2 px-4 ">IFSC</td>
                <td className="py-2 px-4 font-bold">KARB0000416</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <p className="text-xs italic my-2">Please note: Donations are only accepted from Indian nationals or Indian passport holders.</p> */}
      </div>
    </section>
  );
};

export default Donate;
