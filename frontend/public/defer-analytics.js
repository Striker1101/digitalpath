window.addEventListener("load", function () {
  // Create and append the gtag.js script dynamically
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-W4RPNLV5QG";
  script.async = true;
  document.body.appendChild(script);

  script.onload = function () {
    // Initialize dataLayer if not already defined
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Initialize gtag with the tracking IDs
    gtag("js", new Date());
    gtag("config", "G-W4RPNLV5QG");
    gtag("config", "AW-11408061232");
  };
});
