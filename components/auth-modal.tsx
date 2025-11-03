"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  rememberMe: boolean
}

interface AuthError {
  type: 'error' | 'success'
  message: string
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  // Remove tabs, always show sign-in
  const [error, setError] = useState<AuthError | null>(null)
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  })

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false
    })
    setError(null)
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const validateSignUpForm = (): string | null => {
    if (!formData.firstName.trim()) return "First name is required"
    if (!formData.lastName.trim()) return "Last name is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.password) return "Password is required"
    if (formData.password.length < 6) return "Password must be at least 6 characters"
    if (formData.password !== formData.confirmPassword) return "Passwords do not match"
    if (!formData.email.includes('@')) return "Please enter a valid email address"
    return null
  }

  const validateSignInForm = (): string | null => {
    if (!formData.email.trim()) return "Email is required"
    if (!formData.password) return "Password is required"
    if (!formData.email.includes('@')) return "Please enter a valid email address"
    return null
  }

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const validationError = validateSignUpForm()
    if (validationError) {
      setError({ type: 'error', message: validationError })
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
          email: formData.email.trim(),
          password: formData.password
        })
      })

      const data = await response.json()

      if (response.ok) {
        setError({ type: 'success', message: 'Account created successfully! Please sign in.' })
        setActiveTab('signin')
        // Reset signup form but keep email for signin
        setFormData(prev => ({
          ...prev,
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: ''
        }))
      } else {
        setError({ type: 'error', message: data.error || 'Failed to create account' })
      }
    } catch (err) {
      setError({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const validationError = validateSignInForm()
    if (validationError) {
      setError({ type: 'error', message: validationError })
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
          rememberMe: formData.rememberMe
        })
      })

      const data = await response.json()

      if (response.ok) {
        setError({ type: 'success', message: 'Sign in successful! Welcome back.' })
        // Close modal after successful signin
        setTimeout(() => {
          onOpenChange(false)
          resetForm()
          // Optionally redirect or refresh the page
          window.location.reload()
        }, 1500)
          // Broadcast auth change so pages can react without full reload
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('auth:changed'))
          }
      } else {
        setError({ type: 'error', message: data.error || 'Invalid email or password' })
      }
    } catch (err) {
      setError({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleModalClose = (open: boolean) => {
    if (!open) {
      resetForm()
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleModalClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold text-center">Sign In</DialogTitle>
        </DialogHeader>
        {/* Error/Success Alert */}
        {error && (
          <div className="mx-6 mb-4">
            <Alert className={error.type === 'error' ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}>
              <div className="flex items-center gap-2">
                {error.type === 'error' ? (
                  <XCircle className="h-4 w-4 text-red-600" />
                ) : (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                )}
                <AlertDescription className={error.type === 'error' ? 'text-red-800' : 'text-green-800'}>
                  {error.message}
                </AlertDescription>
              </div>
            </Alert>
          </div>
        )}
        <form onSubmit={handleSignIn} className="space-y-4 px-6 pb-6">
          <div className="space-y-2">
            <h2 className="font-bold text-gray-500">For admins only</h2>
            <Label htmlFor="signin-email">Email</Label>
            <Input 
              id="signin-email" 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signin-password">Password</Label>
            <Input 
              id="signin-password" 
              type="password" 
              placeholder="Enter your password" 
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required 
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
              />
              Remember me
            </label>
            <Button variant="link" className="px-0 text-sm" type="button">
              Forgot password?
            </Button>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
