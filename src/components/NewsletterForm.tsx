import { useState } from "react";

/**
 * Newsletter capture. Local state only for now — wire the submit handler to a
 * server function or email provider later.
 */
export function NewsletterForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const dark = tone === "dark";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex flex-col sm:flex-row gap-3"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@studio.com"
        className={`flex-1 bg-transparent border rounded-[8px] px-4 py-3.5 font-sans text-sm transition-colors focus:outline-none focus:border-accent ${
          dark
            ? "border-paper/25 text-paper placeholder:text-paper/40"
            : "border-brand/20 text-brand placeholder:text-brand/40"
        }`}
      />
      <button
        type="submit"
        className={`bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors ${
          dark ? "hover:bg-paper hover:text-brand" : "hover:bg-brand"
        }`}
      >
        {done ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}
