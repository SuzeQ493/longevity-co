import Link from "next/link";
import { ArrowRight, Heart, Clock, Star } from "lucide-react";

export default function AssessmentPage() {
  return (
    <div>
      <section className="bg-stone-900 text-white px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-700/30 border border-amber-600/30 rounded-full px-4 py-1.5 mb-6">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Longevity Assessment</span>
          </div>
          <h1 className="text-5xl font-bold mb-5 leading-tight">Your personalised longevity plan</h1>
          <p className="text-stone-300 text-lg leading-relaxed mb-10">Answer 13 questions about your health and lifestyle. Our AI analyses your data and generates a personalised longevity protocol — including your score, priorities, and a full optimisation plan.</p>
          <div className="flex items-center justify-center gap-8 text-sm text-stone-400 mb-10">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" />5 minutes</div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4" />AI-powered</div>
            <div className="flex items-center gap-2"><Heart className="w-4 h-4" />100% free</div>
          </div>
          <Link href="https://longevity-app-suzeq493s-projects.vercel.app" target="_blank"
            className="inline-flex items-center gap-2 bg-amber-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-700 transition-colors text-sm">
            Start assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">What you'll receive</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Longevity score", body: "Your personalised score out of 100, with a plain-English explanation of where you are and why." },
              { title: "Top 3 priorities", body: "The three areas that will make the biggest difference to your health and longevity right now." },
              { title: "5-pillar protocol", body: "Specific, actionable recommendations across sleep, nutrition, movement, stress, and supplementation." },
              { title: "Your first week plan", body: "A day-by-day action plan for your first 7 days — concrete steps you can start immediately." },
              { title: "Lab test recommendations", body: "The specific blood tests and biomarkers most relevant to your profile." },
              { title: "Body narrative", body: "A plain-English explanation of what's actually happening in your body right now, based on your data." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl border border-stone-200 p-6">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                  <span className="text-amber-700 text-sm font-bold">✓</span>
                </div>
                <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="https://longevity-app-suzeq493s-projects.vercel.app" target="_blank"
              className="inline-flex items-center gap-2 bg-stone-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-stone-800 transition-colors text-sm">
              Take the free assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
