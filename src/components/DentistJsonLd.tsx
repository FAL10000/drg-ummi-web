import React from 'react';
import { clinicConfig } from '../config/business';

export const DentistJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${clinicConfig.meta.websiteUrl}/#dentist`,
    "name": clinicConfig.clinicName,
    "alternateName": "Praktek drg. Ummi Kaltsum Cibodas",
    "description": clinicConfig.philosophy,
    "url": clinicConfig.meta.websiteUrl,
    "telephone": clinicConfig.contact.phoneDisplay,
    "image": [
      `${clinicConfig.meta.websiteUrl}/images/drg-ummi-treatment-room.webp`,
      `${clinicConfig.meta.websiteUrl}/images/drg-ummi-portrait.webp`,
      `${clinicConfig.meta.websiteUrl}/images/drg-ummi-patient-care.webp`,
      `${clinicConfig.meta.websiteUrl}/images/dental-chair.webp`,
      `${clinicConfig.meta.websiteUrl}/images/practice-exterior.webp`
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicConfig.location.street,
      "addressLocality": clinicConfig.location.city,
      "addressRegion": clinicConfig.location.province,
      "postalCode": clinicConfig.location.postalCode,
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": clinicConfig.location.geo.latitude,
      "longitude": clinicConfig.location.geo.longitude
    },
    "hasMap": clinicConfig.location.googleMapsUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": clinicConfig.googleRating.score.toString(),
      "reviewCount": clinicConfig.googleRating.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "13:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "medicalSpecialty": "Dentistry"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};
