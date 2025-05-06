import ContactForm from "./ContactForm";
import ContactIcon from "./ContactIcon";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import ContactSubject from "./ContactSubject";
import ContactTitle from "./ContactTitle";

const ContactMain = () => {
  return (
    <div id="contact" className="max-w-[1180px] mx-auto pt-20">
      <ContactSubject />
      <div className="color-gray lg:min-h-[640px] mx-4 p-7 rounded-xl lg:flex items-center justify-between gap-8">
        <div className="lg:flex flex-col">
          <ContactTitle />
          <ContactForm />
        </div>
        <div className="lg:flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <ContactIcon />
            <ContactInfo />
          </div>
          <ContactSocial />
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
