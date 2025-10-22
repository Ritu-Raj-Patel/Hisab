import { useState } from "react"

export default function AddExpenseOverlay({ members = [], onClose }) {
  const fallbackMembers = [
    {
      id: 'you',
      name: 'You',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBd6yuedjzS6Qf0MbCjffpK_sKfqfv7SFnKGty4pY45_7v4eGl0uW9B_Jmez1sVYiYEV15Ef4P2bU8Bq5mC1ZIhl2beNaL64LtgzDXz7vpnA6chik93PlI0Tlow9YDabg4Ywnhkj8UTukQF_5hnoR2zdPWFZnSKEIMQT6W5lNMfiK9SwvaEpPpv-9jpcUKsmrAQGZQFHqIjbgUazPr2PJ8tyqkYVSlSj7aN632URXN2eRY6dUX2dWLzvpLHJYO3UsbxWljrrmKVF3j0',
    },
    {
      id: 'rohan',
      name: 'Rohan',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAgrrLmWPMaZ04U70E_FdBrg3z88Gy9TekIBxxl2o-tqoXULpGrQlkLvvIvotLTCX4W9HhWN9VgB8vnKT-aj8xPzgJ4X-hoN88OvsogcHw3omKnG6kYTq-iygSL0PbY3_A6jPQAi09-nnAFft0SnH8ln4PAqdus6qnPXC4i_Y2Dd03G79hJU-3SWBFyNFadKBhGpzt40GKp7MjwotZdp_e9RuInYzvuXUjr-pvs_E2C1dL32wevc33BI-8fx-pNMB8PFYb-OOY4zC-w',
    },
    {
      id: 'priya',
      name: 'Priya',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Cd2ABAxT2CvFAmz3IBpk-jfZ7riRrOhCSnBknxiCU2bYO9SgILygRw888i6ZfKnTpe272IMg0q4MuQTUZEzj3W1NmtiEnRcO4Y1-hWc5fYQlN3BT896bGVkxJLhqOgjLhVd-yQa8OJY-DwAkO1HFuA3JXpuh19Qchgd6RXJHMIb7I676Al-0cQEeYkSuP7cZiDZy4GdxFL38W0cE3-N3WvBcqoGq9qSw1qfhC2YGkVZpta004F3v7-_QTXhb3zI5cPs2ca6iv4qd',
    },
    {
      id: 'sunita',
      name: 'Sunita',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAphdcU10CVrZiMNSVByk3Tt05XMcYZp_XUQdTgK2IXdsB3l4AFd0drwjFLLgo4I03vvrE9tBpPU0AqwVkBVl-pWi-mqFf87W65wFdbOtZo8TvfVtwWg88uuP4mz7rSik4LD4xKjcYeZMPpLP4an25rl-MDmDU8yr2xZYSi006scUHSgP_ccJbnQ_wQv1fU_eH_UJ6GjVs4Zgrv2nTOXs3SuSnSUERfBC4J-3SdFrfc6ZkmmCTtxT8crQTMDdV-W6Y7twkYAoN8UIij',
    },
  ]

  const participants = members.length > 0 ? members : fallbackMembers
  const defaultShare = participants.length ? (100 / participants.length).toFixed(0) : '0'
  const defaultSplitAmount = participants.length ? (1200 / participants.length).toFixed(2) : '0.00'

  const [expenseName, setExpenseName] = useState('')
  const [category, setCategory] = useState('Food')
  const [amount, setAmount] = useState('1200.00')
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [paidBy, setPaidBy] = useState(participants[0]?.name ?? 'You')
  const [notes, setNotes] = useState('')
  const [splitMethod, setSplitMethod] = useState('equally')
  const [memberState, setMemberState] = useState(() =>
    participants.map((participant) => ({
      id: participant.id ?? participant.name,
      name: participant.name,
      avatar: participant.avatar,
      share: defaultShare,
      amount: defaultSplitAmount,
      locked: false,
    })),
  )

  const parsedAmount = Number.parseFloat(amount.replace(/,/g, '')) || 0
  const equalShare = participants.length ? parsedAmount / participants.length : 0
  const percentTotal = memberState.reduce(
    (sum, member) => sum + (Number.parseFloat(member.share) || 0),
    0,
  )
  const customTotal = memberState.reduce(
    (sum, member) => sum + (Number.parseFloat(member.amount) || 0),
    0,
  )
  const formattedAmount = parsedAmount.toFixed(2)
  const formattedAllocated = (splitMethod === 'custom' ? customTotal : parsedAmount).toFixed(2)
  const progressValue = (() => {
    if (splitMethod === 'percentage') {
      return Math.min(percentTotal, 100)
    }
    if (splitMethod === 'shares') {
      return Math.min(percentTotal, 100)
    }
    if (splitMethod === 'custom') {
      return Math.min(parsedAmount ? (customTotal / parsedAmount) * 100 : 0, 100)
    }
    return 0
  })()

  const handleShareChange = (id, value) => {
    setMemberState((prev) =>
      prev.map((member) => (member.id === id ? { ...member, share: value } : member)),
    )
  }

  const handleAmountChange = (id, value) => {
    setMemberState((prev) =>
      prev.map((member) => (member.id === id ? { ...member, amount: value } : member)),
    )
  }

  const toggleLock = (id) => {
    setMemberState((prev) =>
      prev.map((member) => (member.id === id ? { ...member, locked: !member.locked } : member)),
    )
  }

  const handleSubmit = () => {
    onClose?.()
  }

  const equalShareDisplay = Number.isFinite(equalShare) ? equalShare.toFixed(2) : '0.00'

  const splitOptions = [
    { key: 'equally', label: 'Equally' },
    { key: 'percentage', label: 'By %' },
    { key: 'shares', label: 'By Shares' },
    { key: 'custom', label: 'Custom' },
  ]

  const categories = [
    { value: 'Food', label: '🍔 Food' },
    { value: 'Travel', label: '✈️ Travel' },
    { value: 'Stay', label: '🏨 Stay' },
    { value: 'Activities', label: '🎟️ Activities' },
    { value: 'Shopping', label: '🛍️ Shopping' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-6 backdrop-blur-sm">
      <div className="relative flex h-full w-full max-w-md flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-white via-background-light to-background-light shadow-2xl">
        <header className="sticky top-0 z-10 flex h-24 items-center justify-between bg-white/80 px-4 pt-8 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-content-light"
            type="button"
          >
            <span className="material-icons text-2xl">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-content-light">Add Expense</h1>
          <div className="h-10 w-10" />
        </header>

        <main className="flex-1 space-y-5 overflow-y-auto px-4 pb-28">
          <section className="rounded-xl bg-white p-4 shadow-subtle">
            <h2 className="mb-4 text-base font-bold text-content-light">Expense Overview</h2>
            <div className="space-y-4">
              <input
                value={expenseName}
                onChange={(event) => setExpenseName(event.target.value)}
                className="w-full rounded-lg border-border-light bg-background-light p-3 text-sm text-content-light focus:border-primary focus:ring-primary"
                placeholder="Expense Name (e.g., Dinner at Goa)"
                type="text"
              />
              <div className="flex items-center gap-4">
                <div className="relative w-1/2">
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full appearance-none rounded-lg border-border-light bg-background-light p-3 pl-10 text-sm text-content-light focus:border-primary focus:ring-primary"
                  >
                    {categories.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="material-icons pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-subtle-light">
                    category
                  </span>
                </div>
                <div className="relative w-1/2">
                  <input
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    className="w-full rounded-lg border-border-light bg-background-light p-3 pl-8 text-right text-sm font-medium text-content-light focus:border-primary focus:ring-primary"
                    type="text"
                  />
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-subtle-light">
                    ₹
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-1/2">
                  <input
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className="w-full appearance-none rounded-lg border-border-light bg-background-light p-3 pl-10 text-sm text-content-light focus:border-primary focus:ring-primary"
                    type="date"
                  />
                  <span className="material-icons pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-subtle-light">
                    calendar_today
                  </span>
                </div>
                <div className="relative w-1/2">
                  <select
                    value={paidBy}
                    onChange={(event) => setPaidBy(event.target.value)}
                    className="w-full appearance-none rounded-lg border-border-light bg-background-light p-3 pl-10 text-sm text-content-light focus:border-primary focus:ring-primary"
                  >
                    {participants.map((participant) => (
                      <option key={participant.id ?? participant.name} value={participant.name}>
                        {participant.name}
                      </option>
                    ))}
                  </select>
                  <span className="material-icons pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-subtle-light">
                    account_balance_wallet
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-white p-4 shadow-subtle">
            <h2 className="mb-4 text-base font-bold text-content-light">Split Method</h2>
            <div className="flex rounded-full bg-background-light p-1">
              {splitOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setSplitMethod(option.key)}
                  className={`flex-1 rounded-full px-2 py-2 text-center text-xs font-medium transition ${
                    splitMethod === option.key
                      ? 'bg-white text-content-light shadow-soft'
                      : 'text-subtle-light'
                  }`}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-white p-4 shadow-subtle">
            <h2 className="mb-4 text-base font-bold text-content-light">Members Breakdown</h2>
            <div className="max-h-60 space-y-3 overflow-y-auto pr-2">
              {memberState.map((member) => (
                <div key={member.id} className="flex items-center gap-3">
                  <img src={member.avatar} alt={member.name} className="h-10 w-10 rounded-full object-cover" />
                  <p className="flex-1 font-medium text-content-light">{member.name}</p>

                  {splitMethod === 'equally' && (
                    <div className="flex items-center gap-2">
                      <p className="w-20 rounded-lg bg-background-light p-2 text-center text-sm text-subtle-light">
                        ₹{equalShareDisplay}
                      </p>
                    </div>
                  )}

                  {splitMethod === 'percentage' && (
                    <div className="relative w-24">
                      <input
                        value={member.share}
                        onChange={(event) => handleShareChange(member.id, event.target.value)}
                        className="w-full rounded-lg border-border-light bg-background-light p-2 text-right pr-6 text-sm focus:border-primary focus:ring-primary"
                        type="number"
                      />
                      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-sm text-subtle-light">%</span>
                    </div>
                  )}

                  {splitMethod === 'shares' && (
                    <div className="relative w-24">
                      <input
                        value={member.share}
                        onChange={(event) => handleShareChange(member.id, event.target.value)}
                        className="w-full rounded-lg border-border-light bg-background-light p-2 text-right pr-12 text-sm focus:border-primary focus:ring-primary"
                        type="number"
                      />
                      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-subtle-light">
                        share(s)
                      </span>
                    </div>
                  )}

                  {splitMethod === 'custom' && (
                    <div className="relative w-24">
                      <input
                        value={member.amount}
                        onChange={(event) => handleAmountChange(member.id, event.target.value)}
                        className="w-full rounded-lg border-border-light bg-background-light p-2 text-right pr-6 text-sm focus:border-primary focus:ring-primary disabled:bg-gray-200"
                        type="number"
                        disabled={member.locked}
                      />
                      <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-sm text-subtle-light">₹</span>
                      <button
                        onClick={() => toggleLock(member.id)}
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        type="button"
                      >
                        <span className="material-icons text-base">
                          {member.locked ? 'lock' : 'lock_open'}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {splitMethod !== 'equally' && (
              <div className="mt-4">
                <div className="flex h-8 items-center rounded-full bg-background-light">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${Math.max(0, progressValue)}%` }}
                  />
                </div>
              </div>
            )}

            <div className="mt-2 flex justify-between text-xs">
              <p className="text-subtle-light">Total:</p>
              {splitMethod === 'equally' || splitMethod === 'custom' ? (
                <p className="font-medium text-content-light">
                  ₹{Number.isFinite(Number.parseFloat(formattedAllocated)) ? formattedAllocated : '0.00'} / ₹
                  {Number.isFinite(parsedAmount) ? formattedAmount : '0.00'}
                </p>
              ) : (
                <p className="font-medium text-content-light">{Math.round(percentTotal)}% / 100%</p>
              )}
            </div>
          </section>

          <section className="rounded-xl bg-white p-4 shadow-soft">
            <h2 className="mb-2 text-base font-bold text-content-light">
              Notes / Description <span className="text-sm font-normal text-subtle-light">(Optional)</span>
            </h2>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className="w-full rounded-lg border-border-light bg-background-light p-3 text-sm text-content-light focus:border-primary focus:ring-primary"
              placeholder="Add any notes or attach a receipt..."
              rows={3}
            />
            <button
              className="mt-2 flex items-center gap-2 rounded-full border border-dashed border-primary px-4 py-2 text-sm font-medium text-primary"
              type="button"
            >
              <span className="material-icons text-base">attach_file</span>
              Attach File
            </button>
          </section>

          <section className="rounded-xl bg-mint-green-accent p-4 shadow-subtle">
            <div className="flex items-start gap-3">
              <span className="material-icons mt-1 text-2xl text-mint-green-dark">auto_awesome</span>
              <div>
                <h4 className="font-bold text-content-light">AI Suggestions</h4>
                <p className="mt-1 text-sm text-subtle-light">
                  Based on the expense "Dinner", this seems to be a 'Food' category expense. Consider splitting equally among all group members.
                </p>
              </div>
            </div>
          </section>
        </main>

        <div className="sticky bottom-0 left-0 right-0 z-10 bg-white/80 p-4 pt-3 backdrop-blur-sm">
          <button
            onClick={handleSubmit}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-black shadow-lg"
            type="button"
          >
            <span className="text-base font-bold">Add Expense</span>
          </button>
        </div>
      </div>
    </div>
  )
}

