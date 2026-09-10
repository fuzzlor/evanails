import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { X, Sparkles, Calendar, Clock, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LiveBookingNotificationProps {
  currentLang: Language;
  onOpenBooking?: (serviceName?: string, date?: string, time?: string) => void;
}

interface BookingEvent {
  name: string;
  action: string;
  service: string;
  datetime: string;
  timeAgo: string;
  master: string;
}

const BOOKING_DATA: Record<Language, BookingEvent[]> = {
  ru: [
    {
      name: 'Виктория',
      action: 'записалась на',
      service: 'Японский эко-маникюр',
      datetime: 'Завтра в 14:30',
      timeAgo: 'только что',
      master: 'мастер Лин',
    },
    {
      name: 'Анна',
      action: 'записалась на',
      service: 'Smart-педикюр & Спа',
      datetime: 'Сегодня в 17:00',
      timeAgo: '2 мин назад',
      master: 'мастер Алена',
    },
    {
      name: 'Екатерина',
      action: 'записалась на',
      service: 'Архитектурное выравнивание гелем',
      datetime: 'Суббота в 11:30',
      timeAgo: 'только что',
      master: 'мастер Май',
    },
    {
      name: 'Дарья',
      action: 'записалась на',
      service: 'Глазированный хром (Glazed Donut)',
      datetime: 'Завтра в 16:00',
      timeAgo: '4 мин назад',
      master: 'мастер Лин',
    },
    {
      name: 'Мария',
      action: 'записалась на',
      service: 'Коллагеновый спа-уход для рук',
      datetime: 'Понедельник в 12:00',
      timeAgo: 'только что',
      master: 'мастер Хуен',
    },
    {
      name: 'Ксения',
      action: 'записалась на',
      service: 'Корейский 3D-дизайн со стразами',
      datetime: 'Сегодня в 19:00',
      timeAgo: '1 мин назад',
      master: 'мастер Май',
    },
    {
      name: 'Полина',
      action: 'записалась на',
      service: 'Японское глянцевание P.Shine',
      datetime: 'Воскресенье в 15:00',
      timeAgo: 'только что',
      master: 'мастер Алена',
    },
  ],
  en: [
    {
      name: 'Victoria',
      action: 'booked',
      service: 'Japanese Organic Gel Manicure',
      datetime: 'Tomorrow at 14:30',
      timeAgo: 'just now',
      master: 'artist Linh',
    },
    {
      name: 'Emma',
      action: 'booked',
      service: 'Smart Disk Pedicure & Spa',
      datetime: 'Today at 17:00',
      timeAgo: '2 mins ago',
      master: 'artist Alena',
    },
    {
      name: 'Sophia',
      action: 'booked',
      service: 'Architectural Soft Gel Overlay',
      datetime: 'Saturday at 11:30',
      timeAgo: 'just now',
      master: 'artist Mai',
    },
    {
      name: 'Chloe',
      action: 'booked',
      service: 'Glazed Donut Chrome Nails',
      datetime: 'Tomorrow at 16:00',
      timeAgo: '4 mins ago',
      master: 'artist Linh',
    },
    {
      name: 'Hannah',
      action: 'booked',
      service: 'Collagen Hand Spa Ritual',
      datetime: 'Monday at 12:00',
      timeAgo: 'just now',
      master: 'artist Huyen',
    },
    {
      name: 'Olivia',
      action: 'booked',
      service: 'Korean 3D Floral Nail Art',
      datetime: 'Today at 19:00',
      timeAgo: '1 min ago',
      master: 'artist Mai',
    },
    {
      name: 'Charlotte',
      action: 'booked',
      service: 'P.Shine Japanese Natural Buffing',
      datetime: 'Sunday at 15:00',
      timeAgo: 'just now',
      master: 'artist Alena',
    },
  ],
  vi: [
    {
      name: 'Minh Thư',
      action: 'vừa đặt lịch',
      service: 'Làm móng Gel Nhật Bản hữu cơ',
      datetime: 'Ngày mai lúc 14:30',
      timeAgo: 'vừa xong',
      master: 'chuyên viên Linh',
    },
    {
      name: 'Thảo My',
      action: 'vừa đặt lịch',
      service: 'Smart Pedicure & Spa thư giãn',
      datetime: 'Hôm nay lúc 17:00',
      timeAgo: '2 phút trước',
      master: 'chuyên viên Alena',
    },
    {
      name: 'Khánh Vy',
      action: 'vừa đặt lịch',
      service: 'Tạo form & Định hình Gel cao cấp',
      datetime: 'Thứ Bảy lúc 11:30',
      timeAgo: 'vừa xong',
      master: 'chuyên viên Mai',
    },
    {
      name: 'Bảo Trân',
      action: 'vừa đặt lịch',
      service: 'Móng tráng gương Glazed Donut',
      datetime: 'Ngày mai lúc 16:00',
      timeAgo: '4 phút trước',
      master: 'chuyên viên Linh',
    },
    {
      name: 'Ánh Dương',
      action: 'vừa đặt lịch',
      service: 'Spa phục hồi Collagen dưỡng tay',
      datetime: 'Thứ Hai lúc 12:00',
      timeAgo: 'vừa xong',
      master: 'chuyên viên Huyền',
    },
    {
      name: 'Linh Chi',
      action: 'vừa đặt lịch',
      service: 'Nghệ thuật đính đá 3D phong cách Hàn',
      datetime: 'Hôm nay lúc 19:00',
      timeAgo: '1 phút trước',
      master: 'chuyên viên Mai',
    },
    {
      name: 'Ngọc Hân',
      action: 'vừa đặt lịch',
      service: 'Chăm sóc bóng tự nhiên P.Shine Nhật',
      datetime: 'Chủ Nhật lúc 15:00',
      timeAgo: 'vừa xong',
      master: 'chuyên viên Alena',
    },
  ],
  ko: [
    {
      name: '지우 (Jiwoo)',
      action: '예약 완료:',
      service: '일본식 프리미엄 유기농 젤 매니큐어',
      datetime: '내일 14:30',
      timeAgo: '방금 전',
      master: '린 아티스트',
    },
    {
      name: '서연 (Seoyeon)',
      action: '예약 완료:',
      service: '스마트 메디컬 페디큐어 & 스파',
      datetime: '오늘 17:00',
      timeAgo: '2분 전',
      master: '알레나 아티스트',
    },
    {
      name: '민지 (Minji)',
      action: '예약 완료:',
      service: '소프트 컨투어 아키텍처 젤 오버레이',
      datetime: '토요일 11:30',
      timeAgo: '방금 전',
      master: '마이 아티스트',
    },
    {
      name: '수아 (Sua)',
      action: '예약 완료:',
      service: '글레이즈드 도넛 크롬 미러 네일',
      datetime: '내일 16:00',
      timeAgo: '4분 전',
      master: '린 아티스트',
    },
    {
      name: '유진 (Yujin)',
      action: '예약 완료:',
      service: '일본식 프리미엄 콜라겐 핸드 스파',
      datetime: '월요일 12:00',
      timeAgo: '방금 전',
      master: '후옌 아티스트',
    },
    {
      name: '하은 (Haeun)',
      action: '예약 완료:',
      service: '트렌디 3D 플로럴 엠보 네일 아트',
      datetime: '오늘 19:00',
      timeAgo: '1분 전',
      master: '마이 아티스트',
    },
    {
      name: '채원 (Chaewon)',
      action: '예약 완료:',
      service: 'P.Shine 일본식 네추럴 샤이닝 케어',
      datetime: '일요일 15:00',
      timeAgo: '방금 전',
      master: '알레나 아티스트',
    },
  ],
};

const UI_TEXT = {
  ru: {
    verified: 'Подтвержденная запись',
    bookSame: 'Записаться тоже',
  },
  en: {
    verified: 'Confirmed booking',
    bookSame: 'Book similar',
  },
  vi: {
    verified: 'Lịch hẹn đã xác nhận',
    bookSame: 'Đặt dịch vụ này',
  },
  ko: {
    verified: '예약 확정',
    bookSame: '동일 시술 예약',
  },
};

export const LiveBookingNotification: React.FC<LiveBookingNotificationProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [currentEvent, setCurrentEvent] = useState<BookingEvent | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndexRef = useRef(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize and unlock audio context on first user click/touch
  useEffect(() => {
    const unlockAudio = () => {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioContextRef.current && AudioContextClass) {
          audioContextRef.current = new AudioContextClass();
        }
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
      } catch {
        // Safe fallback
      }
    };

    window.addEventListener('pointerdown', unlockAudio, { once: true });
    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
    };
  }, []);

  // Gentle acoustic spa chime synthesis via Web Audio API
  const playAcousticChime = () => {
    if (isMuted) return;
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current && AudioContextClass) {
        audioContextRef.current = new AudioContextClass();
      }
      const ctx = audioContextRef.current;
      if (!ctx) return;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Note 1: Soft warm E5 chime (659 Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.0001, now);
      gain1.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.36);

      // Note 2: Crystal A5 bell (880 Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880.0, now + 0.1);
      gain2.gain.setValueAtTime(0.0001, now + 0.1);
      gain2.gain.exponentialRampToValueAtTime(0.09, now + 0.13);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.1);
      osc2.stop(now + 0.61);

      // Note 3: Subtle shimmer E6 harmonic (1318 Hz)
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(1318.51, now + 0.2);
      gain3.gain.setValueAtTime(0.0001, now + 0.2);
      gain3.gain.exponentialRampToValueAtTime(0.035, now + 0.23);
      gain3.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
      osc3.connect(gain3);
      gain3.connect(ctx.destination);
      osc3.start(now + 0.2);
      osc3.stop(now + 0.71);
    } catch {
      // Browsers may restrict audio until interaction, ignore safely
    }
  };

  const triggerNextNotification = () => {
    const list = BOOKING_DATA[currentLang] || BOOKING_DATA.ru;
    const nextIndex = (currentIndexRef.current + 1) % list.length;
    currentIndexRef.current = nextIndex;
    const event = list[nextIndex];

    setCurrentEvent(event);
    playAcousticChime();

    // Auto-dismiss after 5.5 seconds unless hovered/interacted
    if (dismissTimerRef.current) {
      clearTimeout(dismissTimerRef.current);
    }
    dismissTimerRef.current = setTimeout(() => {
      setCurrentEvent(null);
    }, 5500);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dismissTimerRef.current) {
      clearTimeout(dismissTimerRef.current);
    }
    setCurrentEvent(null);
  };

  const handleToggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const handleClickCard = () => {
    if (currentEvent && onOpenBooking) {
      onOpenBooking(currentEvent.service);
      setCurrentEvent(null);
    }
  };

  // Setup loop: initial display after 5 seconds, then randomly every ~15 seconds (13-17s)
  useEffect(() => {
    // Initial popup
    const initialTimer = setTimeout(() => {
      triggerNextNotification();
    }, 5000);

    // Loop interval
    const interval = setInterval(() => {
      if (!isPaused) {
        // Add random variance between 13s and 17s
        const jitter = Math.floor(Math.random() * 4000) - 2000;
        setTimeout(() => {
          triggerNextNotification();
        }, Math.max(0, jitter));
      }
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current);
      }
    };
  }, [currentLang, isPaused, isMuted]);

  const ui = UI_TEXT[currentLang] || UI_TEXT.ru;

  return (
    <div
      id="live-booking-toast-container"
      className="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-40 pointer-events-none select-none"
    >
      <AnimatePresence>
        {currentEvent && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={handleClickCard}
            className="pointer-events-auto relative flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 pr-8 sm:pr-9 rounded-2xl bg-[#fff8f5]/95 backdrop-blur-md border border-[#ebd6cb] shadow-[0_12px_32px_-6px_rgba(81,67,59,0.18),0_3px_12px_-2px_rgba(81,67,59,0.08)] max-w-[calc(100vw-88px)] sm:max-w-[340px] md:max-w-[360px] cursor-pointer hover:border-[#955868]/50 transition-all duration-200 group overflow-hidden"
          >
            {/* Ambient subtle progress indicator for remaining display time */}
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#f1ddbf]/40 overflow-hidden">
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5.5, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#955868] to-[#c99b7b]"
              />
            </div>

            {/* Avatar / Service Icon */}
            <div className="relative shrink-0 mt-0.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#f6e9e3] to-[#edd3c6] border border-[#ebd6cb] flex items-center justify-center text-[#794150] shadow-2xs font-serif font-bold text-[13px] sm:text-[14px]">
                {currentEvent.name.charAt(0)}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#2e7d32] border-2 border-white flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-2.5 h-2.5 text-white" />
              </span>
            </div>

            {/* Notification Text Info */}
            <div className="flex-1 min-w-0 pr-1">
              {/* Top Tag & Time ago */}
              <div className="flex items-center justify-between gap-1.5 mb-0.5">
                <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#794150] bg-[#794150]/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  <Sparkles className="w-2.5 h-2.5 shrink-0 text-[#794150]" />
                  {ui.verified}
                </span>
                <span className="text-[9.5px] sm:text-[10.5px] text-[#847376] font-medium whitespace-nowrap">
                  {currentEvent.timeAgo}
                </span>
              </div>

              {/* Client Name & Action */}
              <p className="text-[12px] sm:text-[13px] text-[#241913] leading-snug font-medium line-clamp-2">
                <span className="font-bold text-[#241913]">{currentEvent.name}</span>{' '}
                <span className="text-[#514346]">{currentEvent.action}</span>{' '}
                <span className="font-semibold text-[#794150] group-hover:underline underline-offset-2">
                  {currentEvent.service}
                </span>
              </p>

              {/* Scheduled Date & Time */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-[10px] sm:text-[11px] text-[#514346]">
                <span className="inline-flex items-center gap-1 text-[#3d2b24] font-medium">
                  <Calendar className="w-3 h-3 text-[#955868] shrink-0" />
                  {currentEvent.datetime}
                </span>
                <span className="text-[#a09093] hidden sm:inline">•</span>
                <span className="text-[9.5px] sm:text-[10.5px] text-[#847376] italic">
                  {currentEvent.master}
                </span>
              </div>
            </div>

            {/* Action buttons: Sound Mute Toggle & Close Cross */}
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <button
                type="button"
                onClick={handleToggleSound}
                title={isMuted ? 'Включить звук' : 'Выключить звук'}
                className="w-5 h-5 rounded-full text-[#847376] hover:text-[#794150] hover:bg-[#ebd6cb]/50 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Toggle notification sound"
              >
                {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              </button>
              <button
                type="button"
                onClick={handleClose}
                title="Закрыть"
                className="w-5 h-5 rounded-full text-[#847376] hover:text-[#241913] hover:bg-[#ebd6cb]/50 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close notification"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
