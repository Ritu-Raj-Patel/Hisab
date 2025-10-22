import { useEffect, useState } from 'react'

import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import SuccessScreen from './screens/SuccessScreen'
import DashboardScreen from './screens/DashboardScreen'
import AddFriendModal from './components/AddFriendModal'
import Toast from './components/Toast'

const SCREENS = {
  WELCOME: 'welcome',
  LOGIN: 'login',
  SUCCESS: 'success',
  DASHBOARD: 'dashboard',
}

function App() {
  const [screen, setScreen] = useState(SCREENS.WELCOME)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [inviteMethod, setInviteMethod] = useState('phone')
  const [inviteValue, setInviteValue] = useState('')
  const [toast, setToast] = useState(null)
  const [dashboardTab, setDashboardTab] = useState('home')
  const [selectedGroupId, setSelectedGroupId] = useState(null)

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 2800)
    return () => clearTimeout(id)
  }, [toast])

  const handleInviteSend = () => {
    if (!inviteValue.trim()) {
      setToast('Please enter phone or email to send an invite.')
      return
    }

    const label = inviteMethod === 'phone' ? `+91 ${inviteValue}` : inviteValue
    setToast(`Invite sent to ${label}`)
    setShowAddFriend(false)
    setInviteValue('')
  }

  const handleDashboardTabChange = (tab) => {
    if (tab === 'groupDetail') {
      setDashboardTab('groupDetail')
      return
    }

    if (tab === 'groups') {
      setSelectedGroupId(null)
      setDashboardTab('groups')
      return
    }

    setSelectedGroupId(null)
    setDashboardTab(tab)
  }

  return (
    <div className="min-h-screen bg-background-light">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">
        {screen === SCREENS.WELCOME && (
          <WelcomeScreen
            onGetStarted={() => setScreen(SCREENS.LOGIN)}
            onContinueGoogle={() => setScreen(SCREENS.SUCCESS)}
            onContinuePhone={() => setScreen(SCREENS.LOGIN)}
          />
        )}

        {screen === SCREENS.LOGIN && (
          <LoginScreen
            onSubmit={() => setScreen(SCREENS.SUCCESS)}
            onBack={() => setScreen(SCREENS.WELCOME)}
          />
        )}

        {screen === SCREENS.SUCCESS && (
          <SuccessScreen
            onGoToDashboard={() => {
              setDashboardTab('home')
              setScreen(SCREENS.DASHBOARD)
            }}
            onInviteFriend={() => {
              setDashboardTab('groups')
              setScreen(SCREENS.DASHBOARD)
              setShowAddFriend(true)
            }}
          />
        )}

        {screen === SCREENS.DASHBOARD && (
          <DashboardScreen
            activeTab={dashboardTab}
            onTabChange={handleDashboardTabChange}
            selectedGroupId={selectedGroupId}
            onOpenGroup={(groupId) => {
              setSelectedGroupId(groupId)
              setDashboardTab('groupDetail')
            }}
            onOpenInvite={() => {
              setShowAddFriend(true)
              setInviteMethod('phone')
            }}
          />
        )}
      </div>

      {showAddFriend && screen === SCREENS.DASHBOARD && (
        <AddFriendModal
          method={inviteMethod}
          value={inviteValue}
          onChange={setInviteValue}
          onSelectMethod={setInviteMethod}
          onClose={() => setShowAddFriend(false)}
          onSend={handleInviteSend}
        />
      )}

      {toast && <Toast message={toast} />}
    </div>
  )
}

export default App
