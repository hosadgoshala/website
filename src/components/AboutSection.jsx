import React from "react";
import { useTranslation } from "react-i18next";

// Component for the section header with cow icon
const SectionHeader = ({ title }) => (
  <div className="flex items-center justify-center gap-2">
    <p className="text-lg md:text-2xl font-semibold text-center text-primary">
      {title}
    </p>
    <CowIcon />
  </div>
);

// Cow icon component
const CowIcon = () => (
  <div>
    <svg
      className="h-8 w-8 text-primary"
      viewBox="0 0 145 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cow icon"
    >
      <path
        d="M144.742 72.768C145.324 70.577 144.016 68.395 143.225 66.27C141.974 62.911 141.994 59.232 142.028 55.647C142.054 52.998 142.08 50.348 142.105 47.698C142.147 43.407 142.157 38.959 140.389 35.049C139.268 32.568 137.246 30.348 134.734 29.239C133.686 28.776 132.49 28.373 131.364 28.66C131.247 28.69 131.084 28.748 130.911 28.818C129.002 27.832 126.787 27.387 124.619 27.34C121.515 27.273 118.446 27.912 115.377 28.379C107.293 29.609 99.0824 29.653 90.9054 29.694C85.1404 29.723 79.3744 29.753 73.6094 29.782C70.5504 29.797 67.4874 29.813 64.4384 29.57C59.3244 29.163 54.3044 28.031 49.3674 26.677C47.0164 26.032 44.5034 24.879 42.1024 24.535C41.1854 24.404 40.2464 24.604 39.2994 24.511C38.3834 24.421 37.3834 23.767 36.5344 23.739C40.3754 23.868 44.2154 21.802 46.2244 18.526C44.3714 17.532 42.4694 16.521 40.3874 16.227C38.3054 15.933 35.9724 16.497 34.6904 18.164C34.6064 15.819 36.0904 13.682 36.2934 11.345C36.5354 8.559 34.9024 5.906 32.8204 4.039C30.0934 1.594 26.4974 0.139 22.8374 0C22.5824 1.276 23.9454 2.208 25.0164 2.946C26.8084 4.181 29.9894 7.289 29.9304 9.715C29.8904 11.345 28.1454 11.18 26.5334 11.596C24.7904 12.045 23.0474 12.494 21.3034 12.943C20.2954 13.203 19.2574 13.476 18.4264 14.104C18.2164 14.262 18.0054 14.449 17.7434 14.476C17.4664 14.504 17.2074 14.345 16.9794 14.185C15.1224 12.891 13.6344 11.077 12.4744 9.165C11.4944 7.549 10.7474 5.729 9.89541 4.041C8.90041 5.316 8.51442 6.987 8.55842 8.604C8.63842 11.511 10.4994 13.895 11.0644 16.638C11.1084 16.851 11.1644 17.084 11.3394 17.214C11.5344 17.36 11.8064 17.324 12.0454 17.279C13.4814 17.009 14.9004 16.65 16.2924 16.203C13.0854 17.803 9.52842 19.853 6.72442 22.085C4.90342 23.534 1.63342 24.052 0.426417 26.157C-0.428583 27.649 0.0904113 29.623 1.20141 30.935C2.31241 32.247 3.89841 33.046 5.43841 33.81C6.17941 34.177 6.93141 34.549 7.74241 34.706C8.91041 34.932 10.1384 34.702 11.2914 34.991C13.2554 35.482 14.5644 37.33 16.3694 38.247C17.8244 38.986 19.5214 39.079 21.0474 39.657C25.6134 41.387 28.0064 46.715 30.7484 50.394C32.3754 52.577 34.1094 54.677 35.7604 56.842C37.1604 58.677 39.7574 61.309 40.3334 63.571C41.2104 67.015 43.4584 70.009 45.8194 72.588C48.0984 75.076 51.6144 76.985 51.6884 80.682C51.8644 89.549 51.1684 98.433 49.6134 107.164C49.2504 109.201 48.8064 111.31 47.5474 112.952C46.2794 114.607 44.1274 116.026 44.3504 118.099C47.0144 118.368 49.7234 118.176 52.3224 117.533C52.9234 117.384 53.5484 117.195 53.9824 116.753C55.2284 115.483 54.1214 113.207 54.9404 111.628C55.3364 110.865 56.1164 110.396 56.8414 109.936C57.5664 109.476 58.3184 108.929 58.5864 108.113C58.9124 107.122 58.1494 106.969 57.8924 106.293C57.6434 105.638 57.4174 105.088 57.3594 104.214C57.2274 102.188 57.3304 100.143 57.5394 98.126C58.0294 93.398 60.1524 88.774 60.3734 84.088C62.8844 84.225 65.4214 83.881 67.8054 83.08C67.1434 81.108 66.4534 79.145 65.7354 77.192C70.3344 83.906 74.0604 91.217 76.7894 98.883C77.9364 102.104 78.9124 105.622 77.9324 108.899C76.7744 112.771 72.9824 116.044 73.6924 120.023C76.0534 120.042 78.4144 120.062 80.7754 120.081C81.1284 120.084 81.5024 120.081 81.8034 119.896C82.0544 119.742 82.2184 119.481 82.3464 119.216C83.4674 116.891 82.4244 113.712 84.1824 111.823C84.8794 111.075 85.9774 110.592 86.2204 109.598C86.6704 107.758 84.8014 105.341 84.6434 103.419C84.4744 101.359 84.2204 99.61 83.5904 97.591H83.6844C82.4284 93.849 81.7544 89.907 81.1254 86.019C80.5334 82.358 79.3344 78.877 79.2314 75.089C80.0254 77.629 81.1094 80.078 82.4554 82.374C83.0734 83.401 87.6424 82.203 88.5404 82.073C91.1904 81.689 93.7284 80.96 96.2534 80.014C101.646 77.994 106.704 75.078 111.142 71.407C109.689 74.071 107.394 76.159 105.143 78.194C107.187 80.14 109.717 81.572 112.438 82.321C112.999 82.476 113.668 82.697 113.804 83.263C114.029 84.204 112.611 85.389 113.422 85.917C113.827 86.18 114.38 85.807 114.554 85.356C114.728 84.905 114.682 84.399 114.807 83.933C115.033 83.086 115.876 82.447 116.752 82.457C117.628 82.467 118.456 83.125 118.664 83.976C118.737 84.278 118.743 84.603 118.895 84.874C119.33 85.649 120.819 85.035 120.582 84.179C120.512 83.926 120.339 83.716 120.24 83.473C119.951 82.768 120.355 81.945 120.94 81.457C121.525 80.969 122.263 80.714 122.935 80.355C124.584 79.475 125.854 77.912 126.379 76.118C128.548 80.425 128.03 85.575 126.965 90.278C125.433 97.04 122.797 103.695 118.253 108.932C116.474 110.982 114.282 113.125 114.336 115.839C116.458 116.137 120.966 117.012 122.751 115.723C124.681 114.329 124.656 111.039 126.632 109.492C127.459 108.844 128.573 108.443 129.007 107.486C129.246 106.958 129.226 106.354 129.221 105.774C129.202 103.564 129.488 101.357 130.035 99.216C129.413 102.25 129.742 105.511 130.591 108.368C130.621 108.469 130.656 108.577 130.742 108.637C130.826 108.696 130.937 108.694 131.039 108.691C131.764 108.664 132.489 108.636 133.213 108.608C133.451 108.599 133.701 108.587 133.906 108.464C134.116 108.338 134.248 108.114 134.337 107.886C134.717 106.917 134.47 105.833 134.39 104.795C134.31 103.757 134.5 102.541 135.396 102.013C135.577 101.906 135.78 101.833 135.935 101.692C136.498 101.18 136.087 100.254 135.643 99.635C135.422 99.326 135.193 99.008 135.11 98.637C135.049 98.364 135.072 98.08 135.098 97.802C135.351 95.082 135.864 92.386 136.629 89.764C134.684 92.128 131.726 94.464 130.586 97.342C131.195 95.538 131.994 93.798 132.988 92.174C135.127 88.679 138.814 84.022 137.439 79.624C137.195 78.843 136.775 78.13 136.483 77.366C135.213 74.042 136.508 71.207 137.78 68.269C137.945 67.888 138.11 67.505 138.268 67.119C139.1 65.098 139.666 63.119 140.075 61.138C140.104 61.565 140.144 61.992 140.21 62.417C140.43 63.844 140.876 65.272 140.684 66.703C140.411 68.741 138.904 70.391 138.259 72.343C137.006 76.137 139.807 80.719 143.754 81.335C142.715 79.73 142.526 77.608 143.264 75.845C143.707 74.791 144.449 73.868 144.742 72.768ZM130.145 98.768C130.153 98.74 130.159 98.713 130.167 98.685C130.16 98.712 130.152 98.74 130.145 98.768ZM135.546 33.384C134.832 32.336 134.108 31.281 133.189 30.406C133.058 30.281 132.914 30.176 132.777 30.06C135.321 30.101 136.535 32.393 137.436 34.745C137.726 35.502 137.995 36.266 138.244 37.037C137.318 35.765 136.332 34.537 135.546 33.384Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

// Component for text sections with vision and description
const TextSection = ({ vision, description }) => (
  <>
    {vision && (
      <p className="md:text-lg my-2 md:my-4 font-semibold">{vision}</p>
    )}
    <p className="mb-4 text-left md:leading-relaxed">{description}</p>
  </>
);

// Component for the embedded YouTube video
const VideoEmbed = () => (
  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/w8-NZxFq40Y"
      title="Amruthdhara GouShala, Hosad, Kumta, Uttara Kannada District l Bharatiya GouBank"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
      aria-label="Video about Bharatiya Gou-Bank"
    />
  </div>
);

// Utility function to bold specific names in text
const boldName = (text) => {
  const nameKn = "ಪರಮಪೂಜ್ಯ ಶ್ರೀಶ್ರೀ ರಾಘವೇಶ್ವರಭಾರತೀ ಮಹಾಸ್ವಾಮಿಗಳವರ";
  const nameEn = "Paramapujya Sri Sri Raghaveshwara Bharati Mahaswamiji";

  // Check if text contains Kannada name
  if (text.includes(nameKn)) {
    return text.split(nameKn).map((part, i, arr) =>
      i < arr.length - 1 ? (
        <React.Fragment key={i}>
          {part}
          &nbsp;
          <span className="font-semibold text-primary">{nameKn}</span>
        </React.Fragment>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  }

  // Check if text contains English name
  if (text.includes(nameEn)) {
    return text.split(nameEn).map((part, i, arr) =>
      i < arr.length - 1 ? (
        <React.Fragment key={i}>
          {part}
          <span className="font-semibold text-primary">{nameEn}</span>
        </React.Fragment>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  }

  return text;
};

// Component for rendering a checkmark list
const CheckmarkList = ({ items }) => (
  <ul className="space-y-3 text-left my-6">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <svg
          className="h-6 w-6 flex-shrink-0 text-primary mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-base md:text-lg">{item}</span>
      </li>
    ))}
  </ul>
);

const AboutSection = () => {
  const { t } = useTranslation();

  // Array of description keys for easier mapping
  const descriptionKeys = Array.from(
    { length: 17 },
    (_, i) => `description${i + 1}`
  );

  // Get descriptions 10-15 for the checkmark list
  const listItems = descriptionKeys
    .slice(9, 15)
    .map((key) => t(`aboutSection.${key}`));

  return (
    <section
      id="about"
      className="bg-slate-100 p-4 md:p-5"
      aria-label="About Bharatiya Gou-Bank section"
    >
      <div className="container mx-auto md:my-10 bg-white p-4 md:p-8 rounded text-center lg:max-w-[50vw]">
        <SectionHeader title={t("aboutSection.title")} />

        {/* Vision 1 and Description 1-9 */}
        <TextSection
          vision={t("aboutSection.vision1")}
          description={boldName(t("aboutSection.description1"))}
        />

        <TextSection
          vision={t("aboutSection.vision2")}
          description={boldName(t("aboutSection.description2"))}
        />

        {descriptionKeys.slice(2, 9).map((key) => (
          <TextSection key={key} description={t(`aboutSection.${key}`)} />
        ))}

        {/* Checkmark list for descriptions 10-15 */}
        <CheckmarkList items={listItems} />

        {/* Descriptions 16-17 */}
        {descriptionKeys.slice(15).map((key) => (
          <TextSection key={key} description={t(`aboutSection.${key}`)} />
        ))}

        <VideoEmbed />
      </div>
    </section>
  );
};

export default AboutSection;
