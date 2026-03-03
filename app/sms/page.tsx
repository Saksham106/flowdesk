import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "SMS Program — FlowDesk Inbox",
};

export default function SmsPage() {
  return (
    <LegalLayout title="SMS Program" updated="March 2, 2026">
      <Section title="Program name">
        <P>FlowDesk Inbox Messaging</P>
      </Section>

      <Section title="Description">
        <P>
          FlowDesk Inbox Messaging is a transactional and customer-care
          messaging program. It enables businesses using FlowDesk to send and
          receive SMS messages with contacts who have opted in — for example,
          by submitting their phone number in a form, completing a booking
          flow, or texting the business first.
        </P>
        <P>
          We do not send messages to purchased lists. All contacts must have
          explicitly provided their number and consented to receive messages
          from the business operating the FlowDesk account.
        </P>
      </Section>

      <Section title="Consent">
        <P>
          Users opt in by one of the following methods:
        </P>
        <UL>
          <li>Submitting their phone number via a web form or booking flow that includes clear disclosure of messaging.</li>
          <li>Texting a keyword or number to initiate a conversation.</li>
          <li>Providing verbal or written consent in a manner that complies with applicable law.</li>
        </UL>
        <P>
          Consent is not a condition of purchasing any good or service.
        </P>
      </Section>

      <Section title="Message frequency">
        <P>Message frequency varies based on your interactions with the business.</P>
      </Section>

      <Section title="Rates">
        <P>Message &amp; data rates may apply.</P>
      </Section>

      <Section title="How to opt out">
        <P>
          Reply <strong>STOP</strong> to any message to cancel. You will
          receive one final confirmation message confirming that you have been
          unsubscribed. No further messages will be sent unless you re-opt in.
        </P>
      </Section>

      <Section title="How to get help">
        <P>
          Reply <strong>HELP</strong> to any message for assistance, or contact
          us at{" "}
          <a
            href="mailto:sam.flowdesk@gmail.com"
            className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 transition-colors"
          >
            sam.flowdesk@gmail.com
          </a>
          .
        </P>
        <P>Support hours: Monday – Friday, 9 am – 6 pm ET.</P>
      </Section>

      <Section title="Supported carriers">
        <P>
          Compatible with all major US carriers. Carrier support for short
          codes and long codes may vary.
        </P>
      </Section>

      <Section title="Privacy">
        <P>
          Message content and phone numbers are handled in accordance with our{" "}
          <a
            href="/privacy"
            className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 transition-colors"
          >
            Privacy Policy
          </a>
          . We do not share or sell your phone number to third parties for
          marketing purposes.
        </P>
      </Section>
    </LegalLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-9">
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
