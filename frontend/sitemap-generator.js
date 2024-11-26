const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream, promises: fsPromises } = require("fs");
const { resolve } = require("path");

// Base URL of your website
const BASE_URL = "https://digitalpath.com.ng";

// Static routes
const staticRoutes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { url: "/about-us", changefreq: "yearly", priority: 0.5 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.5 },
  { url: "/web-development", changefreq: "yearly", priority: 0.5 },
  { url: "/digital-marketing", changefreq: "monthly", priority: 0.5 },
  { url: "/terms", changefreq: "yearly", priority: 0.3 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
  { url: "/faq", changefreq: "monthly", priority: 0.4 },
];

// Dynamic routes
const webServices = [
  { url: "/web-development/api_development_integration", priority: 0.6 },
  { url: "/web-development/software_development", priority: 0.6 },
  { url: "/web-development/web_mobile_app_development", priority: 0.6 },
  { url: "/web-development/business_website_improvement", priority: 0.6 },
  { url: "/web-development/website_ui_ux_design", priority: 0.6 },
  { url: "/web-development/seo_improvement", priority: 0.6 },
  { url: "/web-development/maintenance_support", priority: 0.6 },
  { url: "/web-development/cms_website_development", priority: 0.6 },
  { url: "/web-development/e-commerce_website_development", priority: 0.6 },
  { url: "/web-development/blogging_website_development", priority: 0.6 },
];

const digitalServices = [
  { url: "/digital-marketing/email_marketing", priority: 0.6 },
  { url: "/digital-marketing/social_media_management", priority: 0.6 },
  { url: "/digital-marketing/content_marketing", priority: 0.6 },
  { url: "/digital-marketing/pay_per_click_advertising", priority: 0.6 },
  { url: "/digital-marketing/brand_management_and_positioning", priority: 0.6 },
  { url: "/digital-marketing/digital_marketing_consultation", priority: 0.6 },
];

// Combine all routes
const allRoutes = [...staticRoutes, ...webServices, ...digitalServices];

const generateSitemap = async () => {
  console.log("Starting sitemap generation...");
  try {
    // Define sitemap output path
    const sitemapPath = resolve(__dirname, "public", "sitemap.xml");

    // Ensure the public directory exists
    const publicDir = resolve(__dirname, "public");
    await fsPromises.mkdir(publicDir, { recursive: true });

    // Create a sitemap stream
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    // Write routes into the sitemap
    allRoutes.forEach((route) => {
      sitemap.write({
        url: route.url,
        changefreq: route.changefreq || "weekly", // Default to "weekly" if not provided
        priority: route.priority,
      });
    });

    // End the stream
    sitemap.end();

    // Convert stream to a promise and write to file
    const sitemapData = await streamToPromise(sitemap);
    await fsPromises.writeFile(sitemapPath, sitemapData.toString());

    console.log(`Sitemap successfully written to ${sitemapPath}`);
  } catch (err) {
    console.error("Error generating sitemap:", err.message || err);
  }
};

generateSitemap();
