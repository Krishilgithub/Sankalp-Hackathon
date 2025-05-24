import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Event Scheduling",
    description:
      "AI-powered scheduling that finds the perfect time for all participants",
    icon: "📅",
  },
  {
    title: "Reminders",
    description:
      "Automated notifications and follow-ups to keep everyone on track",
    icon: "🔔",
  },
  {
    title: "Participant Coordination",
    description: "Efficiently manage attendees and their roles",
    icon: "👥",
  },
  {
    title: "Calendar Sync",
    description: "Seamless integration with popular calendar platforms",
    icon: "📆",
  },
  {
    title: "Communication",
    description: "Built-in tools for effective event communication",
    icon: "💬",
  },
  {
    title: "Task Tracking",
    description: "Keep track of event-related tasks and deadlines",
    icon: "✅",
  },
  {
    title: "Virtual Meetings",
    description: "Integrated video conferencing and meeting tools",
    icon: "🎥",
  },
  {
    title: "Analytics",
    description: "Comprehensive insights and reporting",
    icon: "📊",
  },
  {
    title: "User Roles",
    description: "Flexible permission system for different user types",
    icon: "👤",
  },
  {
    title: "AI Suggestions",
    description: "Intelligent recommendations for better events",
    icon: "🤖",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out Eventron",
    features: [
      "Up to 3 events per month",
      "Basic scheduling features",
      "Email notifications",
      "Calendar integration",
      "Basic analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$15",
    period: "/month",
    description: "Best for growing teams and businesses",
    features: [
      "Unlimited events",
      "Advanced scheduling",
      "AI-powered suggestions",
      "Custom branding",
      "Advanced analytics",
      "Priority support",
      "Team collaboration",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom reporting",
      "Advanced security",
      "Training sessions",
      "Custom development",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Home = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    const tl = gsap.timeline();
    tl.from(".hero-content", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    // Particles animation
    if (particlesRef.current) {
      // Initialize particles.js here
      // This is a placeholder for the actual particles.js initialization
      console.log("Particles initialized");
    }

    // Scroll animations
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".features-section",
        start: "top center",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary scrollbar-thin scrollbar-thumb-brand-gradient-from scrollbar-track-background">
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-gradient-from via-background to-brand-gradient-to"
      >
        {/* Particles Background */}
        <div ref={particlesRef} className="absolute inset-0" />

        {/* Hero Content */}
        <div className="hero-content relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to bg-clip-text text-transparent"
          >
            Eventron
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
          >
            AI-powered scheduling, reminders, and analytics for seamless events
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="btn bg-gradient-to-r from-btn-gradient-from to-btn-gradient-to text-white"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="btn border-2 border-brand-gradient-from text-brand-gradient-from hover:bg-brand-gradient-from hover:text-white"
            >
              Explore Features
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to bg-clip-text text-transparent mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Everything you need to plan, manage, and host successful virtual
              events
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card card bg-card hover:scale-105 transition-transform border border-brand-gradient-from"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {feature.title}
                </h3>
                <p className="text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to bg-clip-text text-transparent mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include a 14-day
              free trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card bg-card hover:scale-105 transition-transform border-2 ${
                  plan.popular
                    ? "border-brand-gradient-to"
                    : "border-brand-gradient-from"
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-secondary ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-secondary mb-6">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-secondary"
                    >
                      <span className="mr-2">✔️</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full btn bg-gradient-to-r from-btn-gradient-from to-btn-gradient-to text-white`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to bg-clip-text text-transparent mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
          <form className="card bg-card p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input mt-1 bg-surface text-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input mt-1 bg-surface text-primary"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="input mt-1 bg-surface text-primary"
              />
            </div>
            <button
              type="submit"
              className="btn bg-gradient-to-r from-btn-gradient-from to-btn-gradient-to text-white w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
