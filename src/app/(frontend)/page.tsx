import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import { Button } from '@/app/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/shared/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/shared/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/app/shared/components/ui/alert'
import { Badge } from '@/app/shared/components/ui/badge'

import config from '@/payload.config'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="container mx-auto py-10 space-y-8">
      <h1 className="text-5xl font-bold">shadcn/ui Component Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>Testing the Card component from shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a basic card component with header, content, and footer sections.</p>
            <div className="flex gap-2 mt-4">
              <Badge>Badge 1</Badge>
              <Badge variant="secondary">Badge 2</Badge>
              <Badge variant="outline">Badge 3</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs Component</CardTitle>
            <CardDescription>Testing the Tabs component from shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
                <p>This is the content for Tab 1</p>
                <Button className="mt-2" size="sm">
                  Tab 1 Action
                </Button>
              </TabsContent>
              <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
                <p>This is the content for Tab 2</p>
                <Alert className="mt-2">
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>This is an alert component inside Tab 2.</AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <Alert>
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          All components are rendered using Tailwind CSS v4 and shadcn/ui.
          {user && <p className="mt-2">Welcome back, {user.email}</p>}
        </AlertDescription>
      </Alert>
    </div>
  )
}
