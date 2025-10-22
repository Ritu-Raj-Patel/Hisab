export function BottomNavigation({ 
  activeTab, 
  onTabChange, 
  showAddButton = false, 
  onAddClick,
  showProfile = false
}) {
  const isHomeTab = activeTab === 'home'
  const isGroupsNavActive = activeTab === 'groups' || activeTab === 'groupDetail'
  const isInsightsTab = activeTab === 'insights'

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-md border-t border-gray-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/80 pb-3 pt-2 backdrop-blur-sm">
      <div className="flex justify-around">
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center gap-1.5 pt-1 ${
            isHomeTab ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-subtle-dark'
          }`}
        >
          <span className="material-symbols-outlined text-2xl">home</span>
          <span className="text-xs font-medium">Home</span>
        </button>
        <button
          onClick={() => onTabChange('groups')}
          className={`flex flex-col items-center gap-1.5 pt-1 ${
            isGroupsNavActive ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-subtle-dark'
          }`}
        >
          <span className="material-symbols-outlined text-2xl">group</span>
          <span className="text-xs font-medium">Groups</span>
        </button>
        {showAddButton && onAddClick && (
          <button
            onClick={onAddClick}
            className="pointer-events-auto absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary p-4 text-white shadow-lg shadow-primary/40"
          >
            <span className="material-icons text-3xl">add</span>
          </button>
        )}
        <button
          onClick={() => onTabChange('insights')}
          className={`flex flex-col items-center gap-1.5 pt-1 ${
            isInsightsTab ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-subtle-dark'
          }`}
        >
          <span className="material-symbols-outlined text-2xl">bar_chart</span>
          <span className="text-xs font-medium">Insights</span>
        </button>
        <button
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center gap-1.5 pt-1 ${
            showProfile ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-subtle-dark'
          }`}
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            person
          </span>
          <span className="text-xs font-bold">Profile</span>
        </button>
      </div>
    </nav>
  )
}
