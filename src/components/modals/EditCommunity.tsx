'use client'

import { useModal } from "@/hooks/useModalStore"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FileUpload } from "../shared/FileUploader";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Community name is required."
  }),
  imageUrl: z.string().min(1, {
    message: "Community image is required."
  })
});


export const EditCommunityModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const community = data.community;

  const router = useRouter();
  const isModalOpen = isOpen && type === 'editCommunity';

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    }
  });

  useEffect(() => {
    if (community) {
      form.setValue("name", community.name);
      form.setValue("imageUrl", community.imageUrl);
    }
  }, [community, form])

  const isLoading = form.formState.isSubmitting;

  const handleKickMember = () => {
    // Add logic to kick a member
    // console.log(`Kicking member: ${data?.memberName}`);
    onClose();
  };
  const handleManageGroups = () => {
    // Add logic to manage groups (add/remove)
    // console.log(`Managing groups: ${data?.groups}`);
    onClose();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/communities/${community?.id}`, values);

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={() => { form.reset(); onClose() }}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Edit Community
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8 px-6">
                <div className="flex items-center justify-center text-center">
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FileUpload
                            endpoint="communityImage"
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
                      >
                        New community name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Enter name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Confirmation dialogs for additional actions
              {isKickingMember && (
                <div className="p-6">
                  <p className="text-center text-gray-700">
                    Are you sure you want to kick the member?
                  </p>
                  <DialogFooter className="bg-gray-100 px-6 py-4">
                    <Button onClick={handleKickMember} className="mr-2">
                      Confirm
                    </Button>
                    <Button onClick={() => setKickingMember(false)}>
                      Cancel
                    </Button>
                  </DialogFooter>
                </div>
              )}

              {isManagingGroups && (
                <div className="p-6">
                  <p className="text-center text-gray-700">
                    Manage groups: {/* Display the input field for managing groups */}
              {/* </p> */}
              {/* Implement input fields or other components for managing groups */}
              {/* <DialogFooter className="bg-gray-100 px-6 py-4">
                    <Button onClick={handleManageGroups} className="mr-2">
                      Confirm
                    </Button>
                    <Button onClick={() => setManagingGroups(false)}>
                      Cancel
                    </Button>
                  </DialogFooter>
                </div> */}


              <DialogFooter className="bg-gray-100 px-6 py-4">
                <Button disabled={isLoading} type="submit">
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
