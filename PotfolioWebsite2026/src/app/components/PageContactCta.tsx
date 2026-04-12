import { Link } from 'react-router';
import { Globe, Mail, MessageCircleMore } from 'lucide-react';

type PageContactCtaProps = {
  label?: string;
  title?: string;
  body?: string;
  accent?: 'blue' | 'warm' | 'mixed';
};

export default function PageContactCta({
  label = 'Contact Me',
  title = 'If you made it this far, we should probably talk.',
  body = 'For projects, freelance work, collaborations, or thoughtful internet correspondence, I am reachable from Montreal and happy to work remotely with good people around the globe.',
  accent = 'mixed',
}: PageContactCtaProps) {
  const shellClass =
    accent === 'warm'
      ? 'bg-gradient-to-r from-[#FFF8F3] via-white to-[#F7FBFD]'
      : accent === 'blue'
        ? 'bg-gradient-to-r from-[#F1F8FC] via-white to-[#E8F4FA]'
        : 'bg-gradient-to-r from-[#F7FBFD] via-white to-[#FFF8F3]';
  const orbLeft = accent === 'warm' ? 'bg-[#E6C4A8]' : 'bg-[#ABCEE2]';
  const orbRight = accent === 'blue' ? 'bg-[#D5E7F2]' : 'bg-[#E6C4A8]';
  const titleColor = accent === 'warm' ? 'text-[#BF8351]' : 'text-[#5B8FA3]';

  return (
    <section className={`relative overflow-hidden rounded-[2.25rem] border border-[#D5E7F2] px-6 py-10 shadow-xl sm:px-8 md:px-10 md:py-12 ${shellClass}`}>
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className={`absolute -left-10 top-0 h-28 w-28 rounded-full blur-3xl ${orbLeft}`} />
        <div className={`absolute bottom-0 right-0 h-32 w-32 rounded-full blur-3xl ${orbRight}`} />
      </div>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
            <MessageCircleMore className="h-4 w-4 text-[#BF8351]" />
            <span className="font-['Poppins:SemiBold',sans-serif] text-xs uppercase tracking-[0.16em] text-[#BF8351]">
              {label}
            </span>
          </div>
          <h3 className={`font-['Ojuju:Bold',sans-serif] text-4xl leading-[0.95] md:text-5xl ${titleColor}`}>
            {title}
          </h3>
          <p className="mt-4 max-w-2xl font-['Poppins:Regular',sans-serif] text-lg leading-8 text-[#364153]">
            {body}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BF8351] px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-white transition-all hover:-translate-y-0.5 hover:bg-[#A66D42] hover:shadow-lg"
          >
            <MessageCircleMore className="h-4 w-4" />
            Contact Page
          </Link>
          <a
            href="mailto:ariannanarita@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#ABCEE2] bg-white/85 px-7 py-4 font-['Poppins:SemiBold',sans-serif] text-[#7DB1D4] transition-all hover:-translate-y-0.5 hover:bg-[#D5E7F2] hover:shadow-lg"
          >
            <Mail className="h-4 w-4" />
            ariannanarita@gmail.com
          </a>
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D5E7F2] bg-white/70 px-7 py-4 font-['Poppins:Medium',sans-serif] text-[#4A5565] shadow-sm">
            <Globe className="h-4 w-4 text-[#5B8FA3]" />
            Montreal + remote worldwide
          </div>
        </div>
      </div>
    </section>
  );
}
