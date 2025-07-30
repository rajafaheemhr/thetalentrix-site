import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const contactInfo = [
	{
		icon: Phone,
		title: "Phone",
		content: "+923461213444",
	},
	{
		icon: Mail,
		title: "Email",
		content: "rajafaheem.hr@gmail.com",
	},
	{
		icon: MapPin,
		title: "Address",
		content: "Fazal Software Technology Park, I-9/3,\Islamabad, Pakistan",
	},
	{
		icon: Clock,
		title: "Business Hours",
		content: "Mon-Fri: 9AM-6PM\nWeekends: Closed",
	},
];

export default function Contact() {
	const { toast } = useToast();
	const queryClient = useQueryClient();

	const form = useForm<InsertContactMessage>({
		resolver: zodResolver(insertContactMessageSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		},
	});

	const submitMutation = useMutation({
		mutationFn: async (data: InsertContactMessage) => {
			return apiRequest("POST", "/api/contact-messages", data);
		},
		onSuccess: () => {
			toast({
				title: "Message Sent Successfully!",
				description: "Thank you for contacting us. We'll get back to you within 24 hours.",
			});
			form.reset();
			queryClient.invalidateQueries({ queryKey: ["/api/contact-messages"] });
		},
		onError: (error: Error) => {
			toast({
				title: "Failed to Send Message",
				description: error.message,
				variant: "destructive",
			});
		},
	});

	const onSubmit = (data: InsertContactMessage) => {
		submitMutation.mutate(data);
	};

	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto">
					Having questions? We're here to help you succeed in your career journey
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Contact Form */}
				<div className="lg:col-span-2">
					<Card className="shadow-lg">
						<CardContent className="p-8">
							<h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<FormField
											control={form.control}
											name="name"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Full Name *</FormLabel>
													<FormControl>
														<Input placeholder="Enter your full name" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Email Address *</FormLabel>
													<FormControl>
														<Input type="email" placeholder="your@email.com" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<FormField
											control={form.control}
											name="phone"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Phone Number</FormLabel>
													<FormControl>
														<Input
															type="tel"
															placeholder="(555) 123-4567"
															{...field}
															value={field.value || ""}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name="subject"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Subject *</FormLabel>
													<Select onValueChange={field.onChange} defaultValue={field.value}>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select subject" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															<SelectItem value="general">General Inquiry</SelectItem>
															<SelectItem value="job-seeker">Job Seeker Support</SelectItem>
															<SelectItem value="employer">Employer Services</SelectItem>
															<SelectItem value="technical">Technical Support</SelectItem>
															<SelectItem value="partnership">Partnership Opportunity</SelectItem>
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Your Message *</FormLabel>
												<FormControl>
													<Textarea
														placeholder="Please describe how we can help you..."
														className="min-h-[150px]"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<Button
										type="submit"
										size="lg"
										className="btn-talentrix"
										disabled={submitMutation.isPending}
									>
										{submitMutation.isPending ? (
											<>
												<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
												Sending...
											</>
										) : (
											<>
												<Send className="h-4 w-4 mr-2" />
												Send Message
											</>
										)}
									</Button>
								</form>
							</Form>
						</CardContent>
					</Card>
				</div>

				{/* Contact Information Sidebar */}
				<div className="space-y-6">
					{/* Contact Details */}
					<Card className="shadow-sm">
						<CardContent className="p-6">
							<h3 className="text-lg font-semibold mb-6">Contact Information</h3>
							<div className="grid grid-cols-6 gap-4">
								<div className="flex flex-col items-center space-y-8 col-span-1">
									{contactInfo.map((info, index) => (
										<div key={index} className="service-icon w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
											<info.icon className="h-5 w-5 text-green-600" />
										</div>
									))}
								</div>
								<div className="flex flex-col justify-between space-y-8 col-span-5">
									{contactInfo.map((info, index) => (
										<div key={index}>
											<h4 className="font-medium text-base">{info.title}</h4>
											<p className="text-gray-700 text-sm whitespace-pre-line">{info.content}</p>
										</div>
									))}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* WhatsApp CTA */}
					<Card
						className="shadow-sm text-white text-center"
						style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
					>
						<CardContent className="p-6">
							<MessageCircle className="h-12 w-12 mx-auto mb-4" />
							<h3 className="text-lg font-semibold mb-2">Need Immediate Help?</h3>
							<p className="mb-4 opacity-90">Chat with us on WhatsApp for quick support</p>
							<a
								href="https://wa.me/923461213444?text=Hi%21%20I%27d%20like%20to%20know%20more%20about%20your%20recruitment%20services."
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								<Button className="bg-white text-green-600 hover:bg-gray-100">
									<MessageCircle className="h-4 w-4 mr-2" />
									Start Chat
								</Button>
							</a>
						</CardContent>
					</Card>

					{/* Google Maps */}
					<Card className="shadow-sm overflow-hidden">
						<div className="aspect-video">
							<iframe
								src="https://www.google.com/maps?q=Fazal+Software+Technology+Park,+I-9/3,+Islamabad&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Talentrix Location"
							/>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
