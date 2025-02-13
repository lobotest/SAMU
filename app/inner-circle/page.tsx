import ApplicationForm from "../components/ApplicationForm"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function InnerCirclePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-foreground text-center mb-8">Global Gains Inner Circle</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Apply now to join our exclusive mentorship program and take your trading to the next level.
          </p>
          <ApplicationForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

