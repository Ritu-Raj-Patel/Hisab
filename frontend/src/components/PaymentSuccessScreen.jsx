import { useEffect, useState } from 'react'

const paymentMethodNames = {
  gpay: 'Google Pay',
  phonepe: 'PhonePe',
  paytm: 'Paytm',
}

export default function PaymentSuccessScreen({ 
  memberName = 'Sophia Bennett',
  amount = '₹550.00',
  groupName = 'Trip to Goa',
  upiId = 'user@upi',
  selectedUpiApp = 'gpay',
  onViewReceipt,
  onClose 
}) {
  const [showCheckmark, setShowCheckmark] = useState(false)

  useEffect(() => {
    // Trigger checkmark animation
    setTimeout(() => setShowCheckmark(true), 100)
  }, [])

  // Generate transaction ID
  const txnId = Math.floor(100000000000 + Math.random() * 900000000000).toString()
  
  // Get current time
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })

  return (
    <div className="fixed inset-0 z-[90] flex flex-col h-screen bg-background-light">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
        {/* Success Icon */}
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" fill="none" r="25"></circle>
                <path 
                  className={showCheckmark ? 'checkmark-animate' : ''}
                  d="M14 27l8 8 16-16" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="4"
                  style={{
                    strokeDasharray: showCheckmark ? '100 0' : '0 100',
                    transition: 'stroke-dasharray 0.5s ease-in-out'
                  }}
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900">Payment Successful!</h1>
        <p className="mt-2 text-base text-gray-700">
          Your settlement of {amount} to '{groupName}' has been completed.
        </p>

        {/* Transaction Summary Card */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 mt-8 text-left space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <p className="text-lg font-bold text-gray-900">Transaction Summary</p>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Paid To</span>
            <span className="text-sm font-medium text-gray-900">{memberName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Group</span>
            <span className="text-sm font-medium text-gray-900">{groupName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Payment Method</span>
            <span className="text-sm font-medium text-gray-900">UPI via {paymentMethodNames[selectedUpiApp]}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-600">UPI ID</span>
            <span className="text-sm font-medium text-gray-900">{upiId}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Time</span>
            <span className="text-sm font-medium text-gray-900">{currentTime}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Txn ID</span>
            <span className="text-sm font-medium text-gray-900">{txnId}</span>
          </div>

          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="text-base font-semibold text-gray-900">Amount Paid</span>
            <span className="text-base font-bold text-primary">{amount}</span>
          </div>
        </div>
      </main>

      {/* Footer Buttons */}
      <footer className="p-4 space-y-3">
        <button
          onClick={onViewReceipt}
          className="w-full h-12 flex items-center justify-center rounded-lg bg-primary text-black font-bold text-base transition-opacity hover:opacity-90"
        >
          View Receipt
        </button>
        <button
          onClick={onClose}
          className="w-full h-12 flex items-center justify-center rounded-lg border border-gray-300 text-gray-900 font-bold text-base transition-colors hover:bg-gray-100"
        >
          Close
        </button>
      </footer>
    </div>
  )
}
