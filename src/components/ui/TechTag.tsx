// src/components/ui/TechTag.tsx
interface TechTagProps {
  label: string;
  accent?: string;
  size?: 'sm' | 'md';
}

export function TechTag({ label, accent, size = 'sm' }: TechTagProps) {
  const sizeClass = size === 'md'
    ? 'text-xs px-3 py-1.5'
    : 'text-[11px] px-2.5 py-1';

  return (
    <span
      className={`font-mono ${sizeClass} rounded-full border inline-block leading-none`}
      style={
        accent
          ? {
              color: accent,
              borderColor: `${accent}33`,
              backgroundColor: `${accent}0d`,
            }
          : {
              color: '#a0a0b0',
              borderColor: '#2a2a3e',
              backgroundColor: '#12121e',
            }
      }
    >
      {label}
    </span>
  );
}

