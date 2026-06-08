export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For K-12 Teachers &amp; Tutoring Centers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Visualize Student Learning Progress with{' '}
          <span className="text-[#58a6ff]">Heatmaps</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload student data and instantly generate interactive heatmaps showing performance across topics and time periods. Get automated alerts for students who need intervention — before they fall behind.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start for $7/mo
        </a>
        {/* Heatmap Preview */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4 font-semibold">Sample Heatmap — Class Performance by Topic</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left text-[#8b949e] font-normal pb-3 pr-4 min-w-[100px]">Student</th>
                  {['Algebra','Geometry','Fractions','Statistics','Calculus'].map(t => (
                    <th key={t} className="text-center text-[#8b949e] font-normal pb-3 px-2 min-w-[80px]">{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {name:'Alice',scores:[92,88,95,78,85]},
                  {name:'Bob',scores:[45,52,38,61,42]},
                  {name:'Carol',scores:[78,82,74,90,88]},
                  {name:'David',scores:[55,48,62,50,44]},
                  {name:'Emma',scores:[95,91,97,89,93]},
                ].map(row => (
                  <tr key={row.name} className="border-t border-[#21262d]">
                    <td className="py-2 pr-4 font-medium text-[#c9d1d9]">{row.name}</td>
                    {row.scores.map((s, i) => {
                      const bg = s >= 85 ? 'bg-[#196c2e] text-[#56d364]' : s >= 65 ? 'bg-[#9e6a03] text-[#e3b341]' : 'bg-[#6e1a1a] text-[#f85149]'
                      return (
                        <td key={i} className="py-2 px-2 text-center">
                          <span className={`inline-block w-12 py-1 rounded text-xs font-bold ${bg}`}>{s}%</span>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#f85149] font-medium">⚠ 2 students flagged for intervention (below 65% threshold)</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$7<span className="text-xl text-[#8b949e] font-normal">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to track every student</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited students & classes',
              'Interactive performance heatmaps',
              'Automated intervention alerts',
              'CSV & spreadsheet data import',
              'Progress reports & exports',
              'Email support',
            ].map(f => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#56d364] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started — $7/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What data format do I need to upload?',
              a: 'We accept CSV files and common spreadsheet formats. Each row represents a student assessment with columns for student name, topic, date, and score. A sample template is provided after signup.'
            },
            {
              q: 'How does the intervention alert system work?',
              a: 'You set a performance threshold (default 65%). Any student scoring below that threshold across two or more topics is automatically flagged with a visual alert on your dashboard so you can act quickly.'
            },
            {
              q: 'Can I use this for multiple classes or grade levels?',
              a: 'Yes. The Pro plan includes unlimited students and classes. You can organize heatmaps by class, subject, or grade level and switch between views instantly.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Student Progress Heatmap. All rights reserved.
      </footer>
    </main>
  )
}
