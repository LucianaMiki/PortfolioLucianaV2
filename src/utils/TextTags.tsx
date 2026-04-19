type Props = {
  children: React.ReactNode;
};

export default function TechTag({ children }: Props) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-[#3b82f6]/20 text-[#93c5fd] font-medium transition hover:bg-[#3b82f6]/30 hover:text-white">
      {children}
    </span>
  );
}