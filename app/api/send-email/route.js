import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, company, subject } = await request.json();

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'Info@bisways.com',
      reply_to: email,
      subject: `New Brochure Request - ${name}`,
      html: `
        <h2>New Brochure Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
      `,
    });

    if (result.error) {
      throw result.error;
    }

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
