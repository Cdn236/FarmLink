import { useEffect, useMemo, useState } from 'react';
import * as Icons from 'lucide-react';
import { NAV, ALL_IDS } from '@/nav';
import { cn } from '@/lib/cn';
import { screens } from '@/screens';

function App() {
  const [active, setActive] = useState<string>('flow-map');
  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    NAV.forEach((g) => (init[g.id] = true));
    return init;
  });

  const idx = useMemo(() => ALL_IDS.indexOf(active), [active]);
  const prevId = idx > 0 ? ALL_IDS[idx - 1] : null;
  const nextId = idx >= 0 && idx < ALL_IDS.length - 1 ? ALL_IDS[idx + 1] : null;

  useEffect(() => {
    document.getElementById('screen-' + active)?.scrollIntoView({ block: 'start' });
  }, [active]);

  const ActiveScreen = screens[active] ?? null;

  return (
    <div className="min-h-screen flex bg-[#ECEAE3] text-sand-900">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col fixed inset-y-0 left-0 border-r border-sand-200 bg-white">
        <div className="h-16 flex items-center gap-2 px-5 border-b border-sand-200">
          <div className="h-9 w-9 rounded-lg bg-green-500 flex items-center justify-center">
            <Icons.Sprout className="h-5 w-5 text-sand-50" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-sm">FarmLink Uganda</div>
            <div className="text-xxs text-sand-500">Design Deliverable</div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-3 space-y-4">
          {NAV.map((g) => {
            const GIcon = (Icons as any)[g.icon] ?? Icons.Circle;
            return (
              <div key={g.id}>
                <button
                  onClick={() => setOpen((o) => ({ ...o, [g.id]: !o[g.id] }))}
                  className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-sand-500"
                >
                  <GIcon className="h-4 w-4 text-sand-600" />
                  {g.label}
                  <Icons.ChevronDown className={cn('h-3.5 w-3.5 ml-auto transition', open[g.id] ? '' : '-rotate-90')} />
                </button>
                {open[g.id] && (
                  <div className="mt-1 space-y-3">
                    {g.sections.map((s) => (
                      <div key={s.id}>
                        <div className="px-3 text-xxs font-semibold text-sand-400 uppercase tracking-wide">{s.label}</div>
                        <div className="mt-1 space-y-0.5">
                          {s.items.map((i) => (
                            <button
                              key={i.id}
                              onClick={() => setActive(i.id)}
                              className={cn(
                                'w-full text-left rounded-lg px-3 py-2 text-xs font-medium transition',
                                active === i.id ? 'bg-green-50 text-green-700' : 'text-sand-700 hover:bg-sand-100'
                              )}
                            >
                              {i.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile top nav */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 h-14 bg-white border-b border-sand-200 flex items-center px-4 gap-2">
        <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center">
          <Icons.Sprout className="h-4 w-4 text-sand-50" />
        </div>
        <span className="font-bold text-sm">FarmLink Design</span>
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="ml-auto h-9 rounded-lg border border-sand-300 bg-sand-50 px-2 text-xs max-w-[55vw]"
        >
          {NAV.map((g) => (
            <optgroup key={g.id} label={g.label}>
              {g.sections.flatMap((s) => s.items.map((i) => (
                <option key={i.id} value={i.id}>{i.label}</option>
              )))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Main */}
      <main className="flex-1 lg:ml-72 pt-14 lg:pt-0">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-8 canvas-grid min-h-screen">
          <div id={'screen-' + active} className="scroll-mt-8">
            {ActiveScreen ? (
              <ActiveScreen />
            ) : (
              <div className="p-8 text-sand-500">Screen not found: {active}</div>
            )}
          </div>

          {/* Prev / next */}
          <div className="mt-12 flex items-center justify-between border-t border-sand-200 pt-5">
            <button
              disabled={!prevId}
              onClick={() => prevId && setActive(prevId)}
              className="inline-flex items-center gap-1 text-xs font-medium text-sand-600 disabled:opacity-40"
            >
              <Icons.ArrowLeft className="h-4 w-4" /> Previous
            </button>
            <span className="text-xs text-sand-400 font-mono">{idx + 1} / {ALL_IDS.length}</span>
            <button
              disabled={!nextId}
              onClick={() => nextId && setActive(nextId)}
              className="inline-flex items-center gap-1 text-xs font-medium text-sand-600 disabled:opacity-40"
            >
              Next <Icons.ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
