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
import healthAppImage from "../../public/images/shutterstock_2480850611.jpg";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import profile from '../../public/images/profile.jpg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Anjali Mehta",
    username: "@anjali_fit",
    body: "The real-time heart rate and blood pressure tracking has been a life-saver for me. I feel more in control of my health than ever before.",
  },
  {
    name: "Rahul Kapoor",
    username: "@rahul_active",
    body: "The AI-powered tips and reminders keep me motivated every day. It’s like having a personal trainer and health coach in my pocket.",
  },
  {
    name: "Priya Singh",
    username: "@priya_cares",
    body: "I use the app to monitor my mother’s vitals remotely. The caregiver access feature gives me peace of mind even when I’m away.",
  },
  {
    name: "David Thomas",
    username: "@david_runs",
    body: "Seamless integration with my smartwatch means I don’t have to manually log anything. The automatic syncing is spot-on.",
  },
  {
    name: "Sneha Reddy",
    username: "@sneha_wellness",
    body: "The telemedicine option saved me a clinic visit last month. I could share my health data directly with the doctor during the call.",
  },
  {
    name: "Mohit Verma",
    username: "@mohit_fitness",
    body: "I love the detailed reports and weekly progress charts. They help me stay consistent with my fitness and nutrition goals.",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
  {
    title: "Step 1: Create Your Health Profile",
    description:
      "Start by adding your personal details, medical history, and health goals so the app can personalize your experience.",
  },
  {
    title: "Step 2: Connect Devices & Wearables",
    description:
      "Sync your smartwatch, fitness band, or medical devices to enable real-time tracking of heart rate, blood pressure, sleep, and more.",
  },
  {
    title: "Step 3: Monitor Your Vitals",
    description:
      "View live biometric data on your dashboard and get alerts if any readings go outside your healthy range.",
  },
  {
    title: "Step 4: Track Fitness & Nutrition",
    description:
      "Log your workouts, steps, calories, meals, and hydration. Receive daily AI tips to improve your fitness and diet.",
  },
  {
    title: "Step 5: Get Reminders & Insights",
    description:
      "Set medication reminders and receive health trend reports to stay proactive about your wellness.",
  },
  {
    title: "Step 6: Access Virtual Care",
    description:
      "Book telemedicine consultations, share reports with doctors or caregivers, and receive personalized treatment guidance.",
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
    🩺
    <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
    <AnimatedGradientText className="text-sm font-medium">
      Your AI-Powered Personal Health Companion
    </AnimatedGradientText>
    <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
  </div>

  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
    Take Control of Your <AuroraText>Health</AuroraText> — Track, Improve, and Stay Connected
  </h1>

  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
    Monitor vitals in real time, log workouts and nutrition, get medication reminders, 
    and connect with doctors — all from one AI-driven mobile app.
  </p>

  <div className="">
    <Link href="/consult">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Get Started for Free
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
      Take Control of Your Health – Track, Analyze & Connect in Real Time.
    </h2>
    <Link href="/consult">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Start Monitoring
        </span>
      </ShimmerButton>
    </Link>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
    <Image
      src={healthAppImage} // Replace with your actual health monitoring app illustration path
      alt="Health Monitoring App Illustration"
      className="w-full max-w-md h-96 object-cover"
      width={10}
      height={10}
      unoptimized
    />
  </div>
</section>


            <section className="mx-4 mt-20 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
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
        1. What is the Health Monitoring App?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          The Health Monitoring App is your personal mobile health companion,
          designed to track vitals, fitness, nutrition, medications, and provide
          access to telemedicine. It empowers you to stay on top of your health
          with real-time data and AI-driven insights.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        2. What health metrics can I track?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          You can monitor heart rate, blood pressure, oxygen saturation,
          temperature, sleep quality, daily activity, calories burned, water
          intake, and medication schedules — all in one place.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        3. Does it work with wearable devices?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes! The app seamlessly integrates with popular smartwatches, fitness
          bands, and medical devices for automatic syncing of your health data.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>
        4. Can I consult a doctor through the app?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Absolutely. Our telemedicine feature allows you to book remote
          consultations, share your health records securely, and get
          professional advice without visiting a clinic.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>
        5. How does the app help me stay consistent?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          You can set personalized reminders for workouts, hydration, meals, and
          medications. The app also sends motivational tips and progress reports
          to keep you on track.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>
        6. Is my data secure and private?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. All health data is encrypted and stored securely. You have full
          control over who can access your information, including doctors and
          caregivers.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger>
        7. Can family members or caregivers monitor my health?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          With your permission, the app allows trusted family members or
          caregivers to view your vitals, receive alerts, and stay updated on
          your health status.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger>
        8. Is the app free to use?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          The basic tracking features are free. Advanced analytics, personalized
          coaching, and telemedicine services may require a premium subscription.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-9">
      <AccordionTrigger>
        9. Who can benefit from using the app?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          The app is ideal for chronic patients, fitness enthusiasts, elderly
          users, and healthcare providers offering remote monitoring to their
          patients.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>

        </main>
    );
}
