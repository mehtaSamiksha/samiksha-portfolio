
import { Layout } from "@/components/layout/Layout";
import { CertificateCard } from "@/components/certifications/CertificateCard";
import { certificates } from "@/data/certificates";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <Layout>
      <section className="section-container">
        <h1 className="section-title">Certifications</h1>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-lg text-slate-600">
            My professional certifications and courses that have enhanced my skills
            and knowledge in data analysis, programming, and related fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificateCard
                title={certificate.title}
                issuer={certificate.issuer}
                date={certificate.date}
                image={certificate.image}
                url={certificate.url}
              />
            </motion.div>
          ))}
        </div>

        {/* Certification Learning Outcomes */}
        <div className="mt-20">
          <h2 className="text-2xl font-display font-semibold mb-8 text-center">
            Skills Gained Through Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-portfolio-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>C++ Programming:</strong> Object-oriented programming, data
                    structures, algorithms, and problem-solving approaches.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-portfolio-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>R Programming:</strong> Statistical computing, data
                    visualization, and data manipulation for analytics.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-portfolio-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Excel Skills for Business:</strong> Advanced formulas,
                    dashboard creation, data validation, and complex calculations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-portfolio-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Data Science Foundations:</strong> Statistical inference,
                    exploratory data analysis, and machine learning fundamentals.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;
