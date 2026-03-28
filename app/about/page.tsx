import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-stone-900 text-white px-6 py-28">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">Our story</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">We believe everyone deserves to live fully.</h1>
          <p className="text-stone-300 text-lg leading-relaxed">Longevity Co. was built on a simple idea: that the science of living longer should be accessible, personalised, and human.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">Our mission</p>
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Living your best life — longer.</h2>
            <p className="text-stone-600 leading-relaxed text-lg">We combine cutting-edge AI with the latest longevity science to give you protocols that were previously only available to those with access to expensive private clinics. Our tools are personalised, science-backed, and built around real human life — not just biomarkers on a spreadsheet.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Longevity assessments", body: "Our AI analyses your lifestyle, habits, and health data to generate a personalised longevity score and optimisation protocol — in minutes." },
              { title: "Peptide protocols", body: "We build personalised peptide stacks from our clinical catalogue, matched to your goals, experience level, and budget." },
              { title: "Clinic partnerships", body: "We work with forward-thinking clinics to bring our tools directly to practitioners and their patients." },
              { title: "Peptide business", body: "Our peptide business provides high-quality, clinically-sourced peptides with full transparency on concentration, dosing, and pricing." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-700 rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to get started?</h2>
            <p className="text-amber-100 mb-6">Take a free assessment and receive your personalised protocol in minutes.</p>
            <Link href="/assessment" className="inline-flex items-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors text-sm">
              Take the assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
