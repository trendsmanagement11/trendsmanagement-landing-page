import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Determine if device is touch based
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
      });
      gsap.to(follower, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
      });
    };

    const handleHover = () => {
      gsap.to(follower, { scale: 1.5, opacity: 0.2, duration: 0.3 });
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
    };

    const handleHoverOut = () => {
      gsap.to(follower, { scale: 1, opacity: 0.4, duration: 0.3 });
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover listeners to links and buttons
    const addListeners = () => {
      document.querySelectorAll('a, button, input, textarea, select').forEach(el => {
        // Prevent duplicate listeners
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverOut);
        
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    };

    addListeners();

    // Re-bind listeners on DOM mutations using a MutationObserver
    const observer = new MutationObserver(() => {
        addListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, input, textarea, select').forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
      observer.disconnect();
    };
  }, []);

  // Hide cursor natively
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
        document.body.style.cursor = 'none';
        return () => { document.body.style.cursor = 'auto'; };
    }
  }, []);

  // Hide completely on mobile
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return null;

  return (
    <>
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-gold-500 rounded-full pointer-events-none z-9999"
        style={{ opacity: 0.4 }}
      />
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-gold-500 rounded-full pointer-events-none z-9999"
      />
    </>
  );
};

export default CustomCursor;
