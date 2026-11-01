const EVENT = {
  name: "ADIPEC 2026",
  booth: "CN56",
  startDate: "2026-11-02",
  endDate: "2026-11-05",
  timeZone: "Asia/Dubai",
  details: "2-5 November 2026, Abu Dhabi, UAE",
};

export function getCurrentEvent(now = new Date()) {
  const dateParts = new Intl.DateTimeFormat("en", {
    timeZone: EVENT.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const date = Object.fromEntries(dateParts.map(({ type, value }) => [type, value]));
  const today = `${date.year}-${date.month}-${date.day}`;

  if (today > EVENT.endDate) return null;

  return {
    ...EVENT,
    phase: today < EVENT.startDate ? "upcoming" : "during",
  };
}

export default function EventAnnouncement({ event }) {
  if (!event) return null;

  const heading =
    event.phase === "during"
      ? `MEET US AT BOOTH ${event.booth} / ${event.name}`
      : `UPCOMING EVENT / ${event.name}`;

  return (
    <aside
      className="fixed inset-x-0 top-0 z-[70] flex min-h-10 items-center justify-center bg-brand-red px-3 py-2 text-center text-white"
      aria-label={event.phase === "during" ? "Event announcement" : "Upcoming event announcement"}
      data-testid="site-announcement"
    >
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-white" aria-hidden="true" />
      <p className="ml-2 font-mono-tech text-[9px] font-semibold tracking-[0.12em] sm:text-[10px] sm:tracking-[0.2em]">
        <span>{heading}</span>
        <span className="mx-2 opacity-70">—</span>
        <span>{event.details}</span>
      </p>
    </aside>
  );
}
