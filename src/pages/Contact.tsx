import { useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { FiCheckCircle, FiMail, FiPhone, FiUpload } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import CTAButton from '../components/CTAButton';
import standOutULogo from '../assets/standoutu-logo.svg';

const focusOptions = ['Narrative clarity', 'Leadership scope', 'Metrics & outcomes', 'LinkedIn refresh'];
const serviceOptions = ['Resume', 'LinkedIn architecture', 'Cover letter', 'Interview prep notes'];

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    targetRole: '',
    experienceLevel: 'senior',
    goals: '',
    focusAreas: [] as string[],
    services: [] as string[],
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSelection = (name: 'focusAreas' | 'services', value: string) => {
    setForm((prev) => {
      const isSelected = prev[name].includes(value);
      return {
        ...prev,
        [name]: isSelected ? prev[name].filter((item) => item !== value) : [...prev[name], value],
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!resumeFile) {
      setStatus('error');
      setMessage('Please attach your resume so our strategists can review it.');
      return;
    }
    if (!form.focusAreas.length || !form.services.length) {
      setStatus('error');
      setMessage('Select at least one focus area and one service.');
      return;
    }

    try {
      setStatus('loading');
      const payload = new FormData();
      payload.append('fullName', form.fullName);
      payload.append('email', form.email);
      payload.append('targetRole', form.targetRole);
      payload.append('experienceLevel', form.experienceLevel);
      payload.append('goals', `${form.goals}\nPhone: ${form.phone}`);
      form.focusAreas.forEach((area) => payload.append('focusAreas', area));
      form.services.forEach((service) => payload.append('services', service));
      payload.append('resume', resumeFile);

      const response = await fetch('http://127.0.0.1:4000/api/reviews', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message || 'Unable to submit form right now.');
      }

      setStatus('success');
      setMessage('Thanks! Our concierge team will email you within one business day.');
      setForm({
        fullName: '',
        email: '',
        phone: '',
        targetRole: '',
        experienceLevel: 'senior',
        goals: '',
        focusAreas: [],
        services: [],
      });
      setResumeFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unexpected error. Please email contact@standoutu.net.');
    }
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          align="left"
          eyebrow="Contact us"
          title="Upload your resume and reach our concierge team."
          description="Prefer email or phone? Reach out at contact@standoutu.net or +1 (737) 555-0112. We respond within 24 hours."
        />
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm font-medium text-white/80">
                Full name
                <input
                  required
                  name="fullName"
                  value={form.fullName}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-brand-dark/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-secondary focus:outline-none"
                  placeholder="Jordan Wright"
                />
              </label>
              <label className="text-sm font-medium text-white/80">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-brand-dark/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-secondary focus:outline-none"
                  placeholder="jordan@company.com"
                />
              </label>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm font-medium text-white/80">
                Phone
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-brand-dark/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-secondary focus:outline-none"
                  placeholder="+1 737 555 0112"
                />
              </label>
              <label className="text-sm font-medium text-white/80">
                Target role
                <input
                  required
                  name="targetRole"
                  value={form.targetRole}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-brand-dark/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-secondary focus:outline-none"
                  placeholder="VP of Product, Climate"
                />
              </label>
            </div>
            <label className="text-sm font-medium text-white/80">
              Experience level
              <select
                name="experienceLevel"
                value={form.experienceLevel}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-brand-dark/40 px-4 py-3 text-white focus:border-brand-secondary focus:outline-none"
              >
                <option value="emerging">Emerging leader (5-8 yrs)</option>
                <option value="senior">Senior IC / Director (8-14 yrs)</option>
                <option value="executive">Executive / C-Suite</option>
              </select>
            </label>
            <label className="text-sm font-medium text-white/80">
              What should we know?
              <textarea
                required
                name="goals"
                value={form.goals}
                onChange={handleInputChange}
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-brand-dark/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-secondary focus:outline-none"
                placeholder="Share goals, timelines, or companies you are targeting."
              />
            </label>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Focus areas</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {focusOptions.map((option) => {
                  const active = form.focusAreas.includes(option);
                  return (
                    <button
                      type="button"
                      key={option}
                      onClick={() => toggleSelection('focusAreas', option)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        active ? 'border-brand-secondary bg-brand-secondary/20 text-white' : 'border-white/20 text-white/70 hover:text-white'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Services</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {serviceOptions.map((service) => {
                  const active = form.services.includes(service);
                  return (
                    <label
                      key={service}
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                        active ? 'border-brand-secondary bg-brand-secondary/10 text-white' : 'border-white/15 text-white/70 hover:text-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={() => toggleSelection('services', service)}
                        className="hidden"
                      />
                      <FiCheckCircle className={active ? 'text-brand-secondary' : 'text-white/40'} />
                      {service}
                    </label>
                  );
                })}
              </div>
            </div>

            <label className="block text-sm font-medium text-white/80">
              Resume upload
              <div className="mt-2 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/20 bg-brand-dark/40 px-6 py-8 text-center">
                <FiUpload className="text-2xl text-brand-secondary" />
                <p className="mt-3 text-sm text-white/70">PDF or DOCX · Max 5MB</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-4 text-xs"
                  onChange={(event) => setResumeFile(event.target.files?.[0] ?? null)}
                />
                {resumeFile && <p className="mt-2 text-sm text-white/70">{resumeFile.name}</p>}
              </div>
            </label>

            {message && (
              <p className={`text-sm ${status === 'success' ? 'text-emerald-300' : 'text-brand-secondary'}`}>{message}</p>
            )}

            <CTAButton type="submit" label={status === 'loading' ? 'Sending...' : 'Send review request'} className="w-full justify-center" />
          </form>

          <aside className="space-y-6 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-card">
            <img src={standOutULogo} alt="StandOutU logo" className="w-full rounded-3xl border border-white/10 bg-brand-dark/40 p-4" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Direct lines</p>
              <div className="mt-4 space-y-4">
                <a href="mailto:contact@standoutu.net" className="flex items-center gap-3 text-white transition hover:text-brand-secondary">
                  <FiMail /> contact@standoutu.net
                </a>
                <a href="tel:+17375550112" className="flex items-center gap-3 text-white transition hover:text-brand-secondary">
                  <FiPhone /> +1 (737) 555-0112
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-brand-dark/60 p-6">
              <p className="font-display text-2xl text-white">Concierge promise</p>
              <p className="mt-4 text-sm text-slate-300">We respond to every inquiry in 24 hours with a personalized loom audit and a recommended service path.</p>
              <div className="mt-6 space-y-2 text-sm text-white/70">
                <p>Weekdays · 8am – 6pm CT</p>
                <p>Weekend slots available on request</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">What happens next?</p>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>1. Concierge creates a quick video audit.</li>
                <li>2. You pick a review slot or call time.</li>
                <li>3. Your strategist delivers assets within four business days.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
