export function IconLeadership() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="7" r="3" />
      <circle cx="5" cy="17" r="2.4" />
      <circle cx="19" cy="17" r="2.4" />
      <path d="M9.5 8.8 6.5 15M14.5 8.8l3 6.2M7.2 17h9.6" />
    </svg>
  );
}

export function IconFrontend() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l-2 2 2 2M17 9l2 2-2 2M13 8l-2 8" />
    </svg>
  );
}

export function IconBackend() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="5" rx="1.5" />
      <rect x="3" y="10" width="18" height="5" rx="1.5" />
      <rect x="3" y="16" width="18" height="4" rx="1.5" />
      <path d="M6.5 6.5h.01M6.5 12.5h.01" />
    </svg>
  );
}

export function IconCloud() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.6A3.5 3.5 0 0 0 7 18z" />
    </svg>
  );
}

export function IconAi() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" />
    </svg>
  );
}

export function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function iconFor(kind: "leadership" | "frontend" | "backend" | "cloud" | "ai") {
  switch (kind) {
    case "leadership":
      return IconLeadership;
    case "frontend":
      return IconFrontend;
    case "backend":
      return IconBackend;
    case "cloud":
      return IconCloud;
    case "ai":
      return IconAi;
  }
}
