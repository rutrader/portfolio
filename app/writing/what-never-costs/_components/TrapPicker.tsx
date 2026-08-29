'use client';

import { useRef, useState } from 'react';

import { TRAPS } from '../_data';

/**
 * The four ways this test could have printed a clean zero, and what each one
 * would have hidden.
 *
 * Same instrument as the break picker in `what-the-typechecker-cant-see`: a
 * chooser in a column beside the panel it drives. DESIGN.md's One Column Rule
 * reads against this; the carve-out is that a control and its own output are
 * one instrument rather than two contents competing for a band, and the pair
 * collapses to a single stack below 680px where the rule bites for real.
 *
 * A real tablist rather than a row of toggle buttons: arrow keys move between
 * traps, Home and End jump to the ends, and only the active tab is in the tab
 * order. The rails carry their numbers in an aria-label because the visible
 * score beside them is decorative repetition for a screen reader.
 */
export default function TrapPicker() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusTab(i: number) {
    const next = (i + TRAPS.length) % TRAPS.length;
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
      End: TRAPS.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    focusTab(next);
  }

  const trap = TRAPS[active];

  return (
    <div className="artPicker">
      <div className="artPickerAside">
        <p className="artLabel artPickerLabel">The trap</p>
        <div className="artTabs" role="tablist" aria-orientation="vertical" aria-label="The trap" onKeyDown={onKeyDown}>
          {TRAPS.map((t, i) => (
            <button
              key={t.id}
              ref={(node) => {
                tabs.current[i] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${t.id}`}
              tabIndex={i === active ? 0 : -1}
              className={`artTab${i === active ? ' isActive' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="artTabMarker" aria-hidden="true" />
              <span className="artTabBody">
                <span className="artTabIndex">{t.id}</span>
                <span className="artTabName">{t.name}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="artPanel" role="tabpanel" id={`panel-${trap.id}`} aria-labelledby={`tab-${trap.id}`}>
        <p className="artLabel artPickerLabel">What happens</p>
        <p className="artPanelBlurb">{trap.blurb}</p>

        <p className="artLabel artPanelLabel">The mechanism</p>
        <pre className="artMutation">{trap.mutation}</pre>

        <p className="artLabel artPanelLabel">What the count would have said</p>
        <div className="artArms">
          {trap.rows.map((row) => (
            <div key={row.name} className={`artArm${row.truth ? ' isHit' : ''}`}>
              <span className="artArmName">{row.name}</span>
              <span className="artRail" role="img" aria-label={`${row.name}: ${row.got} of ${row.of}`}>
                {row.got > 0 && <i style={{ width: `${Math.round((row.got / row.of) * 100)}%` }} />}
              </span>
              <span className="artArmScore" aria-hidden="true">
                {row.got}/{row.of}
              </span>
            </div>
          ))}
        </div>

        <p className={`artVerdict${trap.alarm ? ' isAlarm' : ''}`}>
          <b>{trap.id}</b> {trap.verdict}
        </p>
      </div>
    </div>
  );
}
