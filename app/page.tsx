import Link from "next/link";
import { ArrowRight, Leaf, FlaskConical, Heart, Zap, Shield, Star } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-stone-900 text-white px-6 py-28 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-700/30 border border-amber-600/30 rounded-full px-4 py-1.5 mb-8">
            <Leaf className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Science-backed longevity</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Living your<br />
            <span className="text-amber-400">best life.</span>
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Personalised longevity assessments and peptide protocols — designed around your body, your goals, and your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment"
              className="flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-700 transition-colors text-sm">
              Take your assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about"
              className="flex items-center justify-center gap-2 border border-stone-600 text-stone-300 font-semibold px-8 py-4 rounded-full hover:border-stone-400 hover:text-white transition-colors text-sm">
              Our approach
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-amber-700 text-white px-6 py-5">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-medium">
          {["AI-powered protocols", "Personalised to you", "Clinically grounded", "Results in minutes"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-200" />{t}
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">What we offer</p>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Two tools. One mission.</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Every body is different. Our AI analyses your unique profile and builds a protocol that's made for you — not a template.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Longevity card */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-10 text-white">
                <Heart className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Longevity Assessment</h3>
                <p className="text-stone-300 text-sm leading-relaxed">A comprehensive health and lifestyle assessment that generates your personalised longevity score and optimisation protocol.</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {["Longevity score out of 100", "5-pillar health protocol", "Your first week plan", "Recommended lab tests"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-stone-600">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/assessment"
                  className="flex items-center justify-center gap-2 bg-stone-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-stone-800 transition-colors text-sm w-full">
                  Start longevity assessment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Peptide card */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-amber-700 to-amber-800 p-10 text-white">
                <FlaskConical className="w-8 h-8 text-amber-200 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Peptide Protocol</h3>
                <p className="text-amber-100 text-sm leading-relaxed">An AI-powered peptide assessment that builds a personalised stack from our clinical catalogue — matched to your goals and budget.</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {["Personalised peptide stack", "Dosing & cycle guidance", "Budget-matched recommendations", "Safety notes & consultation advice"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-stone-600">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/peptides"
                  className="flex items-center justify-center gap-2 bg-amber-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-800 transition-colors text-sm w-full">
                  Get peptide protocol <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-stone-100 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Personalised", body: "No two people are the same. Every protocol we generate is built around your specific data — not a generic template." },
              { icon: Shield, title: "Science-backed", body: "Our recommendations are grounded in the latest longevity research and clinical peptide science. Evidence first, always." },
              { icon: Heart, title: "Human first", body: "We believe in living fully — not just longer. Our approach is warm, accessible, and built around real life." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-amber-700 text-white px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to live your best life?</h2>
          <p className="text-amber-100 mb-8 leading-relaxed">Take our free assessment and receive a personalised longevity or peptide protocol in under 5 minutes.</p>
          <Link href="/assessment"
            className="inline-flex items-center gap-2 bg-white text-amber-800 font-semibold px-8 py-4 rounded-full hover:bg-amber-50 transition-colors text-sm">
            Start your assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
