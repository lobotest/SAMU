"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function MentorshipApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    instagramUsername: "",
    whyGoodFit: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      instagramUsername: "",
      whyGoodFit: "",
    })
    alert("Application submitted successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-700 p-6 rounded-lg shadow-lg">
      <div>
        <Label htmlFor="fullName" className="text-white">
          Full Name
        </Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="phoneNumber" className="text-white">
          Phone Number
        </Label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="instagramUsername" className="text-white">
          Instagram Username
        </Label>
        <Input
          id="instagramUsername"
          name="instagramUsername"
          value={formData.instagramUsername}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="whyGoodFit" className="text-white">
          Why would you be a good fit for the mentorship?
        </Label>
        <Textarea
          id="whyGoodFit"
          name="whyGoodFit"
          value={formData.whyGoodFit}
          onChange={handleChange}
          required
          className="mt-1"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
        Apply Now
      </Button>
    </form>
  )
}

