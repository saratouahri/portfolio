export default function SectionLabel({ children, className = "" }) {
  return (
    <p className={`font-section text-3xl leading-none text-[#7BFFAF] sm:text-4xl ${className}`}>
      {children}
    </p>
  );
}
