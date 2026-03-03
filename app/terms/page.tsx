import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Service — FlowDesk Inbox",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="March 2, 2026">
      <Section title="The service">
        <P>
          FlowDesk Inbox is a shared communications platform that lets teams
          manage SMS and email conversations in one place. By creating an
          account or using the service you agree to these terms.
        </P>
      </Section>

      <Section title="Acceptable use">
        <P>You may not use FlowDesk to:</P>
        <UL>
          <li>Send spam, unsolicited bulk messages, or messages to contacts who have not consented.</li>
          <li>Harass, threaten, or impersonate any person.</li>
          <li>Violate any applicable law, including CAN-SPAM, TCPA, or CTIA guidelines.</li>
          <li>Transmit malware or attempt to gain unauthorised access to any system.</li>
          <li>Resell or sublicense access to the service without our written consent.</li>
        </UL>
        <P>
          You are responsible for all activity that occurs under your account
          and for ensuring that your use of the service complies with the law
          in your jurisdiction.
        </P>
      </Section>

      <Section title="Messaging and SMS terms">
        <P>
          By enabling SMS features you agree to the following:
        </P>
        <UL>
          <li>
            <strong>Message &amp; data rates may apply.</strong> Standard
            carrier rates may apply to messages sent and received.
          </li>
          <li>
            <strong>Message frequency varies</strong> depending on your usage
            and the conversations your team manages.
          </li>
          <li>
            <strong>To stop messages:</strong> reply STOP to cancel. You will
            receive one confirmation message and no further messages will be
            sent.
          </li>
          <li>
            <strong>For help:</strong> reply HELP or contact{" "}
            <A href="mailto:sam.flowdesk@gmail.com">sam.flowdesk@gmail.com</A>.
          </li>
          <li>
            FlowDesk is <strong>not intended for emergency communications</strong>.
            Do not use it to contact emergency services.
          </li>
          <li>
            You are solely responsible for the content of messages sent through
            your account. FlowDesk does not guarantee message delivery as
            delivery depends on factors outside our control (carrier routing,
            recipient device, etc.).
          </li>
        </UL>
        <P>
          For full details on the SMS program including opt-in and opt-out
          instructions, see our <A href="/sms">SMS Program page</A>.
        </P>
      </Section>

      <Section title="Intellectual property">
        <P>
          FlowDesk and its licensors own all rights to the service, including
          software, design, and trademarks. You retain ownership of your
          content. You grant FlowDesk a limited licence to process your content
          solely to operate the service.
        </P>
      </Section>

      <Section title="Limitation of liability">
        <P>
          To the maximum extent permitted by law, FlowDesk's total liability
          for any claim arising out of these terms or the service is limited to
          the amount you paid us in the 12 months prior to the claim. We are
          not liable for indirect, incidental, or consequential damages.
        </P>
      </Section>

      <Section title="Termination">
        <P>
          Either party may terminate at any time. We may suspend or terminate
          accounts that violate these terms. Upon termination, your right to
          use the service ends immediately. Provisions that by nature should
          survive termination (e.g., limitation of liability) will do so.
        </P>
      </Section>

      <Section title="Changes to these terms">
        <P>
          We may update these terms from time to time. We'll notify you of
          material changes via email or an in-app notice. Continued use after
          the effective date constitutes acceptance.
        </P>
      </Section>

      <Section title="Contact">
        <P>
          Questions:{" "}
          <A href="mailto:sam.flowdesk@gmail.com">sam.flowdesk@gmail.com</A>.
        </P>
      </Section>
    </LegalLayout>
  );
}

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
