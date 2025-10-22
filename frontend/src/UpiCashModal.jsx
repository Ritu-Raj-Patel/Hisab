import { useState, useEffect } from 'react'
import ChooseUPIAppScreen from './components/ChooseUPIAppScreen'
import UPIPaymentScreen from './components/UPIPaymentScreen'
import ProcessingPaymentScreen from './components/ProcessingPaymentScreen'
import PaymentSuccessScreen from './components/PaymentSuccessScreen'
import DigitalReceiptScreen from './components/DigitalReceiptScreen'

function UpiCashModal({ memberName = 'Rohan', amount = '₹4,888', onClose }) {
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showUpiSelection, setShowUpiSelection] = useState(false)
  const [showUpiPayment, setShowUpiPayment] = useState(false)
  const [showProcessing, setShowProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [selectedUpiApp, setSelectedUpiApp] = useState(null)
  const [transactionData, setTransactionData] = useState(null)

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 10)
  }, [])

  const handleProceedToPay = () => {
    if (paymentMethod === 'upi') {
      // Show UPI app selection screen
      setShowUpiSelection(true)
    } else {
      // For cash payment, show success directly
      setPaymentSuccess(true)
    }
  }

  const handleUpiAppSelected = (upiAppId) => {
    // User selected a UPI app and clicked continue
    setSelectedUpiApp(upiAppId)
    setShowUpiSelection(false)
    setShowUpiPayment(true)
  }

  const handleUpiSelectionBack = () => {
    setShowUpiSelection(false)
  }

  const handleUpiSelectionCancel = () => {
    setShowUpiSelection(false)
    handleCancel()
  }

  const handleUpiPaymentBack = () => {
    setShowUpiPayment(false)
    setShowUpiSelection(true)
  }

  const handleUpiPaymentConfirm = () => {
    setShowUpiPayment(false)
    setShowProcessing(true)
  }

  const handleProcessingComplete = () => {
    // Generate transaction data
    const txnId = Math.floor(100000000000 + Math.random() * 900000000000).toString()
    const currentTime = new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    setTransactionData({
      txnId,
      time: currentTime,
      date: currentDate
    })

    setShowProcessing(false)
    setShowSuccess(true)
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) {
        onClose()
      }
    }, 300)
  }

  const handleViewReceipt = () => {
    setShowSuccess(false)
    setShowReceipt(true)
  }

  const handleReceiptBack = () => {
    setShowReceipt(false)
    setShowSuccess(true)
  }

  const handleDownloadReceipt = () => {
    // TODO: Implement PDF download
    console.log('Download receipt clicked')
    alert('Receipt download feature coming soon!')
  }

  const handleUpiPaymentCancel = () => {
    setShowUpiPayment(false)
    handleCancel()
  }

  const handleDone = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) {
        onClose()
      }
      setPaymentSuccess(false)
    }, 300)
  }

  const handleCancel = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) {
        onClose()
      }
      setPaymentSuccess(false)
    }, 300)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCancel()
    }
  }

  return (
    <>
      {/* Digital Receipt Screen */}
      {showReceipt && transactionData && (
        <DigitalReceiptScreen
          memberName={memberName}
          groupName="Goa Trip 🏖️"
          amount={amount}
          txnId={transactionData.txnId}
          date={transactionData.date}
          time={transactionData.time}
          onBack={handleReceiptBack}
          onDownload={handleDownloadReceipt}
        />
      )}

      {/* Payment Success Screen */}
      {showSuccess && (
        <PaymentSuccessScreen
          memberName={memberName}
          amount={amount}
          groupName="Goa Trip 🏖️"
          upiId={`${memberName.toLowerCase().replace(' ', '.')}@okaxis`}
          selectedUpiApp={selectedUpiApp}
          onViewReceipt={handleViewReceipt}
          onClose={handleSuccessClose}
        />
      )}

      {/* Processing Payment Screen */}
      {showProcessing && (
        <ProcessingPaymentScreen
          selectedUpiApp={selectedUpiApp}
          onComplete={handleProcessingComplete}
        />
      )}

      {/* UPI Payment Confirmation Screen */}
      {showUpiPayment && (
        <UPIPaymentScreen
          memberName={memberName}
          amount={amount}
          selectedUpiApp={selectedUpiApp}
          groupName="Goa Trip 🏖️"
          upiId={`${memberName.toLowerCase().replace(' ', '.')}@okaxis`}
          onBack={handleUpiPaymentBack}
          onConfirm={handleUpiPaymentConfirm}
          onCancel={handleUpiPaymentCancel}
        />
      )}

      {/* UPI App Selection Screen */}
      {showUpiSelection && (
        <ChooseUPIAppScreen
          onBack={handleUpiSelectionBack}
          onContinue={handleUpiAppSelected}
          onCancel={handleUpiSelectionCancel}
        />
      )}

      {/* Settle Up Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-300 ${
          isVisible ? 'bg-black/30 backdrop-blur-sm' : 'bg-black/0'
        }`}
        onClick={handleBackdropClick}
      >
        <div 
          className={`w-full max-w-md rounded-t-xl bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
        <div className="p-6 pt-4 relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full"></div>
          
          {!paymentSuccess && !showSuccess ? (
            <div className="transition-opacity duration-300">
              <div className="text-center pt-5">
                <h2 className="text-2xl font-bold text-gray-900">Settle Up</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Confirm how you want to settle with {memberName}.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div
                  className={`rounded-lg p-4 border transition-all duration-200 cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'bg-mint-green-accent border-primary'
                      : 'bg-white border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-soft">
                      <span className="material-symbols-outlined text-primary">qr_code_2</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-bold text-gray-900">Pay via UPI</h3>
                      <p className="text-xs text-gray-600">Instant, secure, and easy.</p>
                    </div>
                    {paymentMethod === 'upi' && (
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white">
                        <span className="material-symbols-outlined text-base">check</span>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`rounded-lg p-4 border transition-all duration-200 cursor-pointer ${
                    paymentMethod === 'cash'
                      ? 'bg-mint-green-accent border-primary'
                      : 'bg-white border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('cash')}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-soft">
                      <span className="material-symbols-outlined text-primary">payments</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-bold text-gray-900">Pay via Cash</h3>
                      <p className="text-xs text-gray-600">Settle in person.</p>
                    </div>
                    {paymentMethod === 'cash' && (
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white">
                        <span className="material-symbols-outlined text-base">check</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-mint-green-accent p-4 flex justify-between items-center">
                <p className="text-sm font-medium text-mint-green-dark">
                  You owe {memberName}:
                </p>
                <p className="text-xl font-bold text-gray-900">{amount}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  onClick={handleCancel}
                  className="w-full rounded-full bg-gray-100 py-3 text-sm font-bold text-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProceedToPay}
                  className="w-full rounded-full bg-primary py-3 text-sm font-bold text-black"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M5 13l4 4L19 7" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2"
                    style={{
                      strokeDasharray: 20,
                      strokeDashoffset: 0,
                      animation: 'draw-tick 0.5s ease-out'
                    }}
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-6">
                Payment Successful!
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                You have settled your amount with {memberName}.
              </p>
              <button
                onClick={handleDone}
                className="mt-8 w-full max-w-xs rounded-full bg-primary py-3 text-sm font-bold text-black"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  )
}

export default UpiCashModal
