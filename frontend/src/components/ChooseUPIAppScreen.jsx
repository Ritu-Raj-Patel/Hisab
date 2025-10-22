import { useState } from 'react'

const upiApps = [
  {
    id: 'gpay',
    name: 'Pay with Google Pay',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFjEymiRY55XN6JmCAGbdFgo5i4UAs2xAachJcFBRo4nb4usxyeIuJOq-KeMZRTTnPCea6hleAEv0xcFGFzOQoMn0TqhjCK80F0NqQBV2imfWwvK2Q5R18WZcsG-r4kAfX2guNWkHciysERItI8qQYLSqLpU38fkmPDRzw2gUBBPwDDd-k5k3EdRAZnQPRbdiDevbuVwoJglC6rRnQuWnO0f0CZ7paRNf25ZhwvGkXkKDr9v6D3IPv1yy5PDnDUSRtbAXJxtmdXmv8',
  },
  {
    id: 'phonepe',
    name: 'Pay with PhonePe',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA51Yt_culXD64z0Xj80Do3u26iU1qrys9BePRmpijE0h5Fdv7_oPX7_bT9oa8LvAA0IqsvB_Lbf_7kXYLjjM4JcRBwdcRRDl1d9Ym_A3qbsoWWGPG4Qb_1HkkPb3HnsExqAOjfdtkO6a6geUO61wf8uMGhDQ7DHlw530tFvkAN1f1W8GnGCQr-PYzmZNEgOusxn51NIPTbOaY6bXPEo92aKKbpRxn1n0NypjT02yUkJrGakahOFN68CRZBFqj6nAgNEgYaH2jkMEeV',
  },
  {
    id: 'paytm',
    name: 'Pay with Paytm',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASmwivwkMcvcnbJWkSHiMJT3Ch04TYnjxeyKraBRo8bsjt7AIolTC_97DBRhJCE3z0JPST438-CV2jrypjijAJk1qn75R76dSTPTavzB7jvVlID-mv_OtCV4iDmYxOpNPaGoi5JHteB1_mABCruJhgmasPgBNcDUG8d-TtgfNi2p95q7O9Ah_sZDt-R7nkEF6WAbfxMa1B4Zl_MWmCmI70c_KDpjJRsLUlCgrPZSSHGjGEq9Ws1lt1aeC8hJMHE-YgHPJ4OU_qU5Fw',
  },
]

export default function ChooseUPIAppScreen({ onBack, onContinue, onCancel }) {
  const [selectedUpi, setSelectedUpi] = useState(null)

  const handleContinue = () => {
    if (selectedUpi && onContinue) {
      onContinue(selectedUpi)
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-background-light">
      {/* Header */}
      <div className="flex-shrink-0 px-4 pt-8">
        <header className="flex items-center">
          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-900"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-900">
              Choose UPI App
            </h1>
            <p className="text-sm text-gray-600">
              Select an app to complete payment
            </p>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pt-6 pb-28">
        <div className="space-y-3">
          {upiApps.map((app) => (
            <div
              key={app.id}
              onClick={() => setSelectedUpi(app.id)}
              className={`cursor-pointer rounded-lg bg-white p-4 shadow-soft flex items-center transition-all duration-200 border-2 ${
                selectedUpi === app.id
                  ? 'border-primary shadow-glow-mint -translate-y-1'
                  : 'border-transparent'
              }`}
            >
              <img alt={`${app.name} Logo`} className="w-8 h-8" src={app.logo} />
              <span className="ml-4 font-semibold text-gray-900">
                {app.name}
              </span>
            </div>
          ))}

          {/* Add Another UPI ID */}
          <div className="cursor-pointer rounded-lg bg-white p-4 shadow-soft flex items-center transition-all duration-200 border-2 border-transparent">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-mint-green-accent">
              <span className="material-symbols-outlined text-primary">add</span>
            </div>
            <span className="ml-4 font-semibold text-gray-900">
              Add Another UPI ID
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-md bg-white p-4 border-t border-gray-200">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleContinue}
            disabled={!selectedUpi}
            className={`w-full rounded-full py-3 text-sm font-bold transition-colors ${
              selectedUpi
                ? 'bg-primary text-black'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
          <button
            onClick={onCancel}
            className="text-sm font-medium text-gray-600"
          >
            Cancel
          </button>
        </div>
      </footer>
    </div>
  )
}
