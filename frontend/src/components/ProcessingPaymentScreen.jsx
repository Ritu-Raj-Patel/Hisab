import { useEffect } from 'react'

const paymentMethodNames = {
  gpay: 'Google Pay',
  phonepe: 'PhonePe',
  paytm: 'Paytm',
}

export default function ProcessingPaymentScreen({ 
  selectedUpiApp = 'gpay',
  onComplete 
}) {
  useEffect(() => {
    // Auto complete after 5 seconds to match the progress animation
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete()
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[80] flex flex-col min-h-screen justify-center items-center p-6 text-center bg-gradient-to-b from-green-50 to-white">
      <main className="flex-grow flex flex-col justify-center items-center">
        {/* Animated Loader */}
        <div className="relative flex items-center justify-center w-48 h-48">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          <div className="relative w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-6xl font-bold text-gray-900">₹</span>
          </div>
        </div>

        {/* Status Text */}
        <div className="mt-8">
          <h1 className="text-xl font-bold text-gray-900">
            Connecting to {paymentMethodNames[selectedUpiApp]}...
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Approve the payment in your UPI app.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-primary animate-progress"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4">
        <p className="text-sm text-gray-600">This might take a few seconds.</p>
      </footer>
    </div>
  )
}
