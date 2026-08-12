import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.alrecz.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.alrecz.com/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://www.alrecz.com/shop",
      lastModified: new Date(),
    },
  ];
}