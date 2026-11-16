import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { attractionsData } from "@/lib/data";
import AttractionDetailClient from "./AttractionDetailClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return attractionsData.map((attraction) => ({
    slug: attraction.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const attraction = attractionsData.find((a) => a.slug === params.slug);
  if (!attraction) {
    return {
      title: "Attraction Not Found — Udaipur Unfolded",
    };
  }

  return {
    title: `${attraction.name} Udaipur — Timings, Fees & Visitor Guide | Udaipur Unfolded`,
    description: attraction.shortDescription,
    openGraph: {
      title: `${attraction.name} Guide — Udaipur Unfolded`,
      description: attraction.shortDescription,
      images: [
        {
          url: attraction.heroImage,
          width: 1200,
          height: 630,
          alt: attraction.name,
        },
      ],
    },
  };
}

export default function AttractionPage({ params }: PageProps) {
  const attraction = attractionsData.find((a) => a.slug === params.slug);

  if (!attraction) {
    notFound();
  }

  return <AttractionDetailClient attraction={attraction} />;
}
