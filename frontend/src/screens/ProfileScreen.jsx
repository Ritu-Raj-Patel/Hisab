import { BottomNavigation } from '../components/BottomNavigation'

export default function ProfileScreen({ onBack, onSettingsClick, onLinkedAccountsClick, onSecurityClick, onAICompanionClick, onNotificationsClick, onNavigateTab }) {
  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col h-screen bg-gradient-to-b from-mint-green-accent via-white to-background-light dark:from-[#174C34] dark:via-background-dark dark:to-background-dark overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 flex h-24 items-center justify-between bg-transparent px-4 pt-8">
        <div className="text-left">
          <h1 className="text-xl font-bold text-gray-900 dark:text-content-dark">My Profile</h1>
          <p className="text-sm text-gray-600 dark:text-subtle-dark">Your personal identity hub</p>
        </div>
        <button 
          onClick={onSettingsClick}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/50 dark:bg-surface-dark/50 text-gray-900 dark:text-content-dark backdrop-blur-md"
        >
          <span className="material-symbols-outlined text-2xl">settings</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-24 pt-6">
        {/* Profile Card */}
        <div className="group mb-8 rounded-2xl bg-white/70 dark:bg-surface-dark/70 p-6 text-center backdrop-blur-lg shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="relative mx-auto mb-4 inline-block">
            <img
              alt="User Avatar"
              className="h-28 w-28 rounded-full border-4 border-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUGWms5qUlnvQBGr-mA89IqQq14rZmC3u0YJrMF8pJ_XEsfd87rqEFb8CW8vq3PfK5UMIbw1ROVHb3KIBXkwJpH1P4TrtL39DUmE79xCUd3auwRVNNPKuutfp2hA2zwByPJ1FwkMRQb8zOlxffb1IN4dT-xwc4w-D3hG_UFQo_RsIDm2HyjlQrCryLc4c3lR-4zH7ghK3BdQnapq9PzXtVRxzdnhAyCqKMCxtnepBEVG5rWWKEpxMsSY2m81mUlWeo0sE7GeF0gNCr"
            />
            <div className="absolute inset-0 -z-10 rounded-full shadow-mint-glow"></div>
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black">
              <span className="material-symbols-outlined text-lg">edit</span>
            </button>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-content-dark">Alex Thompson</h2>
          <p className="text-md mb-3 text-gray-600 dark:text-subtle-dark">alex.thompson@email.com</p>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 animate-mint-pulse">
            <span className="material-symbols-outlined text-lg text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="text-sm font-semibold text-primary">Verified</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-content-dark">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/60 dark:bg-surface-dark/60 p-4 backdrop-blur-md">
              <p className="text-sm text-gray-600 dark:text-subtle-dark">Groups Joined</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-content-dark">12</p>
            </div>
            <div className="rounded-xl bg-white/60 dark:bg-surface-dark/60 p-4 backdrop-blur-md">
              <p className="text-sm text-gray-600 dark:text-subtle-dark">Total Spent</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-content-dark">₹78,940</p>
            </div>
            <div className="rounded-xl bg-white/60 dark:bg-surface-dark/60 p-4 backdrop-blur-md">
              <p className="text-sm text-gray-600 dark:text-subtle-dark">Avg Monthly Expense</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-content-dark">₹15,230</p>
            </div>
            <div className="rounded-xl bg-white/60 dark:bg-surface-dark/60 p-4 backdrop-blur-md">
              <p className="text-sm text-gray-600 dark:text-subtle-dark">Hisab Score</p>
              <p className="mt-1 text-2xl font-bold text-primary">850</p>
            </div>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-content-dark">Shortcuts</h3>
          <div className="grid grid-cols-5 gap-3">
            <div className="flex flex-col items-center gap-2">
              <button 
                onClick={onLinkedAccountsClick}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 text-gray-900 backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
              </button>
              <p className="text-xs text-center text-gray-600 dark:text-subtle-dark">Accounts</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button 
                onClick={onSecurityClick}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 text-gray-900 backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-2xl">security</span>
              </button>
              <p className="text-xs text-center text-gray-600">Security</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button 
                onClick={onAICompanionClick}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 text-gray-900 backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-2xl">smart_toy</span>
              </button>
              <p className="text-xs text-center text-gray-600">AI Companion</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button 
                onClick={onNotificationsClick}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 text-gray-900 backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-2xl">notifications</span>
              </button>
              <p className="text-xs text-center text-gray-600">Notifications</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 dark:bg-surface-dark/60 text-gray-900 dark:text-content-dark backdrop-blur-md">
                <span className="material-symbols-outlined text-2xl">help_outline</span>
              </button>
              <p className="text-xs text-center text-gray-600">Support</p>
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="w-full rounded-full bg-primary py-4 text-center text-lg font-bold text-black dark:text-background-dark shadow-lg shadow-primary/30 transition-transform duration-200 active:scale-95">
          Edit Profile
        </button>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab="profile"
        showProfile={true}
        onTabChange={onNavigateTab}
      />
    </div>
  )
}
