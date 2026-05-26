import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ShieldCheck, Send, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { companyInfo } from '../data/companyInfo';
import CustomSelect from '../components/CustomSelect';
import { useSEO } from '../hooks/useSEO';

const Contact = () => {
  useSEO({
    title: 'Contact Us & Send Enquiry | Trends Management',
    description: 'Get in touch with Nagpur\'s luxury event architects. Request a customized quote or book a destination wedding consultation today.',
    keywords: 'Contact Trends Management, Hire Wedding Planner Nagpur, Event Booking Nagpur, Office Address Trends'
  });

  const location = useLocation();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    destination: '',
    eventDate: null,
    message: ''
  });

  // Success Notification State
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle selected event from route state (e.g. from Segment details or cards)
  useEffect(() => {
    if (location.state && location.state.selectedEvent) {
      const selected = location.state.selectedEvent;
      if (selected.includes("Destination")) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFormData(prev => ({ ...prev, eventType: 'Destination Wedding' }));
      } else if (selected.includes("Corporate") || selected.includes("Conference")) {
        setFormData(prev => ({ ...prev, eventType: 'Corporate' }));
      } else if (selected.includes("Birthday")) {
        setFormData(prev => ({ ...prev, eventType: 'Birthday' }));
      } else {
        setFormData(prev => ({ ...prev, eventType: 'Wedding' }));
      }
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCustomSelectChange = (e) => {
    setFormData(prev => ({ ...prev, eventType: e.target.value }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, eventDate: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Phone number validation (mandatory)
    if (!formData.phone.trim()) {
      setError('Phone number is strictly required to process your quote.');
      return;
    }

    if (!formData.fullName.trim()) {
      setError('Please provide your name.');
      return;
    }

    // Web3Forms payload
    const submissionData = {
      ...formData,
      eventDate: formData.eventDate ? formData.eventDate.toLocaleDateString() : 'Not Specified',
      // IMPORTANT: Get your access key from https://web3forms.com/ using trendsmanagement11@gmail.com
      access_key: "bce8c0e6-dfcb-444f-ae35-89f167882331",
      subject: `New Event Inquiry from ${formData.fullName}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submissionData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Trigger Success State
        setSubmitted(true);
        
        // Reset Form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          eventType: 'Wedding',
          destination: '',
          eventDate: null,
          message: ''
        });
        
        // Reset Success Alert after 6 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      } else {
        setError(result.message || 'Something went wrong!');
      }
    } catch (err) {
      setError('Network error, please try again later.');
    }
  };

  const eventOptions = [
    { value: 'Wedding', label: 'Wedding Planning' },
    { value: 'Destination Wedding', label: 'Destination Wedding' },
    { value: 'Corporate', label: 'Corporate Events' },
    { value: 'Birthday', label: 'Birthday Parties' },
    { value: 'Other', label: 'Other Occasions' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full pt-20 bg-[#fbfbfa]"
    >
      {/* HEADER SECTION */}
      <section className="relative py-20 md:py-28 bg-[#f5f5f3] overflow-hidden border-b border-stone-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,144,71,0.04)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="text-festival-orange font-bold text-xs uppercase tracking-widest block mb-3">Get In Touch</span>
          <h1 className="text-3xl md:text-6xl font-playfair font-normal leading-tight text-stone-900 mb-6">
            Begin Planning Your <span className="text-festival-orange font-semibold italic">Masterpiece</span>
          </h1>
          <p className="text-stone-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Ready to design a legendary event? Complete the form below to receive a customized spatial design budget framework and free expert consultation.
          </p>
        </div>
      </section>

      {/* CORE GRID */}
      <section className="py-20 bg-[#fbfbfa] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Lead Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200/80 shadow-xs relative">
                
                <h2 className="text-xl md:text-3xl font-playfair font-normal text-stone-900 mb-2 tracking-tight">
                  Request A Free Quote
                </h2>
                <p className="text-stone-500 text-xs md:text-sm mb-8 font-light">
                  Fields marked with * are required. We strictly respect your privacy.
                </p>

                {/* Error Banner */}
                {error && (
                  <div className="mb-6 flex items-center gap-2 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs md:text-sm">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Success Banner */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800"
                    >
                      <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm md:text-base">Inquiry Logged Successfully!</h4>
                        <p className="text-xs text-stone-700 mt-1 leading-normal font-light">
                          Thank you for contacting Trends Management. Founder Nikhil Karadbhajne or our curation team will call you back within 2-4 business hours!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="fullName" className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Rahul Deshmukh"
                        className="w-full bg-[#fbfbfa] border border-stone-200 focus:border-festival-orange/60 focus:bg-white rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-all placeholder:text-stone-400 font-sans"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="w-full bg-[#fbfbfa] border border-stone-200 focus:border-festival-orange/60 focus:bg-white rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-all placeholder:text-stone-400 font-sans"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 XXXXX"
                        className="w-full bg-[#fbfbfa] border border-stone-200 focus:border-festival-orange/60 focus:bg-white rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-all placeholder:text-stone-400 font-sans"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="eventType" className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                        Event Type
                      </label>
                      <CustomSelect
                        options={eventOptions}
                        value={formData.eventType}
                        onChange={handleCustomSelectChange}
                        isDark={false}
                      />
                    </div>
                  </div>

                  {/* Conditionally Rendered Destination Field (Animate Presence) */}
                  <AnimatePresence>
                    {formData.eventType === 'Destination Wedding' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-2 overflow-hidden"
                      >
                        <label htmlFor="destination" className="text-[10px] font-bold text-festival-orange uppercase tracking-widest">
                          Dream Destination * (Udaipur, Goa, Jaipur, etc.)
                        </label>
                        <input 
                          type="text" 
                          id="destination" 
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g. Udaipur Palace or South Goa beach"
                          className="w-full bg-[#fbfbfa] border border-festival-orange/30 focus:border-festival-orange rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-all placeholder:text-stone-400 font-sans"
                          required={formData.eventType === 'Destination Wedding'}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Row 3: Event Date */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="eventDate" className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                      Proposed Event Date
                    </label>
                    <div className="relative w-full">
                      <DatePicker
                        id="eventDate"
                        selected={formData.eventDate}
                        onChange={handleDateChange}
                        dateFormat="MMMM d, yyyy"
                        minDate={new Date()}
                        placeholderText="Select your dream date"
                        className="w-full bg-[#fbfbfa] border border-stone-200 focus:border-festival-orange/60 focus:bg-white rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-all cursor-pointer font-sans"
                        wrapperClassName="w-full"
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={16} />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                      Event Vision & Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about guest capacity, specific colors, visual themes, or expectations..."
                      className="w-full bg-[#fbfbfa] border border-stone-200 focus:border-festival-orange/60 focus:bg-white rounded-xl px-4 py-3.5 text-stone-900 text-sm focus:outline-none transition-all placeholder:text-stone-400 resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-850 text-white rounded-full py-4 text-xs font-bold uppercase tracking-[0.2em] hover:scale-[1.01] transition-all cursor-pointer shadow-xs focus:outline-none"
                  >
                    Submit Quotation Request
                    <Send size={14} />
                  </button>

                </form>

              </div>
            </div>

            {/* RIGHT COLUMN: Contact Info */}
            <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
              
              {/* Company Info Box */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-xs flex flex-col gap-6">
                
                <h3 className="text-xl font-playfair font-normal text-stone-900 tracking-tight border-l-2 border-festival-orange pl-3">
                  Trends Headquarters
                </h3>

                <div className="flex flex-col gap-4 text-xs md:text-sm font-sans">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-festival-orange mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-400 text-[10px] block uppercase tracking-widest font-bold">Office Location</span>
                      <span className="text-stone-800 font-semibold leading-relaxed">{companyInfo.address}</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <a 
                    href={`tel:${companyInfo.phone}`} 
                    className="flex items-start gap-3 text-stone-800 hover:text-festival-orange transition-colors"
                  >
                    <Phone size={18} className="text-festival-orange mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-400 text-[10px] block uppercase tracking-widest font-bold">Call Directly</span>
                      <span className="font-semibold">{companyInfo.phoneDisplay}</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href={`mailto:${companyInfo.email}`} 
                    className="flex items-start gap-3 text-stone-800 hover:text-festival-orange transition-colors"
                  >
                    <Mail size={18} className="text-festival-orange mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-400 text-[10px] block uppercase tracking-widest font-bold">Email Inquiry</span>
                      <span className="font-semibold">{companyInfo.email}</span>
                    </div>
                  </a>

                </div>

              </div>

              {/* Google Live Location Map */}
              <div className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-xs flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500">Live Location Map</h4>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-festival-orange uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    Open in Maps ↗
                  </a>
                </div>
                <div className="relative w-full h-55 rounded-2xl overflow-hidden border border-stone-100 shadow-inner">
                  <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Live Location Map"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </motion.div>
  );
};

export default Contact;
