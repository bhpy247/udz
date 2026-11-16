import { MetadataRoute } from "next";
import { roomsData, attractionsData, itinerariesData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://udaipurunfolded.com";

  // Static routes
  const staticRoutes = [
    "",
    "/stays",
    "/hotels",
    "/places-to-visit",
    "/itineraries",
    "/experiences",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Room detail routes
  const roomRoutes = roomsData.map((room) => ({
    url: `${baseUrl}/stays/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Attraction routes
  const attractionRoutes = attractionsData.map((attraction) => ({
    url: `${baseUrl}/places-to-visit/${attraction.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Itinerary routes
  const itineraryRoutes = itinerariesData.map((itinerary) => ({
    url: `${baseUrl}/itineraries/${itinerary.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...roomRoutes,
    ...attractionRoutes,
    ...itineraryRoutes,
  ];
}
