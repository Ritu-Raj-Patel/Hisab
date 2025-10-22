import { useState } from 'react'
import AddExpenseOverlay from '../components/AddExpenseOverlay'
import UpiCashModal from '../UpiCashModal'

const groupDetails = {
  'weekend-getaway': {
    title: 'Goa Trip 🏖️',
    createdOn: 'Created on 24th Nov, 2023',
    metrics: [
      { label: 'Total Spent', value: '₹12,450', bgClass: 'bg-emerald-50', captionClass: 'text-emerald-700', valueClass: 'text-text-light' },
      { label: 'Per Person', value: '₹3,112', bgClass: 'bg-emerald-50', captionClass: 'text-emerald-700', valueClass: 'text-text-light' },
      { label: 'Pending', value: '₹870', bgClass: 'bg-emerald-50', captionClass: 'text-emerald-700', valueClass: 'text-red-500' },
    ],
    expenses: [
      {
        id: 'burger-king',
        emoji: '🍔',
        title: 'Burger King',
        note: 'Paid by You, shared with 3',
        amount: '₹1,200',
        status: 'You get back ₹900',
        statusClass: 'text-green-500',
      },
      {
        id: 'flight-tickets',
        emoji: '✈️',
        title: 'Flight Tickets',
        note: 'Paid by Rohan, shared with 4',
        amount: '₹8,000',
        status: 'You owe ₹2,000',
        statusClass: 'text-red-500',
      },
      {
        id: 'hotel-stay',
        emoji: '🏨',
        title: 'Hotel Stay',
        note: 'Paid by Priya, shared with 4',
        amount: '₹3,250',
        status: 'You owe ₹812',
        statusClass: 'text-red-500',
      },
    ],
    members: [
      {
        id: 'you',
        name: 'You',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd6yuedjzS6Qf0MbCjffpK_sKfqfv7SFnKGty4pY45_7v4eGl0uW9B_Jmez1sVYiYEV15Ef4P2bU8Bq5mC1ZIhl2beNaL64LtgzDXz7vpnA6chik93PlI0Tlow9YDabg4Ywnhkj8UTukQF_5hnoR2zdPWFZnSKEIMQT6W5lNMfiK9SwvaEpPpv-9jpcUKsmrAQGZQFHqIjbgUazPr2PJ8tyqkYVSlSj7aN632URXN2eRY6dUX2dWLzvpLHJYO3UsbxWljrrmKVF3j0',
        note: 'Paid ₹1,200',
        summary: 'Owed ₹1,870',
        summaryClass: 'text-green-500',
        settleAmount: '₹1,870',
      },
      {
        id: 'rohan',
        name: 'Rohan',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgrrLmWPMaZ04U70E_FdBrg3z88Gy9TekIBxxl2o-tqoXULpGrQlkLvvIvotLTCX4W9HhWN9VgB8vnKT-aj8xPzgJ4X-hoN88OvsogcHw3omKnG6kYTq-iygSL0PbY3_A6jPQAi09-nnAFft0SnH8ln4PAqdus6qnPXC4i_Y2Dd03G79hJU-3SWBFyNFadKBhGpzt40GKp7MjwotZdp_e9RuInYzvuXUjr-pvs_E2C1dL32wevc33BI-8fx-pNMB8PFYb-OOY4zC-w',
        note: 'Paid ₹8,000',
        summary: 'Owed ₹4,888',
        summaryClass: 'text-green-500',
        settleAmount: '₹4,888',
      },
      {
        id: 'priya',
        name: 'Priya',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Cd2ABAxT2CvFAmz3IBpk-jfZ7riRrOhCSnBknxiCU2bYO9SgILygRw888i6ZfKnTpe272IMg0q4MuQTUZEzj3W1NmtiEnRcO4Y1-hWc5fYQlN3BT896bGVkxJLhqOgjLhVd-yQa8OJY-DwAkO1HFuA3JXpuh19Qchgd6RXJHMIb7I676Al-0cQEeYkSuP7cZiDZy4GdxFL38W0cE3-N3WvBcqoGq9qSw1qfhC2YGkVZpta004F3v7-_QTXhb3zI5cPs2ca6iv4qd',
        note: 'Paid ₹3,250',
        summary: 'Owes ₹138',
        summaryClass: 'text-red-500',
        settleAmount: '₹138',
      },
      {
        id: 'sunita',
        name: 'Sunita',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAphdcU10CVrZiMNSVByk3Tt05XMcYZp_XUQdTgK2IXdsB3l4AFd0drwjFLLgo4I03vvrE9tBpPU0AqwVkBVl-pWi-mqFf87W65wFdbOtZo8TvfVtwWg88uuP4mz7rSik4LD4xKjcYeZMPpLP4an25rl-MDmDU8yr2xZYSi006scUHSgP_ccJbnQ_wQv1fU_eH_UJ6GjVs4Zgrv2nTOXs3SuSnSUERfBC4J-3SdFrfc6ZkmmCTtxT8crQTMDdV-W6Y7twkYAoN8UIij',
        note: 'Paid ₹0',
        summary: 'Owes ₹3,112',
        summaryClass: 'text-red-500',
        settleAmount: '₹3,112',
      },
    ],
    insights: {
      breakdown: [
        { label: '✈️ Travel', amount: '₹8,000', percent: 64 },
        { label: '🏨 Stay', amount: '₹3,250', percent: 26 },
        { label: '🍔 Food', amount: '₹1,200', percent: 10 },
      ],
      aiTip:
        'Travel was your biggest expense category, accounting for 64% of the total spend. To save money on your next trip, consider booking flights in advance or traveling during the off-season.',
    },
  },
}

