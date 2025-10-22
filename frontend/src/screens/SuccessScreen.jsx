export default function SuccessScreen({ onGoToDashboard, onInviteFriend }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-white to-background-light px-6 py-12 text-center text-[#10221f]">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={`confetti-${index}`}
            className="confetti"
            style={{
              left: `${10 + index * 10}%`,
              top: index % 2 === 0 ? '20%' : '60%',
              animationDelay: `${index * 0.2}s`,
              backgroundColor: index % 3 === 0 ? '#A7F3D0' : undefined,
            }}
          />
        ))}
      </div>

      <div className="z-10 flex flex-1 flex-col items-center justify-center">
        <div className="mb-8 flex h-40 w-40 items-center justify-center rounded-full border border-white/30 bg-white/30 backdrop-blur-xl">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons text-5xl text-primary">check</span>
          </div>
        </div>
        <h1 className="text-4xl font-black">Congratulations!</h1>
        <p className="mt-3 max-w-xs text-sm text-[#10221f]/70">
          Your account is ready. Split expenses, settle over UPI, and ask Hisab for personalised money insights.
        </p>
      </div>

      <div className="z-10 flex w-full max-w-sm flex-col gap-3 pb-6">
        <button
          onClick={onGoToDashboard}
          className="h-14 rounded-full bg-gradient-to-r from-primary to-emerald-200 font-semibold text-[#0b1f17] shadow-lg transition-transform hover:scale-105"
        >
          Go to Dashboard
        </button>
        <button
          onClick={onInviteFriend}
          className="h-14 rounded-full border-2 border-primary font-semibold text-primary transition hover:bg-primary/10"
        >
          Invite a Friend
        </button>
      </div>
    </div>
  )
}
