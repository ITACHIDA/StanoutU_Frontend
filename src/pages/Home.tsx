import {
  FiArrowRight,
  FiCheckCircle,
  FiFeather,
  FiMessageCircle,
  FiShield,
  FiTarget,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';
import standOutULogo from '../assets/standoutu-logo.svg';

const highlightMetrics = [
  { label: 'Interviews booked', value: '4,200+' },
  { label: 'Offers accepted', value: '1,150' },
  { label: 'Avg. recruiter response', value: '3.7x' },
];

const expertisePillars = [
  {
    title: 'ATS mastery',
    description: 'Every bullet is built for Applicant Tracking Systems and the hiring manager who reads it.',
    icon: <FiTarget className="text-3xl text-brand-secondary" />,
  },
  {
    title: 'Executive storytellers',
    description: 'Former FAANG recruiters and Fortune 100 leaders translate your wins into board-ready stories.',
    icon: <FiFeather className="text-3xl text-brand-secondary" />,
  },
  {
    title: '360° polish',
    description: 'Resume, LinkedIn, and cover letter work together as a cohesive, premium narrative.',
    icon: <FiShield className="text-3xl text-brand-secondary" />,
  },
];

const processSteps = [
  {
    title: 'Discovery Lab',
    description: 'A 45-minute interview digs into measurable wins, leadership moments, and your target roles.',
    duration: 'Day 1',
  },
  {
    title: 'Strategic Narrative',
    description: 'We translate your experience into modern, metrics-first copy backed by market research.',
    duration: 'Days 2-3',
  },
  {
    title: 'Design + Delivery',
    description: 'You receive an editable packet with recruiter-ready assets and a video walkthrough.',
    duration: 'Day 4',
  },
];

const testimonials = [
  {
    quote:
      'My old resume was a task list. StandOutU rebuilt it into a compelling leadership story that opened doors at Spotify and Adobe within two weeks.',
    name: 'Camila Reyes',
    title: 'Senior Product Manager · Spotify',
  },
  {
    quote:
      'The process felt like having a personal brand studio. Recruiter responses jumped immediately and I negotiated a 32% salary lift.',
    name: 'Marcus Liu',
    title: 'Head of Data Science · Stripe',
  },
  {
    quote:
      'From LinkedIn revamp to mock recruiter calls, every deliverable was premium. The video debrief alone is worth the investment.',
    name: 'Sasha Patel',
    title: 'Revenue Operations Lead · Notion',
  },
];

const plans = [
  {
    name: 'Accelerator',
    price: '649',
    description: 'Perfect for senior ICs targeting a clear next step.',
    features: [
      'ATS-optimized resume in 48h',
      'LinkedIn refresh with headline kit',
      '1:1 recruiter strategy session',
    ],
    highlight: 'Most booked',
  },
  {
    name: 'Executive Studio',
    price: '1,150',
    description: 'Full narrative system for cross-functional leaders.',
    features: [
      'Resume + LinkedIn + cover letter trio',
      'Interview talking points playbook',
      '30 days of async editing support',
    ],
    isFeatured: true,
  },
  {
    name: 'Boardroom',
    price: '2,500',
    description: 'White-glove package for C-suite and board candidates.',
    features: [
      'Industry research dossier',
      'Story-driven bio & keynote outline',
      'Personal website audit & roadmap',
    ],
  },
];

const faqs = [
  {
    question: 'Who will I work with?',
    answer: 'Only senior strategists with at least 8 years of recruiting or executive branding experience touch your project.',
  },
  {
    question: 'Do you offer rush projects?',
    answer: 'Yes. For 24-hour delivery add-on, reach out via concierge@standoutu.co and we will confirm availability within two hours.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'Tech, fintech, climate, healthcare, and consumer brands. We map your resume to real job descriptions in those markets.',
  },
];

const HomePage = () => (
  <>
    <section className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 px-6 py-10 md:flex-row md:items-center">
      <div className="flex-1">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
          <HiSparkles className="text-lg text-brand-secondary" />
          Trusted by operators at Stripe, Figma, Atlassian
        </p>
        <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
          Resumes that move from inbox to interview.
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          We pair editorial storytelling with recruiter intelligence to rebuild your professional narrative in four days flat.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CTAButton label="Start my project" linkTo="/contact" />
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white" href="/#stories">
            See sample report
            <FiArrowRight />
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {highlightMetrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="font-display text-3xl">{metric.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img
          src={standOutULogo}
          alt="StandOutU logo lockup"
          className="mb-6 w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card"
        />
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/15 to-white/5 p-8 shadow-card backdrop-blur">
          <div className="mb-6 flex items-center justify-between text-sm text-white/70">
            <span>Latest review</span>
            <span>Product Design · NYC</span>
          </div>
          <div className="space-y-5">
            {['Narrative clarity', 'Leadership scope', 'Metrics & outcomes'].map((item) => (
              <div key={item}>
                <div className="flex items-center justify-between text-sm">
                  <span>{item}</span>
                  <span>98%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-secondary to-white" style={{ width: '98%' }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-brand-dark/60 p-5">
            <p className="text-sm text-white/80">
              “Your deck reframed my entire value prop. Recruiters finally respond with specifics.”
            </p>
            <p className="mt-4 text-sm font-semibold text-white">Elena · Director of Research, Figma</p>
          </div>
        </div>
      </div>
    </section>

    <section id="solutions" className="bg-brand-dark py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="The StandOutU method"
          title="A hybrid of editorial studios and recruiting partners."
          description="Every engagement combines storytelling, market research, and design to create a narrative your dream companies cannot ignore."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {expertisePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[30px] border border-white/5 bg-white/5 p-8 shadow-card">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">{pillar.icon}</div>
              <h3 className="font-display text-2xl text-white">{pillar.title}</h3>
              <p className="mt-4 text-base text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="process" className="bg-brand-light/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Process"
          title="Four days to a refreshed professional story."
          description="We compress weeks of back-and-forth into a premium, documented experience. Stay async or meet live—whatever fits your calendar."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-[28px] border border-white/10 bg-brand-dark p-8">
              <div className="mb-4 flex items-center justify-between text-sm text-white/60">
                <span>Step {index + 1}</span>
                <span>{step.duration}</span>
              </div>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="mt-4 text-slate-300">{step.description}</p>
              <div className="mt-8 flex items-center gap-2 text-sm text-brand-secondary">
                <FiCheckCircle /> Included in every package
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="stories" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Success stories"
          title="What alumni are saying"
          description="Clients come for the resume. They stay for the clarity they feel walking into the interview."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[28px] border border-white/5 bg-white/5 p-8">
              <p className="text-lg text-white/90">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm text-white/70">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="pricing" className="bg-brand-light/5 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Packages"
          title="Choose your experience"
          description="Transparent pricing, no commission. Just premium branding assets delivered on a precise timeline."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[32px] border border-white/10 p-8 ${
                plan.isFeatured ? 'bg-white text-brand-dark shadow-card' : 'bg-white/5 text-white'
              }`}
            >
              {plan.highlight ? (
                <span className="absolute right-6 top-6 rounded-full bg-brand-secondary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                  {plan.highlight}
                </span>
              ) : null}
              <p className="text-sm uppercase tracking-[0.3em]">{plan.name}</p>
              <p className="mt-4 font-display text-5xl font-semibold">${plan.price}</p>
              <p className="mt-3 text-base opacity-80">{plan.description}</p>
              <ul className="mt-8 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <FiCheckCircle className={plan.isFeatured ? 'text-brand-primary' : 'text-brand-secondary'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                  plan.isFeatured
                    ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                Reserve slot
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-white/10 bg-brand-dark py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="FAQ"
          title="Everything you need to know"
          description="We prioritize clarity and communication. Still curious? Email concierge@standoutu.co and we’ll respond within one business day."
        />
        <div className="divide-y divide-white/10 rounded-[32px] border border-white/10 bg-white/5">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-8 py-6">
              <summary className="flex list-none cursor-pointer items-center justify-between gap-6 text-lg font-semibold text-white">
                {faq.question}
                <span className="text-brand-secondary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-base text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-gradient-to-r from-brand-primary/50 to-brand-secondary/40 px-10 py-14 text-center shadow-card">
        <p className="text-sm uppercase tracking-[0.4em] text-white/70">Concierge support</p>
        <h3 className="mt-4 font-display text-4xl text-white">Let&apos;s architect your next career move.</h3>
        <p className="mt-4 text-lg text-white/80">
          Send your latest resume or LinkedIn profile to concierge@standoutu.co and we&apos;ll send a personalized video audit within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CTAButton label="Share my resume" linkTo="/contact" />
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
            <FiMessageCircle />
            Chat with our concierge
          </button>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
