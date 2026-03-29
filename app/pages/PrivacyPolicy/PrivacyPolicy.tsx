
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const PrivacyPolicy = () => {
    return (
        <section className="bg-white text-[#1F2937]">
            <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 md:px-10 lg:py-14">
                <h1 className="text-3xl font-semibold text-[#111827] sm:text-4xl">Privacy Policy</h1>
                <p className="mt-2 text-sm text-[#4B5563]">
                    <span className="font-semibold">Last updated: March 9, 2026</span> - Learn how we collect, use, and protect your personal information.
                </p>

                <p className="mt-6 leading-7 text-[#374151]">
                    This Privacy Policy describes how CallmeAI ("we," "us," or "our") collects, uses, and discloses your personal information when
                    you use our AI-powered calling service. By using our service, you agree to the collection and use of information in accordance with
                    this policy.
                </p>

                <article className="mt-8 space-y-6 text-[15px] leading-7">
                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Information We Collect</h2>

                        <h3 className="mt-4 text-xl font-semibold text-[#111827]">Personal Information</h3>
                        <p>We collect information that you provide directly to us, including:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Name and contact information (email address, phone number)</li>
                            <li>Account credentials</li>
                            <li>Call scenarios and preferences</li>
                            <li>Communication preferences</li>
                        </ul>

                        <h3 className="mt-4 text-xl font-semibold text-[#111827]">Usage Information</h3>
                        <p>We automatically collect certain information about your use of our service:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Device information (IP address, browser type, operating system)</li>
                            <li>Usage patterns and preferences</li>
                            <li>Call logs and interaction data</li>
                            <li>Performance metrics and error reports</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">How We Use Your Information</h2>
                        <p>We use the collected information for various purposes, including to:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Provide and maintain our service</li>
                            <li>Notify you about changes to our service</li>
                            <li>Provide customer support</li>
                            <li>Gather analysis or valuable information to improve our service</li>
                            <li>Monitor usage of our service</li>
                            <li>Detect, prevent, and address technical issues</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">SMS Notifications</h2>
                        <p>
                            CallmeAI sends SMS messages only to users who have explicitly opted in through a web form on{" "}
                            <a className="text-[#7F20FF] hover:text-[#6F14F1]" href="https://www.callmeai.ai/live-demo" target="_blank" rel="noreferrer">
                                https://www.callmeai.ai/live-demo
                            </a>{" "}
                            to request a call with a CallmeAI AI agent.
                        </p>
                        <p>
                            Users provide their phone number and must check an unchecked consent checkbox before submitting the form. The checkbox clearly
                            states that they agree to receive SMS messages related to their request.
                        </p>
                        <p>These messages are strictly transactional and may include:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Demo booking confirmation messages</li>
                            <li>Follow-up messages related to the user's request</li>
                        </ul>
                        <p className="mt-2">Message frequency varies based on user interaction.</p>
                        <p>Reply STOP to unsubscribe. Reply HELP for help. Msg &amp; data rates may apply.</p>
                        <p>
                            Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in
                            data and consent will not be shared with any third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Data Sharing &amp; Disclosure</h2>
                        <p>We do not sell or rent your personal information, including Google Calendar data, to third parties.</p>
                        <p>We may share limited information only in the following cases:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>
                                <span className="font-semibold">Service Providers:</span> With trusted service providers (such as Google Cloud Platform) who
                                process data on our behalf and only as necessary to operate and improve our services.
                            </li>
                            <li>
                                <span className="font-semibold">Legal Requirements:</span> When required to do so by law, regulation, or valid legal process.
                            </li>
                            <li>
                                <span className="font-semibold">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, where your
                                information may be transferred as part of the business.
                            </li>
                        </ul>
                        <p className="mt-2">We never share Google user data with third parties for advertising or marketing purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Data Security</h2>
                        <p>
                            The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal
                            information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Data Retention</h2>
                        <p>
                            We retain your personal information only for as long as necessary to fulfill the purposes we collected it for, including to satisfy
                            any legal, accounting, or reporting requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Object to processing of your information</li>
                            <li>Request restriction of processing</li>
                            <li>Request transfer of your information</li>
                            <li>Withdraw consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Third-Party Services</h2>
                        <p>
                            Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third
                            parties. We encourage you to review their privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Artificial Intelligence Services</h2>
                        <p>
                            CallmeAI utilizes artificial intelligence (AI) technologies to power conversational automation and related AI features within our
                            service. Our AI backend currently uses a combination of third-party AI service providers:
                        </p>
                        <ul className="mt-2 list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Google Gemini:</span> Used for conversational automation, natural language processing, and
                                AI-powered interactions. Your interactions and Content may be processed by Google Gemini to provide AI-powered responses and
                                features.
                            </li>
                            <li>
                                <span className="font-semibold">OpenAI:</span> Used for conversational automation, natural language processing, and AI-powered
                                interactions. Your interactions and Content may be processed by OpenAI to provide AI-powered responses and features.
                            </li>
                        </ul>
                        <p className="mt-2">
                            CallmeAI is also in the process of developing its own native AI model infrastructure; however, this system is still under development
                            and is not yet live in production. The service may transition to or incorporate native AI models in the future, and such changes will
                            be communicated to users as appropriate.
                        </p>
                        <p>
                            When your Content is processed by these third-party AI services, it is subject to their respective privacy policies and terms of
                            service. We recommend reviewing the privacy policies of Google Gemini and OpenAI to understand how they handle your data.
                        </p>
                        <p>
                            By using our service, you acknowledge and consent to the use of these third-party AI services for processing your Content and
                            interactions within the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Google Calendar Integration</h2>
                        <p>
                            When you choose to integrate Google Calendar with CallmeAI, we may access and process your calendar events through the following
                            scopes:
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>https://www.googleapis.com/auth/calendar.readonly - To read your calendar events and availability</li>
                            <li>https://www.googleapis.com/auth/calendar.events - To create, update, and manage calendar events</li>
                        </ul>
                        <p className="mt-2">This integration enables us to:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Read and sync your events only upon your request</li>
                            <li>Book and manage appointments according to your configured preferences</li>
                            <li>Display upcoming meetings and send reminders (if applicable)</li>
                        </ul>

                        <h3 className="mt-4 text-xl font-semibold text-[#111827]">Data Security &amp; Token Storage</h3>
                        <p>
                            We do not store Google access tokens or refresh tokens in plain text. All tokens are stored in encrypted form and are used only to
                            maintain your authorized connection with Google Calendar. Our services are hosted on Google Cloud Platform (GCP) with Cloud Armour
                            enabled to provide additional protection against unauthorized access and potential security threats.
                        </p>
                        <p>
                            You may revoke CallmeAI's access to your Google Calendar at any time through your Google Account security settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Children's Privacy</h2>
                        <p>
                            Our service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children
                            under 13.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Changes to This Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page
                            and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-[#111827]">Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                        <p>
                            Email:{" "}
                            <a className="text-[#7F20FF] hover:text-[#6F14F1]" href="mailto:jeremy@callmeai.ai">
                                jeremy@callmeai.ai
                            </a>
                        </p>
                    </section>
                </article>

                <Link href="/" className="mt-8 inline-block text-sm font-medium text-[#7F20FF] hover:text-[#6F14F1]">
                    &larr; Back to home
                </Link>
            </div>
        </section>
    );
};

export default PrivacyPolicy;