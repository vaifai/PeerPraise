'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Search, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const teamData = [
  { name: 'John Doe', feedback: 12 },
  { name: 'Jane Smith', feedback: 19 },
  { name: 'Bob Johnson', feedback: 8 },
  { name: 'Alice Brown', feedback: 15 },
  { name: 'Charlie Davis', feedback: 11 },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
        <div className="flex items-center">
          <Users className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-lg font-semibold">Team Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="team1">Development Team</SelectItem>
              <SelectItem value="team2">Marketing Team</SelectItem>
              <SelectItem value="team3">Sales Team</SelectItem>
            </SelectContent>
          </Select>
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search team member" className="pl-8" />
            </div>
          </form>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Feedback Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={teamData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="feedback" fill="#8884d8" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg"
                    alt={member.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span>{member.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Total Feedback: {member.feedback}</p>
                <Button className="mt-4 w-full" asChild>
                  <Link href={`/feedback/${member.name.toLowerCase().replace(' ', '-')}`}>
                    View Detailed Feedbacks
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}