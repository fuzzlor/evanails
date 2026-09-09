import React, { useState, useEffect } from 'react';
import { Language, BookingRecord } from '../types';
import { translations } from '../data/translations';
import { SERVICES, MASTERS, STUDIO_INFO } from '../data/mockData';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  Share2,
  CalendarPlus,
  MessageSquare,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialServiceName?: string;
  initialDate?: string;
  initialTime?: string;
  onBookingSuccess: (booking: BookingRecord) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialServiceName,
  initialDate,
  initialTime,
  onBookingSuccess,
}) => {
  const t = translations[currentLang];

  const [clientName, setClientName] = useState('');
  const [contact, setContact] = useState('');
  const [selectedService, setSelectedService] = useState(
    initialServiceName || SERVICES[0].titleKey
  );
  const [selectedMaster, setSelectedMaster] = useState('any');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('14:00');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  useEffect(() => {
    if (initialServiceName) {
      setSelectedService(initialServiceName);
    }
  }, [initialServiceName]);

  useEffect(() => {
    if (initialDate) {
      setBookingDate(initialDate);
    }
  }, [initialDate]);

  useEffect(() => {
    if (initialTime) {
      setBookingTime(initialTime);
    }
  }, [initialTime]);

  useEffect(() => {
    if (!bookingDate) {
      const today = new Date().toISOString().split('T')[0];
      setBookingDate(today);
    }
  }, [bookingDate]);

  if (!isOpen) return null;

  const timeSlots = [
    { time: '09:00', period: 'Morning' },
    { time: '10:30', period: 'Morning' },
    { time: '12:00', period: 'Noon' },
    { time: '14:00', period: 'Afternoon' },
    { time: '15:30', period: 'Afternoon' },
    { time: '17:00', period: 'Evening' },
    { time: '18:30', period: 'Evening' },
  ];

  const selectedServiceObj = SERVICES.find(
    (s) => s.titleKey === selectedService || selectedService.includes(s.titleKey)
  ) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const masterObj = MASTERS.find((m) => m.id === selectedMaster);
    const bookingCode = `EVA-${Math.floor(10000 + Math.random() * 90000)}`;

    const newBooking: BookingRecord = {
      id: bookingCode,
      clientName: clientName.trim(),
      contact: contact.trim(),
      serviceId: selectedServiceObj.id,
      serviceName: selectedService,
      date: bookingDate,
      time: bookingTime,
      specialNotes: specialNotes.trim(),
      masterId: selectedMaster,
      masterName: masterObj ? masterObj.name : 'EVA Specialist',
      totalVnd: selectedServiceObj.priceVnd,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking(newBooking);
      onBookingSuccess(newBooking);
    }, 600);
  };

  const handleResetAndClose = () => {
    setConfirmedBooking(null);
    onClose();
  };

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
      `Hello EVA Nail Studio! I have booked an appointment:
• Reference: #${b.id}
• Name: ${b.clientName}
• Service: ${b.serviceName}
• Date & Time: ${b.date} at ${b.time}
• Artist: ${b.masterName}
${b.specialNotes ? `• Notes: ${b.specialNotes}` : ''}`
    );
    return `https://wa.me/84901234567?text=${message}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-[36px] p-6 sm:p-8 shadow-[0_24px_64px_-12px_rgba(81,67,59,0.25)] relative max-h-[92vh] overflow-y-auto border border-[#ebd6cb]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#fff1ea] flex items-center justify-center text-[#514346] hover:text-[#794150] hover:bg-[#fae4d9] transition-colors"
          aria-label={t.booking.close}
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBooking ? (
          /* Confirmation Pass Screen */
          <div className="text-center py-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#e1e5c7] text-[#50543d] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#50543d]" />
            </div>

            <span className="text-[11px] uppercase font-bold tracking-widest text-[#6b5c45]">
              {t.booking.ticketTitle}
            </span>
            <h3 className="font-serif text-[28px] text-[#241913] mt-1 mb-2 font-normal">
              #{confirmedBooking.id}
            </h3>
            <p className="text-[13px] text-[#514346] max-w-md mx-auto mb-6">
              {t.booking.successMsg}
            </p>

            {/* Ticket Card */}
            <div className="bg-[#fff8f5] rounded-3xl p-5 border border-[#ebd6cb] text-left space-y-3 mb-6 shadow-sm">
              <div className="flex justify-between items-center pb-2.5 border-b border-[#ebd6cb]/60">
                <span className="text-[12px] text-[#847376]">{t.booking.treatmentLabel}</span>
                <span className="text-[13px] font-bold text-[#241913]">
                  {confirmedBooking.serviceName}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-[#ebd6cb]/60">
                <span className="text-[12px] text-[#847376]">{t.booking.preferredDate}</span>
                <span className="text-[13px] font-bold text-[#794150]">
                  {confirmedBooking.date} • {confirmedBooking.time}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2.5 border-b border-[#ebd6cb]/60">
                <span className="text-[12px] text-[#847376]">{t.booking.selectMaster}</span>
                <span className="text-[13px] font-semibold text-[#241913]">
                  {confirmedBooking.masterName}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#847376]">Guest</span>
                <span className="text-[13px] font-semibold text-[#241913]">
                  {confirmedBooking.clientName} ({confirmedBooking.contact})
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppShareLink(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#955868] text-white text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#794150] shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.booking.copyWhatsApp}</span>
              </a>

              <a
                href={getCalendarLink(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#fff1ea] text-[#794150] text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#fae4d9] transition-all"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>{t.booking.addToCalendar}</span>
              </a>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-4 text-[13px] text-[#847376] hover:text-[#241913] font-medium"
            >
              {t.booking.close}
            </button>
          </div>
        ) : (
          /* Main Booking Form */
          <>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-[20px] italic text-[#794150]">EV</span>
                <span className="text-[11px] uppercase tracking-widest text-[#6b5c45] font-bold">
                  {t.booking.atelierReservation}
                </span>
              </div>
              <h3 className="font-serif text-[26px] sm:text-[30px] text-[#241913] font-normal">
                {t.booking.modalTitle}
              </h3>
              <p className="text-[13px] text-[#514346] mt-1">
                {t.booking.modalSub}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="text-[11px] uppercase font-bold tracking-wider text-[#514346] block mb-1.5">
                  {t.booking.fullName} *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder={t.booking.fullNamePlaceholder}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#fff8f5] border border-[#ebd6cb] text-[#241913] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#794150] transition-all"
                  />
                  <User className="w-4 h-4 text-[#847376] absolute left-3.5 top-3.5" />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="text-[11px] uppercase font-bold tracking-wider text-[#514346] block mb-1.5">
                  {t.booking.contactLabel} *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={t.booking.contactPlaceholder}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#fff8f5] border border-[#ebd6cb] text-[#241913] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#794150] transition-all"
                  />
                  <Phone className="w-4 h-4 text-[#847376] absolute left-3.5 top-3.5" />
                </div>
              </div>

              {/* Desired Service */}
              <div>
                <label className="text-[11px] uppercase font-bold tracking-wider text-[#514346] block mb-1.5">
                  {t.booking.treatmentLabel}
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#fff8f5] border border-[#ebd6cb] text-[#241913] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#794150] transition-all"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.titleKey}>
                      {s.titleKey} ({s.durationMin} min • {s.priceVnd.toLocaleString()} VND)
                    </option>
                  ))}
                  <option value="Classic Manicure">Classic Manicure (45 min • 250,000 VND)</option>
                  <option value="Express Gentle Gel Removal">Express Gentle Gel Removal (20 min • 90,000 VND)</option>
                  <option value="Glazed Donut / Chrome Finish">Glazed Donut / Chrome Finish (20 min • 150,000 VND)</option>
                  <option value="Full Extension Set (Soft Gel / Poly)">Full Extension Set (90 min • 650,000 VND)</option>
                  <option value="Custom Tailored Package">Custom Tailored Package</option>
                </select>
              </div>

              {/* Artist Selection */}
              <div>
                <label className="text-[11px] uppercase font-bold tracking-wider text-[#514346] block mb-1.5">
                  {t.booking.selectMaster}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMaster('any')}
                    className={`p-2.5 rounded-2xl text-center border text-[12px] font-semibold transition-all ${
                      selectedMaster === 'any'
                        ? 'bg-[#794150] text-white border-[#794150] shadow-sm'
                        : 'bg-[#fff8f5] text-[#514346] border-[#ebd6cb] hover:bg-[#ffeadf]'
                    }`}
                  >
                    {t.booking.anyMaster}
                  </button>
                  {MASTERS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelectedMaster(m.id)}
                      className={`p-2 rounded-2xl text-center border text-[11px] font-semibold transition-all flex flex-col items-center gap-1 ${
                        selectedMaster === m.id
                          ? 'bg-[#794150] text-white border-[#794150] shadow-sm'
                          : 'bg-[#fff8f5] text-[#514346] border-[#ebd6cb] hover:bg-[#ffeadf]'
                      }`}
                    >
                      <img
                        src={m.avatar}
                        alt={m.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="truncate w-full">{m.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold tracking-wider text-[#514346] block mb-1.5">
                    {t.booking.preferredDate} *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 rounded-2xl bg-[#fff8f5] border border-[#ebd6cb] text-[#241913] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#794150]"
                    />
                    <CalendarIcon className="w-4 h-4 text-[#847376] absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold tracking-wider text-[#514346] block mb-1.5">
                    {t.booking.timeSlot} *
                  </label>
                  <div className="relative">
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 rounded-2xl bg-[#fff8f5] border border-[#ebd6cb] text-[#241913] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#794150]"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts.time} value={ts.time}>
                          {ts.time} ({ts.period})
                        </option>
                      ))}
                    </select>
                    <Clock className="w-4 h-4 text-[#847376] absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="text-[11px] uppercase font-bold tracking-wider text-[#514346] block mb-1.5">
                  {t.booking.specialNotes}
                </label>
                <input
                  type="text"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder={t.booking.specialNotesPlaceholder}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#fff8f5] border border-[#ebd6cb] text-[#241913] text-[13px] placeholder:text-[#847376] focus:outline-none focus:ring-2 focus:ring-[#794150]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-4 rounded-full bg-[#955868] text-white text-[14px] font-bold shadow-md hover:bg-[#794150] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isSubmitting ? t.booking.submitting : t.booking.submitBtn}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
