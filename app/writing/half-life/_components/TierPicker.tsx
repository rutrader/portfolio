'use client';

import { useRef, useState } from 'react';

import { TIERS, type Arm } from '../_data';

/**
 * One model per tab: the rule deleted, the rule with no padding, and the rule
 * behind 256 KB of repo code.
 *
 * Same instrument as the trap picker in `what-never-costs`, and the same
 * carve-out from the One Column Rule: a control and its own output are one
 * instrument, and the pair stacks below 680px.
 *
 * The run strip stands in for the source page's click-to-read answers. Twenty
 * answers per point came to 3 MB, so the page carries each run's count and
 * leaves the full text with the harness.
 */
export default function TierPicker() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusTab(i: number) {
    const next = (i + TIERS.length) % TIERS.length;
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
      End: TIERS.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    focusTab(next);
  }

  const tier = TIERS[active];
  const arms: Arm[] = [tier.deleted, tier.near, tier.far];

  return (
    <div className="artPicker">
      <div className="artPickerAside">
        <p className="artLabel artPickerLabel">The model</p>
        <div
          className="artTabs"
          role="tablist"
          aria-orientation="vertical"
          aria-label="The model"
          onKeyDown={onKeyDown}
        >
          {TIERS.map((t, i) => (
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
                <span className="artTabIndex">{t.price}</span>
                <span className="artTabName">{t.name}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="artPanel" role="tabpanel" id={`panel-${tier.id}`} aria-labelledby={`tab-${tier.id}`}>
        <p className="artLabel artPickerLabel">Runs that obeyed</p>
        <div className="artArms">
          {arms.map((arm) => (
            <div key={arm.name} className={`artArm${arm === tier.far ? ' isHit' : ''}`}>
              <span className="artArmName">{arm.name}</span>
              <span
                className="artRail"
                role="img"
                aria-label={`${arm.name}: ${arm.obeyed} of ${arm.n} obeyed, 95% band ${arm.band}`}
              >
                {arm.obeyed > 0 && <i style={{ width: `${Math.round((arm.obeyed / arm.n) * 100)}%` }} />}
              </span>
              <span className="artArmScore" aria-hidden="true">
                {arm.obeyed}/{arm.n}
              </span>
            </div>
          ))}
        </div>
        <p className="artPanelBlurb">
          95% bands: deleted {tier.deleted.band}, 0 KB {tier.near.band}, 256 KB {tier.far.band}. The 256 KB prompt ran
          to {tier.farTokens}. Inline snapshots used: {tier.snapshots}.
        </p>

        <p className="artLabel artPanelLabel">Each run at 256 KB: toContain calls / expect calls</p>
        <pre className="artMutation">
          {tier.farRuns.map((r, i) => (i % 5 === 4 ? `${r.padEnd(7)}\n` : r.padEnd(7)))}
        </pre>

        <p className="artVerdict">
          <b>{tier.name}</b> {tier.verdict}
        </p>
      </div>
    </div>
  );
}
