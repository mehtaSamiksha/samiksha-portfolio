
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export function CertificateCard({
  title,
  issuer,
  date,
  url,
}: CertificateCardProps) {
  return (
    <Card className="h-full flex flex-col p-6">
      <div className="flex items-start gap-4">
        <div className="bg-portfolio-accent p-3 rounded-full">
          <Award className="h-6 w-6 text-portfolio-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-500 text-sm mb-2">{issuer}</p>
          <p className="text-gray-400 text-xs">{date}</p>
        </div>
      </div>
      
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto pt-4 inline-flex items-center gap-1 text-sm text-portfolio-primary hover:text-portfolio-secondary transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Verify Certificate</span>
        </a>
      )}
    </Card>
  );
}
