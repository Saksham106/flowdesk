import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — FlowDesk Inbox",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="March 2, 2026">
      <Section title="Overview">
        <P>
          FlowDesk Inbox ("FlowDesk", "we", "our") is a shared inbox product for
          teams. This policy explains what data we collect, how we use it, and
          what choices you have. We've written it to be readable — if something
          isn't clear, email us at{" "}
          <A href="mailto:sam.flowdesk@gmail.com">sam.flowdesk@gmail.com</A>.
        </P>
      </Section>

      <Section title="Data we collect">
        <UL>
          <li>
            <strong>Account information</strong> — name, work email address,
            and password when you sign up.
          </li>
          <li>
            <strong>Contact information</strong> — phone numbers and email
            addresses of the people your team communicates with, as entered or
            imported into FlowDesk.
          </li>
          <li>
            <strong>Message content and metadata</strong> — the text of
            messages, timestamps, delivery status, and thread history processed
            through the service.
          </li>
          <li>
            <strong>Usage data</strong> — pages visited, features used, browser
            type, IP address, and similar telemetry collected automatically.
          </li>
          <li>
            <strong>Billing information</strong> — handled directly by our
            payment processor; we do not store full card numbers.
          </li>
        </UL>
      </Section>

      <Section title="How we use your data">
        <UL>
          <li>To operate and improve the FlowDesk Inbox service.</li>
          <li>To send transactional emails (receipts, alerts, account notices).</li>
          <li>To provide customer support when you contact us.</li>
          <li>To detect and prevent abuse, fraud, and security incidents.</li>
          <li>
            To understand how the product is used in aggregate (analytics). We
            do not build advertising profiles.
          </li>
        </UL>
      </Section>

      <Section title="Data sharing">
        <P>
          We do not sell personal data. We share data only as needed to deliver
          the service:
        </P>
        <UL>
          <li>
            <strong>Infrastructure and hosting providers</strong> that process
            data on our behalf under confidentiality agreements.
          </li>
          <li>
            <strong>Telephony providers</strong> (e.g., Twilio) that route SMS
            messages. Message content passes through their networks as required
            to send and receive texts.
          </li>
          <li>
            <strong>Analytics tools</strong> that help us understand usage
            patterns using anonymised or aggregated data.
          </li>
          <li>
            <strong>Legal requirements</strong> — if we are required to disclose
            data by law, court order, or to protect rights and safety.
          </li>
        </UL>
      </Section>

      <Section title="Data retention">
        <P>
          We keep account and message data for as long as your account is active
          or as needed to provide the service. When you close your account, we
          delete or anonymise your data within 90 days, except where we are
          legally required to keep it longer. You can request early deletion by
          contacting us.
        </P>
      </Section>

      <Section title="Security">
        <P>
          We use industry-standard measures including encryption in transit
          (TLS), encryption at rest, access controls, and regular security
          reviews. No system is perfectly secure; if you believe your account
          has been compromised, contact us immediately.
        </P>
      </Section>

      <Section title="Your choices">
        <UL>
          <li>
            <strong>Access and correction</strong> — you can view and update
            your account information at any time in settings.
          </li>
          <li>
            <strong>Deletion</strong> — email us to request deletion of your
            account and associated data.
          </li>
          <li>
            <strong>Marketing emails</strong> — you can unsubscribe from
            non-transactional emails using the link in any such email.
          </li>
          <li>
            <strong>SMS opt-out</strong> — reply STOP to any message to opt out
            of future SMS messages from FlowDesk. See our{" "}
            <A href="/sms">SMS Program page</A> for details.
          </li>
        </UL>
      </Section>

      <Section title="Contact">
        <P>
          Questions or requests:{" "}
          <A href="mailto:sam.flowdesk@gmail.com">sam.flowdesk@gmail.com</A>
          .
        </P>
      </Section>
    </LegalLayout>
  );
}

// ── tiny prose helpers ──────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-lg text-neutral-900 mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-neutral-600 leading-relaxed">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-neutral-600 leading-relaxed marker:text-neutral-300">
      {children}
    </ul>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 transition-colors">
      {children}
    </a>
  );
}
