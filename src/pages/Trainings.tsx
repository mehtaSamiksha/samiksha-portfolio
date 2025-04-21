
import { Layout } from "@/components/layout/Layout";
import { trainings } from "@/data/trainings";
import { Calendar, Code } from "lucide-react";
import { motion } from "framer-motion";
import { CertificatesGallery } from "@/components/trainings/CertificatesGallery";

const Trainings = () => {
  return (
    <Layout>
      <section className="section-container">
        <h1 className="section-title">Trainings</h1>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-lg text-slate-600">
            Professional training programs that have contributed to my skill
            development and practical knowledge in various technical domains.
          </p>
        </div>

        {/* Training Card(s) */}
        <div className="max-w-4xl mx-auto mb-14">
          {trainings.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8"
            >
              <div className="p-6">
                <h2 className="text-2xl font-display font-semibold mb-2">
                  {training.title}
                </h2>
                <div className="flex items-center text-portfolio-primary mb-4">
                  <span className="font-medium">{training.organization}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {training.date}
                  </span>
                </div>

                <p className="text-slate-600 mb-6">{training.description}</p>

                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-portfolio-primary" />
                    Skills Acquired
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {training.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-portfolio-accent text-portfolio-primary px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <CertificatesGallery />

        {/* Training Benefits Section */}
        <div className="mt-12 bg-slate-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-semibold mb-6 text-center">
            How These Trainings Have Enhanced My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-portfolio-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-lg">Practical Application</h3>
                  <p className="text-slate-600">
                    Applied theoretical knowledge to real-world problems, bridging
                    the gap between academic concepts and practical implementation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-portfolio-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-lg">Technical Proficiency</h3>
                  <p className="text-slate-600">
                    Developed hands-on experience with industry-standard tools and
                    technologies, enhancing my technical capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-portfolio-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-lg">Problem-Solving Skills</h3>
                  <p className="text-slate-600">
                    Enhanced ability to analyze complex problems, break them down,
                    and implement effective solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-portfolio-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-lg">Industry Insights</h3>
                  <p className="text-slate-600">
                    Gained valuable perspectives on industry best practices and
                    emerging trends in data structures and algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
