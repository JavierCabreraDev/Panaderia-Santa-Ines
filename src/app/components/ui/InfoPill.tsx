type InfoPillProps = {
  children: React.ReactNode;
};

export function InfoPill({ children }: InfoPillProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2">
      {children}
    </div>
  );
}
