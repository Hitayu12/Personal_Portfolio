let activeAnimationFrame: number | null = null;

export function smoothScrollToId(id: string, duration = 900, offset = 24) {
  const target = document.getElementById(id);
  if (!target) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    target.scrollIntoView();
    return;
  }

  if (activeAnimationFrame !== null) {
    window.cancelAnimationFrame(activeAnimationFrame);
  }

  const startY = window.scrollY;
  const rawTargetY = target.getBoundingClientRect().top + startY - offset;
  const targetY = Math.max(0, rawTargetY);
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();

  const easeInOutQuart = (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuart(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      activeAnimationFrame = window.requestAnimationFrame(step);
    } else {
      activeAnimationFrame = null;
    }
  };

  activeAnimationFrame = window.requestAnimationFrame(step);
}
