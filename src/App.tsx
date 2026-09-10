import React, { useState, useEffect } from 'react';
import { ScreenType, Language, BookingRecord } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { InteriorSection } from './components/InteriorSection';
import { ServicesSection } from './components/ServicesSection';
import { PriceSection } from './components/PriceSection';
import { PortfolioSection } from './components/PortfolioSection';
import { OccupancyCalendarSection } from './components/OccupancyCalendarSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { FloatingConcierge } from './components/FloatingConcierge';
import { LiveBookingNotification } from './components/LiveBookingNotification';
import { translations } from './data/translations';

const STORAGE_KEY = 'eva_nail_studio_bookings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('overview');
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState<string | undefined>(undefined);
  const [selectedBookingDate, setSelectedBookingDate] = useState<string | undefined>(undefined);
  const [selectedBookingTime, setSelectedBookingTime] = useState<string | undefined>(undefined);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [bookings, setBookings] = useState<BookingRecord[]>([]);

  // Load bookings from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBookings(JSON.parse(saved));
      } else {
        // Seed with a sample booking for demo
        const sample: BookingRecord = {
          id: 'EVA-78241',
          clientName: 'Elena Rostova',
          contact: '+84 90 555 1234',
          serviceId: 'gel-polish-color',
          serviceName: 'Gel Polish & Color Couture',
          date: '2025-06-15',
          time: '14:00',
          masterName: 'Linh Nguyen',
          totalVnd: 380000,
          status: 'confirmed',
          createdAt: new Date().toISOString(),
          specialNotes: 'Glazed donut chrome accent',
        };
        setBookings([sample]);
        localStorage.setItem(STORAGE_KEY, JSON.stringify([sample]));
      }
    } catch (e) {
      console.error('Error loading bookings', e);
    }
  }, []);

  const saveBookings = (newBookings: BookingRecord[]) => {
    setBookings(newBookings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newBookings));
    } catch (e) {
      console.error('Error saving bookings', e);
    }
  };

  const handleBookingSuccess = (newBooking: BookingRecord) => {
    const updated = [newBooking, ...bookings];
    saveBookings(updated);
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    saveBookings(updated);
  };

  const handleOpenBooking = (serviceName?: string, date?: string, time?: string) => {
    setSelectedBookingService(serviceName);
    setSelectedBookingDate(date);
    setSelectedBookingTime(time);
    setIsBookingOpen(true);
  };

  const handleNavigate = (screen: ScreenType) => {
    if (screen === 'booking') {
      handleOpenBooking();
      return;
    }
    if (screen === 'my-bookings') {
      setIsMyBookingsOpen(true);
      return;
    }
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#241913] flex flex-col antialiased selection:bg-[#f1ddbf] selection:text-[#6f6149] relative">
      {/* Top Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
        bookingCount={bookings.length}
      />

      {/* Main Content Area: Renders based on active Screen */}
      <main className="flex-1 pt-20">
        {currentScreen === 'overview' && (
          <>
            <Hero
              currentLang={currentLang}
              onOpenBooking={() => handleOpenBooking()}
              onExploreServices={() => {
                const el = document.getElementById('services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <AboutSection currentLang={currentLang} />
            <InteriorSection currentLang={currentLang} />
            <ServicesSection
              currentLang={currentLang}
              onBookService={(name) => handleOpenBooking(name)}
            />
            <PriceSection
              currentLang={currentLang}
              onBookService={(name) => handleOpenBooking(name)}
            />
            <PortfolioSection
              currentLang={currentLang}
              onBookDesign={(title) => handleOpenBooking(title)}
            />
            <OccupancyCalendarSection
              currentLang={currentLang}
              onBookSlot={(date, time) => handleOpenBooking(undefined, date, time)}
            />
            <FeaturesSection currentLang={currentLang} />
            <ReviewsSection currentLang={currentLang} />
            <ContactSection currentLang={currentLang} />
          </>
        )}

        {currentScreen === 'services' && (
          <div className="pt-4">
            <ServicesSection
              currentLang={currentLang}
              onBookService={(name) => handleOpenBooking(name)}
            />
            <PriceSection
              currentLang={currentLang}
              onBookService={(name) => handleOpenBooking(name)}
            />
          </div>
        )}

        {currentScreen === 'price' && (
          <div className="pt-4">
            <PriceSection
              currentLang={currentLang}
              onBookService={(name) => handleOpenBooking(name)}
            />
          </div>
        )}

        {currentScreen === 'interior' && (
          <div className="pt-4">
            <InteriorSection currentLang={currentLang} />
            <AboutSection currentLang={currentLang} />
          </div>
        )}

        {currentScreen === 'portfolio' && (
          <div className="pt-4">
            <PortfolioSection
              currentLang={currentLang}
              onBookDesign={(title) => handleOpenBooking(title)}
            />
          </div>
        )}

        {currentScreen === 'about' && (
          <div className="pt-4">
            <AboutSection currentLang={currentLang} />
            <FeaturesSection currentLang={currentLang} />
            <ReviewsSection currentLang={currentLang} />
          </div>
        )}

        {currentScreen === 'contact' && (
          <div className="pt-4">
            <ContactSection currentLang={currentLang} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onNavigate={handleNavigate} />

      {/* Floating Concierge & Online Chat Widget */}
      <FloatingConcierge
        currentLang={currentLang}
        onOpenBooking={(serviceName, date, time) => handleOpenBooking(serviceName, date, time)}
      />

      {/* Live Social Proof Booking Notification Toast */}
      <LiveBookingNotification
        currentLang={currentLang}
        onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
      />

      {/* Online Booking Dialog Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentLang={currentLang}
        initialServiceName={selectedBookingService}
        initialDate={selectedBookingDate}
        initialTime={selectedBookingTime}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* My Bookings History Modal */}
      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        currentLang={currentLang}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
        onNewBookingClick={() => handleOpenBooking()}
      />
    </div>
  );
}
