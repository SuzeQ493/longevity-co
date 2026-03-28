import Link from "next/link";
import { ArrowRight, FlaskConical, Clock, Star, Shield } from "lucide-react";

export default function PeptidesPage() {
  return (
    <div>
      <section className="bg-amber-800 text-white px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <FlaskConical className="w-3.5 h-3.5 text-amber-200" />
            <span className="text-xs font-semibold text-amber-200 uppercase tracking-wider">Peptide Protocols</span>
          </div>
          <h1 className="text-5xl font-bold mb-5 leading-tight">Your personalised peptide stack</h1>
          <p className="text-amber-100 text-lg leading-relaxed mb-10">Tell us your goals, health background, and budget. Our AI builds a personalised peptide protocol from our clinical catalogue — with dosing, cycling guidance, and safety notes.</p>
          <div className="flex items-center justify-center gap-8 text-sm text-amber-200 mb-10">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" />5 minutes</div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4" />AI-powered</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" />Safety-first</div>
          </div>
          <Link href="https://peptide-app-suzeq493s-projects.vercel.app" target="_blank"
            className="inline-flex items-center gap-2 bg-white text-amber-800 font-semibold px-8 py-4 rounded-full hover:bg-amber-50 transition-colors text-sm">
            Get my peptide protocol <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">What your protocol includes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Personalised stack", body: "2–6 peptides chosen specifically for your goals, symptoms, and experience level. Core, recommended, and optional tiers." },
              { title: "Dosing & cycling", body: "Exact frequency, duration, and break periods for each peptide. Phased protocol so you know exactly what to do each week." },
              { title: "Budget-matched", body: "Your recommendations stay within your stated monthly budget. Total cost shown upfront — no surprises." },
              { title: "Stack synergy", body: "An explanation of how your peptides work together and complement each other for maximum effect." },
              { title: "Safety notes", body: "Any contraindications, cautions, or interactions specific to your health profile and medications." },
              { title: "Consultation advice", body: "A clear recommendation on whether you'd benefit from a practitioner consultation before starting." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl border border-stone-200 p-6">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                  <FlaskConical className="w-4 h-4 text-amber-700" />
                </div>
                <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-stone-900 rounded-2xl p-10 text-white text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Ready to build your protocol?</h2>
            <p className="text-stone-400 mb-6">Free to use. Results in under 60 seconds.</p>
            <Link href="https://peptide-app-suzeq493s-projects.vercel.app" target="_blank"
              className="inline-flex items-center gap-2 bg-amber-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-700 transition-colors text-sm">
              Start peptide assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
