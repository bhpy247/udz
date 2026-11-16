import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { roomsData } from "@/lib/data";
import RoomDetailClient from "./RoomDetailClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return roomsData.map((room) => ({
    slug: room.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const room = roomsData.find((r) => r.slug === params.slug);
  if (!room) {
    return {
      title: "Room Not Found — Udaipur Unfolded",
    };
  }

  return {
    title: `${room.name} — Udaipur Unfolded`,
    description: room.description,
    openGraph: {
      title: `${room.name} — Udaipur Unfolded Homestay`,
      description: room.description,
      images: [
        {
          url: room.images[0],
          width: 1200,
          height: 630,
          alt: room.name,
        },
      ],
    },
  };
}

export default function RoomPage({ params }: PageProps) {
  const room = roomsData.find((r) => r.slug === params.slug);

  if (!room) {
    notFound();
  }

  return <RoomDetailClient room={room} />;
}
