import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { registerSchema } from '@/validators/auth'
import { z } from "zod"
import { zodResolver} from "@hookform/resolvers/zod"

const inter = Inter({ subsets: ['latin'] })
type Input = z.infer<typeof registerSchema>

export default function Home() {
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema), // change this from schema auth.ts
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
      year: ""
    }
  })

  function onSubmit (data: Input) {
    console.log(data)
  }
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Application Name</CardTitle>
        <CardDescription>Create User with API in one-click by filling following information.</CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="clientId" //relates to auth.ts
          render={({ field }) => (
            <FormItem>
              <FormLabel >Client ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter Contact ID" {...field} />
              </FormControl>
              <FormDescription>
                Enter client id from Business Unit.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clientSecret" //relates to auth.ts
          render={({ field }) => (
            <FormItem>
              <FormLabel >Client Secret</FormLabel>
              <FormControl>
                <Input placeholder="Enter Client Secret" {...field} />
              </FormControl>
              <FormDescription>
                Enter client secret from Business Unit.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </CardContent>
    </Card>
    </div>
  )
}
