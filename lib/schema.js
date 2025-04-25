import { z } from "zod";

export const EventSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  position: z.string().min(1, "Position is required"),
  email: z.string().min(1, "Email is required").email(),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d{10}$/),
  title: z.string().min(1, "Title is required"),
  school: z.string().min(1, "School is required"),
  venue: z.string().min(1, "Venue is required"),
  startDate: z.string().date("Start date is required"),
  endDate: z.string().date("End date is required"),
  socialLinks: z.string("Social Links has to be a valid url"),
  registrationLinks: z
    .string()
    .min(1, "Registration Link is required")
    .url("Registration Link has to be a valid url"),
  guideLinePdfLink: z.string("Social Links has to be a valid url"),
  image: z
    .string()
    .min(1, "Poster Image URL is required")
    .url("Poster Image URL has to be a valid url")
    .regex(
      /drive\.google\.com/,
      "Poster Image URL must be a valid Google Drive link",
    ),
  description: z.string().min(1, "Description is required"),
});
