import React from 'react';
import { Language, BookingRecord } from '../types';
import { translations } from '../data/translations';
import { X, Calendar, Clock, User, Trash2, CalendarPlus, MessageSquare, BookmarkCheck } from 'lucide-react';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  bookings: BookingRecord[];
  onCancelBooking: (id: string) => void;
  onNewBookingClick: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  bookings,
  onCancelBooking,
  onNewBookingClick,
}) => {
  const t = translations[currentLang];

  if (!isOpen) return null;

  const getCalendarLink = (b: BookingRecord) => {
    const startStr = `${b.date.replace(/-/g, '')}T${b.time.replace(':', '')}00`;
    const title = encodeURIComponent(`Appointment: EVA Nail Studio (${b.serviceName})`);
    const details = encodeURIComponent(
      `EVA Nail Studio reservation #${b.id}\nSpecialist: ${b.masterName}\nContact: ${b.contact}\nAddress: 18B Nguyen Thien Thuat, Nha Trang`
    );
    const location = encodeURIComponent('18B Nguyen Thien Thuat, Tan Lap, Nha Trang, Vietnam');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${startStr}&details=${details}&location=${location}`;
  };

  const getWhatsAppShareLink = (b: BookingRecord) => {
    const message = encodeURIComponent(
      `Hello EVA Nail Studio! Checking status of my appointment:
• Reference: #${b.id}
• Name: ${b.clientName}
• Service: ${b.serviceName}
• Date & Time: ${b.date} at ${b.time}`
    );
    return `https://wa.me/84901234567?text=${message}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-[36px] p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-[#ebd6cb]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#fff1ea] flex items-center justify-center text-[#514346] hover:text-[#794150] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#794150]">
          <BookmarkCheck className="w-5 h-5" />
          <span className="text-[12px] uppercase font-bold tracking-widest text-[#6b5c45]">
            {t.nav.myBookings}
          </span>
        </div>

        <h3 className="font-serif text-[28px] text-[#241913] mb-6 font-normal">
          {t.nav.myBookings}
        </h3>

        {bookings.length === 0 ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[#fff1ea] text-[#794150] flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7" />
            </div>
            <p className="text-[14px] text-[#514346] mb-6">
              {t.booking.noBookings}
            </p>
            <button
              onClick={() => {
                onClose();
                onNewBookingClick();
              }}
              className="px-6 py-3 rounded-full bg-[#955868] text-white text-[13px] font-bold hover:bg-[#794150] transition-all shadow-sm"
            >
              {t.hero.bookAppointment}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-[#fff8f5] rounded-3xl p-5 border border-[#ebd6cb] shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold bg-[#f1ddbf] text-[#6f6149] px-2.5 py-0.5 rounded-full">
                      #{b.id}
                    </span>
                    <span className="text-[11px] font-bold uppercase text-[#50543d] bg-[#e1e5c7] px-2.5 py-0.5 rounded-full">
                      {b.status}
                    </span>
                  </div>

                  <h4 className="text-[16px] font-bold text-[#241913]">
                    {b.serviceName}
                  </h4>

                  <div className="grid grid-cols-2 gap-2 mt-3 text-[12px] text-[#514346]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#794150]" />
                      <span>{b.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#794150]" />
                      <span>{b.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <User className="w-3.5 h-3.5 text-[#794150]" />
                      <span>{b.masterName}</span>
                    </div>
                  </div>

                  {b.specialNotes && (
                    <p className="text-[12px] text-[#847376] mt-2 italic bg-white p-2 rounded-xl">
                      “{b.specialNotes}”
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-[#ebd6cb]/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={getWhatsAppShareLink(b)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white text-[#794150] border border-[#ebd6cb] hover:bg-[#fff1ea] transition-all"
                      title={t.booking.copyWhatsApp}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>

                    <a
                      href={getCalendarLink(b)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white text-[#794150] border border-[#ebd6cb] hover:bg-[#fff1ea] transition-all"
                      title={t.booking.addToCalendar}
                    >
                      <CalendarPlus className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => onCancelBooking(b.id)}
                    className="flex items-center gap-1.5 text-[12px] text-[#ba1a1a] hover:text-[#93000a] font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{t.booking.cancelBooking}</span>
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => {
                onClose();
                onNewBookingClick();
              }}
              className="w-full py-3 rounded-full bg-[#955868] text-white text-[13px] font-bold hover:bg-[#794150] transition-all shadow-sm mt-4"
            >
              + {t.hero.bookAppointment}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
