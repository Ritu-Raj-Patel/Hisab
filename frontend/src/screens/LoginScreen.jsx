import { useState } from 'react'
import GoogleIcon from '../components/GoogleIcon'

export default function LoginScreen({ onSubmit, onBack }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white to-teal-50 px-6 py-12">
      <div className="absolute -top-1/3 -left-1/3 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />
      <div className="absolute -bottom-1/3 -right-1/3 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="z-10 w-full max-w-sm">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-sm font-semibold text-primary"
        >
          <span className="material-icons text-base">chevron_left</span>
          Back
        </button>

        <div className="mb-6 flex flex-col items-center">
          <div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-xl bg-white/50 shadow-subtle-lg backdrop-blur-sm">
            <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-60" />
            <span className="text-5xl font-black text-primary drop-shadow-sm">₹</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="mt-1 text-sm text-gray-500">Sign in to your Hisab.AI account</p>
        </div>

        <div className="rounded-3xl bg-white/80 p-6 shadow-subtle-lg backdrop-blur-xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-105"
            >
              Continue with Email
            </button>
            <div className="text-right text-sm font-medium text-primary">
              <button type="button">Forgot password?</button>
            </div>
          </form>

          <div className="relative py-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs text-gray-400">
              <span className="bg-white px-3">OR</span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/80 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-white">
              <GoogleIcon />
              Continue with Google
            </button>
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/80 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-white">
              <span className="material-icons text-base text-gray-500">smartphone</span>
              Continue with Phone
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
