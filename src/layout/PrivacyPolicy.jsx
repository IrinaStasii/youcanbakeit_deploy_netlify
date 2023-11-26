import React from "react";
import "./layout.css";

const PrivacyPolicy = () => {
  return (
    <div id="termsOfUseDiv">
      <p id="termsTitle">Privacy Policy - You Can Bake It! </p>
      <p id="termsUpdate">Privacy Policy Last Updated: 27.10.2023 </p>
      <p>
        Welcome to You Can Bake It! This Privacy Policy explains how we collect,
        use, and protect your personal information when you use the Website. By
        using the Website, you consent to the practices described in this
        policy.
      </p>
      <p className="title">1. Information Collection:</p>
      <p>
        {" "}
        a. We may collect personal information when you voluntarily provide it
        to us, such as when you sign up for an account or subscribe to our
        newsletter. This information may include your name, email address, and
        other relevant details.
      </p>
      <p className="title"> 2. Information Usage: </p>
      <p>
        a. We may use your personal information to send you updates,
        newsletters, and other communications related to the Website. We will
        not sell or distribute your information to third parties without your
        consent.
      </p>
      <p className="title"> 3. Cookies: </p>
      <p>
        a. We use cookies to collect information about your use of the Website.
        You can control the use of cookies through your browser settings.
      </p>
      <p className="title"> 4. Security: </p>
      <p>
        a. We take reasonable measures to protect your personal information.
        However, no data transmission over the internet is completely secure,
        and we cannot guarantee the security of your information.
      </p>
      <p className="title"> 5. Third-Party Links: </p>
      <p>
        a. The Website may contain links to external websites or resources. We
        are not responsible for the privacy practices of these external
        websites.
      </p>
      <p className="title"> 6. Changes to the Policy: </p>
      <p>
        a. We may update this Privacy Policy from time to time. You will be
        notified of any significant changes.
      </p>
      <p className="title"> 7. Contact Us: </p>
      <p>
        a. If you have any questions or concerns about these Terms of Use,
        please contact us - contact.youcanbakeit@gmail.com or acces this <a href="/contact">link</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
