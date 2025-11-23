import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-md w-full">
        <h1 className="text-4xl font-bold text-foreground">SaaS Dashboard</h1>
        <p className="text-lg text-muted-foreground">Modern analytics dashboard for your business</p>
        <Button asChild size="lg">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
