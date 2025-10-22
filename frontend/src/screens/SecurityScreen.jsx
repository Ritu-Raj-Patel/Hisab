import { useState } from 'react'

export default function SecurityScreen({ onBack }) {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col h-screen bg-gradient-to-b from-mint-green-accent via-white to-background-light dark:from-[#174C34] dark:via-background-dark dark:to-background-dark overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 sticky top-0 z-10 flex h-24 items-center justify-between bg-transparent px-4 pt-8">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 dark:bg-surface-dark/50 text-gray-900 dark:text-content-dark backdrop-blur-md"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <div className="text-left">
            <h1 className="text-xl font-bold text-gray-900 dark:text-content-dark">Security & Privacy</h1>
            <p className="text-sm text-gray-600 dark:text-subtle-dark">Manage how you access your account</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-4 pt-6">
        {/* Password & Auth */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Password & Auth</h3>
          <div className="space-y-3 rounded-2xl bg-white/70 p-4 backdrop-blur-lg shadow-soft">
            <button className="flex w-full items-center justify-between rounded-lg p-3 transition-colors hover:bg-black/5">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-600">lock</span>
                <span className="font-medium text-gray-900">Change Password</span>
              </div>
              <span className="material-symbols-outlined text-gray-600">chevron_right</span>
            </button>
            <div className="flex w-full items-center justify-between rounded-lg p-3">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-600">tsv</span>
                <span className="font-medium text-gray-900">Two-Factor Authentication</span>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input 
                  type="checkbox" 
                  checked={twoFactorEnabled}
                  onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                  className="peer sr-only" 
                />
                <div className="peer h-7 w-12 rounded-full bg-gray-200 after:absolute after:start-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
            <button className="flex w-full items-center justify-between rounded-lg p-3 transition-colors hover:bg-black/5">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-600 animate-pulse-fingerprint">fingerprint</span>
                <span className="font-medium text-gray-900">Fingerprint/Face ID</span>
              </div>
              <span className="material-symbols-outlined text-gray-600">chevron_right</span>
            </button>
          </div>
        </div>

        {/* KYC & Verification */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">KYC & Verification</h3>
          <div className="rounded-2xl bg-white/70 p-5 backdrop-blur-lg shadow-soft">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-900">Verification Progress</p>
              <span className="font-bold text-primary">75% Complete</span>
            </div>
            <div className="my-3 h-2 w-full rounded-full bg-primary/20">
              <div className="h-2 rounded-full bg-primary progress-bar-fill"></div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-base text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Email Address Verified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-base text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Phone Number Verified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-base text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Identity Document Verified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 opacity-60">
                <span className="material-symbols-outlined text-base">radio_button_unchecked</span>
                <span>Address Verification Pending</span>
              </div>
            </div>
            <button className="mt-5 w-full rounded-full bg-primary py-3 text-center font-bold text-black shadow-lg shadow-primary/30 transition-transform duration-200 active:scale-95">
              Complete KYC
            </button>
          </div>
        </div>

        {/* Device & Session Control */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Device & Session Control</h3>
          <div className="space-y-3 rounded-2xl bg-white/70 p-4 backdrop-blur-lg shadow-soft">
            <div className="flex items-center justify-between rounded-lg p-3">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">phone_iphone</span>
                <div>
                  <p className="font-medium text-gray-900">iPhone 15 Pro</p>
                  <p className="text-xs text-primary">This Device</p>
                </div>
              </div>
              <span className="text-sm text-gray-600">Active Now</span>
            </div>
            <div className="flex items-center justify-between rounded-lg p-3">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-600">laptop_mac</span>
                <div>
                  <p className="font-medium text-gray-900">Macbook Air M2</p>
                  <p className="text-xs text-gray-600">Bangalore, IN</p>
                </div>
              </div>
              <span className="text-sm text-gray-600">2 hours ago</span>
            </div>
            <button className="w-full rounded-lg py-3 font-medium text-primary transition-colors hover:bg-primary/10">
              Logout Other Devices
            </button>
          </div>
        </div>

        {/* Data Management */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Data Management</h3>
          <div className="space-y-3 rounded-2xl bg-white/70 p-4 backdrop-blur-lg shadow-soft">
            <button className="flex w-full items-center justify-between rounded-lg p-3 transition-colors hover:bg-black/5">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-600">download_for_offline</span>
                <span className="font-medium text-gray-900">Export My Data</span>
              </div>
              <span className="material-symbols-outlined text-gray-600">chevron_right</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-lg p-3 transition-colors hover:bg-danger/10">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-danger">delete_forever</span>
                <span className="font-medium text-danger">Delete My Account</span>
              </div>
              <span className="material-symbols-outlined text-danger">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
