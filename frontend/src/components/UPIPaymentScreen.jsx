import { useState } from 'react'

const paymentMethodLogos = {
  gpay: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIakkum3yizo8qR6yiMuUnTUw9VnaPgUSc-BrkpslHYNjy-hbCZ1jpwMUe8SpSLMdVxAGLURCatd3U74_hXCXNDdRQpvv56LHh9mRdZXzkZHX36TRwLx0Jzad0AVDHry3ZLiRN3cDYUeqk5FazAqLuY26Op3ATZf6uYibGWIHkJXLOOnylVuAt7XJUo2ooyWJApuVfeWsTs7LVhc0-XonUY6HrQXhv68sBrnrwtiQsstyZQURVtdnGdpdLpDyFOu365nXc7KuJo1CO',
  phonepe: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA51Yt_culXD64z0Xj80Do3u26iU1qrys9BePRmpijE0h5Fdv7_oPX7_bT9oa8LvAA0IqsvB_Lbf_7kXYLjjM4JcRBwdcRRDl1d9Ym_A3qbsoWWGPG4Qb_1HkkPb3HnsExqAOjfdtkO6a6geUO61wf8uMGhDQ7DHlw530tFvkAN1f1W8GnGCQr-PYzmZNEgOusxn51NIPTbOaY6bXPEo92aKKbpRxn1n0NypjT02yUkJrGakahOFN68CRZBFqj6nAgNEgYaH2jkMEeV',
  paytm: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASmwivwkMcvcnbJWkSHiMJT3Ch04TYnjxeyKraBRo8bsjt7AIolTC_97DBRhJCE3z0JPST438-CV2jrypjijAJk1qn75R76dSTPTavzB7jvVlID-mv_OtCV4iDmYxOpNPaGoi5JHteB1_mABCruJhgmasPgBNcDUG8d-TtgfNi2p95q7O9Ah_sZDt-R7nkEF6WAbfxMa1B4Zl_MWmCmI70c_KDpjJRsLUlCgrPZSSHGjGEq9Ws1lt1aeC8hJMHE-YgHPJ4OU_qU5Fw',
}

const paymentMethodNames = {
  gpay: 'Google Pay',
  phonepe: 'PhonePe',
  paytm: 'Paytm',
}

export default function UPIPaymentScreen({ 
  memberName = 'Sophia Bennett', 
  memberAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYr9pqds4ZWgNh16No-iVVvkVUh-zjZqnMXsra7JH16cGWADjUa6X0SLtScDInHHt2COmQWGFFWmT9nwwI8mc7YiuKsoXxy4tTR1wmMqlDs1FofWwCbDUSEX8r20dTrr4TBmYFo-HvjoSci5ncCD-7L808G7xhqHBcn1lGzqiOtWP287FYhpCwynwXMIxgFoUZDz4Njo-75G5I5XrLFwXumtjEy54SUHoYzGRsGkPciaDJRRknFCtFZXPvgUZmMVf1a5KoWdENwMSN',
  amount = '₹550.00',
  upiId = 'sophia.bennett@okaxis',
  groupName = 'Trip to Goa',
  selectedUpiApp = 'gpay',
  onBack,
  onConfirm,
  onCancel 
}) {
  const handleConfirmPayment = () => {
    if (onConfirm) {
      onConfirm()
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex flex-col min-h-screen justify-between bg-background-light">
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <header className="py-6">
          <div className="relative flex items-center justify-center">
            <button 
              onClick={onBack}
              className="absolute left-0 p-2 text-gray-900"
            >
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
              </svg>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Confirm Payment</h1>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            Please review the details below before confirming your payment.
          </p>
        </header>

        <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
          {/* Paying To */}
          <div className="text-center">
            <p className="text-sm text-gray-600">Paying To</p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <img alt={memberName} className="w-10 h-10 rounded-full" src={memberAvatar} />
              <span className="font-semibold text-lg text-gray-900">{memberName}</span>
            </div>
          </div>

          {/* Amount */}
          <div className="text-center">
            <p className="text-sm text-gray-600">Amount</p>
            <p className="text-4xl font-bold text-gray-900 mt-1">{amount}</p>
          </div>

          <hr className="border-gray-200" />

          {/* Payment Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Payment Method</span>
              <div className="flex items-center gap-2">
                <img 
                  alt={`${paymentMethodNames[selectedUpiApp]} Logo`}
                  className="w-6 h-6" 
                  src={paymentMethodLogos[selectedUpiApp]} 
                />
                <span className="font-medium text-gray-900">
                  UPI via {paymentMethodNames[selectedUpiApp]}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">UPI ID</span>
              <span className="font-medium text-gray-900">{upiId}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Group</span>
              <span className="font-medium text-gray-900">{groupName}</span>
            </div>
          </div>
        </div>

        {/* AI Tip */}
        <div className="mt-6 bg-primary/10 p-4 rounded-lg flex items-start gap-4">
          <div className="text-primary flex-shrink-0 mt-1">
            <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-40a8,8,0,0,1-8-8V112a8,8,0,0,1,16,0v56A8,8,0,0,1,120,176ZM128,80a12,12,0,1,1-12,12A12,12,0,0,1,128,80Z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-sm text-gray-900">AI Tip</h3>
            <p className="text-sm text-gray-600 mt-1">
              Did you know? UPI transactions are processed instantly, ensuring quick and secure payments.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-background-light sticky bottom-0">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onCancel}
            className="w-full py-3 px-5 rounded-lg bg-gray-200 text-gray-900 font-bold text-base"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmPayment}
            className="w-full py-3 px-5 rounded-lg bg-primary text-black font-bold text-base flex items-center justify-center gap-2"
          >
            <span>Confirm &amp; Pay</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
