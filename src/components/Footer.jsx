import React from "react";

const encodeEmail = (email) => {
  return email
    .split("")
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join("");
};

const Footer = () => {
  const email = encodeEmail("amruthadharahosad@gmail.com");
  const emailAddress = "amruthadharahosad@gmail.com";
  return (
    <footer className="bg-primaryDark text-white pt-8 pb-2 text-center">
      <a
        className="underline"
        href={`mailto:${emailAddress}`}
        dangerouslySetInnerHTML={{ __html: email }}
      />
      <p className="text-xs text-gray-300">
        © {new Date().getFullYear()} Dharma Chakra Trust ®. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
