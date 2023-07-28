import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from "lucide-react"
import { Label } from "@/components/ui/label"
import Link from "next/link"
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { FormSchema } from '@/validators/auth'
import { z } from "zod"
import { zodResolver} from "@hookform/resolvers/zod"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })
type Input = z.infer<typeof FormSchema>

const operations = [
  { label: "Create User", value: "createUser" },
  { label: "Update User", value: "updateUser" },
  { label: "Disable User", value: "disableUser" },
] as const

const roles = [
  { label: "Administrator", value: "administrator" },
  { label: "Analyst", value: "analyst" },
  { label: "Content Creator", value: "contentCreator" },
  { label: "Data Manager", value: "dataManager" },
  { label: "Distributed Sending User", value: "distributedSendingUser" },
] as const


export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema), // change this from schema auth.ts
    defaultValues: {
      clientId: "",
      clientSecret: "",
      userId: "",
      password: "",
      email: "",
      notificationEmail: "",
      operation: "",
      role: "",
    },
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
      <FormField
          control={form.control}
          name="operation"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>User Operations</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? operations.find(
                            (operation) => operation.value === field.value
                          )?.label
                        : "Select Operation"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search Operation..." />
                    <CommandEmpty>No operation found.</CommandEmpty>
                    <CommandGroup>
                      {operations.map((operation) => (
                        <CommandItem
                          value={operation.value}
                          key={operation.value}
                          onSelect={(value) => {
                            form.setValue("operation", value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              operation.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {operation.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the operation that will be used for users in SFMC.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
       <FormField
          control={form.control}
          name="userId" //relates to auth.ts
          render={({ field }) => (
            <FormItem>
              <FormLabel >User ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter User ID" {...field} />
              </FormControl>
              <FormDescription>
                Enter User ID for new user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password" //relates to auth.ts
          render={({ field }) => (
            <FormItem>
              <FormLabel >User Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter User Password" {...field} type="password" />
              </FormControl>
              <FormDescription>
                Enter Temporary User Password for new user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email" //relates to auth.ts
          render={({ field }) => (
            <FormItem>
              <FormLabel >User Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter User Email" {...field} />
              </FormControl>
              <FormDescription>
                Enter User Email given by user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notificationEmail" //relates to auth.ts
          render={({ field }) => (
            <FormItem>
              <FormLabel >User Notification Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter User Notification Email" {...field} />
              </FormControl>
              <FormDescription>
                Enter User Notification Email given by user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Assign Role</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? roles.find(
                            (role) => role.value === field.value
                          )?.label
                        : "Select role"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search role..." />
                    <CommandEmpty>No role found.</CommandEmpty>
                    <CommandGroup>
                      {roles.map((role) => (
                        <CommandItem
                          value={role.value}
                          key={role.value}
                          onSelect={(value) => {
                            form.setValue("role", value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              role.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {role.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the role that will be used for users in SFMC.
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