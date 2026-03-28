"use client";

const avatars = [
  "🧑‍🎓", "🧑‍💻", "🧑‍🎨", "🧑‍🚀", "🦁", "🐺", "🦅", "🐉",
  "⚔️", "🏛️", "🗿", "🎭", "👑", "🌿", "🔥", "🌙",
];

export { avatars };

export default function ProfileAvatar({
  selected,
  onSelect,
  size = "md",
}: {
  selected: string;
  onSelect?: (avatar: string) => void;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-8 h-8 text-lg",
    md: "w-12 h-12 text-2xl",
    lg: "w-16 h-16 text-3xl",
  };

  if (!onSelect) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-warm-white flex items-center justify-center`}
      >
        {selected}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-8 gap-2">
      {avatars.map((avatar) => (
        <button
          key={avatar}
          onClick={() => onSelect(avatar)}
          className={`w-10 h-10 text-xl rounded-xl flex items-center justify-center transition-all ${
            selected === avatar
              ? "bg-terracotta/10 border-2 border-terracotta scale-110"
              : "bg-warm-white border-2 border-transparent hover:border-gold-light"
          }`}
        >
          {avatar}
        </button>
      ))}
    </div>
  );
}
