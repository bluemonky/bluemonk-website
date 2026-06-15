'use client';

import { useRef, useState } from 'react';
import type { SchedulePattern, Lecture } from '@/data/services/training-chatgpt';

type Props = {
  patterns: SchedulePattern[];
  lectures: Lecture[];
};

export default function SchedulePatterns({ patterns, lectures }: Props) {
  // patterns はレベル切り替えで差し替わるため、先頭パターンを既定にする。
  // 選択中の id が現在の patterns に無い場合（レベル切替直後など）は先頭にフォールバック。
  const [activeId, setActiveId] = useState(patterns[0].id);
  const active = patterns.find((p) => p.id === activeId) ?? patterns[0];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const getLectureTitle = (num: number) =>
    lectures.find((l) => l.number === num)?.title ?? '';

  // WAI-ARIA Tabs: 左右矢印 / Home / End でタブ間をフォーカス移動し選択を切替（roving tabindex）。
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      next = (index + 1) % patterns.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      next = (index - 1 + patterns.length) % patterns.length;
    } else if (e.key === 'Home') {
      next = 0;
    } else if (e.key === 'End') {
      next = patterns.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveId(patterns[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      {/* Tab buttons（時間割パターン切替） */}
      <div
        role="tablist"
        aria-label="時間割パターン"
        aria-orientation="horizontal"
        className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center"
      >
        {patterns.map((p, index) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls="schedule-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(p.id)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                isActive
                  ? 'bg-[#00d4ff] text-white border-[#00d4ff] shadow-md shadow-[#00d4ff]/30'
                  : 'bg-white text-slate-600 border-slate-300 hover:border-[#00d4ff] hover:text-[#0099cc]'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Active schedule details */}
      <div
        id="schedule-panel"
        role="tabpanel"
        aria-label={`時間割: ${active.label}`}
        tabIndex={0}
        className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-[0_1px_3px_rgba(15,23,42,0.06),0_0_0_1px_rgba(0,212,255,0.04)]"
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-6 pb-4 border-b border-slate-200">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#0099cc] uppercase">
            Schedule
          </span>
          <span className="text-lg sm:text-xl font-bold text-slate-900">{active.label}</span>
          <span className="text-sm text-slate-500 ml-auto tabular-nums">
            計 {active.totalDays}日 / 総 {active.totalHours}時間
          </span>
        </div>

        <div className="space-y-6">
          {active.days.map((day) => (
            <div key={day.day}>
              {/* Day ヘッダ — バッジ w-10 + gap-4 = 56px（pl-14 と揃える） */}
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 text-white text-sm font-bold shrink-0">
                  D{day.day}
                </div>
                <div className="text-sm font-semibold text-slate-700">Day {day.day}</div>
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400 whitespace-nowrap tabular-nums">
                  {day.sessions.reduce((sum, s) => sum + s.durationHours, 0)}時間
                </span>
              </div>

              {/* セッション一覧（タイムテーブル）— Day バッジ(w-10)+gap-4 と左端を揃える pl-14 */}
              <ul className="space-y-1 pl-0 sm:pl-14">
                {day.sessions.map((s) => (
                  <li
                    key={s.lectureNumber}
                    className="flex items-start gap-3 sm:gap-4 py-2.5 px-3 sm:px-4 rounded-lg odd:bg-slate-50/70 hover:bg-cyan-50/60 transition-colors"
                  >
                    <span className="shrink-0 inline-flex items-center justify-center text-xs font-bold text-[#0099cc] bg-[#00d4ff]/10 rounded-md px-2 py-0.5 mt-0.5 min-w-[44px] tabular-nums">
                      第{s.lectureNumber}講
                    </span>
                    <span className="flex-1 text-sm text-slate-800 leading-snug">
                      {getLectureTitle(s.lectureNumber)}
                    </span>
                    <span className="shrink-0 text-xs font-medium text-slate-500 whitespace-nowrap mt-0.5 tabular-nums">
                      {s.durationHours}h
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
