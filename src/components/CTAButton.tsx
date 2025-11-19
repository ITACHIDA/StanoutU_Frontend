import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import clsx from 'clsx';

type CTAButtonProps = {
  label: string;
  linkTo?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
};

const baseClasses =
  'group inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-base font-semibold text-brand-dark shadow-card transition hover:-translate-y-0.5 hover:bg-white';

const CTAButton = ({ label, linkTo, type = 'button', onClick, className }: CTAButtonProps) => {
  const content = (
    <>
      <span>{label}</span>
      <FiArrowRight className="text-lg transition group-hover:translate-x-1" />
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className={clsx(baseClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={clsx(baseClasses, className)}>
      {content}
    </button>
  );
};

export default CTAButton;
