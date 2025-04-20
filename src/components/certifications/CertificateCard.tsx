
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
}

export function CertificateCard({
  title,
  issuer,
  date,
  image,
  url,
}: CertificateCardProps) {
  return (
    <div className="certificate-card h-full">
      {image ? (
        <div className="aspect-[1.91/1] overflow-hidden">
          <img
            src={image}
            alt={`${title} certificate from ${issuer}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="bg-gray-100 aspect-[1.91/1] flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="text-gray-500">{issuer}</p>
          </div>
        </div>
      )}

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">{issuer}</p>
        <p className="text-gray-400 text-xs">{date}</p>
        
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-auto pt-3 inline-flex items-center gap-1 text-sm text-portfolio-primary hover:text-portfolio-secondary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Verify Certificate</span>
          </a>
        )}
      </div>
    </div>
  );
}
