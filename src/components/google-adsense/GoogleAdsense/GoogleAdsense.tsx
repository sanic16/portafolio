import Script from "next/script";
import React from "react";

const GoogleAdsense = () => {
  if (
    process.env.NODE_ENV !== "production" ||
    process.env.ADSENSE_CLIENT_ID === undefined
  ) {
    return null;
  }
  console.log("working!!");
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
    ></script>
  );
};

export default GoogleAdsense;
