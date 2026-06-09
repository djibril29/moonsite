"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot field — bots fill it, humans never see it.
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return {
      status: "success",
      message: "Merci ! Votre message a bien été envoyé.",
    };
  }

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Merci de renseigner votre nom, votre email et votre message.",
    };
  }

  if (!EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "Votre adresse email semble invalide. Merci de la vérifier.",
    };
  }

  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return {
      status: "error",
      message:
        "Le service d'envoi n'est pas encore configuré. Écrivez-nous directement à contact@mooninnov.com.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Moon.innov — Site web" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `Nouveau message du site — ${name}${
        company ? ` (${company})` : ""
      }`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        `Entreprise : ${company || "—"}`,
        "",
        "Message :",
        message,
      ].join("\n"),
    });

    return {
      status: "success",
      message:
        "Merci ! Votre message a bien été envoyé. Nous revenons vers vous sous 48h.",
    };
  } catch (err) {
    console.error("Contact form SMTP error:", err);
    return {
      status: "error",
      message:
        "Une erreur est survenue à l'envoi. Réessayez ou écrivez-nous à contact@mooninnov.com.",
    };
  }
}
