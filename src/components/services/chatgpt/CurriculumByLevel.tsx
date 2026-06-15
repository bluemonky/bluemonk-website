'use client';

import { useState } from 'react';
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

  return (
    <div>
      {/* レベル選択タブ */}
      <div
        role="tablist"
        aria-label="研修レベル"
        className="flex flex-wrap gap-2 sm:gap-3 mb-12 justify-center"
      >
        {levels.map((l) => {
          const isActive = l.level === activeLevel;
          return (
            <button
              key={l.level}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveLevel(l.level)}
              className={`px-7 sm:px-9 py-3 rounded-full text-sm sm:text-base font-bold transition-all border-2 ${
                isActive
                  ? 'bg-[#00d4ff] text-white border-[#00d4ff] shadow-md shadow-[#00d4ff]/30'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-[#00d4ff] hover:text-[#00d4ff]'
              }`}
            >
              {l.label}
            </button>
          );
        })}
      </div>

      {/* カリキュラム */}
      <div className="mb-20 sm:mb-24">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-900 mb-2">
          {active.label}・{active.lectures.length}講義のカリキュラム
        </h3>
        <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {active.lectures.map((l) => (
            <div
              key={l.number}
              className="group relative bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex items-start gap-4 hover:border-[#00d4ff]/60 hover:shadow-md transition-all"
            >
              <div className="shrink-0 flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  Lec
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#00d4ff] leading-none">
                  {String(l.number).padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
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
        <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-900 mb-2">
          {active.label}・選べる{active.patternCount}つの時間割パターン
        </h3>
        <p className="text-sm sm:text-base text-slate-600 text-center max-w-2xl mx-auto mb-2">
          貴社のスケジュールに合わせて、{active.patternCount}つの時間割パターンから選択いただけます。
        </p>
        <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-10 rounded-full" />

        {/* レベル切替時に内部の選択タブをリセットするため key にレベルを付与 */}
        <SchedulePatterns
          key={active.level}
          patterns={active.schedulePatterns}
          lectures={active.lectures}
        />
      </div>
    </div>
  );
}
