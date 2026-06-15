'use client';

import { useRef, useState } from 'react';
import type { Level, Lecture, SchedulePattern } from '@/data/services/training-chatgpt';
import SchedulePatterns from './SchedulePatterns';

type LevelData = {
  level: Level;
  label: string;
  lectures: Lecture[];
  schedulePatterns: SchedulePattern[];
  /** 時間割パターン数（見出しの「選べる N つの時間割パターン」に使用） */
  patternCount: number;
};

type Props = {
  levels: LevelData[];
};

/**
 * 初級編 / 中級編を切り替えてカリキュラムと時間割を出し分けるクライアントコンポーネント。
 * 表示テキスト・データは props 経由（コンテンツは training-chatgpt.ts に集約）。
 * 既存のライトテーマ・デザイントーンを踏襲。
 */
export default function CurriculumByLevel({ levels }: Props) {
  const [activeLevel, setActiveLevel] = useState<Level>(levels[0].level);
  const active = levels.find((l) => l.level === activeLevel) ?? levels[0];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // WAI-ARIA Tabs: 左右矢印 / Home / End でタブ間をフォーカス移動し選択を切替（roving tabindex）。
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      next = (index + 1) % levels.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      next = (index - 1 + levels.length) % levels.length;
    } else if (e.key === 'Home') {
      next = 0;
    } else if (e.key === 'End') {
      next = levels.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveLevel(levels[next].level);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      {/* レベル選択タブ（存在感を強め、選択状態を明快に） */}
      <div
        role="tablist"
        aria-label="研修レベル"
        aria-orientation="horizontal"
        className="flex flex-col sm:flex-row gap-3 mb-9 max-w-2xl mx-auto p-1.5 sm:bg-slate-100 sm:rounded-[1.75rem]"
      >
        {levels.map((l, index) => {
          const isActive = l.level === activeLevel;
          return (
            <button
              key={l.level}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`curriculum-panel-${l.level}`}
              id={`curriculum-tab-${l.level}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveLevel(l.level)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              className={`flex-1 flex items-center justify-center gap-2.5 px-5 sm:px-8 py-4 rounded-2xl text-base font-bold transition-all border-2 ${
                isActive
                  ? 'bg-gradient-to-br from-[#00d4ff] to-[#0099cc] text-white border-[#00d4ff] shadow-lg shadow-[#00d4ff]/30 sm:-translate-y-0.5'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-[#00d4ff]/60 hover:text-[#007399] hover:shadow-sm'
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black transition-colors ${
                  isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-400'
                }`}
                aria-hidden="true"
              >
                {l.level === 'beginner' ? '初' : '中'}
              </span>
              {l.label}
              <span
                className={`text-xs font-medium ${isActive ? 'text-white/85' : 'text-slate-400'}`}
              >
                全{l.lectures.length}講義
              </span>
            </button>
          );
        })}
      </div>

      {/* タブパネル（カリキュラム + 時間割） */}
      <div
        id={`curriculum-panel-${active.level}`}
        role="tabpanel"
        aria-labelledby={`curriculum-tab-${active.level}`}
        tabIndex={0}
      >
        {/* カリキュラム */}
        <div className="mb-14 sm:mb-16">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-center text-slate-900 mb-2">
            {active.label}・{active.lectures.length}講義のカリキュラム
          </h3>
          <div className="w-10 h-1 bg-[#00d4ff] mx-auto mb-8 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {active.lectures.map((l) => (
              <div
                key={l.number}
                className="group relative bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex items-start gap-4 hover:border-[#00d4ff]/60 hover:shadow-[0_8px_24px_-12px_rgba(0,212,255,0.45)] transition-all"
              >
                <div className="shrink-0 flex flex-col items-center w-10">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    Lec
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-[#00d4ff] leading-none">
                    {String(l.number).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 pt-1 min-w-0">
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                    {l.title}
                  </p>
                  {l.description && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {l.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 時間割 */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-center text-slate-900 mb-2">
            {active.label}・選べる{active.patternCount}つの時間割パターン
          </h3>
          <p className="text-sm sm:text-base text-slate-600 text-center max-w-2xl mx-auto mb-2">
            貴社のスケジュールに合わせて、{active.patternCount}つの時間割パターンから選択いただけます。
          </p>
          <div className="w-10 h-1 bg-[#00d4ff] mx-auto mb-8 rounded-full" />

          {/* レベル切替時に内部の選択タブをリセットするため key にレベルを付与 */}
          <SchedulePatterns
            key={active.level}
            patterns={active.schedulePatterns}
            lectures={active.lectures}
          />
        </div>
      </div>
    </div>
  );
}
