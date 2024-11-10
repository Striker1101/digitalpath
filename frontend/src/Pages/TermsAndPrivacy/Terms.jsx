import React from "react";

export default function Terms() {
  return (
    <div className="bg-gray-100 py-16 px-4 my-10 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold text-primary mb-4 font-Raleway">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 text-center mb-12">
          Effective Date: 1st November 2024
        </p>

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black font-Raleway mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            These Terms and Conditions ("Terms") govern your access to and use
            of the website digitalpath.com.ng (the "Site"). By accessing or
            using the Site, you agree to be bound by these Terms.
          </p>
        </section>

        {/* Section 2: Use of the Site */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black font-Raleway mb-4">
            2. Use of the Site
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            You are permitted to use the Site for lawful purposes only. You
            agree not to use the Site:
          </p>
          <ul className="list-disc ml-8 space-y-2 text-gray-800">
            <li>In any way that violates any applicable law or regulation.</li>
            <li>
              In any way that is unlawful or fraudulent, or has any unlawful or
              fraudulent purpose or effect.
            </li>
          </ul>
        </section>

        {/* Section 3: Intellectual Property Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black font-Raleway mb-4">
            3. Intellectual Property Rights
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            All content, trademarks, and other intellectual property on the Site
            are owned by or licensed to Digital Path. You are granted a limited
            license to access the Site for personal use; this license does not
            permit you to reproduce, distribute, or otherwise exploit any
            content without our express written consent.
          </p>
        </section>

        {/* Section 4: Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black font-Raleway mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            In no event shall Digital Path, its directors, employees, or agents
            be liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses, resulting from (i)
            your access to or use of, or inability to access or use, the Site;
            (ii) any conduct or content of any third party on the Site.
          </p>
        </section>

        {/* Section 5: Indemnification */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black font-Raleway mb-4">
            5. Indemnification
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            You agree to defend, indemnify, and hold harmless Digital Path, its
            affiliates, and their respective employees, contractors, agents,
            licensors, and service providers from any claims, liabilities,
            damages, judgments, awards, losses, costs, expenses, or fees arising
            out of or relating to your violation of these Terms or your use of
            the Site.
          </p>
        </section>

        {/* Section 6: Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black font-Raleway mb-4">
            6. Governing Law
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            These Terms shall be governed by and construed in accordance with
            the laws of [Insert Jurisdiction]. Any legal action arising out of
            or related to these Terms shall be instituted in the courts located
            in [Insert Jurisdiction].
          </p>
        </section>

        {/* Section 7: Changes to These Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black font-Raleway mb-4">
            7. Changes to These Terms
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            We may revise these Terms from time to time. All changes are
            effective immediately when we post them and apply to all access to
            and use of the Site thereafter.
          </p>
        </section>

        {/* Section 8: Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-black font-Raleway mb-4">
            8. Contact Information
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            For questions related to these Terms, please contact us at:
          </p>
          <address className="text-gray-800 mt-4">
            <p>Email: talk2us@digitalpath.com.ng</p>
            <p>Phone: +2347068546898</p>
            <p>Address: 1 Liberty Street, Ikorodu, Lagos, Nigeria</p>
          </address>
        </section>
      </div>
    </div>
  );
}
