import { useState } from 'react'

export default function NotificationsScreen({ onBack }) {
  const [expenseReminders, setExpenseReminders] = useState(true)
  const [paymentConfirmations, setPaymentConfirmations] = useState(true)
  const [weeklyInsights, setWeeklyInsights] = useState(false)
  const [aiTips, setAiTips] = useState(true)
  const [pushStyle, setPushStyle] = useState('Banner')
  const [emailFrequency, setEmailFrequency] = useState('Weekly')

  const notificationSettings = [
    {
      id: 'expense',
      icon: 'receipt_long',
      title: 'Expense Reminders',
      description: 'For upcoming bills',
      enabled: expenseReminders,
      setEnabled: setExpenseReminders
    },
    {
      id: 'payment',
      icon: 'verified',
      title: 'Payment Confirmations',
      description: 'When a payment is successful',
      enabled: paymentConfirmations,
      setEnabled: setPaymentConfirmations
    },
    {
      id: 'weekly',
      icon: 'summarize',
      title: 'Weekly Insight Summary',
      description: 'Your spending overview',
      enabled: weeklyInsights,
      setEnabled: setWeeklyInsights
    },
    {
      id: 'ai',
      icon: 'auto_awesome',
      title: 'AI Tips & Savings Alerts',
      description: 'Personalized financial advice',
      enabled: aiTips,
      setEnabled: setAiTips
    }
  ]

  const pushStyles = [
    { id: 'Banner', icon: 'notifications_active', label: 'Banner' },
    { id: 'Silent', icon: 'notifications_off', label: 'Silent' },
    { id: 'Detailed', icon: 'article', label: 'Detailed' }
  ]

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col h-screen bg-gradient-to-b from-mint-green-accent via-white to-background-light overflow-hidden">
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
            <h1 className="text-xl font-bold text-gray-900 dark:text-content-dark">Notifications & Alerts</h1>
            <p className="text-sm text-gray-600 dark:text-subtle-dark">Manage your app alerts</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-4 pt-6">
        {/* Switch Groups */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Switch Groups</h3>
          <div className="space-y-1 rounded-2xl bg-white/70 p-2 backdrop-blur-lg shadow-soft">
            {notificationSettings.map((setting) => (
              <div key={setting.id} className="flex w-full items-center justify-between rounded-lg p-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">{setting.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{setting.title}</p>
                    <p className="text-xs text-gray-600">{setting.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input 
                    type="checkbox" 
                    checked={setting.enabled}
                    onChange={() => setting.setEnabled(!setting.enabled)}
                    className="peer sr-only" 
                  />
                  <div className={`peer h-7 w-12 rounded-full bg-gray-200 after:absolute after:start-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white ${setting.enabled ? 'shadow-mint-glow' : ''}`}></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Push Style Selector */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Push Style Selector</h3>
          <div className="grid grid-cols-3 gap-3 rounded-2xl bg-white/70 p-3 backdrop-blur-lg shadow-soft">
            {pushStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setPushStyle(style.id)}
                className={`flex flex-col items-center gap-2 rounded-xl py-4 transition-all duration-300 ${
                  pushStyle === style.id
                    ? 'bg-primary/20 shadow-mint-glow'
                    : 'hover:bg-black/5'
                }`}
              >
                <span 
                  className={`material-symbols-outlined ${
                    pushStyle === style.id ? 'text-primary' : 'text-gray-600'
                  }`}
                  style={{ fontVariationSettings: pushStyle === style.id ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {style.icon}
                </span>
                <span className={`font-medium ${
                  pushStyle === style.id ? 'text-primary font-semibold' : 'text-gray-900'
                }`}>
                  {style.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Email Reports Frequency */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Email Reports Frequency</h3>
          <div className="relative rounded-2xl bg-white/70 p-4 backdrop-blur-lg shadow-soft">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-600">mail</span>
                <span className="font-medium text-gray-900">Report Frequency</span>
              </div>
              <select 
                value={emailFrequency}
                onChange={(e) => setEmailFrequency(e.target.value)}
                className="rounded-full border-none bg-primary/10 py-2 pl-3 pr-8 font-semibold text-primary focus:ring-2 focus:ring-primary/50"
              >
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-12 pb-4">
          <button className="w-full rounded-full bg-primary py-4 text-center font-bold text-black shadow-lg shadow-primary/30 transition-transform duration-200 active:scale-95 save-button-animation">
            Save Preferences
          </button>
        </div>
      </main>
    </div>
  )
}
