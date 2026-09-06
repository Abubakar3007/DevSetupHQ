export function SearchBar({
  value,
  onChange,
  placeholder = "Search products",
  label = "Search",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}) {
  return (
    <div>
      <label className="sr-only" htmlFor="search-input">
        {label}
      </label>
      <input
        id="search-input"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-brand/15 rounded-[8px] px-4 py-3 font-sans text-sm text-brand placeholder:text-brand/40 transition-colors focus:outline-none focus:border-accent"
      />
    </div>
  );
}
