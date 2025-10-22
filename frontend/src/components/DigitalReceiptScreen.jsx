export default function DigitalReceiptScreen({ 
  memberName = 'College Canteen',
  groupName = 'B.Tech Friends',
  amount = '₹85.00',
  txnId = 'TXN1234567890',
  date,
  time,
  onBack,
  onDownload 
}) {
  // Use provided date or generate current date
  const receiptDate = date || new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  
  const receiptTime = time || new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })

  return (
    <div className="fixed inset-0 z-[100] flex flex-col min-h-screen bg-background-light">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-background-light sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">₹</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Payment Receipt</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 pb-4">
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-up">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-left">
              <p className="text-sm text-gray-500">Paid To</p>
              <p className="text-lg font-bold text-gray-900">{memberName}</p>
            </div>
            <div className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-green-700">
              SUCCESSFUL
            </div>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Group</span>
              <span className="font-medium text-gray-900">{groupName}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Payment Mode</span>
              <span className="font-medium text-gray-900">UPI</span>
            </div>

            <hr className="border-gray-200 my-4" />

            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-gray-500">Amount</span>
              <span className="text-gray-900">{amount}</span>
            </div>

            <hr className="border-gray-200 my-4" />

            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-mono text-gray-900">{txnId}</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Date</span>
              <span className="font-medium text-gray-900">{receiptDate}</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Time</span>
              <span className="font-medium text-gray-900">{receiptTime}</span>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md p-2">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Simple QR code pattern */}
              <rect width="100" height="100" fill="white"/>
              <g fill="black">
                <rect x="0" y="0" width="7" height="7"/>
                <rect x="9" y="0" width="7" height="7"/>
                <rect x="18" y="0" width="7" height="7"/>
                <rect x="36" y="0" width="7" height="7"/>
                <rect x="54" y="0" width="7" height="7"/>
                <rect x="72" y="0" width="7" height="7"/>
                <rect x="81" y="0" width="7" height="7"/>
                <rect x="93" y="0" width="7" height="7"/>
                
                <rect x="0" y="9" width="7" height="7"/>
                <rect x="27" y="9" width="7" height="7"/>
                <rect x="45" y="9" width="7" height="7"/>
                <rect x="63" y="9" width="7" height="7"/>
                <rect x="93" y="9" width="7" height="7"/>
                
                <rect x="0" y="18" width="7" height="7"/>
                <rect x="18" y="18" width="7" height="7"/>
                <rect x="36" y="18" width="7" height="7"/>
                <rect x="54" y="18" width="7" height="7"/>
                <rect x="72" y="18" width="7" height="7"/>
                <rect x="93" y="18" width="7" height="7"/>
                
                {/* More patterns for QR code appearance */}
                <rect x="9" y="27" width="7" height="7"/>
                <rect x="27" y="27" width="7" height="7"/>
                <rect x="45" y="27" width="7" height="7"/>
                <rect x="63" y="27" width="7" height="7"/>
                <rect x="81" y="27" width="7" height="7"/>
                
                <rect x="0" y="36" width="7" height="7"/>
                <rect x="18" y="36" width="7" height="7"/>
                <rect x="36" y="36" width="7" height="7"/>
                <rect x="54" y="36" width="7" height="7"/>
                <rect x="72" y="36" width="7" height="7"/>
                <rect x="93" y="36" width="7" height="7"/>
              </g>
            </svg>
          </div>
          <p className="text-xs text-gray-500">Scan QR for transaction verification</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-background-light">
        <p className="text-center text-xs text-gray-500 mb-4">Powered by Hisab.AI</p>
        <button
          onClick={onDownload}
          className="w-full bg-primary text-black font-bold py-3 px-4 rounded-lg active:opacity-80 transition-opacity"
        >
          Download Receipt (PDF)
        </button>
      </footer>
    </div>
  )
}
