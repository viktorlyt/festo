import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Subscribe } from '../../components/Subscribe'

export const PrivacyPolicy = () => {
  return (
    <div className='features'>
      <Header />

      <div className='features__banner'></div>
      
      <div className='pp__text'>
        <h1 className='pp__text--h'>Privacy Policy</h1>
      </div>

      <section className='pp__main'>
        <h3 className='pp__main--h3'>Creating your privacy policy</h3>
        <span className='pp__main--abz pp__main--abz-flex'>
          <p>
            We receive, collect and store any information you enter on our website or provide us in any other way. In addition, we collect the Internet protocol (IP) address used to connect your computer to the Internet; login; e-mail address; password; computer and connection information and purchase history. We may use software tools to measure and collect session information, including page response times, length of visits to certain pages, page interaction information, and methods used to browse away from the page. We also collect personally identifiable information <span style={{ color: 'red' }}>email us</span>; comments, feedback, product reviews, recommendations, and personal profile.
          </p>
        </span>

        <h3 className='pp__main--h3'>How do you collect information?</h3>
        <span className='pp__main--abz'>
          <p>
            When you conduct a transaction on our website, as part of the process, we collect personal information you give us such as your name, address and email address. Your personal information will be used for the specific reasons stated above only.
          </p>
        </span>

        <h3 className='pp__main--h3'>
          Why do you collect such personal information?
        </h3>
        <span className='pp__main--abz'>
          <p>
            We collect such Non-personal and Personal Information for the following purposes:<br/><br/>
            &emsp;1. To provide and operate the Services;<br/>
            &emsp;2. To provide our Users with ongoing customer assistance and technical support;<br/>
            &emsp;3. To be able to contact our Visitors and Users with general or personalized service-related notices and promotional messages;<br/>
            &emsp;4. To create aggregated statistical data and other aggregated and/or inferred Non-personal Information, which we or our business<br/>&emsp;&emsp;partners may use to provide and improve our respective services;<br/>
            &emsp;5. To comply with any applicable laws and regulations.<br/>
          </p>
        </span>

        <h3 className='pp__main--h3'>
          How do you store, use, share and disclose your site visitors' personal information?
        </h3>
        <span className='pp__main--abz'>
          <p>
            Our company is hosted on the Wix.com platform. Wix.com provides us with the online platform that allows us to sell our products and services to you. Your data may be stored through Wix.com’s data storage, databases and the general Wix.com applications. They store your data on secure servers behind a firewall. 
            <br/>
            <br/>
            All direct payment gateways offered by Wix.com and used by our company adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
          </p>
        </span>

        <h3 className='pp__main--h3'>
          How do you communicate with your site visitors?
        </h3>
        <span className='pp__main--abz'>
          <p>
            We may contact you to notify you regarding your account, to troubleshoot problems with your account, to resolve a dispute, to collect fees or monies owed, to poll your opinions through surveys or questionnaires, to send updates about our company, or as otherwise necessary to contact you to enforce our User Agreement, applicable national laws, and any agreement we may have with you. For these purposes we may contact you via email, telephone, text messages, and postal mail.
          </p>
        </span>
        
        <h3 className='pp__main--h3'>
          How do you use cookies and other tracking tools?
        </h3>
        <span className='pp__main--abz'>
          <p>
            If your website tracks personal information through the use of cookies, for example, you must make this clear to your site visitors. Be clear about what tracking tools (e.g. cookies, flash cookies, web beacons, etc.,) your website employs, what personal information they gather and why they are being used.
          </p>
        </span>

        <img src="Privacy-Cookies.jpg" alt="Privacy-Cookies" />

        <h3 className='pp__main--h3'>
          How can your site visitors withdraw their consent?
        </h3>
        <span className='pp__main--abz pp__main--abz-flex'>
          <p>
            If you don’t want us to process your data anymore, please contact us at <span style={{ color: 'red' }}>email us</span>.
          </p>
        </span>
        
        <h3 className='pp__main--h3'>
          Privacy policy updates
        </h3>
        <span className='pp__main--abz pp__main--abz-flex'>
          <p>
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. 
          </p>
        </span>

        <h3 className='pp__main--h3'>
          Questions and your contact information
        </h3>
        <span className='pp__main--abz pp__main--abz-flex'>
          <p>
            If you would like to: access, correct, amend or delete any personal information we have about you, you are invited to contact us at <span style={{ color: 'red' }}>email us</span>.
          </p>
        </span>

        <div className='pp__main--pdf'>
          <img src="pdf.png" alt="pdf" />
          <span className='pp__main--pdf-span'>Cookie Policy</span>
          <a href="Privacy Policy.pdf" target='_blank'><img src="pdf.png" alt="pdf" /></a>
          <span>Privacy Policy</span>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </div>
  )
}
