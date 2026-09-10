import React, { useState, useEffect, useRef } from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { Language } from '../types';
import {
  MessageCircle,
  Phone,
  Calendar,
  Clock,
  Send,
  X,
  Sparkles,
  ChevronRight,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface FloatingConciergeProps {
  currentLang: Language;
  onOpenBooking: (serviceName?: string, date?: string, time?: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  showActions?: boolean;
  showSlotPicker?: boolean;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [selectedDateOffset, setSelectedDateOffset] = useState<number>(0);
  const [selectedSlotTime, setSelectedSlotTime] = useState<string>('14:00');
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Localized texts
  const t = {
    ru: {
      buttonTitle: 'Чат & Запись',
      onlineStatus: 'Онлайн • Отвечаем за 1-2 мин',
      conciergeTitle: 'EVA Studio Concierge',
      welcomeMsg:
        'Здравствуйте! Рады приветствовать вас в EVA Nail Studio ✨ Чем мы можем вам помочь прямо сейчас? Выберите удобный вариант:',
      whatsappBtn: 'Написать в WhatsApp',
      whatsappSub: 'Быстрый ответ мастера, оценка фото дизайна',
      callBtn: 'Позвонить по телефону',
      callSub: 'Ежедневно с 09:00 до 20:00',
      slotBtn: 'Выбрать слот для записи',
      slotSub: 'Свободные окошки на сегодня и завтра',
      today: 'Сегодня',
      tomorrow: 'Завтра',
      afterTomorrow: 'Послезавтра',
      selectSlotPrompt: 'Выберите удобную дату и время:',
      confirmSlot: 'Записаться на этот слот',
      orOpenFullBooking: 'Открыть полную форму записи',
      inputPlaceholder: 'Напишите ваш вопрос...',
      faqTitle: 'Быстрые вопросы:',
      faqPrice: 'Цены на маникюр',
      faqAddress: 'Где вы находитесь?',
      faqHours: 'Часы работы',
      faqReplyPrice:
        'Стоимость классического аппаратного маникюра от 250 000 ₫, покрытие гель-лаком от 380 000 ₫. Хотите забронировать время?',
      faqReplyAddress: `Мы находимся по адресу: ${STUDIO_INFO.address}. В 5 минутах от пляжа!`,
      faqReplyHours: `Мы открыты ежедневно с ${STUDIO_INFO.hours}. Ждем вас!`,
      userDefaultReply:
        'Спасибо за сообщение! Наш администратор также на связи в WhatsApp для быстрых консультаций. Вы можете забронировать визит ниже:',
    },
    en: {
      buttonTitle: 'Chat & Booking',
      onlineStatus: 'Online • Fast reply (1-2 min)',
      conciergeTitle: 'EVA Studio Concierge',
      welcomeMsg:
        'Hello! Welcome to EVA Nail Studio ✨ How may we assist you today? Please choose an option below or ask a question:',
      whatsappBtn: 'Chat on WhatsApp',
      whatsappSub: 'Instant reply, send photo references',
      callBtn: 'Call studio directly',
      callSub: 'Daily 09:00 – 20:00',
      slotBtn: 'Pick a booking slot',
      slotSub: 'Available times for today & tomorrow',
      today: 'Today',
      tomorrow: 'Tomorrow',
      afterTomorrow: 'In 2 days',
      selectSlotPrompt: 'Choose date & time slot:',
      confirmSlot: 'Book this slot',
      orOpenFullBooking: 'Open complete booking form',
      inputPlaceholder: 'Ask a question...',
      faqTitle: 'Quick topics:',
      faqPrice: 'Manicure prices',
      faqAddress: 'Where are you located?',
      faqHours: 'Opening hours',
      faqReplyPrice:
        'Classic hardware manicure starts from 250,000 ₫, gel polish from 380,000 ₫. Would you like to pick a time?',
      faqReplyAddress: `We are located at: ${STUDIO_INFO.address}. Just 5 min from Nha Trang beach!`,
      faqReplyHours: `We are open daily from ${STUDIO_INFO.hours}. Welcome!`,
      userDefaultReply:
        'Thank you! Our concierge is also live on WhatsApp for immediate custom design estimates. Feel free to book a slot below:',
    },
    vi: {
      buttonTitle: 'Chat & Đặt lịch',
      onlineStatus: 'Trực tuyến • Trả lời sau 1-2 phút',
      conciergeTitle: 'EVA Studio Concierge',
      welcomeMsg:
        'Xin chào! Chào mừng bạn đến với EVA Nail Studio ✨ Chúng tôi có thể hỗ trợ gì cho bạn? Hãy chọn phương thức bên dưới:',
      whatsappBtn: 'Nhắn qua WhatsApp',
      whatsappSub: 'Tư vấn nhanh, gửi ảnh mẫu móng',
      callBtn: 'Gọi điện thoại trực tiếp',
      callSub: 'Mỗi ngày từ 09:00 đến 20:00',
      slotBtn: 'Chọn khung giờ đặt hẹn',
      slotSub: 'Còn lịch trống hôm nay và ngày mai',
      today: 'Hôm nay',
      tomorrow: 'Ngày mai',
      afterTomorrow: 'Ngày kia',
      selectSlotPrompt: 'Chọn ngày và giờ phù hợp:',
      confirmSlot: 'Đặt lịch khung giờ này',
      orOpenFullBooking: 'Mở biểu mẫu đặt lịch đầy đủ',
      inputPlaceholder: 'Nhập câu hỏi của bạn...',
      faqTitle: 'Câu hỏi nhanh:',
      faqPrice: 'Bảng giá làm móng',
      faqAddress: 'Địa chỉ salon ở đâu?',
      faqHours: 'Giờ mở cửa',
      faqReplyPrice:
        'Làm móng chuẩn từ 250.000 ₫, sơn gel từ 380.000 ₫. Bạn có muốn đặt lịch hẹn ngay?',
      faqReplyAddress: `Địa chỉ: ${STUDIO_INFO.address}. Cách biển Nha Trang 5 phút!`,
      faqReplyHours: `Chúng tôi mở cửa hàng ngày từ ${STUDIO_INFO.hours}. Rất hân hạnh phục vụ!`,
      userDefaultReply:
        'Cảm ơn bạn! Quản lý luôn trực tuyến qua WhatsApp để tư vấn chi tiết và gửi mẫu móng mới nhất.',
    },
    ko: {
      buttonTitle: '채팅 & 예약',
      onlineStatus: '온라인 • 1-2분 내 빠른 응답',
      conciergeTitle: 'EVA Studio Concierge',
      welcomeMsg:
        '안녕하세요! EVA Nail Studio에 오신 것을 환영합니다 ✨ 무엇을 도와드릴까요? 아래에서 편하신 방법을 선택해 주세요:',
      whatsappBtn: 'WhatsApp으로 문의하기',
      whatsappSub: '빠른 상담, 디자인 사진 전송',
      callBtn: '전화로 바로 연결',
      callSub: '매일 09:00 – 20:00',
      slotBtn: '예약 시간대 선택하기',
      slotSub: '오늘 및 내일 가능한 시간',
      today: '오늘',
      tomorrow: '내일',
      afterTomorrow: '모레',
      selectSlotPrompt: '날짜 및 시간을 선택해 주세요:',
      confirmSlot: '이 시간으로 예약하기',
      orOpenFullBooking: '전체 예약 폼 열기',
      inputPlaceholder: '문의 사항을 입력하세요...',
      faqTitle: '자주 묻는 질문:',
      faqPrice: '네일 시술 가격',
      faqAddress: '스튜디오 위치',
      faqHours: '영업 시간',
      faqReplyPrice:
        '클래식 케어 250,000 ₫부터, 젤 네일 380,000 ₫부터입니다. 예약 시간을 선택하시겠습니까?',
      faqReplyAddress: `주소: ${STUDIO_INFO.address} (나트랑 해변 도보 5분 거리)`,
      faqReplyHours: `영업 시간: 매일 ${STUDIO_INFO.hours} 운영합니다.`,
      userDefaultReply:
        '메시지 감사합니다! 전담 매니저가 WhatsApp으로도 상세한 상담을 제공합니다. 아래에서 바로 예약하실 수도 있습니다:',
    },
  }[currentLang] || {
    buttonTitle: 'Chat & Booking',
    onlineStatus: 'Online • Fast reply',
    conciergeTitle: 'EVA Studio Concierge',
    welcomeMsg: 'Hello! Welcome to EVA Nail Studio ✨ How may we assist you today?',
    whatsappBtn: 'Chat on WhatsApp',
    whatsappSub: 'Instant reply, send photo references',
    callBtn: 'Call studio directly',
    callSub: 'Daily 09:00 – 20:00',
    slotBtn: 'Pick a booking slot',
    slotSub: 'Available times for today & tomorrow',
    today: 'Today',
    tomorrow: 'Tomorrow',
    afterTomorrow: 'In 2 days',
    selectSlotPrompt: 'Choose date & time slot:',
    confirmSlot: 'Book this slot',
    orOpenFullBooking: 'Open complete booking form',
    inputPlaceholder: 'Ask a question...',
    faqTitle: 'Quick topics:',
    faqPrice: 'Prices',
    faqAddress: 'Location',
    faqHours: 'Hours',
    faqReplyPrice: 'Classic manicure starts from 250,000 ₫, gel polish from 380,000 ₫.',
    faqReplyAddress: `Address: ${STUDIO_INFO.address}`,
    faqReplyHours: `Hours: ${STUDIO_INFO.hours}`,
    userDefaultReply: 'Thank you! Our concierge is available on WhatsApp or you can book below.',
  };

  // Chat message state
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: t.welcomeMsg,
      time: 'Just now',
      showActions: true,
      showSlotPicker: false,
    },
  ]);

  const [showInChatSlotPicker, setShowInChatSlotPicker] = useState(false);

  // Update initial message when language changes
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome-1') {
        return [
          {
            id: 'welcome-1',
            sender: 'bot',
            text: t.welcomeMsg,
            time: 'Just now',
            showActions: true,
            showSlotPicker: false,
          },
        ];
      }
      return prev;
    });
  }, [currentLang, t.welcomeMsg]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, showInChatSlotPicker]);

  // Handle open/close
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  // Helper to compute date string YYYY-MM-DD from offset
  const getDateString = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
  };

  // Formatted date label
  const getDateLabel = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const day = d.getDate();
    const month = d.toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : 'en-US', {
      month: 'short',
    });
    return `${day} ${month}`;
  };

  const availableSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

  const handleSlotConfirm = (time?: string) => {
    const timeToUse = time || selectedSlotTime;
    const dateToUse = getDateString(selectedDateOffset);
    onOpenBooking(undefined, dateToUse, timeToUse);
    setIsOpen(false);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Simulated intelligent bot reply
    setTimeout(() => {
      let botResponse = t.userDefaultReply;
      const lower = text.toLowerCase();

      if (
        lower.includes('цен') ||
        lower.includes('стоим') ||
        lower.includes('price') ||
        lower.includes('giá') ||
        lower.includes('가격')
      ) {
        botResponse = t.faqReplyPrice;
      } else if (
        lower.includes('где') ||
        lower.includes('адрес') ||
        lower.includes('address') ||
        lower.includes('địa chỉ') ||
        lower.includes('위치')
      ) {
        botResponse = t.faqReplyAddress;
      } else if (
        lower.includes('час') ||
        lower.includes('когда') ||
        lower.includes('hours') ||
        lower.includes('mở cửa') ||
        lower.includes('영업')
      ) {
        botResponse = t.faqReplyHours;
      } else if (
        lower.includes('запис') ||
        lower.includes('слот') ||
        lower.includes('book') ||
        lower.includes('đặt') ||
        lower.includes('예약')
      ) {
        setShowInChatSlotPicker(true);
        botResponse = t.selectSlotPrompt;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          showActions: true,
        },
      ]);
    }, 450);
  };

  return (
    <>
      {/* Floating Widget Trigger Button in Bottom-Right Corner */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={toggleChat}
          aria-label="EVA Online Concierge Chat"
          className="group relative flex items-center gap-2.5 pl-3.5 pr-4 sm:pl-4 sm:pr-5 py-3 rounded-full bg-white text-[#241913] shadow-[0_12px_36px_-8px_rgba(81,67,59,0.22),0_4px_16px_-2px_rgba(81,67,59,0.12)] hover:bg-[#955868] hover:text-white transition-all duration-300 border border-[#ebd6cb] cursor-pointer active:scale-95"
        >
          {/* Logo or Icon */}
          <div className="w-8 h-8 rounded-full bg-[#fcf9f5] group-hover:bg-white/20 flex items-center justify-center text-[#955868] group-hover:text-white transition-colors shrink-0 shadow-xs">
            {isOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <MessageCircle className="w-4 h-4 text-[#955868] group-hover:text-white" />
            )}
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[13px] sm:text-[13.5px] font-bold tracking-wide leading-tight">
              {isOpen ? 'Закрыть' : t.buttonTitle}
            </span>
            <span className="text-[10px] text-[#847376] group-hover:text-white/80 font-medium">
              EVA Studio
            </span>
          </div>

          {/* Pulse Online Indicator */}
          <span className="relative flex h-2.5 w-2.5 ml-0.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34a853] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2e7d32]"></span>
          </span>

          {/* Unread badge badge if unopened */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#955868] text-white text-[10px] font-bold ring-2 ring-white shadow-xs">
              1
            </span>
          )}
        </button>
      </div>

      {/* Online Chat Window Popup */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Online Chat Window"
          className="fixed bottom-20 right-4 sm:bottom-22 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] max-h-[82vh] sm:max-h-[600px] flex flex-col bg-[#fffcf9] rounded-3xl shadow-[0_24px_60px_rgba(81,67,59,0.28)] border border-[#ecd9cf] overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-[#955868] text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-xs border border-white/30 shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#4caf50] ring-2 ring-[#955868]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] font-bold tracking-tight leading-snug">
                  {t.conciergeTitle}
                </h3>
                <span className="text-[11px] text-[#f7e3e9] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]"></span>
                  {t.onlineStatus}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-[#241913] bg-[#fcf9f5]/80">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#955868] text-white rounded-tr-xs'
                      : 'bg-white text-[#241913] border border-[#ebd6cb] rounded-tl-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-[#a09093] mt-1 px-1">{msg.time}</span>

                {/* If bot message offers the 3 main actions */}
                {msg.sender === 'bot' && msg.showActions && (
                  <div className="mt-3 w-full space-y-2.5">
                    {/* 1. WhatsApp Button */}
                    <a
                      href={STUDIO_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] transition-all shadow-2xs cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[13px] font-bold text-[#1f2937] group-hover:text-[#128C7E]">
                            {t.whatsappBtn}
                          </span>
                          <span className="text-[11px] text-[#6b7280]">
                            {STUDIO_INFO.phone} • {t.whatsappSub}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#9ca3af] group-hover:text-[#128C7E] shrink-0" />
                    </a>

                    {/* 2. Call Phone Button */}
                    <a
                      href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
                      className="group flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#955868]/10 border border-[#ebd6cb] hover:border-[#955868] transition-all shadow-2xs cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#955868] text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[13px] font-bold text-[#241913] group-hover:text-[#955868]">
                            {t.callBtn}
                          </span>
                          <span className="text-[11px] text-[#6b7280]">
                            {STUDIO_INFO.phone} • {t.callSub}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#955868] shrink-0" />
                    </a>

                    {/* 3. Slot Booking Selection Button */}
                    <div className="p-3 rounded-2xl bg-[#fff8f5] border border-[#f0ded5] shadow-2xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#fae4d9] text-[#794150] flex items-center justify-center shrink-0">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[13px] font-bold text-[#241913] block leading-tight">
                              {t.slotBtn}
                            </span>
                            <span className="text-[11px] text-[#847376]">{t.slotSub}</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Slot Selector directly inside the chat */}
                      <div className="mt-2.5 pt-2.5 border-t border-[#ebd6cb]">
                        <span className="text-[11px] font-semibold text-[#847376] uppercase tracking-wider block mb-2">
                          {t.selectSlotPrompt}
                        </span>

                        {/* Date selection pill buttons */}
                        <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                          {[
                            { offset: 0, label: t.today },
                            { offset: 1, label: t.tomorrow },
                            { offset: 2, label: t.afterTomorrow },
                          ].map((item) => (
                            <button
                              key={item.offset}
                              type="button"
                              onClick={() => setSelectedDateOffset(item.offset)}
                              className={`py-1.5 px-2 rounded-xl text-center text-[11px] font-bold transition-all cursor-pointer ${
                                selectedDateOffset === item.offset
                                  ? 'bg-[#955868] text-white shadow-xs'
                                  : 'bg-white text-[#241913] hover:bg-[#fae4d9] border border-[#ebd6cb]'
                              }`}
                            >
                              <div>{item.label}</div>
                              <div
                                className={`text-[9.5px] font-medium ${
                                  selectedDateOffset === item.offset
                                    ? 'text-white/85'
                                    : 'text-[#847376]'
                                }`}
                              >
                                {getDateLabel(item.offset)}
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Time slots grid */}
                        <div className="grid grid-cols-4 gap-1.5 mb-3">
                          {availableSlots.slice(0, 4).map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => {
                                setSelectedSlotTime(time);
                                handleSlotConfirm(time);
                              }}
                              className={`py-1.5 px-1 rounded-lg text-[12px] font-bold text-center transition-all cursor-pointer ${
                                selectedSlotTime === time
                                  ? 'bg-[#794150] text-white shadow-xs'
                                  : 'bg-white hover:bg-[#fae4d9] text-[#241913] border border-[#ebd6cb]'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        {/* Action buttons to confirm or open full modal */}
                        <div className="flex flex-col gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleSlotConfirm()}
                            className="w-full py-2.5 rounded-xl bg-[#955868] hover:bg-[#794150] text-white text-[12.5px] font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>
                              {t.confirmSlot} ({getDateLabel(selectedDateOffset)}, {selectedSlotTime})
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              onOpenBooking();
                              setIsOpen(false);
                            }}
                            className="text-[11.5px] text-[#955868] hover:underline font-semibold text-center py-1 cursor-pointer"
                          >
                            {t.orOpenFullBooking} →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* In-chat slot picker if triggered by chat message */}
            {showInChatSlotPicker && (
              <div className="p-3 rounded-2xl bg-white border border-[#ebd6cb] shadow-xs">
                <span className="text-[12px] font-bold text-[#241913] block mb-2">
                  {t.selectSlotPrompt}
                </span>
                <div className="grid grid-cols-3 gap-1.5 mb-2">
                  {[0, 1, 2].map((offset) => (
                    <button
                      key={offset}
                      type="button"
                      onClick={() => setSelectedDateOffset(offset)}
                      className={`py-1.5 px-2 rounded-xl text-center text-[11px] font-bold ${
                        selectedDateOffset === offset
                          ? 'bg-[#955868] text-white'
                          : 'bg-[#fcf9f5] border border-[#ebd6cb] text-[#241913]'
                      }`}
                    >
                      {getDateLabel(offset)}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                  {availableSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleSlotConfirm(time)}
                      className="py-1.5 px-1 rounded-lg bg-[#fae4d9] hover:bg-[#955868] hover:text-white text-[#241913] text-[11px] font-bold transition-colors cursor-pointer"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick FAQ chips */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#847376] uppercase tracking-wider block mb-1.5">
                {t.faqTitle}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => handleSendMessage(t.faqPrice)}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-[#fae4d9] text-[#241913] text-[11.5px] font-medium border border-[#ebd6cb] transition-colors cursor-pointer"
                >
                  💅 {t.faqPrice}
                </button>
                <button
                  type="button"
                  onClick={() => handleSendMessage(t.faqAddress)}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-[#fae4d9] text-[#241913] text-[11.5px] font-medium border border-[#ebd6cb] transition-colors cursor-pointer"
                >
                  📍 {t.faqAddress}
                </button>
                <button
                  type="button"
                  onClick={() => handleSendMessage(t.faqHours)}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-[#fae4d9] text-[#241913] text-[11.5px] font-medium border border-[#ebd6cb] transition-colors cursor-pointer"
                >
                  ⏰ {t.faqHours}
                </button>
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#ebd6cb] flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.inputPlaceholder}
              className="flex-1 px-3.5 py-2 text-[13px] rounded-full bg-[#fcf9f5] border border-[#ecd9cf] focus:outline-none focus:border-[#955868] text-[#241913] placeholder-[#a09093]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-full bg-[#955868] hover:bg-[#794150] disabled:opacity-40 disabled:hover:bg-[#955868] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-xs"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
