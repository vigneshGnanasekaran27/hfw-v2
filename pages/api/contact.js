import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email template for user confirmation
const userConfirmationTemplate = ({
  name,
  module,
  description,
  mobile,
  place,
}) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>Inquiry Confirmation - ${module} Section</h2>
  <p>Dear ${name},</p>
  <p>Thank you for reaching out to Hope Fit Wellness!</p>
  
  <h3>Inquiry Details:</h3>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Section:</strong> ${module}</p>
  <p><strong>Location:</strong> ${place}</p>
  
  ${
    mobile
      ? `
  <p><strong>Mobile Number:</strong> ${mobile}</p>
  `
      : ""
  }
  
  ${
    description
      ? `
  <p><strong>Your Message:</strong> ${description}</p>
  `
      : ""
  }
  
  <p>Our team will review your inquiry and get back to you soon.</p>
  
  <p>Best regards,<br>Hope Fit Wellness Team</p>
</div>
`;

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, mobile, module, description, place } = req.body;

  // Validate required fields
  if (!email || !module || !place || !name) {
    return res
      .status(400)
      .json({ message: "Name, Email, Module, and Place are required" });
  }

  try {
    // Send user confirmation email
    const userEmailResponse = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Inquiry Received - ${module} Section`,
      html: userConfirmationTemplate({
        name,
        module,
        description: description || "",
        mobile: mobile || null,
        place: place || "",
      }),
    });

    // Return success response
    return res.status(200).json({
      userEmailResponse,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({
      message: "Failed to send email",
      error: error.message || "Unknown error",
    });
  }
}
