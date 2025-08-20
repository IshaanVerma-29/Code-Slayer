import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
    {
        question: "What is CodeSlayer 2025?",
        answer:
            "CodeSlayer is a thrilling 36-hour anime-themed hackathon inspired by Demon Slayer, hosted at IIIT Delhi. Participants will battle through 3 intense rounds, building innovative solutions while embracing the spirit of creativity, speed, and teamwork. The event features a dynamic website with sections for registration, schedules, FAQs, and more.",
        border: "border-blue-500/50 group hover:border-blue-400/80 hover:shadow-blue-500/30",
    },
    {
        question: "Who can participate?",
        answer:
            "CodeSlayer is open to developers, designers, innovators, and anime enthusiasts of all skill levels. Whether you’re a beginner or a seasoned coder, if you’re ready to challenge yourself in a 36-hour creative sprint, you’re welcome to join.",
        border: "border-indigo-500/50 group hover:border-indigo-400/80 hover:shadow-indigo-500/30",
    },
    {
        question: "Can beginners participate in CodeSlayer?",
        answer:
            "Absolutely! CodeSlayer is beginner-friendly, with mentors and guidance available throughout the event. Even if it’s your first hackathon, you’ll have the support you need to shine and learn along the way.",
        border: "border-blue-500/50 group hover:border-blue-400/80 hover:shadow-blue-500/30",
    },
    {
        question: "What perks will I get?",
        answer:
            "Participants and organisers will receive certificates of appreciation and recognition. As part of the organising team, you’ll also get a special certificate for your contributions. Plus, you’ll gain valuable experience, networking opportunities, and memories from this unique anime-inspired event.",
        border: "border-indigo-500/50 group hover:border-indigo-400/80 hover:shadow-indigo-500/30",
    },
    {
        question: "How do I register for CodeSlayer?",
        answer:
            "Click the “Register Now” button on the website to access the registration form. Don’t wait too long—spots are limited, and the battle begins soon!",
        border: "border-blue-500/50 group hover:border-blue-400/80 hover:shadow-blue-500/30",
    },
];

const FAQs = () => {
    return (
        <>
            <section id="faqs" className="relative py-20 px-4 overflow-hidden transition-all duration-700 ease-in-out">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/drr3xypxn/image/upload/v1755089318/8_ulejhr.jpg"
                        alt="Team Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-cinzel font-bold text-center mb-6 demon-text drop-shadow-lg flex flex-col items-center">
                        Frequently Asked Questions
                        <div
                            className="text-base mt-2 text-gray-300"
                            style={{ fontSize: "0.85em" }}
                        >
                            よくある質問
                        </div>
                    </h2>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqData.map((faq, idx) => (
                            <AccordionItem 
                                key={idx} 
                                value={`item-${idx}`}
                                className={`p-4 hover-blade cursor-blade bg-gray-900/90 backdrop-blur-xl border ${faq.border} transition-all duration-500 shadow-2xl rounded-lg overflow-hidden accordion-item`}
                            >
                                <AccordionTrigger className="text-xl font-semibold text-primary drop-shadow-lg hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 drop-shadow-md pt-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="text-center mt-12">
                        <Button
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 cursor-blade transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-green-500/40 backdrop-blur-sm border border-green-400/30"
                            onClick={() =>
                                window.open(
                                    "https://chat.whatsapp.com/E28GNRJEjxrGOwZJoAy5bB",
                                    "_blank"
                                )
                            }
                        >
                            <MessageCircle className="mr-2 h-5 w-5 drop-shadow-lg" />
                            More Questions? Ask us on WhatsApp
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQs;
