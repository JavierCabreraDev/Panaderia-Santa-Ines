const faqs = [
  {
    question: "¿Dónde está ubicada Panadería Santa Inés?",
    answer: "Estamos en Guacolda 575, Huasco, Región de Atacama, Chile.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "Atendemos de lunes a sábado, de 07:15 a 13:00 y de 15:30 a 19:00.",
  },
  {
    question: "¿Aceptan pedidos por WhatsApp?",
    answer:
      "Sí. Puedes realizar encargos de pan, pastelería y productos especiales directamente por WhatsApp.",
  },
  {
    question: "¿Realizan despacho?",
    answer:
      "Sí. Consulta disponibilidad de despacho para familias, empresas y pymes en Huasco.",
  },
  {
    question: "¿Qué productos ofrecen?",
    answer:
      "Ofrecemos pan fresco, pastelería, productos para la once, encargos especiales y productos de temporada.",
  },
];

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
