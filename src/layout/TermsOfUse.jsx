import React from "react";
import "./layout.css"
const TermsOfUse = () => {
  return (
    <div id="termsOfUseDiv">
      <p id="termsTitle">Terms of Use You Can Bake It! </p>
      <p id="termsUpdate">Terms of Use Last Updated: 27.10.2023 </p>
      <p>
        Welcome to You Can Bake It! By using and accessing the Website, you
        agree to be bound by the following Terms of Use. If you do not agree to
        these terms, please do not use the Website.
      </p>
      <p className="title"> 1. Content Usage:</p>
      <p>
        {" "}
        a. The content on the Website is for informational and entertainment
        purposes only. You may use the content for your personal use but may not
        reproduce, distribute, or sell it without our explicit permission.
      </p>
      <p className="title"> 2. User-Generated Content: </p>
      <p>
        a. If you submit comments, reviews, or other user-generated content on
        the Website, you agree to do so responsibly and in a respectful manner.
        We reserve the right to remove or modify user-generated content that
        violates our guidelines or is offensive.
      </p>
      <p className="title"> 3. Accuracy and Reliability: </p>
      <p>
        a. We make every effort to ensure the accuracy and reliability of the
        content on the Website. However, we do not guarantee the accuracy or
        reliability of the content, and you use it at your own risk.
      </p>
      <p className="title"> 4. Links to External Websites: </p>
      <p>
        a. The Website may contain links to external websites or resources. We
        are not responsible for the content, availability, or practices of these
        external websites, and your use of them is at your own risk.
      </p>
      <p className="title"> 5. Termination: </p>
      <p>
        a. We reserve the right to terminate or suspend your access to the
        Website at our discretion, without prior notice, if we believe you have
        violated these Terms of Use.
      </p>
      <p className="title"> 6. Updates: </p>
      <p>
        a. We may update these Terms of Use from time to time. It is your
        responsibility to check for updates. Your continued use of the Website
        after changes constitute your acceptance of the updated terms.
      </p>
      <p className="title"> 7. Contact Us: </p>
      <p>
        a. If you have any questions or concerns about these Terms of Use,
        please contact us - contact.youcanbakeit@gmail.com or acces this  <a href="/contact">link</a>.
      </p>
    </div>
  );
};

export default TermsOfUse; 