const buildDefaultGroupDetail = (group) => {
  if (!group) {
    return {
      title: 'Group',
      createdOn: '',
      metrics: [],
      expenses: [],
      members: [],
      insights: { breakdown: [], aiTip: '' },
    }
  }

  return {
    title: group.name,
    createdOn: 'Keep adding expenses to unlock smart insights.',
    metrics: [
      { label: 'Total Spent', value: group.total ?? '—', bgClass: 'bg-gray-100', captionClass: 'text-text-muted', valueClass: 'text-text-light' },
      { label: 'Members', value: `${group.members}`, bgClass: 'bg-gray-100', captionClass: 'text-text-muted', valueClass: 'text-text-light' },
      { label: 'Status', value: group.statusLabel, bgClass: 'bg-gray-100', captionClass: 'text-text-muted', valueClass: 'text-text-light' },
    ],
    expenses: [],
    members: group.avatars.slice(0, group.members).map((avatar, index) => ({
      id: `${group.id}-member-${index}`,
      name: `Member ${index + 1}`,
      avatar,
      note: 'Expense data pending',
      summary: '',
      summaryClass: 'text-text-muted',
      settleAmount: '₹0',
    })),
    insights: { breakdown: [], aiTip: 'Add expenses to see AI insights for this group.' },
  }
}

