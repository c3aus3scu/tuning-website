// components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '447399437312';
  const message = encodeURIComponent("Hi! I’m contacting you from MDD REMAP.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.672-1.612-.922-2.209-.242-.58-.487-.5-.672-.51h-.57c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.004 2.002C6.478 2.002 2 6.48 2 12.005c0 1.946.512 3.77 1.398 5.365L2 22l4.741-1.386A9.95 9.95 0 0012.004 22c5.526 0 10.004-4.478 10.004-9.995 0-5.527-4.478-10.003-10.004-10.003zm0 18.17a8.175 8.175 0 01-4.16-1.14l-.297-.178-2.82.823.84-2.748-.194-.282a8.142 8.142 0 01-1.26-4.36c0-4.51 3.682-8.191 8.191-8.191 4.51 0 8.191 3.681 8.191 8.191 0 4.509-3.682 8.191-8.191 8.191z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
