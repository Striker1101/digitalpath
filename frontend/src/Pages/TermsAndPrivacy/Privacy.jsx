import React from "react";

export default function Privacy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Privacy Policy</h1>
      <p style={styles.subHeader}>Effective Date: 1st November 2024</p>

      <section style={styles.section}>
        <h2 style={styles.title}>1. Introduction</h2>
        <p style={styles.text}>
          This Privacy Policy explains how Digital Path ("we," "us," or "our")
          collects, uses, discloses, and protects your information when you
          visit our website, digitalpath.com.ng (the "Site"). By using the Site,
          you consent to the practices described in this policy.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>2. Information We Collect</h2>
        <p style={styles.subTitle}>Personal Information:</p>
        <p style={styles.text}>
          We may collect personal information, such as your name, email address,
          phone number, and any other information you provide when you contact
          us or fill out forms on our Site.
        </p>
        <p style={styles.subTitle}>Technical Data:</p>
        <p style={styles.text}>
          We automatically collect information about your device, browsing
          actions, and patterns when you use our Site, such as your IP address,
          browser type, and operating system.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>3. How We Use Your Information</h2>
        <ul style={styles.list}>
          <li>To provide, operate, and maintain our Site</li>
          <li>To improve, personalize, and expand our Site</li>
          <li>
            To communicate with you, including responding to your comments and
            questions
          </li>
          <li>To send you emails and newsletters</li>
          <li>To analyze usage patterns and trends to improve our services</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>4. Disclosure of Your Information</h2>
        <p style={styles.text}>
          <strong>With Service Providers:</strong> We may engage third-party
          companies and individuals to assist us with our services.
        </p>
        <p style={styles.text}>
          <strong>For Legal Requirements:</strong> We may disclose your personal
          information if required to do so by law or in response to valid
          requests by public authorities.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>5. Data Security</h2>
        <p style={styles.text}>
          We take reasonable measures to protect the information collected
          through our Site to prevent loss, theft, misuse, and unauthorized
          access. However, please note that no method of transmission over the
          Internet or method of electronic storage is 100% secure.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>6. Your Data Protection Rights</h2>
        <p style={styles.text}>
          You have certain rights regarding your personal information,
          including:
        </p>
        <ul style={styles.list}>
          <li>The right to access</li>
          <li>The right to rectification</li>
          <li>The right to erasure</li>
          <li>The right to restrict processing</li>
          <li>The right to data portability</li>
          <li>The right to object</li>
        </ul>
        <p style={styles.text}>
          If you wish to exercise any of these rights, please contact us using
          the information provided below.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>7. Changes to This Privacy Policy</h2>
        <p style={styles.text}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page with a
          new effective date.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.title}>8. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p style={styles.text}>
          <strong>Email:</strong> talk2us@digitalpath.com.ng
        </p>
        <p style={styles.text}>
          <strong>Phone:</strong> +23470168546898
        </p>
        <p style={styles.text}>
          <strong>Address:</strong> 1 Liberty Street, Ikorodu, Lagos, Nigeria
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    marginTop: "50px",
    color: "#333",
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    fontSize: "2em",
    textAlign: "center",
    margin: "10px 0",
    color: "#4A4A4A",
  },
  subHeader: {
    textAlign: "center",
    color: "#888",
    fontSize: "1em",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.5em",
    color: "#333",
    marginBottom: "10px",
  },
  subTitle: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  text: {
    fontSize: "1em",
    color: "#555",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
    listStyleType: "disc",
  },
};
