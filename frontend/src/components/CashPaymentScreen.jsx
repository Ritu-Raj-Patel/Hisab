export default function CashPaymentScreen({ 
  memberName = 'Rohan',
  memberAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgrrLmWPMaZ04U70E_FdBrg3z88Gy9TekIBxxl2o-tqoXULpGrQlkLvvIvotLTCX4W9HhWN9VgB8vnKT-aj8xPzgJ4X-hoN88OvsogcHw3omKnG6kYTq-iygSL0PbY3_A6jPQAi09-nnAFft0SnH8ln4PAqdus6qnPXC4i_Y2Dd03G79hJU-3SWBFyNFadKBhGpzt40GKp7MjwotZdp_e9RuInYzvuXUjr-pvs_E2C1dL32wevc33BI-8fx-pNMB8PFYb-OOY4zC-w',
  amount = '₹4,888',
  groupName = 'Goa Trip 🏖️',
  onBack,
  onMarkAsPaid,
  onCancel 
}) {
  return (
    <div className="fixed inset-0 z-[60] relative mx-auto flex w-full max-w-md flex-col bg-gradient-to-b from-white via-background-light to-background-light min-h-screen">
      {/* Animated Rupee Symbols Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[10%] top-0 animate-particle-up text-primary/30 text-4xl">₹</div>
        <div className="absolute left-[80%] top-0 animate-particle-up-2 text-primary/20 text-6xl">₹</div>
        <div className="absolute left-[30%] top-0 animate-particle-up-3 text-primary/40 text-2xl">₹</div>
        <div className="absolute left-[50%] top-0 animate-particle-up-2 text-primary/30 text-5xl">₹</div>
        <div className="absolute left-[95%] top-0 animate-particle-up text-primary/20 text-3xl">₹</div>
        <div className="absolute left-[5%] top-0 animate-particle-up-3 text-primary/50 text-4xl">₹</div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-10 flex h-24 items-center justify-between px-4 pt-8">
        <button 
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-900"
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
          {/* Payment Card */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-600">Paying To</p>
              <img alt={memberName} className="h-16 w-16 rounded-full my-3" src={memberAvatar} />
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
                <p className="mt-1 text-sm text-gray-600">
                  Please hand over the cash amount to {memberName} in person. Once you mark this payment as paid, {memberName} will need to confirm the receipt to fully settle the expense.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-6">
          <button
            onClick={onMarkAsPaid}
            className="w-full rounded-full bg-gradient-to-r from-primary to-[#2CDA43] py-4 text-base font-bold text-black shadow-lg shadow-primary/30"
          >
            Mark as Paid
          </button>
          <button
            onClick={onCancel}
            className="w-full rounded-full py-4 text-base font-medium text-gray-600"
          >
            Cancel
          </button>
        </div>
      </main>
    </div>
  )
}
