/* eslint-disable react/prop-types */
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonLoading } from "@/components/LoadingButton";

import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Too Short Name").max(50),
  email: z.string().email().min(2).max(50).optional(),
  address: z.string().min(5, "Address is required").max(50),
  phone: z
    .string()
    .min(10, "Invalide Phone Number")
    .max(11, "Too long Phone Number"),
  city: z
    .string()
    .min(2, "City name is required")
    .max(50, "Too long City Name"),
});

function UserProfile({ isLoading, onSubmit, currentUser }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser.user, //pass the current user as the default values to the input fields
  });

  //fetch the current user and set the default values to the input fields when the component mounts
  //or when the currentUser changes
  useEffect(() => {
    form.reset(currentUser.user);
  }, [currentUser.user, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="text-black"
                  placeholder="Your Name"
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="phone" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="pt-4">
          {isLoading ? (
            <ButtonLoading />
          ) : (
            <Button
              type="submit"
              className="bg-orange-500 mt-4 py-4 px-8 text-lg"
            >
              Save Changes
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}

export default UserProfile;
