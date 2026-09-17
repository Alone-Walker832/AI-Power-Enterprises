import { company } from "./companyData-B8RcDcc2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CsvVWSPF.js
var contactFaqs = [
	{
		question: "How quickly will you respond to my enquiry?",
		answer: "We typically respond to all business enquiries within one business hour during Pakistan Standard Time. For active SLA contracts, our initial response commitment is 30 minutes, 24/7 × 365."
	},
	{
		question: "What is your office address in Karachi?",
		answer: `Our head office is at ${company.address}. Regional technical hubs operate from Islamabad and Lahore, with field support across Multan, Faisalabad, Peshawar, Gilgit and Quetta.`
	},
	{
		question: "Can I speak to someone urgently for an outage?",
		answer: `Yes. For active SLA contracts, call the 24/7 SLA desk at ${company.phone}. For non-contract urgent requests, WhatsApp ${company.whatsapp} for fastest response.`
	},
	{
		question: "Do you support clients outside Karachi?",
		answer: "Yes. We provide nationwide coverage through our regional technical hubs and field support teams — including overseas remote support for select engagements."
	},
	{
		question: "Which email should I use for sales vs general enquiries?",
		answer: `Use ${company.emails.sales} for pricing, quotes and new engagements. Use ${company.emails.info} for general information, support clarifications and partnerships.`
	}
];
//#endregion
export { contactFaqs };
