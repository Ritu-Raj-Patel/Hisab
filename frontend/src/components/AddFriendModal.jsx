export default function AddFriendModal({
  method,
  value,
  onChange,
  onSelectMethod,
  onClose,
  onSend,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-6 backdrop-blur-sm">
      <div className="relative w-full max-w-sm">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-green-300 via-green-400 to-primary opacity-20 blur-xl" />
        <div className="relative rounded-3xl bg-card-light p-6 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-text-muted"
          >
            <span className="material-icons text-base">close</span>
          </button>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-text-light">Add Friend</h3>
            <p className="mt-1 text-xs text-text-muted">
              Invite a friend to split bills and track expenses together in seconds.
            </p>
          </div>

          <div className="mt-6 flex rounded-full bg-gray-100 p-1">
            <button
              onClick={() => onSelectMethod('phone')}
              className={`flex-1 rounded-full py-2 text-xs font-semibold transition ${
                method === 'phone'
                  ? 'bg-white text-primary shadow-subtle'
                  : 'text-text-muted'
              }`}
            >
              By Phone Number
            </button>
            <button
              onClick={() => onSelectMethod('email')}
              className={`flex-1 rounded-full py-2 text-xs font-semibold transition ${
                method === 'email'
                  ? 'bg-white text-primary shadow-subtle'
                  : 'text-text-muted'
              }`}
            >
              By Email
            </button>
          </div>

          <div className="mt-5">
            {method === 'phone' ? (
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-xs font-semibold text-text-muted">
                  +91
                </span>
                <input
                  type="tel"
                  value={value}
                  onChange={(event) => onChange(event.target.value)}
                  placeholder="9876543210"
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-14 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            ) : (
              <input
                type="email"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="friend@email.com"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            )}
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={onSend}
              className="flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-primary text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01]"
            >
              Send Invite
            </button>
            <button
              onClick={onClose}
              className="h-12 w-full rounded-full text-sm font-medium text-text-muted transition hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
