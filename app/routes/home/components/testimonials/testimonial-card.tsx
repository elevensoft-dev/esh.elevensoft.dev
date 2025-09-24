import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  content,
  avatar,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="group bg-neutral-900 border border-neutral-700/50 rounded-lg p-6 transition-all duration-300 hover:shadow-[var(--testimonial-hover-shadow)] hover:-translate-y-1">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }, (_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-600 text-amber-600"
          />
        ))}
      </div>

      <blockquote
      className="text-sm text-neutral-300 leading-relaxed mb-6"
      dangerouslySetInnerHTML={{__html: content}}>
      </blockquote>

      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={avatar}
            alt={`${name} profile`}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/20"
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-amber-700">{name}</div>
          <div className="text-xs text-neutral-300">
            <b class="text-amber-600">{role}</b> at {company}
          </div>
        </div>
      </div>
    </div>
  );
};
