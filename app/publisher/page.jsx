"use client";

import {
  Button,
  Card,
  CardHeader,
  DateRangePicker,
  Divider,
  Form,
  Input,
  Textarea,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

export const detailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    phone: "",
    title: "",
    school: "",
    venue: "",
    startDate: "",
    endDate: "",
    socialLinks: "",
    registrationLinks: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return { handleChange, handleSubmit };
};

const PublisherPage = () => {
  const { handleChange, handleSubmit } = detailsForm();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5] px-2 py-10">
      <Card className="mx-auto w-full max-w-4xl items-center justify-center rounded-2xl bg-[#fcfdfd] p-6 shadow-2xl backdrop-blur-sm">
        <Form onSubmit={handleSubmit}>
          <CardHeader className="items-center space-x-2 divide-x-2 divide-[#6DA27D]">
            <Image
              src="navlogo.svg"
              width={200}
              height={200}
              alt="logo"
              className="-ml-4 pr-2"
            />
            <span className="pl-3 text-base font-normal">Details Form</span>
          </CardHeader>
          <h3 className="font-medium">Publisher Details</h3>
          <Divider className="mb-4 bg-[#6DA27D]" />
          <div className="mb-4 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Input
              type="text"
              name="firstName"
              label="First Name"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
            <Input
              type="text"
              name="lastName"
              label="Last Name"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
            <Input
              type="text"
              name="position"
              label="Position"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
            <Input
              type="text"
              name="phone"
              label="Phone Number"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
            <Input
              type="email"
              name="email"
              label="Email ID"
              variant="bordered"
              onChange={handleChange}
              className="sm:col-span-2"
              isRequired
            />
          </div>

          <h3 className="font-medium">Event Details</h3>
          <Divider className="mb-4 bg-[#6DA27D]" />
          <div className="mb-4 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Input
              type="text"
              name="title"
              label="Event Title"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
            <Input
              type="text"
              name="school"
              label="Organising School/Society"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
            <Input
              type="text"
              name="venue"
              label="Venue"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
            <DateRangePicker
              name="duration"
              label="Start Date - End Date"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
            <Input
              type="text"
              name="socialLink"
              label="Social Media Link"
              variant="bordered"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="registrationLink"
              label="Registration Link"
              variant="bordered"
              onChange={handleChange}
              isRequired
            />
          </div>
          <div className="mb-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-1">
            <Input
              type="url"
              name="image"
              label="Upload Image URL"
              variant="bordered"
              icon={<FaUpload />}
              onChange={handleChange}
              isRequired
            />
            <Textarea
              name="description"
              label="Description"
              variant="bordered"
              isRequired
              onChange={handleChange}
              rows="4"
            />
          </div>
          <Divider className="mb-4 bg-[#6DA27D]" />
          <div className="jsutify-between flex w-full flex-col gap-4 sm:flex-row">
            <Button type="button" variant="bordered" className="w-full">
              Cancel
            </Button>
            <Button type="submit" className="w-full bg-[#6DA27D] text-white">
              Confirm
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default PublisherPage;
