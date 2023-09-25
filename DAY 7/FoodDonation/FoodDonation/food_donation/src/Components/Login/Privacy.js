import React from 'react';
import "../Login/Privacy.css";
import Navbar from './navbar';
import Footer from './Footer';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="unique-privacy-container">
        <div className="unique-privacy-content">
        <main className="privacy-main">
        <div className="privacy-container">
      <div className="privacy-header">
         <div className="prvivacy-all">
          <div className="privact-info1">
          </div>
          <div className="privacy-info-text1">
          <h1 className="privacy-header">
          Food Donation Policy for Food Offering          
          </h1>
          <p className="privacy-para">
          At Food Offering, we are deeply committed to addressing food insecurity in our community while safeguarding your privacy. This policy is exclusively applicable to Food Offering and does not encompass any third parties that may participate in our food donation initiatives.
          </p>
          <p className="privacy-para">
          When you make a food donation through our program, we automatically collect specific information regarding your donation, including the type of food items contributed, quantity, date of donation, and any special instructions or preferences you may provide. We refer to this collected data as "Donation Information."
          </p>
          <p className="privacy-para">
          We gather Donation Information through the following means:
          </p>
          <p className="privacy-para">
          "Donation records" are maintained to accurately document the details of your food contributions.
          </p>
          <p className="privacy-para">
          "Digital logs" are used to keep track of donation specifics, including dates and locations of donations.
          </p>
          <p className="privacy-para">
          Respecting your privacy is our utmost priority, and we ensure the confidentiality of your Donation Information.
          </p>
          <p className="privacy-para">
          Additionally when you make a purchase or attempt to make a purchase through the Site, we may collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as “Order Information.”
          </p>
          <p className="privacy-para">
          When we talk privacy “Personal Information” in this Privacy Policy, we are talking both privacy Device Information and Order Information.
          </p>
          </div>
          <div className="privact-info1">
          </div>
          <div className="privacy-info-text1">
          <h3 className="privacy-header-sub">
               How Do We Utilize Your Donation Information?
               </h3>
               <p className="privacy-para">
               The Donation Information we collect serves the primary purpose of efficiently managing and distributing food donations to individuals and families in need within our community.                    
               </p>
               <p className="privacy-para">
               This encompasses sorting and categorizing donated items, ensuring safe storage and handling, and communicating with you regarding the impact of your generous contributions.                   
               </p>
               <p className="privacy-para">
               We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics privacy how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                   </p>
               <h3 className="privacy-header-sub">
               Sharing Your Personal Information
               </h3>
               <p className="privacy-para">
               We DO NOT share your Personal Information with third parties.
                   </p>
               <p className="privacy-para">
               We use Google Analytics to help us understand how our customers use the Site.
                   </p>
               <p className="privacy-para">
               We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                   </p>
               <h3 className="privacy-header-sub">
               Do Not Track
               </h3>
               <p className="privacy-para">
               Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.
                   </p>
               <h3 className="privacy-header-sub">
               Your Rights
               </h3>
               <p className="privacy-para">
               You have the right to access the Donation Information we retain about your contributions and may request corrections or updates as needed. Should you wish to exercise these rights, please do not hesitate to contact us via our provided contact information.
                   </p>
          </div>
          <div className="privact-info1">
          </div>
          <div className="privacy-info-text1">
          <h3 className="privacy-header-sub">
          Data Retention
          </h3>
          <p className="privacy-para">
          We will retain your Donation Information for our records to ensure the effective management and tracking of food donations, unless you specifically request its deletion.
              </p>
          <h3 className="privacy-header-sub">
          Modifications
          </h3>
          <p className="privacy-para">
          This food donation policy may undergo periodic updates to reflect any changes in our practices, or as necessitated by operational, legal, or regulatory developments.              </p>
          <h3 className="privacy-header-sub">
          Contact Us
          </h3>
          <p className="privacy-para">
          For additional details concerning our food donation practices, inquiries, or if you wish to file a complaint, please reach out to us via email at donations@foodoffering.org.              </p>
          </div>
       </div>
       </div>
 </div>
    </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
