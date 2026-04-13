"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getProfile, saveProfile, resetProgress, getGameState } from "@/lib/progress";
import { isDevUnlocked, setDevUnlock } from "@/lib/bonus";
import ProfileAvatar, { avatars } from "@/components/ProfileAvatar";

export default function ProfilePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(avatars[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [hasProgress, setHasProgress] = useState(false);
  const [devUnlock, setDevUnlockState] = useState(false);

  useEffect(() => {
    const existing = getProfile();
    if (existing) {
      setName(existing.name);
      setAvatar(existing.avatar);
      setIsEditing(true);
    }
    const state = getGameState();
    const hasQuizProgress = Object.keys(state.progress).length > 0;
    const hasRevealedFacts = Object.keys(localStorage).some((k) =>
      k.startsWith("facts-revealed-")
    );
    setHasProgress(hasQuizProgress || hasRevealedFacts);
    setDevUnlockState(isDevUnlocked());
  }, []);

  const handleToggleDevUnlock = () => {
    const next = !devUnlock;
    setDevUnlock(next);
    setDevUnlockState(next);
  };

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
    setHasProgress(false);
  };

  const handleSave = () => {
    if (!name.trim()) return;
    saveProfile({ name: name.trim(), avatar });
    router.push("/");
  };

  return (
    <div className="px-4 py-6 animate-fade-in">
      {/* Back */}
      <Link
        href="/"
        className="text-sm text-stone-light hover:text-terracotta transition-colors"
      >
        ← Back
      </Link>

      <div className="mt-8 mb-8 text-center">
        <div className="text-4xl mb-3">{avatar}</div>
        <h1 className="text-2xl font-bold text-ink">
          {isEditing ? "Edit Profile" : "Create Your Profile"}
        </h1>
        <p className="text-sm text-ink-light mt-1">
          Choose a name and avatar for your journey
        </p>
      </div>

      {/* Name input */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-stone uppercase tracking-wide mb-2 block">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          className="w-full px-4 py-3 rounded-xl bg-white border-2 border-warm-white focus:border-terracotta focus:outline-none text-ink placeholder:text-stone-light transition-colors"
          maxLength={20}
        />
      </div>

      {/* Avatar picker */}
      <div className="mb-8">
        <label className="text-sm font-semibold text-stone uppercase tracking-wide mb-3 block">
          Choose Avatar
        </label>
        <ProfileAvatar selected={avatar} onSelect={setAvatar} />
      </div>

      {/* Save button */}
      <button
        onClick={handleSave}
        disabled={!name.trim()}
        className="w-full py-4 rounded-2xl bg-terracotta text-white font-semibold text-sm transition-all hover:bg-terracotta/90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isEditing ? "Save Changes" : "Start Exploring →"}
      </button>

      {/* Dev: unlock AC bonus quizzes */}
      {isEditing && (
        <div className="mt-8 pt-6 border-t border-warm-white">
          <label className="text-sm font-semibold text-stone uppercase tracking-wide mb-2 block">
            Developer
          </label>
          <button
            onClick={handleToggleDevUnlock}
            className={`w-full p-3.5 rounded-xl border-2 text-sm font-medium transition-all flex items-center justify-between ${
              devUnlock
                ? "bg-ac-florence/10 border-ac-florence/40 text-ac-florence"
                : "bg-white border-warm-white text-ink-light hover:border-stone-light/40"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>{devUnlock ? "🗡️" : "🔒"}</span>
              <span>Unlock AC Bonus Quizzes</span>
            </span>
            <span className={`text-xs font-bold uppercase tracking-wider ${devUnlock ? "text-ac-florence" : "text-stone-light"}`}>
              {devUnlock ? "ON" : "OFF"}
            </span>
          </button>
          <p className="text-xs text-stone-light mt-2 leading-relaxed">
            Force-unlocks all AC bonus quizzes for testing. Also accepts <code className="text-ac-rome">?unlockAC=1</code> in the URL for a session-only bypass.
          </p>
        </div>
      )}

      {/* Reset progress */}
      {isEditing && hasProgress && (
        <div className="mt-8 pt-6 border-t border-warm-white">
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-full py-3 rounded-xl text-sm font-medium text-red-500/70 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              Reset All Progress
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 animate-fade-in">
              <p className="text-sm text-red-700 font-medium mb-3">
                This will clear all quiz scores, streaks, and challenge completions. Your profile will be kept.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors"
                >
                  Yes, Reset
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl bg-white border border-red-200 text-red-700 text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
