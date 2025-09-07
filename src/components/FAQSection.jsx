import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What sets Kuppismart apart from other livestock management tools?",
      answer:
        "Kuppismart stands out by offering tailored features and advanced customization options that are typically unavailable in other livestock management platforms."
    },
    {
      question: "What is Kuppismart and how does it work?",
      answer:
        "Kuppismart is a smart IoT-based solution designed to optimize poultry and livestock management through automation and data-driven insights."
    },
    {
      question: "What features make Kuppismart stand out?",
      answer:
        "Features like automated feeding, real-time monitoring, and powerful analytics help farmers save time, reduce waste, and improve efficiency."
    },
    {
      question:
        "Can Kuppismart devices be tailored to meet the specific needs of my practice?",
      answer:
        "Yes, Kuppismart devices are highly customizable to adapt to both small farms and large-scale operations."
    },
    {
      question:
        "Is Kuppismart suitable for both small farms and large-scale operations?",
      answer:
        "Absolutely, Kuppismart is designed to scale seamlessly whether you’re managing a small flock or a commercial farm."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#e8e6da] py-12 px-4" id="faqs">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-green-600 text-center mt-1 font-semibold">(FAQs)</p>

        {/* FAQ Items */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-[3px] border-green-600 rounded-lg">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium bg-white transition cursor-pointer rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
