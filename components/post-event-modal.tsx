"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, X } from "lucide-react"
import Image from "next/image"

interface PostEventModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PostEventModal({ open, onOpenChange }: PostEventModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [location, setLocation] = useState("")
  const [type, setType] = useState("Conference")
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImage(null)
    setImagePreview(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!title.trim()) {
      setError("Title is required")
      return
    }
    if (!description.trim()) {
      setError("Description is required")
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      if (date) formData.append("date", date)
      if (time) formData.append("time", time)
      if (location) formData.append("location", location)
      if (type) formData.append("type", type)
      if (image) formData.append("image", image)

      // Debug: log form fields and image info before sending
      try {
        console.debug('events: submitting', {
          title,
          description,
          date,
          time,
          location,
          type,
          image: image ? { name: image.name, size: image.size, type: image.type } : null,
        })
      } catch (dbg) { /* noop */ }

      const response = await fetch("/api/events", {
        method: "POST",
        body: formData,
        credentials: "include",
      })

      // Read response body for better client-side debugging
      let responseBody = null
      try {
        responseBody = await response.json()
      } catch (jsonErr) {
        console.warn('events: failed to parse response JSON', jsonErr)
      }

      console.debug('events: response', { status: response.status, body: responseBody })

      if (!response.ok) {
        throw new Error((responseBody && responseBody.error) || 'Failed to post event')
      }

      // Reset form
      setTitle("")
      setDescription("")
      setDate("")
      setTime("")
      setLocation("")
      setType("Conference")
      setImage(null)
      setImagePreview(null)
      onOpenChange(false)

      alert("Event posted successfully!")
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('events:posted'))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Post Event</DialogTitle>
          <DialogDescription>
            Create a new event. Fill in the details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter event title" disabled={isSubmitting} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter event description" rows={6} disabled={isSubmitting} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} disabled={isSubmitting} />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} disabled={isSubmitting} />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Main Hall" disabled={isSubmitting} />
            </div>
          </div>

          <div>
            <Label htmlFor="type">Event Type</Label>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border rounded-md p-2" disabled={isSubmitting}>
              <option>Conference</option>
              <option>Workshop</option>
              <option>Webinar</option>
              <option>Training</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image (Optional)</Label>
            {!imagePreview ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input id="image" type="file" accept="image/*" onChange={handleImageChange} className="hidden" disabled={isSubmitting} />
                <label htmlFor="image" className="cursor-pointer flex flex-col items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">Click to upload image</span>
                  <span className="text-xs text-gray-400 mt-1">PNG, JPG, JPEG up to 5MB</span>
                </label>
              </div>
            ) : (
              <div className="relative border rounded-lg overflow-hidden">
                <div className="relative w-full h-48">
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                </div>
                <button type="button" onClick={handleRemoveImage} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors" disabled={isSubmitting}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">{error}</div>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Posting...' : 'Post Event'}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
