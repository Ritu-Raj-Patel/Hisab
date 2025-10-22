import { useState } from 'react'

export default function AICompanionScreen({ onBack }) {
  const [selectedTone, setSelectedTone] = useState('Friendly')
  const [selectedFrequency, setSelectedFrequency] = useState('Weekly')
  const [goalProgress, setGoalProgress] = useState(25) // 25% = Savings priority

  const tones = ['Friendly', 'Professional', 'Playful']
  const frequencies = ['Daily', 'Weekly', 'Monthly']
  const goals = [
    { icon: 'savings', label: 'Savings' },
    { icon: 'insights', label: 'Insights' },
    { icon: 'finance', label: 'Finance' },
    { icon: 'trending_up', label: 'Growth' }
  ]

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col h-screen bg-gradient-to-b from-mint-green-accent via-white to-background-light overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] h-1/2 w-1/2 bg-primary/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 right-[-20%] h-1/2 w-1/2 bg-primary/15 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <header className="flex-shrink-0 flex items-center p-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full text-gray-900 hover:bg-primary/20 dark:text-content-dark dark:hover:bg-primary/20"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="flex-1 text-center font-bold text-lg text-gray-900 dark:text-content-dark">Hisab AI Companion</h1>
          <div className="w-10"></div>
        </header>

        {/* Main Content */}
        <main className="flex-grow px-4 pb-4 overflow-y-auto">
          {/* AI Avatar Section */}
          <div className="flex flex-col items-center text-center mt-4 mb-8">
            <div className="relative w-40 h-40 mb-4">
              <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-20"></div>
              <div 
                className="absolute inset-2 rounded-full bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAJsW4UbLhJCTEhtjPBfEAUahcxs4eNqlVqV0piDqht0NzPgjI-R2JEA_G_Ha53uA__5AdCSBHan3wimijcpr_h4JSDgAd7sa3cice5At14sQw9C0OgWyavuc_qW9Xg-hNiul_fYMoNQzVuyP00I6l838cneH1oU20awX1eKV9TkK8Bq2oT-qtRHPehYa5RpjPzkBCN4dl0HW-Xppe1HK7FVGmRLxNtSj7A9-Xb-AXQ8u5AhxwbwQYMIQF5A6AbWG9RqPMJPnXHH6M")' }}
              ></div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/50"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Meet Your Hisab AI 🤖</h2>
            <p className="text-gray-600 mt-2 max-w-sm">Customize how your AI companion interacts, communicates, and assists you.</p>
          </div>

          <div className="space-y-6">
            {/* AI Tone Section */}
            <div className="bg-white/70 backdrop-blur-lg rounded-lg p-4 shadow-soft border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">AI Tone</h3>
              <div className="flex items-center justify-between gap-2">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all ${
                      selectedTone === tone
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-primary/10 text-gray-700 hover:bg-primary/20'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Goals Section */}
            <div className="bg-white/70 backdrop-blur-lg rounded-lg p-4 shadow-soft border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900">AI Goals</h3>
                <div className="flex items-center space-x-2 text-primary">
                  {goals.map((goal, index) => (
                    <span 
                      key={goal.label}
                      className={`material-symbols-outlined text-lg ${
                        index === 0 ? '' : 'opacity-50'
                      }`}
                    >
                      {goal.icon}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-2 w-full rounded-full bg-primary/20">
                <div 
                  className="absolute top-0 left-0 h-2 rounded-full bg-primary transition-all"
                  style={{ width: `${goalProgress}%` }}
                ></div>
                <div 
                  className="absolute -top-2 -ml-4 w-6 h-6 rounded-full bg-white border-2 border-primary shadow-lg flex items-center justify-center"
                  style={{ left: `${goalProgress}%` }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center">Prioritize: Savings</p>
            </div>

            {/* Insight Frequency Section */}
            <div className="bg-white/70 backdrop-blur-lg rounded-lg p-4 shadow-soft border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Insight Frequency</h3>
              <div className="flex items-center justify-between gap-2">
                {frequencies.map((frequency) => (
                  <button
                    key={frequency}
                    onClick={() => setSelectedFrequency(frequency)}
                    className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all ${
                      selectedFrequency === frequency
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-primary/10 text-gray-700 hover:bg-primary/20'
                    }`}
                  >
                    {frequency}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Test AI Button */}
          <div className="mt-8 text-center pb-4">
            <button className="w-full max-w-xs py-3 px-6 rounded-full bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 transform hover:scale-105 transition-transform active:scale-95">
              Test AI
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
