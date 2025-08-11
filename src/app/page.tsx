"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import VantaFog from "@/components/VantaFog";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import companyNameFinderImage from "../../public/images/Company Name Finder_Helps-BA41AD4p (1).jpg";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import profile from "../../public/images/profile.jpg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
    {
        title: "Step 1: Enter Your Desired Company Name",
        description:
            "Start by typing the company name you have in mind. Our system will prepare to run domain, MCA, and trademark checks instantly.",
    },
    {
        title: "Step 2: Check Domain Availability",
        description:
            "We’ll scan across multiple extensions like .com, .in, and others to see if your desired domain is available for registration.",
    },
    {
        title: "Step 3: Validate with MCA Database",
        description:
            "Our tool checks the Ministry of Corporate Affairs’ official database to ensure the name meets eligibility rules for incorporation in India.",
    },
    {
        title: "Step 4: Identify Conflicts & Restrictions",
        description:
            "We flag similar or reserved names and highlight any MCA or trademark restrictions that could cause legal issues later.",
    },
    {
        title: "Step 5: Get Brandable Alternatives",
        description:
            "If your original choice isn’t available, we’ll generate creative, compliant, and domain-ready alternatives for you to consider.",
    },
    {
        title: "Step 6: Download a Compliance Report",
        description:
            "Receive a one-click report summarizing your chosen name’s domain, MCA, and trademark status—ready for incorporation or branding.",
    },
];

export default function Home() {
    const { theme } = useTheme();
    return (
        <main className="mx-auto">
            <VantaFog />
            <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                    <span
                        className={cn(
                            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                        )}
                        style={{
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                        }}
                    />
                    🏢
                    <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                    <AnimatedGradientText className="text-sm font-medium">
                        Your AI-Powered Company Name Finder
                    </AnimatedGradientText>
                    <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Find Your <AuroraText>Perfect Company Name</AuroraText> —
                    Unique, Legal & Domain-Ready
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Instantly check domain availability, validate MCA
                    compliance, screen trademarks, and get brandable name
                    suggestions — all in one powerful tool for entrepreneurs.
                </p>

                <div className="">
                    <Link href="/search">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Check My Company Name
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>
            </section>

            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

            <section className="flex mt-10 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        Find the Perfect Company Name – MCA Compliant & Domain
                        Ready.
                    </h2>
                    <Link href="/search">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Start Name Search
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
                    <Image
                        src={companyNameFinderImage} // Replace with your Company Name Finder illustration path
                        alt="Company Name Finder Illustration"
                        className="w-full max-w-md h-96 object-contain"
                        width={10}
                        height={10}
                        unoptimized
                    />
                </div>
            </section>

            <section className="px-4 md:px-36 mt-20">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <h1 className="text-4xl font-bold">FAQ&apos;s</h1>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. What is the Company Name Finder?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Company Name Finder is a tool that helps
                                entrepreneurs select unique and legally
                                compliant company names in India. It checks
                                domain availability, MCA compliance, trademark
                                conflicts, and even generates alternative name
                                suggestions.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. How does it check MCA compliance?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                The tool validates proposed names against MCA’s
                                official database and rules, ensuring your name
                                meets all legal requirements for incorporation
                                and avoids restricted or prohibited terms.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Does it check domain name availability?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes! It scans popular domain extensions like{" "}
                                <strong>.com</strong> and <strong>.in</strong>{" "}
                                so you can secure a matching online identity for
                                your business instantly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. Can it detect trademark conflicts?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely. It checks your proposed names
                                against the trademark database to ensure you’re
                                not infringing on existing registered brands,
                                reducing legal risks.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. What if my chosen name is unavailable?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                The system will instantly suggest brandable
                                alternatives that are available both legally and
                                as a domain, helping you find a great option
                                without delays.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Who can use Company Name Finder?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It’s ideal for entrepreneurs, startups, branding
                                agencies, and incorporation service providers
                                who want to ensure a smooth, conflict-free
                                naming process.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. How long does the name check process take?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Most checks are completed instantly, and you’ll
                                receive a consolidated report summarizing MCA,
                                domain, and trademark statuses in just a few
                                seconds.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. Is my search data stored or shared?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                No. Your search data is kept private and is not
                                shared with third parties, ensuring your
                                business ideas remain confidential.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            9. Is the tool free to use?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Basic name availability checks are free.
                                Advanced reports with trademark analysis and MCA
                                compliance verification may require a premium
                                plan.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
