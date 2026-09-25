import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative flex-1 flex flex-col justify-center px-6 md:px-16 py-24 overflow-hidden border-b border-[var(--line)]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(193,127,71,0.14), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(184,147,85,0.10), transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center animate-fade-up">
          <div className="mx-auto mb-6 h-72 w-[215px] md:h-96 md:w-[287px] relative">
            <Image
              src="https://g.tlcdn.com/gen/dda1ef62275440cb969682d4869fa1b1.png"
              alt="LaTrina Gerstberger"
              fill
              sizes="287px"
              className="object-contain object-bottom"
              style={{
                maskImage:
                  "radial-gradient(ellipse 65% 80% at 50% 65%, black 55%, transparent 95%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 65% 80% at 50% 65%, black 55%, transparent 95%)",
              }}
              priority
            />
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-[var(--copper)]" />
            <span className="text-xs tracking-[0.35em] uppercase text-[var(--copper-light)]">
              LJG Financial
            </span>
            <span className="h-px w-10 bg-[var(--copper)]" />
          </div>

          <h1 className="font-display text-5xl md:text-6xl leading-[1.1] mb-6 text-[var(--ivory)]">
            Personal Access.<br />
            <em className="italic text-[var(--copper-light)]">Strategic Solutions.</em>
          </h1>

          <p className="text-[var(--ivory-dim)] text-lg font-light max-w-xl mx-auto">
            LaTrina Gerstberger — Connection Specialist
          </p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-16 py-24 border-b border-[var(--line)]">
        <div className="max-w-3xl mx-auto space-y-6 text-[var(--ivory-dim)] leading-relaxed text-[15px] md:text-base">
          <p>
            LaTrina Gerstberger is a dedicated point of access to solutions for business owners and
            families navigating business succession, estate tax exposure, executive compensation
            planning, liquidity events, and capital diversification — connecting clients with a
            highly experienced, collaborative team of specialists and architects behind sophisticated
            premium financing and legacy planning strategies for high-net-worth individuals, families,
            and business owners.
          </p>
          <p>
            Her role is the relationship: qualifying candidates, gathering the right information,
            making the connections, coordinating conversations and documentation collection — walking
            alongside each client from the first introduction through ongoing annual reviews — while
            the team of specialists handles the technical design, structuring, and stress-testing
            behind every strategy. LaTrina is honored to serve clients from within a producer network
            where excellence, conservative designs, and professional discipline prioritize a
            client-first approach built on collateral strength, realistic performance, and clearly
            defined outcomes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-24 border-b border-[var(--line)] bg-[var(--navy)]/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4 text-[var(--ivory)]">
            Ready to see if Premium Finance strategies fit your planning needs?
          </h2>
          <p className="text-[var(--ivory-dim)] mb-10">
            Book a private introductory call.
          </p>
          <a
            href="https://calendly.com/latrina-ljg/introcall"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[var(--copper)] text-[var(--navy-deep)] px-8 py-4 text-sm tracking-wide font-medium hover:bg-[var(--copper-light)] transition-colors"
          >
            Book Your Introductory Call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xs text-[var(--ivory-dim)]/70 leading-relaxed">
            LaTrina Gerstberger is a licensed insurance producer. She does not provide legal or tax
            advice. All strategies referenced are designed and implemented in partnership with a
            network of specialists, and should be reviewed independently by each client&apos;s own CPA,
            attorney, and financial advisor.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-[var(--ivory-dim)]/50">
            <Phone className="h-3 w-3" />
            <a href="tel:8065726977" className="hover:text-[var(--copper-light)] transition-colors">
              (806) 572-6977
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
