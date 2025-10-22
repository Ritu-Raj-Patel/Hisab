import GoogleIcon from '../components/GoogleIcon'

export default function WelcomeScreen({ onGetStarted, onContinueGoogle, onContinuePhone }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden px-6 py-16">
      <div className="absolute -top-1/4 -left-1/4 h-96 w-96 -translate-x-8 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 translate-x-8 rounded-full bg-primary/10 blur-3xl" />

      <div className="z-10 mt-16 flex w-full flex-col items-center">
        <div className="relative mb-10 flex h-36 w-36 items-center justify-center rounded-xl bg-white shadow-subtle-lg">
          <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-60" />
          <span className="text-6xl font-black text-primary drop-shadow-sm">₹</span>
        </div>
        <h1 className="text-center text-4xl font-bold tracking-tight text-text-light">
          Hi, I’m <span className="text-primary">Hisab!</span>
        </h1>
        <p className="mt-3 max-w-xs text-center text-base text-text-muted">
          Your AI-powered UPI companion to split, settle, and stay mindful with money.
        </p>
      </div>

      <div className="z-10 flex w-full max-w-sm flex-col items-center gap-3 pb-6">
        <button
          onClick={onGetStarted}
          className="flex h-14 w-full items-center justify-center rounded-full bg-primary font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-105"
        >
          Get Started
        </button>
        <button
          onClick={onContinueGoogle}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/60 bg-white/80 text-sm font-semibold text-text-light shadow-subtle backdrop-blur-sm transition-colors hover:bg-white"
        >
          <GoogleIcon />
          Continue with Google
        </button>
        <button
          onClick={onContinuePhone}
          className="flex h-14 w-full items-center justify-center rounded-full border border-white/70 bg-background-light/70 text-sm font-semibold text-text-light shadow-subtle transition-colors hover:bg-white"
        >
          Continue with Phone Number
        </button>
        <p className="pt-3 text-center text-xs text-text-muted">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
