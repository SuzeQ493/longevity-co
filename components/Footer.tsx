import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-white font-bold text-lg mb-3">Longevity Co.</p>
            <p className="text-sm leading-relaxed">Living your best life — longer, healthier, and more fully than you thought possible.</p>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Explore</p>
            <div className="space-y-2">
              {[["Home", "/"], ["About", "/about"], ["Longevity Assessment", "/assessment"], ["Peptide Protocols", "/peptides"]].map(([label, href]) => (
                <Link key={href} href={href} className="block text-sm hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Get started</p>
            <p className="text-sm leading-relaxed mb-4">Take our free assessment and receive a personalised longevity or peptide protocol in minutes.</p>
            <Link href="/assessment" className="inline-block bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-700 transition-colors">
              Start assessment
            </Link>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Longevity Co. All rights reserved.</p>
          <p>For informational purposes only. Not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
