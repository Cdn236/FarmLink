import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/* Mobile app frame — 390×844 */
export function MobileFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative w-[390px] h-[844px] rounded-[36px] bg-sand-900 p-[10px] shadow-xl', className)}>
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-sand-50">
        <div className="pointer-events-none absolute top-0 left-1/2 z-30 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-sand-900" />
        {children}
      </div>
    </div>
  );
}

/* Feature phone frame for USSD — monochrome */
export function FeaturePhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative w-[200px] rounded-[18px] bg-sand-900 p-2 shadow-xl', className)}>
      <div className="rounded-[12px] bg-sand-900 p-2">
        <div className="h-1.5 w-12 mx-auto rounded-full bg-sand-700 mb-2" />
        {/* monochrome screen */}
        <div className="h-[200px] w-[164px] mx-auto rounded-[4px] bg-[#9bbb6e] p-1.5 font-mono text-[8px] leading-[1.25] text-sand-900 overflow-hidden whitespace-pre-wrap">
          {children}
        </div>
        {/* keypad */}
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {['1','2','3','4','5','6','7','8','9','*','0','#'].map((k) => (
            <div key={k} className="h-4 rounded bg-sand-800 text-[6px] text-sand-400 flex items-center justify-center">{k}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Desktop dashboard frame — 1440 wide */
export function DesktopFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('w-[1280px] rounded-2xl bg-sand-900 p-2 shadow-xl', className)}>
      <div className="rounded-xl bg-sand-50 overflow-hidden">{children}</div>
    </div>
  );
}

/* Screen panel — holds a frame plus a caption and annotation */
export function ScreenPanel({
  id,
  title,
  purpose,
  states,
  children,
  note,
  width = 'mobile',
}: {
  id: string;
  title: string;
  purpose: string;
  states?: string;
  children: ReactNode;
  note?: string;
  width?: 'mobile' | 'phone' | 'desktop';
}) {
  return (
    <div className="flex flex-col gap-2" id={id}>
      <div className="flex items-baseline gap-2">
        <span className="text-xs font-mono text-green-700">{id}</span>
        <h3 className="text-base font-semibold text-sand-900">{title}</h3>
      </div>
      <p className="anno max-w-md">{purpose}</p>
      <div className={cn('mt-1', width === 'desktop' ? 'overflow-x-auto scrollbar-thin' : '')}>{children}</div>
      {(states || note) && (
        <div className="anno max-w-md">
          {states && <span><span className="anno-label">States: </span>{states}. </span>}
          {note && <span><span className="anno-label">Note: </span>{note}</span>}
        </div>
      )}
    </div>
  );
}
