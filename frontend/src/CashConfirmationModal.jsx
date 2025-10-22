import { useState, useEffect } from 'react'
import AwaitingConfirmationModal from './AwaitingConfirmationModal'

function CashConfirmationModal({ 
  memberName = 'Rohan', 
  memberAvatar, 
  amount = '₹4,888', 
  groupName = 'Goa Trip 🏖️',
  onClose 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [showAwaitingConfirmation, setShowAwaitingConfirmation] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 10)
  }, [])

  const handleMarkAsPaid = () => {
    setIsVisible(false)
    setTimeout(() => {
      setShowAwaitingConfirmation(true)
    }, 300)
  }

  const handleCancel = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) {
        onClose()
      }
    }, 300)
  }

  const handleAwaitingConfirmationClose = () => {
    setShowAwaitingConfirmation(false)
    if (onClose) {
      onClose()
    }
  }

  const defaultAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgrrLmWPMaZ04U70E_FdBrg3z88Gy9TekIBxxl2o-tqoXULpGrQlkLvvIvotLTCX4W9HhWN9VgB8vnKT-aj8xPzgJ4X-hoN88OvsogcHw3omKnG6kYTq-iygSL0PbY3_A6jPQAi09-nnAFft0SnH8ln4PAqdus6qnPXC4i_Y2Dd03G79hJU-3SWBFyNFadKBhGpzt40GKp7MjwotZdp_e9RuInYzvuXUjr-pvs_E2C1dL32wevc33BI-8fx-pNMB8PFYb-OOY4zC-w'

  return (
    <div 
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isVisible ? 'bg-black/30 backdrop-blur-sm' : 'bg-black/0'
      }`}
    >
      <div 
        className={`relative mx-auto flex h-full w-full max-w-md flex-col bg-gradient-to-b from-white via-gray-50 to-gray-50 min-h-screen transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[10%] top-0 animate-bounce text-green-400/20 text-4xl" style={{ animationDuration: '10s' }}>₹</div>
          <div className="absolute left-[80%] top-0 animate-bounce text-green-400/15 text-6xl" style={{ animationDuration: '15s', animationDelay: '2s' }}>₹</div>
          <div className="absolute left-[30%] top-0 animate-bounce text-green-400/25 text-2xl" style={{ animationDuration: '12s', animationDelay: '1s' }}>₹</div>
          <div className="absolute left-[50%] top-0 animate-bounce text-green-400/20 text-5xl" style={{ animationDuration: '15s', animationDelay: '3s' }}>₹</div>
          <div className="absolute left-[95%] top-0 animate-bounce text-green-400/15 text-3xl" style={{ animationDuration: '10s', animationDelay: '4s' }}>₹</div>
          <div className="absolute left-[5%] top-0 animate-bounce text-green-400/30 text-4xl" style={{ animationDuration: '12s', animationDelay: '5s' }}>₹</div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-10 flex h-24 items-center justify-between px-4 pt-8 bg-white/80 backdrop-blur-sm">
          <button
            onClick={handleCancel}  
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">Confirm Cash Payment</h1>
            <p className="text-sm text-gray-600">You are paying {memberName}</p>
          </div>
          <div className="h-10 w-10"></div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-between px-4 pb-8">
          <div className="flex-grow flex flex-col justify-center">
            {/* Payment Details Card */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-600">Paying To</p>
                <img 
                  alt={memberName} 
                  className="h-16 w-16 rounded-full my-3" 
                  src={memberAvatar || defaultAvatar}
                />
                <h2 className="text-lg font-bold text-gray-900">{memberName}</h2>
              </div>
              
              <div className="my-6 border-t border-gray-200"></div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Amount</p>
                <p className="text-3xl font-black text-gray-900">{amount}</p>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-gray-600">Group</p>
                <p className="text-sm font-medium text-gray-900">{groupName}</p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1.5">
                  <span className="material-symbols-outlined text-base text-yellow-600">hourglass_top</span>
                  <p className="text-xs font-semibold text-yellow-700">Pending Confirmation</p>
                </div>
              </div>
            </div>

            {/* Instructions Card */}
            <div className="mt-6 rounded-xl bg-mint-green-accent p-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-2xl text-mint-green-dark">info</span>
                <div>
                  <h4 className="font-bold text-gray-900">Instructions</h4>
                  <p className="mt-1 text-sm text-gray-700">
                    Please hand over the cash amount to {memberName} in person. Once you mark this payment as paid, {memberName} will need to confirm the receipt to fully settle the expense.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6">
            <button
              onClick={handleMarkAsPaid}
              className="w-full rounded-full bg-gradient-to-r from-primary to-[#2CDA43] py-4 text-base font-bold text-black shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01]"
            >
              Mark as Paid
            </button>
            <button
              onClick={handleCancel}
              className="w-full rounded-full py-4 text-base font-medium text-gray-600"
            >
              Cancel
            </button>
          </div>
        </main>
      </div>
      
      {showAwaitingConfirmation && (
        <AwaitingConfirmationModal
          memberName={memberName}
          amount={amount}
          groupName={groupName}
          onClose={handleAwaitingConfirmationClose}
        />
      )}
    </div>
  )
}

export default CashConfirmationModal
