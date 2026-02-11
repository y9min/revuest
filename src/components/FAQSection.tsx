import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who is Revuest for?", a: "Revuest is built for service-based businesses that rely on local trust — including car dealers, detailers, trades, cleaning companies, agencies and other local providers." },
  { q: "Do you integrate with my CRM?", a: "We integrate with most major CRMs, booking systems and invoicing tools. If unsure, contact us and we'll confirm compatibility." },
  { q: "How long does setup take?", a: "Most businesses are fully set up in under 30 minutes." },
  { q: "How quickly will I see reviews?", a: "Many businesses see their first new reviews within 24–48 hours of launching." },
  { q: "Is there a contract?", a: "No long-term contracts. Cancel anytime from your dashboard." },
  { q: "Can you filter negative reviews?", a: "No. We operate fully within Google's policies. We focus on increasing volume of genuine positive reviews to strengthen your overall rating." },
  { q: "What countries do you support?", a: "Currently supporting businesses in the UK." },
];

const FAQSection = () => (
  <section id="faq" className="py-16 sm:py-20 bg-background">
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-12">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-foreground">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
