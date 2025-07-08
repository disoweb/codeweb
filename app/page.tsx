import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  CheckCircle,
  Shield,
  Headphones,
  Star,
  ArrowRight,
  Play,
  Eye,
  ShoppingCart,
  Twitter,
  Linkedin,
  Github,
  Clock,
  Users,
  Zap,
  Download,
  Award,
  TrendingUp,
  Lock,
  Gift,
  Share2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AppMarketplaceLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Sticky Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-[#2563EB] flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-lg mr-2"></div>
                AppMarket
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#apps" className="text-gray-600 hover:text-[#2563EB] transition-colors font-medium">
                Browse Apps
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-[#2563EB] transition-colors font-medium">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-[#2563EB] transition-colors font-medium">
                Reviews
              </Link>
              <Link href="#support" className="text-gray-600 hover:text-[#2563EB] transition-colors font-medium">
                Support
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#login" className="text-gray-600 hover:text-[#2563EB] transition-colors font-medium">
                Sign In
              </Link>
              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
                Start Free Trial
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Conversion Optimized */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              {/* Social Proof Badge */}
              <div className="flex items-center space-x-2">
                <Badge className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20 px-3 py-1">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Rated #1 App Marketplace
                </Badge>
                <span className="text-sm text-gray-600">by 10,000+ businesses</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Launch Your Business
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
                    {" "}
                    10x Faster
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Skip months of development. Get production-ready apps with full source code, professional
                  installation, and lifetime updates. <strong>Launch in days, not months.</strong>
                </p>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Clock, text: "Deploy in 24 hours" },
                  { icon: Shield, text: "100% source code" },
                  { icon: Award, text: "30-day guarantee" },
                ].map((prop, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-700">
                    <prop.icon className="h-5 w-5 text-[#10B981]" />
                    <span className="font-medium">{prop.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-xl text-lg font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg transition-all duration-200 text-lg font-semibold bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo (2 min)
                </Button>
              </div>

              {/* Social Proof Numbers */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-[#10B981] to-[#2563EB] rounded-full border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">10,000+ happy customers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-[#F59E0B] fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Main Dashboard Image */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/placeholder.svg?height=600&width=700"
                    alt="Premium app dashboard showcase"
                    width={700}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-[#10B981]" />
                      <span className="text-sm font-semibold">+300% Growth</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-[#2563EB]" />
                      <span className="text-sm font-semibold">2.1k Sales</span>
                    </div>
                  </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 font-medium">TRUSTED BY LEADING COMPANIES</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {["TechCorp", "StartupLab", "GrowthCo", "InnovateLtd", "ScaleTech"].map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
                  <div className="font-bold text-gray-600">{company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stop Wasting Months on Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building apps from scratch is expensive, time-consuming, and risky. Get proven, production-ready solutions
              that your customers will love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Problems */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Old Way (Painful)</h3>
              {[
                { problem: "6-12 months development time", icon: "⏰" },
                { problem: "$50,000+ development costs", icon: "💸" },
                { problem: "Bugs, delays, and scope creep", icon: "🐛" },
                { problem: "No guarantee it will work", icon: "❌" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-gray-700 font-medium">{item.problem}</span>
                </div>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The AppMarket Way (Smart)</h3>
              {[
                { solution: "Deploy in 24-48 hours", icon: "⚡" },
                { solution: "Starting at just $99", icon: "💰" },
                { solution: "Battle-tested, bug-free code", icon: "✅" },
                { solution: "30-day money-back guarantee", icon: "🛡️" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-100"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-gray-700 font-medium">{item.solution}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg text-lg font-semibold"
            >
              Browse Apps Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Apps - Conversion Focused */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20 px-3 py-1 mb-4">🔥 BESTSELLERS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Apps That Made Our Customers Millions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These proven apps have generated over $50M in revenue for our customers. Your success story could be next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "E-Commerce Pro",
                description: "Complete online store that generated $2.3M for TechStart Inc in 6 months",
                price: "$299",
                originalPrice: "$599",
                image: "/placeholder.svg?height=250&width=400",
                rating: 4.9,
                sales: "2,147",
                badge: "BESTSELLER",
                results: "+300% Revenue",
              },
              {
                name: "CRM Dashboard",
                description: "Customer management system that helped GrowthLab scale to 500+ clients",
                price: "$199",
                originalPrice: "$399",
                image: "/placeholder.svg?height=250&width=400",
                rating: 4.8,
                sales: "1,823",
                badge: "TRENDING",
                results: "+250% Efficiency",
              },
              {
                name: "Analytics Suite",
                description: "Business intelligence platform that saved DataCorp $100k in consulting",
                price: "$149",
                originalPrice: "$299",
                image: "/placeholder.svg?height=250&width=400",
                rating: 4.9,
                sales: "3,241",
                badge: "HOT",
                results: "+400% Insights",
              },
            ].map((app, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge
                    className={`${
                      app.badge === "BESTSELLER"
                        ? "bg-[#F59E0B] text-white"
                        : app.badge === "TRENDING"
                          ? "bg-[#10B981] text-white"
                          : "bg-red-500 text-white"
                    } px-2 py-1 text-xs font-bold`}
                  >
                    {app.badge}
                  </Badge>
                </div>

                {/* Results Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-white/90 text-[#10B981] border border-[#10B981]/20 px-2 py-1 text-xs font-bold">
                    {app.results}
                  </Badge>
                </div>

                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={app.image || "/placeholder.svg"}
                      alt={`${app.name} screenshot`}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-xl font-bold text-gray-900">{app.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-[#F59E0B] fill-current" />
                      <span className="text-sm font-medium text-gray-600">{app.rating}</span>
                      <span className="text-xs text-gray-400">({app.sales})</span>
                    </div>
                  </div>

                  <CardDescription className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {app.description}
                  </CardDescription>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#10B981]">{app.price}</span>
                      <span className="text-lg text-gray-400 line-through">{app.originalPrice}</span>
                      <Badge className="bg-red-100 text-red-600 text-xs px-2 py-1">50% OFF</Badge>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all duration-200 bg-transparent"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-all duration-200 hover:scale-105"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Urgency CTA */}
          <div className="bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">⚡ Limited Time: 50% Off All Apps</h3>
            <p className="text-lg mb-6 opacity-90">Join 10,000+ businesses who chose the smart way to build apps</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-[#2563EB] hover:bg-gray-100 px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg text-lg font-semibold"
              >
                Claim 50% Discount Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2 text-sm opacity-90">
                <Clock className="h-4 w-4" />
                <span>Offer expires in 48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Success Stories From Real Customers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. See how AppMarket transformed these businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote:
                  "AppMarket saved us 8 months and $75,000. Our e-commerce app generated $500K in the first quarter alone. Best investment we ever made.",
                author: "Sarah Chen",
                title: "CEO, TechStart Inc.",
                company: "E-commerce Startup",
                result: "$500K Revenue",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
              {
                quote:
                  "The CRM app helped us scale from 50 to 500 clients without hiring more staff. Our efficiency increased by 300%. Incredible ROI.",
                author: "Michael Rodriguez",
                title: "Founder, GrowthLab",
                company: "Marketing Agency",
                result: "300% Efficiency",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
              {
                quote:
                  "We launched our SaaS platform in 3 weeks instead of 6 months. Already at $50K MRR and growing fast. Game-changer for our startup.",
                author: "Emily Johnson",
                title: "CTO, InnovateCorp",
                company: "SaaS Startup",
                result: "$50K MRR",
                avatar: "/placeholder.svg?height=60&width=60",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#F59E0B] fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.author} avatar`}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20">{testimonial.result}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "$50M+", label: "Revenue Generated" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-[#2563EB]">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Program Section - Strategically Placed */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20 px-4 py-2 mb-4">
              <Gift className="h-4 w-4 mr-2" />
              REFERRAL PROGRAM
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Earn While You Share</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Love AppMarket? Share it with others and earn substantial rewards for every successful referral.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Referral Benefits */}
            <div className="space-y-8">
              <Card className="bg-white rounded-2xl shadow-lg border-0 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Referral Rewards</h3>
                <div className="space-y-6">
                  {[
                    {
                      tier: "Individual Referral",
                      reward: "$50-$200",
                      description: "For each person who purchases any app through your referral",
                      icon: "👤",
                      color: "bg-blue-100 text-[#2563EB]",
                    },
                    {
                      tier: "Business Referral",
                      reward: "$500-$2,000",
                      description: "For each business that signs up for Professional or Enterprise plans",
                      icon: "🏢",
                      color: "bg-green-100 text-[#10B981]",
                    },
                    {
                      tier: "Enterprise Referral",
                      reward: "$5,000+",
                      description: "For large enterprise clients with custom requirements",
                      icon: "🏛️",
                      color: "bg-purple-100 text-purple-600",
                    },
                  ].map((reward, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div
                        className={`w-12 h-12 rounded-full ${reward.color} flex items-center justify-center text-xl`}
                      >
                        {reward.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{reward.tier}</h4>
                          <span className="text-xl font-bold text-[#10B981]">{reward.reward}</span>
                        </div>
                        <p className="text-sm text-gray-600">{reward.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Additional Benefits</h4>
                <ul className="space-y-2">
                  {[
                    "Lifetime commissions on recurring subscriptions",
                    "Real-time tracking dashboard",
                    "Priority support for your referrals",
                    "Custom referral codes and materials",
                    "Monthly bonus tiers for top performers",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#10B981] mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How It Works */}
            <div className="space-y-6">
              <Card className="bg-white shadow-lg border-0 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Join the Program",
                      description: "Sign up for our referral program and get your unique referral code",
                      color: "bg-[#2563EB]",
                    },
                    {
                      step: "2",
                      title: "Share Your Code",
                      description: "Share your referral link with businesses and individuals in your network",
                      color: "bg-[#10B981]",
                    },
                    {
                      step: "3",
                      title: "Track & Earn",
                      description: "Monitor your referrals in real-time and receive payments monthly",
                      color: "bg-[#F59E0B]",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`${step.color} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0`}
                      >
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-lg p-6 text-white text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Start Earning?</h4>
                <p className="mb-4 opacity-90">Join thousands of partners already earning with AppMarket</p>
                <Button className="bg-white text-[#2563EB] hover:bg-gray-100 px-6 py-2 rounded-md font-semibold">
                  <Share2 className="mr-2 h-4 w-4" />
                  Join Referral Program
                </Button>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Top Partner Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  title: "Business Consultant",
                  earnings: "$12,500",
                  period: "Last 6 months",
                  quote: "The referral program has become a significant revenue stream for my consulting business.",
                },
                {
                  name: "Tech Solutions Inc.",
                  title: "IT Services Company",
                  earnings: "$45,000",
                  period: "This year",
                  quote: "We've integrated AppMarket referrals into our service offerings. Fantastic results!",
                },
                {
                  name: "Mark R.",
                  title: "Freelance Developer",
                  earnings: "$8,200",
                  period: "Last quarter",
                  quote: "Easy passive income while helping my clients find the perfect app solutions.",
                },
              ].map((story, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#10B981] rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-gray-900">{story.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{story.title}</p>
                  <div className="text-2xl font-bold text-[#10B981] mb-1">{story.earnings}</div>
                  <p className="text-xs text-gray-500 mb-3">{story.period}</p>
                  <p className="text-sm text-gray-600 italic">"{story.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Conversion Optimized */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Choose Your Success Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free, scale fast. No hidden fees, no long-term contracts. Cancel anytime with our 30-day money-back
              guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Starter",
                price: "$0",
                period: "/month",
                description: "Perfect for trying out our platform",
                features: [
                  "Access to 10 free apps",
                  "Basic documentation",
                  "Community support",
                  "7-day trial of premium features",
                ],
                cta: "Start Free Trial",
                popular: false,
                highlight: "FREE FOREVER",
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                originalPrice: "$199",
                description: "Everything you need to scale your business",
                features: [
                  "Access to 200+ premium apps",
                  "Full source code + documentation",
                  "Priority email support",
                  "Free installation assistance",
                  "Custom branding options",
                  "30-day money-back guarantee",
                ],
                cta: "Start 14-Day Free Trial",
                popular: true,
                highlight: "MOST POPULAR",
              },
              {
                name: "Enterprise",
                price: "$299",
                period: "/month",
                originalPrice: "$599",
                description: "For teams that need everything",
                features: [
                  "Access to all 500+ apps",
                  "White-label licensing",
                  "24/7 phone support",
                  "Dedicated account manager",
                  "Custom development",
                  "SLA guarantee",
                  "Advanced security features",
                ],
                cta: "Start 14-Day Free Trial",
                popular: false,
                highlight: "BEST VALUE",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 border-2 ${
                  plan.popular
                    ? "border-[#10B981] shadow-2xl scale-105 bg-gradient-to-b from-white to-green-50"
                    : "border-gray-200 shadow-lg hover:shadow-xl bg-white"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#10B981] text-white px-4 py-2 text-sm font-bold">{plan.highlight}</Badge>
                  </div>
                )}

                <CardContent className="p-8 text-center">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-lg text-gray-400 line-through">{plan.originalPrice}/month</span>
                        <Badge className="bg-red-100 text-red-600 text-xs px-2 py-1">50% OFF</Badge>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 ${
                      plan.popular
                        ? "bg-[#10B981] hover:bg-[#059669] text-white shadow-lg"
                        : "bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  {plan.name !== "Starter" && <p className="text-xs text-gray-500 mt-3">No credit card required</p>}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guarantee */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-lg px-6 py-3">
              <Shield className="h-5 w-5 text-[#10B981]" />
              <span className="text-green-800 font-medium">30-Day Money-Back Guarantee • No Questions Asked</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Objection Handling */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know to make the right decision.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I launch my app?",
                answer:
                  "Most customers launch within 24-48 hours. Our apps come with complete source code, documentation, and installation guides. Professional installation is available for same-day deployment.",
              },
              {
                question: "Do I get the full source code?",
                answer:
                  "Yes! You get 100% of the source code with no restrictions. Modify, rebrand, and customize however you want. It's yours forever.",
              },
              {
                question: "What if the app doesn't work for my business?",
                answer:
                  "We offer a 30-day money-back guarantee, no questions asked. If you're not completely satisfied, we'll refund your purchase in full.",
              },
              {
                question: "Are there any ongoing fees or subscriptions?",
                answer:
                  "No hidden fees! You pay once and own the app forever. Optional support and maintenance plans are available but not required.",
              },
              {
                question: "Can I customize the apps for my brand?",
                answer:
                  "All apps come with full customization rights. Change colors, logos, features, and functionality. Our team can help with custom modifications if needed.",
              },
              {
                question: "What kind of support do you provide?",
                answer:
                  "We provide comprehensive documentation, video tutorials, and email support. Professional and Enterprise plans include priority support and phone assistance.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - High Converting */}
      <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Launch Your Success Story?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Join 10,000+ businesses who chose the smart way to build apps. Start your free trial today and see
                results in 24 hours.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {[
                { icon: Zap, text: "Deploy in 24 hours" },
                { icon: Shield, text: "30-day guarantee" },
                { icon: Download, text: "Full source code" },
              ].map((prop, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <prop.icon className="h-8 w-8 opacity-90" />
                  <span className="font-medium">{prop.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#2563EB] hover:bg-gray-100 px-10 py-5 rounded-lg transition-all duration-200 hover:scale-105 shadow-xl text-xl font-bold"
              >
                Start Free Trial Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2563EB] px-10 py-5 rounded-lg transition-all duration-200 text-xl font-bold bg-transparent"
              >
                <Headphones className="mr-2 h-6 w-6" />
                Talk to Sales
              </Button>
            </div>

            {/* Final Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm opacity-90 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5" />
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-lg"></div>
                <span className="text-xl font-bold">AppMarket</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The smart way to build and launch business apps. Trusted by 10,000+ companies worldwide.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Browse Apps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 AppMarket. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
