import { useState } from 'react'
import GroupDetailScreen from './GroupDetailScreen'

const stats = [
  { label: 'Total Expenses', value: '₹1,25,000' },
  { label: 'Pending', value: '₹12,500' },
  { label: 'Your Balance', value: '₹58,300' },
]

const recentActivity = [
  {
    title: 'Starbucks Coffee',
    time: '14 Jan, 2026 • 09:30',
    amount: '-₹483',
    badge: { bg: 'bg-green-100', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNk46Z9p98FwcPb_nxMmAIw9WoFWChh9R1SvXF6phDVeSuhEKsKAxj1IssD2DQBMQVQ24VwEdTs5MF0dBGRl3wUrlqUv482-jWMixGeBT-775pl9eYIV9OB-yNdg3wxicvtt2da4CUSld4QYPjADKgR9A-o-6mAUvxNqNcHIoEmuAuU4oDtz60i2qOGx8xx_Pnw9KBTsENiVJyWhOfeuTfdMhjX4Ty3wDNaTL4dMMjFER4A3WspivsXS2hYnogNEZBi2dSQB-1gH1c' },
  },
  {
    title: 'Goa Getaway • Splitwise Crew',
    time: '13 Jan, 2026 • Settled 2/4',
    amount: '-₹8,640',
    badge: { bg: 'bg-orange-100', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx7Uvn9koqRAEJmkMKYgQcdpJiCrE4KQn3iuWcZgFv0INQprIGoIrNsqhCprvhBT5Fp6Li7wY-Wor1ASHMkJ5hWKHaJXzdSPIXRb2Q9qAC9wsLlAkbBf5uG0YLKeCorrg2UkdyDpDUVfKC1Ey1DwOGW1Q5BS8bGWBiR39aBezla1qsBeuCkLL8Um3ug056Kxg5iE0YFHVDSFcBZ3u8B0YH7R6GeyaBDZ3p472Oy0TgDqO44c' },
  },
  {
    title: 'Rent • Riverside Flatmates',
    time: '12 Jan, 2026 • Due in 3 days',
    amount: '-₹18,000',
    badge: { bg: 'bg-blue-100', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaDqhUh9qe5JoHCDIbfsxeKv1KjYwzKyrKTm2oKHG_c05zmVbVrdU3QWysFLtqJPaELX2wYC0XVJS01Om5w86hz4sDydfkWWS81BVMf5M7ZaNqHz_j2gGQK8pMnPGH3Gsk_jYdrc-8N_gvzc0AC1if-Hwx9cFUIa6SEU6Y0SSXNFNOS01N2I' },
  },
]

const smartInsights = [
  {
    title: 'Travel budget alert',
    body: 'You are tracking 92% of your January travel budget. Weekend trip may exceed limit by ₹1,800.',
  },
  {
    title: 'Subscription tip',
    body: 'Switch Spotify Duo → Family to save ₹1,440 this year. 3 friends already on Premium nearby.',
  },
]

const assistantPrompts = [
  '“How much did I spend on Zomato last month?”',
  '“Goa trip ka total kharcha kitna hua?”',
  '“Set a travel budget for next weekend.”',
]

const friends = [
  { name: 'Floyd', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS-hiTwDPSqGfjyW6Sa3PIjx95WdmqDxIEzRZ0Clcedf3cTLAivMrlWFYs76u3IFWWbkT5yK648O3JLCh5q6rxFJnaSB59iyRqJIu8gXxCEErki6_58xkKD_IQPheEbqvmvFCcsNH1cvv5fE2r2RLxJR8u_UGC_TNaYsl10ePZmeo_pvirpnLbrJOJP9CPgcMQAxFmBM-x-ZOAX3yd5PxBrwmIb_JSF-kgdQBI44pLIrR1U9aOPVzESK1OxyFFkmM3V9ppXY70Nfz-' },
  { name: 'Albert', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp7S6_DSkEXFpyU146-cUJLdG619hUUKqb1UIuPNxTi8LgsAP3qGAuyG8F4C0hPthb7xRCHVuYAaHiLyiDmlaJqOwSPNplxaa6ZMTZyQlUYQsudBM8W1GSwn-9EKtsNT2nHfa6TLV0NI33A0VwJWzd8b3couhuhXkkS1adu9yF9cD4mnX6nvQ0yrFhSn_CrwX-wVLfpq5_ouaO5k_j4V2ug9wOvRkMEWXU-jSpTyuRJmqJIZN0d62uu4tsi8KV65miRxv12tJrgW9m' },
  { name: 'Bessie', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS1Q8-il2ygKfPjvOQTloTxq6xcEwFk0_b-lN2mzosvNgCoQeVtj_ejGiWnv91pAydrkCO7mWrVQBWrrUdV_HlFIKx9JwWx7hsL__9CQO_porY3qZrbx7DIcO84UJrbPa3rXNcnNTjrBGb5RWuqxKCmitYmfUTF0GscTEO9_f7pTi80DMgLvxHGH2tVFW85XX7iTdpLUBvCTZjulbQIsTeETwzxOcsQjbXEtNKO-OeTGlntuRu9yOMfwCBBwk6L6esbXs-1URAVvaK' },
  { name: 'Cody', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOMBvw7koMUDDyuZ4toS9sQUNitoKxSJoAcIszQyvx9LCv-c1s6hVOYh2DphqS2j-01pYmoDKtbVTwdwmCyicGEXRvOZqzqsh17gyUR4hpiadqfg7wPh161T79NhCGWQZpI-zOnkc7FJU0-PFqyBT7CnZCMja0Q73VttpDX6wW8f7Wdy4QYGa8thtVx0m1cQSXKlGSx-diCk5VhEW1tnc3a2ABoorusTrswepwpu4eitdBUteJ1eFy_omuHoRLW__L6nBjtZXHTp38' },
  { name: 'Jane', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNfLs7I9ZF4jjk0IUZQerUoIoUjX8xin-3BixRwcEd3GZ3gDWeO7G3-k9V9HXoIIQO_CtQmpon-HbjfbS4aO90D99uK5QVlRA0a9CiCb17T6G5MZnIo7aZEwXvM0NStN519bZbmyBWfQEoYs8DSzqurbOzSjPgnAixBYbmzLTpj0a3V-QSBNzDNChOXzn-MTQbYiuQh8jH5pB0Awj6XrTriv6MGRbKidsJE6z_O8jttZYbNJ_Gg4eHvJMwx1tEZ-eeWygmn_8mG8wA' },
]

const groups = [
  {
    id: 'weekend-getaway',
    name: 'Weekend Getaway',
    members: 4,
    status: 'active',
    statusLabel: 'Ongoing',
    statusColor: 'text-primary',
    statusBg: 'bg-primary/20',
    emoji: '🏖️',
    total: '₹32,400',
    summary: 'You owe',
    balance: '₹2,850',
    balanceColor: 'text-red-500',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBILlCMrFMXS4Ewb7-9eAox_76PtzfuLQurpRdud--0ld7eTw_EcZnamLByS7yeZ23JxSwDUNOVj9M9ossjgRv35Z1wAN0PqX3XkeGHnLq9qMnNkslI_HVWQgZScC_c4eLcIBVOBlGLxUQ3l5pHmW4DHY3YqdwWWfH4rjidXXGXJ9TwjqEWRzsl8q2qfX35CqlJP_5pVU3051ofa8760f0HficEXefX_nGflCL4BLCngECRfEN9WsVU6TwjK1s6W00uSypXUHmZzen',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAz1-6GYa1P8DqgnOXHQVz333UWgZ5DymkvEp0lM-obgoPPRV3Cq0CfRba-u8kVP4QTh2DY2ujnjBes-H3d4qIYJG1beCHqWfXV1XQ6p7mrjSq5Sufi4gmcZOqggul9E59BY72JuAdZO2_bndzWaZ2uF03E3Gb-GcEIez8_TO9whH1NQ5lCIv2cPhktKgpKuoSyPnBxp6aTE-yw_VXJovHCc6dC481tZU_OGe4Qqza6KPnUhOHP97X9BZ1DoSvEw2em2qJXhGUltHG-',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAphdcU10CVrZiMNSVByk3Tt05XMcYZp_XUQdTgK2IXdsB3l4AFd0drwjFLLgo4I03vvrE9tBpPU0AqwVkBVl-pWi-mqFf87W65wFdbOtZo8TvfVtwWg88uuP4mz7rSik4LD4xKjcYeZMPpLP4an25rl-MDmDU8yr2xZYSi006scUHSgP_ccJbnQ_wQv1fU_eH_UJ6GjVs4Zgrv2nTOXs3SuSnSUERfBC4J-3SdFrfc6ZkmmCTtxT8crQTMDdV-W6Y7twkYAoN8UIij',
    ],
  },
  {
    id: 'project-lunch',
    name: 'Project Team Lunch',
    members: 3,
    status: 'unsettled',
    statusLabel: 'Pending',
    statusColor: 'text-yellow-600',
    statusBg: 'bg-yellow-100',
    emoji: '💼',
    total: '₹6,420',
    summary: 'You are owed',
    balance: '₹980',
    balanceColor: 'text-green-500',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgrrLmWPMaZ04U70E_FdBrg3z88Gy9TekIBxxl2o-tqoXULpGrQlkLvvIvotLTCX4W9HhWN9VgB8vnKT-aj8xPzgJ4X-hoN88OvsogcHw3omKnG6kYTq-iygSL0PbY3_A6jPQAi09-nnAFft0SnH8ln4PAqdus6qnPXC4i_Y2Dd03G79hJU-3SWBFyNFadKBhGpzt40GKp7MjwotZdp_e9RuInYzvuXUjr-pvs_E2C1dL32wevc33BI-8fx-pNMB8PFYb-OOY4zC-w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Cd2ABAxT2CvFAmz3IBpk-jfZ7riRrOhCSnBknxiCU2bYO9SgILygRw888i6ZfKnTpe272IMg0q4MuQTUZEzj3W1NmtiEnRcO4Y1-hWc5fYQlN3BT896bGVkxJLhqOgjLhVd-yQa8OJY-DwAkO1HFuA3JXpuh19Qchgd6RXJHMIb7I676Al-0cQEeYkSuP7cZiDZy4GdxFL38W0cE3-N3WvBcqoGq9qSw1qfhC2YGkVZpta004F3v7-_QTXhb3zI5cPs2ca6iv4qd',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCM8wGldLkSQLPpUN8yMDRvbHs-t2fuwsLsTwqNv8JojHUSNHwyjCebljLIOHTl0iW9SVk_IQZSvhtjVlkW7HfYvpNq3tLfRFdZi1aZES_tQtfeh664qzV4HJAxoqMsoZVcm1e2dQJuaZxrE05Rhw-PnZZGAvzzi410Ml0CkGZVzYz1CTDKn_CXupk2tot-Np4qOTwGOmdHJp1vp1GnuyN10UjEdouWNeKm4QVZmHxpD5l6eHSqZKkqYnMbjsKVhgob0-oMcBCsBc0i',
    ],
  },
  {
    id: 'flatmates',
    name: 'Flatmates',
    members: 2,
    status: 'completed',
    statusLabel: 'Settled',
    statusColor: 'text-green-600',
    statusBg: 'bg-green-100',
    emoji: '🏠',
    total: '₹1,02,800',
    summary: 'All Settled',
    balance: '',
    balanceColor: 'text-text-muted',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAx9qccQWLf0BkYppAdoxcg2xHf6x-3ij_AekSSxY6GOhdzlpBjLjz2p7ej5YyicEu3iKgOjOCQBmZR4KhJOwufuzM5lDqHwTCY9nOWeU5gGahI2Pm14kZQ171rYO7oD_85zMuAlrmjhdI5MvN0DnIBte8biP1LtPCZgjkXXqXLJke5oobtrW_amKvmWYGuWCGsf3UFRRO0jlJJm4A02zwl8KcrnnFv2JC5iiaZ8O13pay9JivtnUeGfl8Jd0fm7YygUVZPq7I7yUU3',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAXDvWQRYqy0tlPL_ObHE6pSPhtQf8BptuIOaTEBTUqVZxOySPHobClupA9Xz6tD2iSEMUzolonQyCfPBLB07IFkkpi-9s6WDsWqCiAVgSqEgtiqS2Nfor5p32MxlG89PlKTK9qpbsP6Y9U7vXNV538jwWGMaiGCzl2E3Llmmfvv25hHbt9mDRN5CbL3SzYFET6jVqnMZHeXr48ieLvQ3MotiYMG5DTGlgu-GVkeDUntYpg0jw1yA4-od3BEPlz9LBQGl4YxkOMJi0',
    ],
  },
]

export default function DashboardScreen({ activeTab, onTabChange, selectedGroupId, onOpenGroup, onOpenInvite }) {
  const [groupFilter, setGroupFilter] = useState('active')

  const filteredGroups = groups.filter((group) => {
    if (groupFilter === 'active') return group.status === 'active'
    if (groupFilter === 'completed') return group.status === 'completed'
    if (groupFilter === 'unsettled') return group.status === 'unsettled'
    return true
  })

  const isHomeTab = activeTab === 'home'
  const isGroupsTab = activeTab === 'groups'
  const isInsightsTab = activeTab === 'insights'
  const isGroupDetailTab = activeTab === 'groupDetail'
  const isGroupsNavActive = isGroupsTab || isGroupDetailTab

  const activeGroup = groups.find((group) => group.id === selectedGroupId) ?? groups[0]

  return (
    <div className="relative flex min-h-screen flex-col bg-background-light">
      <div className="flex-1 px-5 pb-24 pt-10">
        {isGroupDetailTab ? (
          <GroupDetailScreen
            group={activeGroup}
            onBack={() => onTabChange('groups')}
          />
        ) : (
          <>
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUJfmSFKlI3iHnDr4ykEiHXud2jXYgnuWZVG8EmFa5hKmEs08qjPvLC0JWlsEd6mA_3BWs-CINSbB_Bv3aaSkyhg6annOcqy5CndN2Wqi2xgOTZe41SHnliDCvJVZhQDURs9WMAaFENamFmxWBiDpu5JXffbCEcGt39FayW4GmGMMA6vJjvFhe0LQKDwV5tIKvDOvKB7Jawzt3vwKmV0yRlvIf4m9Zso5-DqN-tOKg6VbTsmevmAq2La92SvM_niLRkoZzvxsyI8aK"
                  alt="User avatar"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="text-xs text-text-muted">Good Morning,</p>
                  <p className="text-lg font-semibold">Bella</p>
                </div>
              </div>
              <button className="rounded-full bg-white p-2 shadow-subtle">
                <span className="material-icons text-xl text-text-muted">notifications</span>
              </button>
            </header>

            {isHomeTab && (
              <>
                <section className="mt-6 grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center rounded-xl bg-card-light p-4 text-center shadow-subtle"
                    >
                      <p className="text-xs text-text-muted">{stat.label}</p>
                      <p className="mt-1 text-base font-semibold">{stat.value}</p>
                    </div>
                  ))}
                </section>

                <section className="mt-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Recent Activity</h2>
                    <button className="text-sm font-medium text-primary">View all</button>
                  </div>
                  <div className="space-y-3">
                    {recentActivity.map((item) => (
                      <article
                        key={item.title}
                        className="flex items-center justify-between rounded-xl bg-card-light p-4 shadow-subtle"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.badge.bg}`}>
                            <img src={item.badge.icon} alt="activity icon" className="h-7 w-7" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-text-light">{item.title}</p>
                            <p className="text-xs text-text-muted">{item.time}</p>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-text-light">{item.amount}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="mt-8">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Smart Insights</h2>
                    <button className="text-xs font-medium text-primary">Refresh</button>
                  </div>
                  <div className="space-y-3">
                    {smartInsights.map((insight) => (
                      <div key={insight.title} className="rounded-xl bg-card-light p-4 shadow-subtle">
                        <h3 className="text-sm font-semibold text-text-light">{insight.title}</h3>
                        <p className="mt-2 text-xs text-text-muted">{insight.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-10">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Conversational Assistant</h2>
                    <button className="text-xs font-medium text-primary">Refresh</button>
                  </div>
                  <div className="space-y-3">
                    {assistantPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        className="flex w-full items-center justify-between rounded-xl border border-primary/10 bg-white p-4 text-left shadow-subtle transition hover:border-primary/30"
                      >
                        <span className="text-sm text-text-light">{prompt}</span>
                        <span className="material-icons text-lg text-primary">arrow_outward</span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="mt-10">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Friends Nearby</h2>
                    <button className="text-xs font-medium text-primary" onClick={onOpenInvite}>
                      Invite
                    </button>
                  </div>
                  <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-4">
                    <div className="flex w-16 flex-shrink-0 flex-col items-center text-center">
                      <button
                        onClick={onOpenInvite}
                        className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-primary text-primary"
                      >
                        <span className="material-icons text-3xl">add</span>
                      </button>
                      <span className="mt-2 text-xs text-text-muted">Add New</span>
                    </div>
                    {friends.map((friend) => (
                      <div key={friend.name} className="flex w-16 flex-shrink-0 flex-col items-center text-center">
                        <img src={friend.avatar} alt={friend.name} className="h-16 w-16 rounded-full object-cover" />
                        <span className="mt-2 text-xs text-text-light">{friend.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {isGroupsTab && (
              <section className="mt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Groups</h2>
                  <button
                    onClick={onOpenInvite}
                    className="flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    <span className="material-icons text-sm">add</span>
                    New Group
                  </button>
                </div>
                <div className="rounded-full bg-white p-1 shadow-subtle">
                  {['active', 'completed', 'unsettled'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setGroupFilter(filter)}
                      className={`w-1/3 rounded-full px-4 py-2 text-xs font-semibold capitalize transition ${
                        groupFilter === filter
                          ? 'bg-primary text-white shadow-subtle'
                          : 'text-text-muted'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="mt-4 space-y-4">
                  {filteredGroups.map((group) => (
                    <article
                      key={group.id}
                      className="rounded-2xl bg-white p-4 shadow-subtle transition hover:shadow-subtle-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-2xl">
                            {group.emoji}
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-text-light">{group.name}</h3>
                            <p className="text-xs text-text-muted">{group.members} members</p>
                          </div>
                        </div>
                        <span
                          className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${group.statusBg} ${group.statusColor}`}
                        >
                          {group.statusLabel}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-2xl bg-background-light p-3">
                        <div>
                          <p className="text-[11px] uppercase tracking-wide text-text-muted">Total Spent</p>
                          <p className="mt-0.5 text-sm font-medium text-text-light">{group.total}</p>
                          <p className="mt-1 text-xs text-text-muted">
                            {group.summary}
                            {group.balance && (
                              <span className={`ml-1 font-semibold ${group.balanceColor}`}>{group.balance}</span>
                            )}
                          </p>
                          <div className="mt-3 flex -space-x-3">
                            {group.avatars.slice(0, 3).map((avatar) => (
                              <img
                                key={avatar}
                                src={avatar}
                                alt="group member"
                                className="h-9 w-9 rounded-full border-2 border-background-light object-cover"
                              />
                            ))}
                            {group.avatars.length > 3 && (
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-background-light bg-white text-[11px] font-semibold text-text-muted">
                                +{group.avatars.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => onOpenGroup(group.id)}
                          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-subtle"
                        >
                          View Details
                          <span className="material-icons text-sm">chevron_right</span>
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {isInsightsTab && (
              <section className="mt-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Smart Insights</h2>
                  <p className="mt-1 text-xs text-text-muted">
                    Personalised nudges to help you stay on track with your goals.
                  </p>
                  <div className="mt-4 space-y-4">
                    {smartInsights.map((insight) => (
                      <div key={insight.title} className="rounded-2xl bg-white p-5 shadow-subtle">
                        <h3 className="text-sm font-semibold text-text-light">{insight.title}</h3>
                        <p className="mt-2 text-sm text-text-muted">{insight.body}</p>
                        <button className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary">
                          View details
                          <span className="material-icons text-sm">chevron_right</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Ask Hisab</h2>
                  <div className="mt-3 space-y-3">
                    {assistantPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        className="flex w-full items-center justify-between rounded-2xl border border-primary/10 bg-white p-4 text-left shadow-subtle transition hover:border-primary/30"
                      >
                        <span className="text-sm text-text-light">{prompt}</span>
                        <span className="material-icons text-lg text-primary">send</span>
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 mx-auto max-w-md px-5 pb-6">
        {!isGroupDetailTab && (
          <button
            onClick={onOpenInvite}
            className="pointer-events-auto absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary p-4 text-white shadow-lg shadow-primary/40"
          >
            <span className="material-icons text-3xl">add</span>
          </button>
        )}
        <nav className="pointer-events-auto rounded-3xl bg-card-light px-6 py-4 shadow-subtle-lg">
          <ul className="flex items-center justify-between text-xs font-medium text-text-muted">
            <li>
              <button
                onClick={() => onTabChange('home')}
                className={`flex flex-col items-center ${
                  isHomeTab ? 'text-primary' : 'text-text-muted'
                }`}
              >
                <span className="material-icons text-base">home</span>
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('groups')}
                className={`flex flex-col items-center ${
                  isGroupsNavActive ? 'text-primary' : 'text-text-muted'
                }`}
              >
                <span className="material-icons text-base">groups</span>
                Groups
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('insights')}
                className={`flex flex-col items-center ${
                  isInsightsTab ? 'text-primary' : 'text-text-muted'
                }`}
              >
                <span className="material-icons text-base">insights</span>
                Insights
              </button>
            </li>
            <li>
              <button className="flex flex-col items-center text-text-muted" disabled>
                <span className="material-icons text-base">person</span>
                Profile
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const DEFAULT_MEMBERS = [
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
