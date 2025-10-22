import { useState } from 'react'

export default function LinkedAccountsScreen({ onBack }) {
  const [expandedUPI, setExpandedUPI] = useState(false)
  const [expandedAxis, setExpandedAxis] = useState(false)
  const [expandedICICI, setExpandedICICI] = useState(false)

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col h-screen bg-gradient-to-b from-mint-green-accent via-white to-background-light dark:from-[#174C34] dark:via-background-dark dark:to-background-dark overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-content-dark"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="flex-1 text-lg font-bold text-center -ml-4 text-gray-900 dark:text-content-dark">Linked Accounts & Payment Methods</h1>
        </div>
        <p className="px-4 pb-4 text-sm text-gray-600 dark:text-subtle-dark">Manage your linked accounts and payment methods for seamless transactions.</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-2 space-y-6 overflow-y-auto pb-24">
        {/* UPI Section */}
        <section>
          <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-content-dark">UPI</h2>
          <div className="relative p-4 overflow-hidden bg-white/50 dark:bg-surface-dark/50 rounded-xl border border-primary/50 shadow-mint-glow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <img 
                  alt="Google Pay Logo" 
                  className="w-8 h-8" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXrlaBu9JKQNz8tjy5c2s5XCoNpIph59PCyWdhJkqMqlUal0oUW50_DpuSG5CeZYkPKqij-vr8f7o6TvIb1FiUiNM8WoOpBE96iYh8QIxDgSIUJEwxd-X6IcO8cqEO6RslHRtHq0mJ8eLg7zAStmSGCQQ2Bvyj20bHj8T5ZRZnRLmACXflc5JXQAKex6xDvj8s5Ls1stOQU6gkd0T8B4VRdmOeDYelpmZd7RTGp0ibCrPsRddbvOQA5KuZBzRVYVXdvjjA71YJbjlg"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 dark:text-content-dark">Google Pay - rohan@okaxis</p>
                <div className="flex items-center text-sm text-primary">
                  <span className="material-symbols-outlined text-base mr-1">verified</span>
                  <span>Verified</span>
                </div>
              </div>
              <button 
                onClick={() => setExpandedUPI(!expandedUPI)}
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-content-dark"
              >
                <span className={`material-symbols-outlined transition-transform ${expandedUPI ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary/20 dark:bg-primary/30 text-gray-900 dark:text-content-dark hover:bg-primary/30 dark:hover:bg-primary/40">Add New</button>
          </div>
        </section>

        {/* Bank Accounts Section */}
        <section>
          <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-content-dark">Bank Accounts</h2>
          <div className="space-y-4">
            {/* Axis Bank - Verified */}
            <div className="p-4 bg-white/50 dark:bg-surface-dark/50 rounded-xl border border-gray-200 dark:border-border-dark">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <img 
                    alt="Axis Bank Logo" 
                    className="w-8 h-8" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0HlPtoA4u9Td04CCqzcOZEeRB2wz11222A-IluzE4i1gn-K3gl5FhLOzRZV5EfkIAwIWBqzpGRqEnUYCCPVQnNKZadoA3QqyKnxYVvYWRpEBGoJNyNQnkLeX-C0cgZz576VIfAa9Boo-HZJFUqFrstyK7LD1tE4Pizb3CiQiv-j-KSlRKDbkl-pwW3hwuRsD3fM5jCLrXsGQ9Dn__mnpVgeHeIMc7W3B_jSbTQx_JKfkY4YMMYBbNTVrBQ5x01IpVd38VOqpC5Rml"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 dark:text-content-dark">Axis Bank - ...1234</p>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">Verified</span>
                </div>
                <button 
                  onClick={() => setExpandedAxis(!expandedAxis)}
                  className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-content-dark"
                >
                  <span className={`material-symbols-outlined transition-transform ${expandedAxis ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
              </div>
            </div>

            {/* ICICI Bank - Pending */}
            <div className="p-4 bg-white/50 dark:bg-surface-dark/50 rounded-xl border border-gray-200 dark:border-border-dark">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <img 
                    alt="ICICI Bank Logo" 
                    className="w-8 h-8" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPri_JUNRifkCz_hFbqYK53rq3crsi3kXocp2oO4kWfdvMz4eka3StR6QvvB3WBi_m2sw7o8aOCBYvdtWa-q03Z3TmWcYl54wh3Nl4g37s0koje1hf8zeODXzlcK3VQ7oolkwjuiTOna1TGDv0xmQj8w675dpIc7QfoQQxc-eqcKE4z85v9agIKjLfa4yjOSHj8Fes7vh1R_SCm0gSImdJADmmNzSD1sdSWYQ_Pv6rIbawzljXlZ_-oX7AO3beqnnK7lFegDeZQ6ZG"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-content-dark">ICICI Bank - ...5678</p>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-500">Pending</span>
                  </div>
                  <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary text-white dark:text-background-dark hover:opacity-90">Verify Now</button>
                </div>
                <button 
                  onClick={() => setExpandedICICI(!expandedICICI)}
                  className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-content-dark"
                >
                  <span className={`material-symbols-outlined transition-transform ${expandedICICI ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-subtle-dark mb-1">Verification Progress (60%)</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cash History Section */}
        <section>
          <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-content-dark">Cash History</h2>
          <div className="p-4 bg-white/50 dark:bg-surface-dark/50 rounded-xl border border-gray-200 dark:border-border-dark">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <img 
                  alt="Cash Icon" 
                  className="w-8 h-8" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvPwdizU9LhYNsxv7IloZBlzQxPnEcPWU0lyOABJ4hQCT-WIp4QphKVc_WcSVtDY9qjTOK3uvwkPaF3wrMMtemS0Iz0uKnmyC409BMJj8wjuAOk3f76hTE_ZQEABF2apjV022j_qfZDkMz6k31rJI47eMMhDLNX0VEy_RWG0A0rjYsproYCmpFD6A4mnXmIQrIE6PWQDMcEbUjFMmCIgSKyTMIYqMUbMMpHjgoBczAaVH81H3lOHpxhh8ZnoONQBAGOo4-wa7pVrf"
                />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-sm text-gray-600 dark:text-subtle-dark">Total Cash Settlements (This Month)</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-content-dark">₹ 5,000</p>
                </div>
                <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary/20 dark:bg-primary/30 text-gray-900 dark:text-content-dark hover:bg-primary/30 dark:hover:bg-primary/40">View Record History</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
