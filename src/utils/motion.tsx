import React, { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect if user has requested reduced motion in their OS / browser settings.
 */
export function usePrefersReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener?.('change', onChange);
    return () => mediaQuery.removeEventListener?.('change', onChange);
  }, []);

  return reducedMotion;
}

/**
 * Reusable scroll reveal observer hook.
 * Elements reveal when scrolled into view and remain visible.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
} = {}): [React.RefObject<T>, boolean] {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    if (!('IntersectionObserver' in window)) return true;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  });

  useEffect(() => {
    if (isVisible && triggerOnce) return;
    const element = ref.current;
    if (!element || typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window) || window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, isVisible]);

  return [ref, isVisible];
}

/**
 * Staged Hero Entrance hook for above-the-fold content.
 * Coordinates smooth entrance stages immediately upon component mount.
 */
export function useHeroEntrance(stage: number = 1, baseDelayMs: number = 85) {
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 25);
    return () => clearTimeout(timer);
  }, []);

  if (reducedMotion) {
    return {
      isEntered: true,
      style: {} as React.CSSProperties,
    };
  }

  const delay = Math.max(0, (stage - 1) * baseDelayMs);
  const isEntered = mounted;

  return {
    isEntered,
    style: {
      transition: `opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      opacity: isEntered ? 1 : 0,
      transform: isEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
      willChange: 'opacity, transform',
    } as React.CSSProperties,
  };
}

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none';
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  distance?: number; // pixels
  threshold?: number;
  rootMargin?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}

/**
 * Reusable Reveal component that activates on scroll.
 */
export const Reveal: React.FC<RevealProps> = ({
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  distance = 18,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  as: Component = 'div',
  className = '',
  style,
  children,
  ...rest
}) => {
  const reducedMotion = usePrefersReducedMotion();
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold, rootMargin });

  if (reducedMotion || variant === 'none') {
    return (
      <Component ref={ref} className={className} style={style} {...rest}>
        {children}
      </Component>
    );
  }

  const initialTransforms: Record<string, string> = {
    fade: 'translate3d(0, 0, 0)',
    'fade-up': `translate3d(0, ${distance}px, 0)`,
    'fade-down': `translate3d(0, -${distance}px, 0)`,
    'fade-left': `translate3d(${distance}px, 0, 0)`,
    'fade-right': `translate3d(-${distance}px, 0, 0)`,
    scale: 'scale(0.98)',
  };

  const currentTransform = isVisible ? 'translate3d(0, 0, 0) scale(1)' : initialTransforms[variant];

  const motionStyle: React.CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: currentTransform,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <Component ref={ref} className={className} style={motionStyle} {...rest}>
      {children}
    </Component>
  );
};

/**
 * Desktop-only subtle pointer tilt hook for architectural cards in Concept 4.
 * Smoothly shifts rotation and translation based on pointer coordinates.
 * Disabled on touch screens, reduced-motion, and settles when pointer exits.
 */
export function usePointerTilt(options: { maxTilt?: number; maxTranslate?: number } = {}) {
  const { maxTilt = 2.0, maxTranslate = 4 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    const tiltX = -(y * maxTilt).toFixed(2);
    const tiltY = (x * maxTilt).toFixed(2);
    const transX = (x * maxTranslate).toFixed(2);
    const transY = (y * maxTranslate).toFixed(2);

    setTransform(`perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${transX}px, ${transY}px, 0)`);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('');
  };

  const style: React.CSSProperties = {
    transform: transform || 'perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)',
    transition: isHovered ? 'transform 100ms ease-out' : 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform',
  };

  return { ref, style, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}