export default function GroupDetailScreen({ group, onBack }) {
  const detail = groupDetails[group?.id] ?? buildDefaultGroupDetail(group)
  const [tab, setTab] = useState('expenses')
  const [showAddExpense, setShowAddExpense] = useState(false)
  const [showUpiCashModal, setShowUpiCashModal] = useState(false)
  const [selectedMember, setSelectedMember] = useState({ name: 'Rohan', amount: '₹4,888' })

  const handleSettleClick = (member) => {
    setSelectedMember({ name: member.name, amount: member.settleAmount })
    setShowUpiCashModal(true)
  }

  return (
    <div className="relative flex h-full flex-col">
      <header className="flex items-center justify-between pt-2">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-text-light shadow-subtle"
        >
          <span className="material-icons text-lg">arrow_back</span>
        </button>
        <div className="text-center">
          <h1 className="text-lg font-semibold text-text-light">{detail.title}</h1>
          {detail.createdOn && (
            <p className="text-xs text-text-muted">{detail.createdOn}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-text-light shadow-subtle">
            <span className="material-icons text-lg">edit</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-text-light shadow-subtle">
            <span className="material-icons text-lg">more_horiz</span>
          </button>
        </div>
      </header>

      <main className="mt-6 flex-1 overflow-y-auto pb-16">
        <section className="grid grid-cols-3 gap-3">
          {detail.metrics.map((metric) => (
            <div
              key={`${metric.label}-${metric.value}`}
              className={`rounded-xl p-3 text-center ${metric.bgClass ?? 'bg-emerald-50'}`}
            >
              <p className={`text-xs ${metric.captionClass ?? 'text-emerald-700'}`}>{metric.label}</p>
              <p className={`mt-1 text-lg font-semibold ${metric.valueClass ?? 'text-text-light'}`}>{metric.value}</p>
            </div>
          ))}
        </section>

        <div className="mt-5 rounded-full bg-white p-1 shadow-subtle">
          {['expenses', 'members', 'insights'].map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`w-1/3 rounded-full px-4 py-2 text-center text-sm font-medium capitalize transition ${
                tab === key ? 'bg-card-light text-text-light shadow-subtle' : 'text-text-muted'
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {tab === 'expenses' && (
          <div className="mt-4 space-y-3">
            {detail.expenses.map((expense) => (
              <article key={expense.id} className="rounded-xl bg-white p-4 shadow-subtle">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-xl">
                      {expense.emoji}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-light">{expense.title}</h3>
                      <p className="text-xs text-text-muted">{expense.note}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-text-light">{expense.amount}</p>
                    {expense.status && (
                      <p className={`text-xs ${expense.statusClass ?? 'text-text-muted'}`}>{expense.status}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}

            {detail.expenses.length === 0 && (
              <p className="rounded-xl bg-white p-4 text-sm text-text-muted shadow-subtle">
                No expenses recorded yet.
              </p>
            )}

            <button
              onClick={() => setShowAddExpense(true)}
              className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-background-dark shadow-subtle"
              type="button"
            >
              <span className="material-icons text-base">add</span>
              Add Expense
            </button>
          </div>
        )}

        {tab === 'members' && (
          <div className="mt-4 space-y-3">
            {detail.members.map((member) => (
              <article key={member.id} className="rounded-xl bg-white p-4 shadow-subtle">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={member.avatar} alt={member.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <h3 className="text-sm font-semibold text-text-light">{member.name}</h3>
                      <p className="text-xs text-text-muted">{member.note}</p>
                    </div>
                  </div>
                  {member.summary && (
                    <p className={`text-sm font-medium ${member.summaryClass ?? 'text-text-muted'}`}>
                      {member.summary}
                    </p>
                  )}
                </div>

                {member.settleAmount && member.settleAmount !== '₹0' && (
                  <button
                    onClick={() => handleSettleClick(member)}
                    className="mt-3 w-full rounded-full bg-mint-green-accent py-2 text-sm font-semibold text-mint-green-dark"
                    type="button"
                  >
                    Settle UPI
                  </button>
                )}
              </article>
            ))}

            {detail.members.length === 0 && (
              <p className="rounded-xl bg-white p-4 text-sm text-text-muted shadow-subtle">
                Add members to start tracking contributions.
              </p>
            )}
          </div>
        )}

        {tab === 'insights' && (
          <div className="mt-4 space-y-4">
            {detail.insights.breakdown.length > 0 && (
              <div className="rounded-xl bg-white p-4 shadow-subtle">
                <h3 className="mb-3 text-sm font-semibold text-text-light">Spending Breakdown</h3>
                <div className="space-y-3">
                  {detail.insights.breakdown.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-xs text-text-light">
                        <p>{item.label}</p>
                        <p className="font-medium">{item.amount}</p>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-background-light">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detail.insights.aiTip && (
              <div className="rounded-xl bg-emerald-50 p-4 shadow-subtle">
                <div className="flex items-start gap-3">
                  <span className="material-icons text-lg text-emerald-700">auto_awesome</span>
                  <p className="text-sm text-text-muted">{detail.insights.aiTip}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {showAddExpense && (
        <AddExpenseOverlay
          members={detail.members}
          onClose={() => setShowAddExpense(false)}
        />
      )}

      {showUpiCashModal && (
        <UpiCashModal
          memberName={selectedMember.name}
          amount={selectedMember.amount}
          onClose={() => setShowUpiCashModal(false)}
        />
      )}
    </div>
  )
}
