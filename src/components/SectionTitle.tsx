import clsx from 'clsx';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

const SectionTitle = ({ eyebrow, title, description, align = 'center' }: SectionTitleProps) => (
  <div className={clsx('mx-auto mb-12 max-w-3xl', align === 'center' ? 'text-center' : 'text-left')}>
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-secondary">{eyebrow}</p>
    <h2 className="font-display text-4xl text-white md:text-5xl">{title}</h2>
    <p className="mt-4 text-lg text-slate-300">{description}</p>
  </div>
);

export default SectionTitle;
