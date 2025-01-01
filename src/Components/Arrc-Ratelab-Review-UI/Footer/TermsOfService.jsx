import React, { useState } from 'react';

const TermsOfService = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setIsAccepted(!isAccepted);
  };

  return (
    <div className="terms-container p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6">Terms of Service</h2>

      <div className="terms-content bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-screen">
        <p className="text-xl text-gray-700 mb-4">
          We claim all authority to dismiss, end, or handicap any help with or without cause per administrator discretion. This is a Complete independent facilitating, on the off chance that you misuse our ticket or Livechat or emotionally supportive network by submitting solicitations or protests we will impair your record. The solitary time you should reach us about the seaward facilitating is if there is an issue with the worker. We have not many substance limitations and everything is as per laws and guidelines. Try not to join on the off chance that you intend to do anything contrary to the guidelines, we do check these things and we will know, don't burn through our own and your time by joining on the off chance that you figure you will have the option to sneak by us and break the terms.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Configuration requests</strong> - If you have a fully managed dedicated server with us then we offer custom PHP/MySQL configurations, firewalls for dedicated IPs, DNS, and httpd configurations.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Software requests</strong> - Cpanel Extension Installation will be granted as long as it does not interfere with the security, stability, and performance of other users on the server.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Emergency Support</strong> - We do not provide emergency support / Phone Support / LiveChat Support. Support may take some hours sometimes.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Webmaster help</strong> - We do not offer any support for webmaster related issues and difficulty including coding, & installs, Error solving. if there is an issue where a library or configuration of the server then we can help you if it's possible from our end.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Backups</strong> - We keep backups but we are not responsible for data loss, you are fully responsible for all backups.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          We Don't support any child porn or such material. No spam-related sites or material, such as email lists, mass mail programs, and scripts, etc. No harassing material that may cause people to retaliate against you. No phishing pages.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          You may not run any exploitation script from the server. Reason can be terminated immediately. If anyone attempting to hack or exploit the server by using your script or hosting, we will terminate your account to keep safe other users. Malicious Botnets are strictly forbidden. Spam, mass mailing, or email marketing in any way are strictly forbidden here.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          Malicious hacking materials, trojans, viruses, & malicious bots running or for download are forbidden. Resource and cronjob abuse is forbidden and will result in suspension or termination. Php/CGI proxies are strictly forbidden. CGI-IRC is strictly forbidden.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          No fake or disposal mailers, mass mailing, mail bombers, SMS bombers, etc. NO CREDIT OR REFUND will be granted for interruptions of service, due to User Agreement violations.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Terms & Conditions for Users</strong> - Before getting to this site, you are consenting to be limited by these site Terms and Conditions of Use, every single appropriate law, and guidelines, and concur that you are answerable for consistency with any material neighborhood laws. If you disagree with any of these terms, you are restricted from utilizing or getting to this site.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Support</strong> - Whenever you have downloaded our item, you may get in touch with us for help through email and we will give a valiant effort to resolve your issue. We will attempt to answer using Email for more modest bug fixes, after which we will refresh the center bundle. Content help is offered to confirmed clients by Tickets as it were. Backing demands made by email and Livechat.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          On the off chance that your help requires extra adjustment of the System, at that point, you have two alternatives: 
          <br />
          1. Hang tight for additional update discharge.
          <br />
          2. Or on the other hand, enlist a specialist (We offer customization for extra charges).
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Ownership</strong> - You may not guarantee scholarly or exclusive possession of any of our items, altered or unmodified. All items are property, we created them. Our items are given "with no guarantees" without guarantee of any sort, either communicated or suggested. On no occasion will our juridical individual be subject to any harms including, however not restricted to, immediate, roundabout, extraordinary, accidental, or significant harms or different misfortunes emerging out of the utilization of or powerlessness to utilize our items.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Warranty</strong> - We don't offer any guarantee or assurance of these Services in any way. When our Services have been modified we can't ensure they will work with all outsider plugins, modules, or internet browsers. Program similarity ought to be tried against the show formats on the demo worker. If you don't mind guarantee that the programs you use will work with the component, as we can not ensure that our systems will work with all program mixes.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Unauthorized/Illegal Usage</strong> - You may not utilize our things for any illicit or unapproved reason or may you, in the utilization of the stage, disregard any laws in your locale (counting yet not restricted to copyright laws) just as the laws of your nation and International law. Specifically, it is disallowed to utilize the things on our foundation for pages that advance: brutality, illegal intimidation, hard sexual entertainment, bigotry, obscenity content or warez programming joins.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          You can't imitate, copy, duplicate, sell, exchange or exploit any of our segment, utilization of the offered on our things, or admittance to the administration without the express composed consent by us or item proprietor.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          Our Members are liable for all substance posted on the discussion and demo and activity that happens under your record.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          We hold the chance of hindering your participation account quickly if we will think about a particularly not allowed conduct.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          If you make a record on our site, you are liable for keeping up the security of your record, and you are completely answerable for all exercises that happen under the record and some other activities taken regarding the record. You should quickly inform us of any unapproved employments of your record or some other penetrates of security.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Fiverr, Seoclerks Sellers Or Affiliates</strong> - We do NOT ensure full SEO campaign conveyance within 24 hours. We make no assurance for conveyance time by any means. We give our best assessment to orders during the putting in of requests, anyway, these are gauges. We won't be considered liable for loss of assets, negative surveys or you being prohibited for late conveyance. If you are selling on a site that requires time touchy outcomes, utilize Our SEO Services at your own risk.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Payment/Refund Policy</strong> - No refund or cash back will be made. After a deposit has been finished, it is extremely unlikely to invert it. You should utilize your equilibrium on requests our administrations, Hosting, SEO campaign. You concur that once you complete a deposit, you won't document a debate or a chargeback against us in any way, shape, or form.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          If you document a debate or chargeback against us after a deposit, we claim all authority to end every single future request, prohibit you from our site. False action, for example, utilizing unapproved or taken charge cards will prompt the end of your record. There are no special cases.
        </p>

        <p className="text-xl text-gray-700 mb-4">
          <strong>Free Balance / Coupon Policy</strong> - We offer numerous approaches to get FREE Balance, Coupons, and Deposit offers yet we generally reserve the right to audit it and deduct it from your record offset with any explanation we may find it is a sort of misuse. If we choose to deduct a few or all of free Balance from your record balance, and your record balance becomes negative, at that point the record will naturally be suspended. If your record is suspended because of a negative Balance you can request to make a custom payment to settle your equilibrium to actuate your record.
        </p>

        {/* Checkbox to agree to terms */}
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="accept-terms"
            checked={isAccepted}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="accept-terms" className="text-xl text-gray-700">
            I have read and accept the Terms of Service
          </label>
        </div>

        {/* Submit button */}
        <button
          className={`mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-lg ${isAccepted ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!isAccepted}
        >
          Agree and Continue
        </button>
      </div>
    </div>
  );
};

export default TermsOfService;
