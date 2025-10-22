import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function SettingsScreen({ onBack }) {
  const { isDarkMode, toggleTheme } = useTheme()
  const [rating, setRating] = useState(4)

  const handleRatingClick = (index) => {
    setRating(index + 1)
  }

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col h-screen bg-gradient-to-b from-mint-green-accent via-white to-background-light dark:from-[#174C34] dark:via-background-dark dark:to-background-dark overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 flex h-28 items-center px-4 pt-8">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 dark:bg-surface-dark/50 text-gray-900 dark:text-content-dark backdrop-blur-md"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-content-dark">Help & Settings</h1>
            <p className="text-sm text-gray-600 dark:text-subtle-dark">Manage your app experience and get support.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 space-y-8 overflow-y-auto px-4 pb-4 pt-2">
        {/* General Settings */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-subtle-dark">General Settings</h2>
          <div className="space-y-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-600 dark:text-subtle-dark">language</span>
                <span className="font-medium text-gray-900 dark:text-content-dark">Language & Region</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-subtle-dark">
                <span>English (US)</span>
                <span className="material-symbols-outlined text-lg">arrow_forward_ios</span>
              </div>
            </div>
            <hr className="border-gray-200 dark:border-border-dark" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-600 dark:text-subtle-dark">dark_mode</span>
                <span className="font-medium text-gray-900 dark:text-content-dark">Theme</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 dark:text-subtle-dark">Light</span>
                <div className="relative">
                  <input
                    className="theme-toggle sr-only"
                    id="theme-toggle"
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                  />
                  <label 
                    className="toggle-label flex h-7 w-12 cursor-pointer items-center rounded-full bg-gray-200 dark:bg-gray-700 p-1 transition-colors duration-300" 
                    htmlFor="theme-toggle"
                  >
                    <div className={`toggle-dot h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isDarkMode ? 'translate-x-5' : ''}`}></div>
                  </label>
                </div>
                <span className="text-sm text-gray-600">Dark</span>
              </div>
            </div>
            <hr className="border-gray-200 dark:border-border-dark" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-600 dark:text-subtle-dark">info</span>
                <span className="font-medium text-gray-900 dark:text-content-dark">App Version</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-subtle-dark">v2.1.3 (Build 20240315)</span>
            </div>
          </div>
        </section>

        {/* Support & Feedback */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-subtle-dark">Support & Feedback</h2>
          <div className="space-y-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-soft">
            <button className="chat-button-glow ripple flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-center font-bold text-black shadow-lg shadow-primary/30 transition-transform duration-200 active:scale-95">
              <span className="material-symbols-outlined">chat</span>
              Chat with Support
            </button>
            <a 
              className="ripple flex w-full items-center justify-between rounded-lg py-3 text-left" 
              href="mailto:support@hisab.ai"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-600 dark:text-subtle-dark">email</span>
                <span className="font-medium text-gray-900 dark:text-content-dark">Email Us</span>
              </div>
              <span className="material-symbols-outlined text-lg text-gray-600 dark:text-subtle-dark">arrow_forward_ios</span>
            </a>
            <hr className="border-gray-200 dark:border-border-dark" />
            <div className="flex flex-col items-center gap-3 pt-2">
              <span className="font-medium text-gray-900 dark:text-content-dark">Rate Hisab.AI</span>
              <div className="flex items-center gap-2 text-3xl text-gray-300 dark:text-gray-600">
                {[0, 1, 2, 3, 4].map((index) => (
                  <span
                    key={index}
                    className={`material-symbols-outlined rating-star cursor-pointer !text-4xl transition-transform duration-200 hover:scale-125 ${
                      index < rating ? 'text-yellow-400' : ''
                    }`}
                    style={{ fontVariationSettings: index < rating ? "'FILL' 1" : "'FILL' 0" }}
                    onClick={() => handleRatingClick(index)}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-subtle-dark">Community</h2>
          <div className="rounded-xl bg-white dark:bg-surface-dark p-1 shadow-soft">
            <a 
              className="ripple flex w-full items-center justify-between rounded-lg px-3 py-4 text-left" 
              href="#"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-600 dark:text-subtle-dark">science</span>
                <span className="font-medium text-gray-900 dark:text-content-dark">Join Hisab Beta Program</span>
              </div>
              <span className="material-symbols-outlined text-lg text-gray-600 dark:text-subtle-dark">arrow_forward_ios</span>
            </a>
            <hr className="mx-3 border-gray-200" />
            <a 
              className="ripple flex w-full items-center justify-between rounded-lg px-3 py-4 text-left" 
              href="#"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-600 dark:text-subtle-dark">redeem</span>
                <span className="font-medium text-gray-900 dark:text-content-dark">Refer & Earn</span>
              </div>
              <span className="material-symbols-outlined text-lg text-gray-600 dark:text-subtle-dark">arrow_forward_ios</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0 px-4 pb-8 pt-4 text-center">
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-subtle-dark">
          <a className="hover:underline" href="#">Terms & Privacy Policy</a>
        </div>
        <button className="mt-4 w-full rounded-full border border-danger/50 bg-danger/10 py-3 font-bold text-danger transition-colors hover:bg-danger/20 active:bg-danger/30">
          Logout
        </button>
      </footer>
    </div>
  )
}
