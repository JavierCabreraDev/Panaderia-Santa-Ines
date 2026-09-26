import { businessInfo } from "../../../content/data";

export function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",

    name: businessInfo.name,
    description: businessInfo.description,

    telephone: businessInfo.phone,

    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address,
      addressLocality: "Huasco",
      addressRegion: "Atacama",
      addressCountry: "CL",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:15",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "15:00",
        closes: "20:30",
      },
    ],

    url: "https://panaderiasantaines.cl",

    sameAs: [businessInfo.googleMapsUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}