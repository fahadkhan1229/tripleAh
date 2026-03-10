import { caseStudies } from "@/components/data/caseStudies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyDetail({ params }) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) return notFound();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <Link
        href="/caseStudy"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to all case studies
      </Link>
      <h1 className="text-4xl font-bold mb-6">{study.title}</h1>

      <p className="text-gray-400 mb-6">{study.description}</p>

      <div className="text-lg leading-relaxed">
        {study.content}
      </div>
    </div>
  );
}