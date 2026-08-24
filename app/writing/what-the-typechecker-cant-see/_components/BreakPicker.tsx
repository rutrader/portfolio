'use client';

import { useRef, useState } from 'react';

import { STRATA } from '../_data';

/**
 * The four kinds of break, and what each tool found.
 *
 * The chooser sits in a column beside its detail panel, as the source explainer
 * laid it out. DESIGN.md's One Column Rule reads against this; the carve-out is
 * that a control and its own output are not two contents competing for a band.
 * It collapses to a single stack below 680px, where the rule bites for real.
 *
 * The choices are built from the system's content-row grammar — a teal marker
 * leading a title, hairline separators — rather than the source's bordered
 * cells, so a reader recognises them as the same object as a homepage row.
 *
 * A real tablist rather than a row of toggle buttons: arrow keys move between
 * breaks, Home and End jump to the ends, and only the active tab is in the tab
 * order. The rails carry their numbers in an aria-label because the visible
 * score line beside them is decorative repetition for a screen reader.
 */
export default function BreakPicker() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusTab(i: number) {
    const next = (i + STRATA.length) % STRATA.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: STRATA.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    focusTab(next);
  }

  const stratum = STRATA[active];

  return (
    <div className="artPicker">
      <div className="artPickerAside">
        <p className="artLabel artPickerLabel">The kind of break</p>
        <div
          className="artTabs"
          role="tablist"
          aria-orientation="vertical"
          aria-label="The kind of break"
          onKeyDown={onKeyDown}
        >
          {STRATA.map((s, i) => (
            <button
              key={s.id}
              ref={(node) => {
                tabs.current[i] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${s.id}`}
              tabIndex={i === active ? 0 : -1}
              className={`artTab${i === active ? ' isActive' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="artTabMarker" aria-hidden="true" />
              <span className="artTabBody">
                <span className="artTabIndex">{s.id}</span>
                <span className="artTabName">{s.name}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="artPanel" role="tabpanel" id={`panel-${stratum.id}`} aria-labelledby={`tab-${stratum.id}`}>
        <p className="artLabel artPickerLabel">What I changed</p>
        <p className="artPanelBlurb">{stratum.blurb}</p>

        <p className="artLabel artPanelLabel">The change itself</p>
        <pre className="artMutation">{stratum.mutation}</pre>

        <p className="artLabel artPanelLabel">Who found it</p>
        <div className="artArms">
          {stratum.arms.map((arm) => {
            const pct = Math.round((arm.got / stratum.total) * 100);
            return (
              <div key={arm.name} className={`artArm${arm.got === stratum.total ? ' isHit' : ''}`}>
                <span className="artArmName">{arm.name}</span>
                <span
                  className="artRail"
                  role="img"
                  aria-label={`${arm.name}: ${arm.got} of ${stratum.total}${arm.note ? `, ${arm.note}` : ''}`}
                >
                  {arm.got > 0 && <i style={{ width: `${pct}%` }} />}
                </span>
                <span className="artArmScore" aria-hidden="true">
                  {arm.got}/{stratum.total}
                  {arm.note && ` · ${arm.note}`}
                </span>
              </div>
            );
          })}
        </div>

        <p className={`artVerdict${stratum.alarm ? ' isAlarm' : ''}`}>
          <b>{stratum.id}</b> {stratum.verdict}
        </p>
      </div>
    </div>
  );
}
