
import React, { useState } from "react";
import { Maximize2 } from "lucide-react";

// Certificate images and alt text
interface CertificateData {
  src: string;
  alt: string;
}

const certificates: CertificateData[] = [
  {
    // If you want to replace certificate images, update this src:
    src: "/lovable-uploads/482c5f0c-1c43-4099-97e9-929cb97151a4.png",
    alt: "CipherSchools DSA Certificate",
  },
  {
    src: "/lovable-uploads/dbfb6360-d493-404e-9e1e-9f4bf9385674.png",
    alt: "CipherSchools C++ DSA Certificate",
  },
];

export function CertificatesGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (idx: number) => setOpenIndex(idx);
  const handleClose = () => setOpenIndex(null);

  return (
    <>
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-center">
          Certificates
        </h2>
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-1
            lg:grid-cols-2
            gap-7
            justify-items-center
            px-2
            max-w-2xl
            lg:max-w-4xl
            mx-auto
            transition-all
          "
        >
          {certificates.map((cert, idx) => (
            <button
              key={cert.src}
              onClick={() => handleOpen(idx)}
              className="
                group 
                focus:outline-none 
                w-full 
                max-w-sm
                rounded-2xl
                transition
                duration-200
                hover:scale-105 
                hover:shadow-xl 
                focus:shadow-xl
                bg-white
                border 
                border-gray-200
                shadow
                overflow-hidden
                outline-none
              "
              aria-label="View certificate"
              type="button"
            >
              <div className="relative w-full">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full aspect-video object-contain bg-slate-50 rounded-t-2xl"
                  loading="lazy"
                  style={{
                    maxHeight: 270,
                    minHeight: 170,
                  }}
                />
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition-opacity duration-200">
                  <div className="bg-white/90 rounded-full p-2 shadow border inline-flex">
                    <Maximize2 className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>
              {/* Optionally a certificate label could be added here */}
            </button>
          ))}
        </div>
      </div>
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center transition-all"
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 shadow transition"
              aria-label="Close full preview"
              type="button"
            >
              <span className="sr-only">Close</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <img
              src={certificates[openIndex].src}
              alt={certificates[openIndex].alt}
              className="object-contain max-w-full max-h-[80vh] bg-slate-50"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      )}
    </>
  );
}

