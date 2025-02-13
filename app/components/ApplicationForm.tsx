"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

const formFields = [
  { name: "fullName", label: "What's your full name?", type: "text" },
  { name: "phoneNumber", label: "What's your phone number?", type: "tel" },
  { name: "email", label: "What's your email address?", type: "email" },
  { name: "instagramUsername", label: "What's your Instagram username?", type: "text" },
  { name: "whyGoodFit", label: "Why would you be a good fit for the mentorship?", type: "textarea" },
]

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    instagramUsername: "",
    whyGoodFit: "",
  })
  const [currentField, setCurrentField] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const isCurrentFieldValid = () => {
    const currentValue = formData[formFields[currentField].name as keyof typeof formData]
    return currentValue.trim() !== ""
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentField === formFields.length - 1 && isCurrentFieldValid()) {
      submitForm()
    } else if (currentField < formFields.length - 1) {
      goToNextField()
    } else {
      alert("Please fill in all fields before submitting.")
    }
  }

  const submitForm = async () => {
    setIsSubmitting(true)
    setSubmitMessage("")

    const webhookUrl =
      "https://discord.com/api/v10/webhooks/1339392792794890310/oo3GybSwB0AxDfDaHvgcq-J2gBRSZahSnoSQreULXj_2CcIKzh-j9crGNZ8HgtbmDiDq"

    const message = {
      embeds: [
        {
          title: "Samu's Mentorship Application",
          fields: [
            { name: "Full Name", value: formData.fullName },
            { name: "Phone Number", value: formData.phoneNumber },
            { name: "Email", value: formData.email },
            { name: "Instagram Username", value: formData.instagramUsername },
            { name: "Why Good Fit", value: formData.whyGoodFit },
          ],
          color: 5763719, // Green color
        },
      ],
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      })

      if (response.ok) {
        setSubmitMessage("Application submitted successfully!")
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          instagramUsername: "",
          whyGoodFit: "",
        })
        setCurrentField(0)
      } else {
        setSubmitMessage("Failed to submit application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmitMessage("An error occurred. Please try again later.")
    }

    setIsSubmitting(false)
  }

  const goToNextField = () => {
    if (isCurrentFieldValid()) {
      if (currentField < formFields.length - 1) {
        setCurrentField(currentField + 1)
      }
    } else {
      alert("Please fill in this field before proceeding.")
    }
  }

  const goToPreviousField = () => {
    if (currentField > 0) {
      setCurrentField(currentField - 1)
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  const currentFieldData = formFields[currentField]

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-background p-8 rounded-xl shadow-2xl border border-border"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Join Global Gains Inner Circle</h2>
        <p className="text-gray-400">
          Step {currentField + 1} of {formFields.length}
        </p>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentField}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Label htmlFor={currentFieldData.name} className="text-white text-xl mb-3 block">
            {currentFieldData.label}
          </Label>
          {currentFieldData.type === "textarea" ? (
            <Textarea
              id={currentFieldData.name}
              name={currentFieldData.name}
              value={formData[currentFieldData.name as keyof typeof formData]}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  if (currentField === formFields.length - 1) {
                    submitForm()
                  } else {
                    goToNextField()
                  }
                }
              }}
              required
              className="w-full text-lg p-3 bg-gray-700 text-white border-gray-600 focus:border-green-500 focus:ring-green-500 rounded-md"
              rows={4}
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            />
          ) : (
            <Input
              id={currentFieldData.name}
              name={currentFieldData.name}
              type={currentFieldData.type}
              value={formData[currentFieldData.name as keyof typeof formData]}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  if (currentField === formFields.length - 1) {
                    submitForm()
                  } else {
                    goToNextField()
                  }
                }
              }}
              required
              className="w-full text-lg p-3 bg-gray-700 text-white border-gray-600 focus:border-green-500 focus:ring-green-500 rounded-md"
              ref={inputRef as React.RefObject<HTMLInputElement>}
            />
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between items-center mt-8">
        <Button
          type="button"
          onClick={goToPreviousField}
          disabled={currentField === 0}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
        >
          Previous
        </Button>
        {currentField === formFields.length - 1 ? (
          <Button
            type="submit"
            disabled={isSubmitting || !isCurrentFieldValid()}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        ) : (
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              goToNextField()
            }}
            disabled={!isCurrentFieldValid()}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </Button>
        )}
      </div>
      {submitMessage && (
        <p className={`mt-4 text-center ${submitMessage.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
          {submitMessage}
        </p>
      )}
    </form>
  )
}

