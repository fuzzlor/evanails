import React, { useState, useMemo } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Sun,
  Sunset,
  Moon,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  TrendingUp,
} from 'lucide-react';

interface OccupancyCalendarSectionProps {
  currentLang: Language;
  onBookSlot: (date: string, time: string) => void;
}

interface SlotInfo {
  time: string;
  status: 'available' | 'few' | 'booked';
  period: 'morning' | 'afternoon' | 'evening';
}

interface DayData {
  dateObj: Date;
  dateStr: string; // YYYY-MM-DD
  dayLabel: string;
  formattedDate: string;
  occupancyPercent: number;
  status: 'free' | 'moderate' | 'busy';
  slots: SlotInfo[];
}

export const OccupancyCalendarSection: React.FC<OccupancyCalendarSectionProps> = ({
  currentLang,
  onBookSlot,
}) => {
  const t = translations[currentLang];
  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number>(0);
  const [selectedDayKey, setSelectedDayKey] = useState<string>('');

  // 3 weeks of live schedule calculation
  const weeksData = useMemo(() => {
    // Current anchor date (Sept 2026 or real dynamic date)
    const baseDate = new Date();
    // Align to Monday of current week
    const currentDay = baseDate.getDay(); // 0 is Sun, 1 is Mon
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    const currentMonday = new Date(baseDate);
    currentMonday.setDate(baseDate.getDate() + distanceToMonday);
    currentMonday.setHours(0, 0, 0, 0);

    const monthNames: Record<Language, string[]> = {
      ru: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      vi: ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12'],
      ko: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    };

    // Deterministic mock schedule based on day index and week index to feel super realistic
    const weeks: DayData[][] = [];

    for (let w = 0; w < 3; w++) {
      const weekDays: DayData[] = [];
      for (let d = 0; d < 7; d++) {
        const dayDate = new Date(currentMonday);
        dayDate.setDate(currentMonday.getDate() + w * 7 + d);

        const year = dayDate.getFullYear();
        const month = String(dayDate.getMonth() + 1).padStart(2, '0');
        const dayNum = String(dayDate.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${dayNum}`;

        const monthShort = monthNames[currentLang][dayDate.getMonth()];
        const formattedDate =
          currentLang === 'ko'
            ? `${monthShort} ${dayDate.getDate()}일`
            : `${dayDate.getDate()} ${monthShort}`;

        // Realistic occupancy distribution:
        // Weekends (d = 5, 6) are busier. Current week is busier than in 2 weeks.
        let baseOccupancy = 35 + ((d * 9 + w * 17) % 45);
        if (d === 4 || d === 5) baseOccupancy += 25; // Friday & Saturday busy
        if (d === 6) baseOccupancy += 15; // Sunday busy
        if (w === 0) baseOccupancy += 10;
        if (w === 2) baseOccupancy -= 15;

        // Clamp between 20 and 95
        const occupancyPercent = Math.min(95, Math.max(20, baseOccupancy));

        let status: 'free' | 'moderate' | 'busy' = 'moderate';
        if (occupancyPercent < 45) {
          status = 'free';
        } else if (occupancyPercent >= 75) {
          status = 'busy';
        }

        // Generate slots
        const timeConfigs = [
          { time: '09:00', period: 'morning' as const },
          { time: '10:30', period: 'morning' as const },
          { time: '12:00', period: 'morning' as const },
          { time: '13:30', period: 'afternoon' as const },
          { time: '15:00', period: 'afternoon' as const },
          { time: '16:30', period: 'evening' as const },
          { time: '18:00', period: 'evening' as const },
          { time: '19:30', period: 'evening' as const },
        ];

        const slots: SlotInfo[] = timeConfigs.map((cfg, idx) => {
          // pseudo-random deterministic status
          const val = (d * 13 + w * 29 + idx * 7) % 10;
          let slotStatus: 'available' | 'few' | 'booked' = 'available';

          if (status === 'busy') {
            slotStatus = val > 3 ? 'booked' : val === 3 ? 'few' : 'available';
          } else if (status === 'moderate') {
            slotStatus = val > 6 ? 'booked' : val >= 4 ? 'few' : 'available';
          } else {
            slotStatus = val > 8 ? 'booked' : val === 8 ? 'few' : 'available';
          }

          return {
            time: cfg.time,
            period: cfg.period,
            status: slotStatus,
          };
        });

        const dayLabel = t.schedule.daysOfWeek[d] || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][d];

        weekDays.push({
          dateObj: dayDate,
          dateStr,
          dayLabel,
          formattedDate,
          occupancyPercent,
          status,
          slots,
        });
      }
      weeks.push(weekDays);
    }

    return weeks;
  }, [currentLang, t.schedule.daysOfWeek]);

  const currentWeekDays = weeksData[selectedWeekIndex] || weeksData[0];

  // Active day selection defaults to first day of week or currently chosen
  const activeDay = useMemo(() => {
    if (selectedDayKey) {
      const found = currentWeekDays.find((d) => d.dateStr === selectedDayKey);
      if (found) return found;
    }
    return currentWeekDays[0];
  }, [currentWeekDays, selectedDayKey]);

  const weekLabels = [
    t.schedule.weekCurrent,
    t.schedule.weekNext,
    t.schedule.weekAfter,
  ];

  const handleDaySelect = (day: DayData) => {
    setSelectedDayKey(day.dateStr);
  };

  const freeSlotsCount = activeDay.slots.filter((s) => s.status !== 'booked').length;

  return (
    <section
      id="schedule"
      className="py-16 sm:py-24 bg-[#fff8f5] relative overflow-hidden border-t border-[#ebd6cb]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1ddbf]/50 border border-[#ebd6cb] text-[#794150] text-[12px] font-semibold tracking-wider uppercase mb-3">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>{t.schedule.eyebrow}</span>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[48px] text-[#241913] leading-tight font-normal">
            {t.schedule.title}
          </h2>

          <p className="mt-3 text-[14px] sm:text-[16px] text-[#514346] leading-relaxed font-sans">
            {t.schedule.subtext}
          </p>
        </div>

        {/* Heatmap Container */}
        <div className="bg-white rounded-[32px] p-4 sm:p-8 shadow-[0_16px_40px_-12px_rgba(81,67,59,0.08)] border border-[#ebd6cb]/70">
          {/* Week Selector & Heatmap Legend Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#ebd6cb]/50">
            {/* Week Navigation Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#fff8f5] p-1.5 rounded-2xl border border-[#ebd6cb]/60 w-full sm:w-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => setSelectedWeekIndex((prev) => Math.max(0, prev - 1))}
                disabled={selectedWeekIndex === 0}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-[#514346] hover:bg-white hover:text-[#794150] disabled:opacity-30 disabled:hover:bg-transparent transition-all shrink-0 cursor-pointer"
                aria-label="Previous week"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {weekLabels.map((label, idx) => {
                const isActive = selectedWeekIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSelectedWeekIndex(idx);
                      // Update active day to match new week's corresponding or first day
                      setSelectedDayKey(weeksData[idx][0].dateStr);
                    }}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-xl text-[12px] sm:text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#794150] text-white shadow-xs'
                        : 'text-[#514346] hover:bg-white/80'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setSelectedWeekIndex((prev) => Math.min(2, prev + 1))}
                disabled={selectedWeekIndex === 2}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-[#514346] hover:bg-white hover:text-[#794150] disabled:opacity-30 disabled:hover:bg-transparent transition-all shrink-0 cursor-pointer"
                aria-label="Next week"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Heatmap Legend */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-[12px] text-[#6b5c45] font-medium pt-1 md:pt-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4a7c59]" />
                <span>{t.schedule.legendFree}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c28434]" />
                <span>{t.schedule.legendModerate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#955868]" />
                <span>{t.schedule.legendBusy}</span>
              </div>
            </div>
          </div>

          {/* 7-Day Heatmap Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 mb-8">
            {currentWeekDays.map((day) => {
              const isSelected = activeDay.dateStr === day.dateStr;

              // Card styling depending on occupancy status
              let statusBadgeBg = 'bg-[#edf5ee] text-[#3d6945] border-[#c8e2cb]';
              let statusText = t.schedule.slotAvailable;
              let barColor = 'bg-[#4a7c59]';

              if (day.status === 'moderate') {
                statusBadgeBg = 'bg-[#fff6ea] text-[#9c6523] border-[#fde1be]';
                statusText = t.schedule.legendModerate.split(' ')[0] || 'Умеренно';
                barColor = 'bg-[#c28434]';
              } else if (day.status === 'busy') {
                statusBadgeBg = 'bg-[#fdf0f2] text-[#955868] border-[#f7d3d9]';
                statusText = t.schedule.legendBusy.split(' ')[0] || 'Плотная';
                barColor = 'bg-[#955868]';
              }

              return (
                <button
                  key={day.dateStr}
                  type="button"
                  onClick={() => handleDaySelect(day)}
                  className={`p-3 sm:p-4 rounded-2xl text-left transition-all relative border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#fff2ec] border-[#794150] ring-2 ring-[#794150]/20 shadow-sm transform -translate-y-0.5'
                      : 'bg-[#fff8f5] hover:bg-[#fff2ec] border-[#ebd6cb]/50 hover:border-[#ebd6cb]'
                  }`}
                >
                  {/* Day header */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] uppercase font-bold text-[#847376]">
                        {day.dayLabel}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#794150]" />
                      )}
                    </div>
                    <div className="text-[15px] sm:text-[16px] font-bold text-[#241913]">
                      {day.formattedDate}
                    </div>
                  </div>

                  {/* Occupancy Indicator */}
                  <div className="mt-3 pt-3 border-t border-[#ebd6cb]/40">
                    <div className="flex items-center justify-between text-[10.5px] text-[#514346] mb-1.5 font-medium">
                      <span>{t.schedule.occupancyLabel}</span>
                      <span className="font-bold">{day.occupancyPercent}%</span>
                    </div>

                    {/* Mini heat bar */}
                    <div className="w-full h-1.5 bg-[#ebd6cb]/40 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all ${barColor}`}
                        style={{ width: `${day.occupancyPercent}%` }}
                      />
                    </div>

                    {/* Status badge */}
                    <span
                      className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusBadgeBg} whitespace-nowrap`}
                    >
                      {statusText}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Time Slots Explorer for Selected Day */}
          <div className="bg-[#fff8f5] rounded-3xl p-4 sm:p-6 border border-[#ebd6cb]/60">
            {/* Explorer Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#ebd6cb]/60">
              <div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#794150]" />
                  <h3 className="text-[16px] sm:text-[18px] font-bold text-[#241913]">
                    {t.schedule.slotsFor} {activeDay.dayLabel}, {activeDay.formattedDate}
                  </h3>
                </div>
                <p className="text-[12px] text-[#514346] mt-0.5">
                  {freeSlotsCount} {t.schedule.availableSlots} • {t.schedule.selectDayPrompt}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onBookSlot(activeDay.dateStr, '14:00')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#794150] text-white text-[12.5px] font-bold hover:bg-[#955868] transition-all shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.schedule.bookThisDay}</span>
              </button>
            </div>

            {/* Slots Organized by Period */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {/* Morning Period */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#ebd6cb]/50 shadow-2xs">
                <div className="flex items-center gap-2 text-[#794150] mb-3">
                  <Sun className="w-4 h-4" />
                  <span className="text-[12px] font-bold uppercase tracking-wider">
                    {t.schedule.morning}
                  </span>
                </div>
                <div className="space-y-2">
                  {activeDay.slots
                    .filter((s) => s.period === 'morning')
                    .map((slot) => renderSlotItem(slot, activeDay.dateStr))}
                </div>
              </div>

              {/* Afternoon Period */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#ebd6cb]/50 shadow-2xs">
                <div className="flex items-center gap-2 text-[#794150] mb-3">
                  <Sunset className="w-4 h-4" />
                  <span className="text-[12px] font-bold uppercase tracking-wider">
                    {t.schedule.afternoon}
                  </span>
                </div>
                <div className="space-y-2">
                  {activeDay.slots
                    .filter((s) => s.period === 'afternoon')
                    .map((slot) => renderSlotItem(slot, activeDay.dateStr))}
                </div>
              </div>

              {/* Evening Period */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#ebd6cb]/50 shadow-2xs">
                <div className="flex items-center gap-2 text-[#794150] mb-3">
                  <Moon className="w-4 h-4" />
                  <span className="text-[12px] font-bold uppercase tracking-wider">
                    {t.schedule.evening}
                  </span>
                </div>
                <div className="space-y-2">
                  {activeDay.slots
                    .filter((s) => s.period === 'evening')
                    .map((slot) => renderSlotItem(slot, activeDay.dateStr))}
                </div>
              </div>
            </div>

            {/* Concierge Assistance Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#f1ddbf]/40 border border-[#ebd6cb]">
              <div className="flex items-start sm:items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#794150] shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-[12px] text-[#514346] leading-relaxed">
                  {t.schedule.conciergeWaitlist}
                </p>
              </div>

              <a
                href="https://wa.me/84901234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white text-[#794150] border border-[#ebd6cb] hover:bg-[#794150] hover:text-white text-[11.5px] font-bold transition-all shadow-2xs whitespace-nowrap shrink-0 self-start sm:self-auto"
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function renderSlotItem(slot: SlotInfo, dateStr: string) {
    if (slot.status === 'booked') {
      return (
        <div
          key={slot.time}
          className="flex items-center justify-between p-2.5 rounded-xl bg-[#f9f5f4] text-[#a4979a] border border-transparent select-none"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-[13px] font-semibold line-through">
              {slot.time}
            </span>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-wider">
            {t.schedule.slotBooked}
          </span>
        </div>
      );
    }

    const isFew = slot.status === 'few';

    return (
      <button
        key={slot.time}
        type="button"
        onClick={() => onBookSlot(dateStr, slot.time)}
        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border group cursor-pointer ${
          isFew
            ? 'bg-[#fff7ef] hover:bg-[#ffead4] border-[#fde1be] text-[#9c6523]'
            : 'bg-[#fff8f5] hover:bg-[#fff0e6] border-[#ebd6cb]/40 text-[#241913] hover:border-[#794150]/40'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-[13px] font-bold text-[#241913]">
            {slot.time}
          </span>
          {isFew && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fde1be] text-[#9c6523]">
              {t.schedule.slotFew}
            </span>
          )}
        </div>

        <span className="text-[11px] font-bold text-[#794150] group-hover:underline flex items-center gap-1">
          <span>{t.schedule.bookSelectedSlot}</span>
          <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </button>
    );
  }
};
