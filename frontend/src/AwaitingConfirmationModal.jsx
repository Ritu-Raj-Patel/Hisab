import { useState, useEffect } from 'react'

function AwaitingConfirmationModal({ 
  memberName = 'Rohan', 
  amount = '₹4,888',
  groupName = 'Goa Trip 🏖️',
  onClose 
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 10)
  }, [])

  const handleRemind = () => {
    // Handle remind functionality
    console.log(`Reminding ${memberName} about the cash payment...`)
  }

  const handleBack = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) {
        onClose()
      }
    }, 300)
  }

  return (
    <div 
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isVisible ? 'bg-black/30 backdrop-blur-sm' : 'bg-black/0'
      }`}
    >
      <div 
        className={`relative mx-auto flex h-full w-full max-w-md flex-col bg-gradient-to-b from-mint-green-accent to-white min-h-screen transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}
      >
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-24 items-center justify-between px-4 pt-8">
          <button
            onClick={handleBack}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="h-10 w-10"></div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center px-6 pb-8">
          {/* Awaiting Confirmation Card */}
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            {/* Animated Icons */}
            <div className="flex justify-center items-center h-40">
              <div className="relative h-24 w-36">
                <span 
                  className="material-symbols-outlined absolute left-0 bottom-0 text-7xl text-gray-400"
                  style={{
                    animation: 'float-1 4s ease-in-out infinite'
                  }}
                >
                  person
                </span>
                <span 
                  className="material-symbols-outlined absolute right-0 bottom-0 text-7xl text-gray-700"
                  style={{
                    animation: 'float-2 4s ease-in-out infinite 0.5s'
                  }}
                >
                  person
                </span>
                <span 
                  className="material-symbols-outlined absolute left-1/2 -translate-x-1/2 top-0 text-5xl text-primary"
                  style={{
                    animation: 'float-1 4s ease-in-out infinite 1s'
                  }}
                >
                  payments
                </span>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mt-4">Awaiting Confirmation</h1>
            <p className="text-gray-600 mt-2 text-base">
              The transaction will be completed once the receiver confirms the receipt of cash.
            </p>

            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2">
                <span className="material-symbols-outlined text-lg text-yellow-600">hourglass_top</span>
                <p className="text-sm font-semibold text-yellow-700">Pending Receiver Confirmation</p>
              </div>
            </div>
          </div>

          {/* Remind Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleRemind}
              className="w-full rounded-full bg-white py-4 text-base font-bold text-gray-900 shadow-soft transition-transform hover:scale-[1.01]"
            >
              Remind {memberName}
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Waiting for {memberName}'s verification...
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 pb-8 text-center">
          <p className="text-xs text-gray-600">
            For the settlement to be complete, both parties must verify the transaction. This ensures transparency and trust.
          </p>
        </footer>

        {/* Custom Animation Styles */}
        <style jsx>{`
          @keyframes float-1 {
            0%, 100% { 
              transform: translateY(0px); 
            }
            50% { 
              transform: translateY(-10px); 
            }
          }
          
          @keyframes float-2 {
            0%, 100% { 
              transform: translateY(0px); 
            }
            50% { 
              transform: translateY(-10px); 
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default AwaitingConfirmationModal
