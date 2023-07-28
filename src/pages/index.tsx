import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { FormProvider, useForm } from 'react-hook-form'
import { FormSchema } from '@/validators/auth'
import { z } from "zod"
import { zodResolver} from "@hookform/resolvers/zod"
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

const inter = Inter({ subsets: ['latin'] })
type Input = z.infer<typeof FormSchema>

export default function Home() {
  const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  const form = useForm<Input>({
    resolver: zodResolver(FormSchema), // change this from schema auth.ts
    defaultValues: {
      clientId: "",
      clientSecret: "",
      userId: "",
      password: "",
      email: "",
      notificationEmail: "",
    },
  })


  function onSubmit (data: Input) {
    alert(JSON.stringify(data, null, 4))
  }

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <Card className="w-[350px]">
    <ScrollArea className="h-full w-full rounded-md border">
      <CardHeader>
        <CardTitle>Application Name</CardTitle>
        <CardDescription>Create User with API in one-click by filling following information.</CardDescription>
      </CardHeader>
      <CardContent>
        
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        
      {/* postman status  */}
      <div className={
        cn('rounded-md border p-4')
      }>
        <FormLabel>Staus: </FormLabel>
      </div>

      {formStep === 0 && 
        (<div className={
        cn('rounded-md border p-4')}>
      {/* select action dropdown */}
      <FormField
          control={form.control}
          name="operation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Operations</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Operation" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    ["Create", "Update", "Disable"].map(operation => {
                      return (
                      <SelectItem value={operation} key={operation}>
                        {operation} User 
                      </SelectItem>
                      )
                    })
                  }
                </SelectContent>
              </Select>
              <FormDescription>
                Select operation you want to perform for the user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
      )}
      
       {formStep === 1 && (<div className={
        cn('rounded-md border p-4')}>
          {/* client id */}
          <FormField
          control={form.control}
          name="clientId" //relates to auth.ts
          render={({ field }) => (
            <FormItem>
              <FormLabel >Client ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter Client ID" {...field} />
              </FormControl>
              <FormDescription>
                Enter client id from Business Unit.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* client secret*/}
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
        </div>)}             
        
      {formStep === 2 && (<div className={
        cn('rounded-md border p-4')}>
      {/* user id */}
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

        <Separator className="my-4" />
        {/* password */}
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

      <Separator className="my-4" />
      {/* email */}
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

      <Separator className="my-4" />
      {/* notification email */}
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
      </div>)}
      
      {formStep === 3 && (<div className={
        cn('rounded-md border p-4')}>
      {/* assign role dropdown */}
      <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assign Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    ["Administrator", "Analyst", "Content Manager", "Data Manager", "Distributed Sending User"].map(role => {
                      return (
                      <SelectItem value={role} key={role}>
                        {role}
                      </SelectItem>
                      )
                    })
                  }
                </SelectContent>
              </Select>
              <FormDescription>
                Select roles you want to assign to the user.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator className="my-4" />
        
        {/* Checkbox */}
        <FormField
          control={form.control}
          name="wantDisable"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <div className="flex flex-row justify-between space-x-16">
                <FormLabel>
                  Do you want to disable user?
                </FormLabel>
                <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              </div>
              
            </FormItem>
          )}
        />

        <Separator className="my-4" />

        {/* API Radio Group */}
        <FormField
          control={form.control}
          name="isAPI"
          render={({ field }) => (
            <FormItem className="flex flex-row justify-between space-y-0">
              <FormLabel>API User?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row justify-between space-x-5"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Yes
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator className="my-4" />

        {/* Locked Radio Group */}
        <FormField
          control={form.control}
          name="isLocked"
          render={({ field }) => (
            <FormItem className="flex flex-row justify-between space-y-0">
              <FormLabel>Is User Locked?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row  justify-between space-x-5"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Yes
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator className="my-4" />

        {/* Reset Password Radio Group */}
        <FormField
          control={form.control}
          name="isLocked"
          render={({ field }) => (
            <FormItem className="flex flex-row justify-between space-y-0">
              <FormLabel>Reset Password?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row justify-between space-x-5"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Yes
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        )}
      
        <div className="flex gap-2">

        {formStep === 3 && (<Button type="submit"
        >Submit</Button>)}


        {formStep === 0 && (<Button type="button" 
          variant={"ghost"} onClick={()=> {
          setFormStep(1);
        }}>Go to page 2
        <ArrowRight className="w-4 h-4 ml-2"/>
        </Button>)}
        
        {formStep === 1 && (<Button type="button" 
        variant={"ghost"} onClick={()=> {
          setFormStep(2);
        }}>Go to page 3
        <ArrowRight className="w-4 h-4 ml-2"/>
        </Button>)}

        {formStep === 2 && (<Button type="button" 
        variant={"ghost"} onClick={()=> {
          setFormStep(3);
        }}>Go to page 4
        <ArrowRight className="w-4 h-4 ml-2"/>
        </Button>)}


        </div>
      </form>
    </Form>
      </CardContent>
      </ScrollArea>
    </Card>
    </div>

  )
}