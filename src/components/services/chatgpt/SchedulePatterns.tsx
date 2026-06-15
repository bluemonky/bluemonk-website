'use client';

import { useState } from 'react';
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

  const getLectureTitle = (num: number) =>
    lectures.find((l) => l.number === num)?.title ?? '';

  return (
    <div>
      {/* Tab buttons */}
      <div role="tablist" className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center">
        {patterns.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(p.id)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                isActive
                  ? 'bg-[#00d4ff] text-white border-[#00d4ff] shadow-md shadow-[#00d4ff]/30'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-[#00d4ff] hover:text-[#00d4ff]'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Active schedule details */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-baseline gap-3 mb-6 pb-4 border-b border-slate-200">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#00d4ff] uppercase">
            Schedule
          </span>
          <span className="text-lg sm:text-xl font-bold text-slate-900">{active.label}</span>
          <span className="text-sm text-slate-500 ml-auto">
            計 {active.totalDays}日 / 総 {active.totalHours}時間
          </span>
        </div>

        <div className="space-y-6">
          {active.days.map((day) => (
            <div key={day.day}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 text-white text-sm font-bold">
                  D{day.day}
                </div>
                <div className="text-sm font-semibold text-slate-700">Day {day.day}</div>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <ul className="space-y-2 pl-13 sm:pl-14">
                {day.sessions.map((s) => (
                  <li
                    key={s.lectureNumber}
                    className="flex items-start gap-3 sm:gap-4 py-2 border-b border-slate-100 last:border-b-0"
                  >
                    <span className="shrink-0 text-xs font-bold text-[#00d4ff] mt-0.5 min-w-[40px]">
                      第{s.lectureNumber}講
                    </span>
                    <span className="flex-1 text-sm text-slate-800 leading-snug">
                      {getLectureTitle(s.lectureNumber)}
                    </span>
                    <span className="shrink-0 text-xs text-slate-500 whitespace-nowrap">
                      {s.durationHours}時間
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
