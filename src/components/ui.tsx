import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

/* ---------- Buttons ---------- */
type BtnVariant = 'primary' | 'outline' | 'text' | 'destructive' | 'disabled' | 'loading';
interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
}
export function Button({ variant = 'primary', size = 'md', block, className, children, ...rest }: BtnProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition select-none';
  const sizes = { sm: 'h-9 px-3 text-xs', md: 'h-12 px-4 text-base', lg: 'h-14 px-5 text-base' };
  const variants: Record<BtnVariant, string> = {
    primary: 'bg-green-500 text-sand-50 hover:bg-green-600 active:bg-green-700',
    outline: 'border-2 border-green-500 text-green-700 bg-transparent hover:bg-green-50',
    text: 'text-green-700 hover:bg-green-50',
    destructive: 'bg-clay-400 text-sand-50 hover:bg-clay-500',
    disabled: 'bg-sand-200 text-sand-400 cursor-not-allowed',
    loading: 'bg-green-600 text-sand-50 cursor-wait',
  };
  const dis = rest.disabled;
  return (
    <button
      className={cn(base, sizes[size], block && 'w-full', variant === 'disabled' || dis ? variants.disabled : variants[variant], className)}
      {...rest}
    >
      {variant === 'loading' && <Spinner />}
      {children}
    </button>
  );
}
export function Spinner() {
  return <span className="h-4 w-4 rounded-full border-2 border-sand-50/40 border-t-sand-50 animate-spin" />;
}

/* ---------- Input ---------- */
export function Field({ label, helper, error, children }: { label: string; helper?: string; error?: string; children: ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-medium text-sand-700">{label}</label>
      {children}
      {helper && !error && <p className="text-xs text-sand-500">{helper}</p>}
      {error && <p className="text-xs text-clay-500">{error}</p>}
    </div>
  );
}
export function Input({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('h-12 w-full rounded-xl border border-sand-300 bg-sand-50 px-3 text-base text-sand-900 placeholder:text-sand-400 focus:border-green-500 focus:outline-none', className)} {...rest} />;
}

/* ---------- Chip / Badge ---------- */
export function Chip({ active, children, className }: { active?: boolean; children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full border px-3 h-8 text-xs font-medium', active ? 'border-green-500 bg-green-50 text-green-700' : 'border-sand-300 text-sand-600', className)}>
      {children}
    </span>
  );
}
export function Badge({ tone = 'neutral', children, className }: { tone?: 'neutral' | 'green' | 'amber' | 'clay'; children: ReactNode; className?: string }) {
  const tones = {
    neutral: 'bg-sand-100 text-sand-700',
    green: 'bg-green-50 text-green-700',
    amber: 'bg-amber-50 text-amber-500',
    clay: 'bg-clay-50 text-clay-500',
  };
  return <span className={cn('inline-flex items-center gap-1 rounded-md px-2 h-6 text-xs font-semibold', tones[tone], className)}>{children}</span>;
}

/* ---------- Card ---------- */
export function Card({ className, children, onClick }: { className?: string; children: ReactNode; onClick?: () => void }) {
  return <div className={cn('rounded-card bg-white shadow-soft', onClick && 'cursor-pointer', className)} onClick={onClick}>{children}</div>;
}

/* ---------- Annotation ---------- */
export function Anno({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="anno leading-snug">
      {label && <span className="anno-label">{label}: </span>}
      {children}
    </div>
  );
}

/* ---------- Skeleton ---------- */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('rounded-lg bg-sand-200 animate-pulse', className)} />;
}

/* ---------- Star rating ---------- */
export function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" style={{ height: size + 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={i <= Math.round(value) ? '#B8762A' : 'none'} stroke="#B8762A" strokeWidth="1.5">
          <path d="M10 2l2.5 5.1 5.6.8-4 3.9.9 5.6L10 15.6 5.4 17.4l.9-5.6-4-3.9 5.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

/* ---------- Stepper (horizontal) ---------- */
export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-center">
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={s} className={cn('flex items-center', i < steps.length - 1 && 'flex-1')}>
            <div className="flex flex-col items-center gap-1">
              <div className={cn('h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border-2', done ? 'bg-green-500 border-green-500 text-white' : active ? 'border-green-500 text-green-700 bg-white' : 'border-sand-300 text-sand-400 bg-sand-50')}>
                {done ? '✓' : i + 1}
              </div>
              <span className={cn('text-xxs whitespace-nowrap', active || done ? 'text-sand-800' : 'text-sand-400')}>{s}</span>
            </div>
            {i < steps.length - 1 && <div className={cn('h-0.5 flex-1 mx-1 rounded', done ? 'bg-green-500' : 'bg-sand-200')} />}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Offline banner ---------- */
export function OfflineBanner({ show }: { show?: boolean }) {
  if (!show) return null;
  return (
    <div className="flex items-center gap-2 bg-amber-50 text-amber-500 text-xs font-medium px-3 h-9">
      <span className="h-2 w-2 rounded-full bg-amber-400" /> Offline / Slow network — showing cached data
    </div>
  );
}

/* ---------- Language toggle chip ---------- */
export function LangToggle({ value = 'EN' }: { value?: 'EN' | 'LG' }) {
  return (
    <span className="inline-flex items-center rounded-full border border-sand-300 bg-white px-2 h-7 text-xs font-semibold text-sand-700">
      EN <span className="mx-1 text-sand-300">|</span> <span className={value === 'LG' ? 'text-green-700' : 'text-sand-400'}>LG</span>
    </span>
  );
}
