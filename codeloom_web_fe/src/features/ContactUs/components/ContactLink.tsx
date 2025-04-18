import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

const ContactLink = () => {
  const email = "codeloom.lk@gmail.com";
  const phone = "+94760932536";

  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}`;
  const mailToUrl = `mailto:${email}`;

  return (
    <div className="h-full">
      <div className="flex flex-col lg:flex-row-reverse w-full h-full rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1669633760258-186e9dee81e7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldyUyMGJ1c2luZXNzfGVufDB8fDB8fHww"
            alt="Contact us"
            className="w-full h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
          {/* Email Section */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-base-content">
              Email Info
            </h2>
            <p className="mt-2 text-md text-indigo-600">Gmail</p>
            <p className="mt-1 text-sm text-base-content/80">{email}</p>

            {/* Email Button */}
            <div className="mt-4">
              <a
                href={mailToUrl}
                className="btn btn-outline text-indigo-600 w-full sm:w-auto"
                aria-label="Contact via Email"
              >
                <CgMail className="text-xl mr-2 text-indigo-600" />
                Contact via Email
              </a>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-base-content">
              Call or Message
            </h2>
            <p className="mt-2 text-md text-indigo-600">WhatsApp</p>
            <p className="mt-1 text-sm text-base-content/80">{phone}</p>

            {/* WhatsApp Button */}
            <div className="mt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-success w-full sm:w-auto"
                aria-label="Contact via WhatsApp"
              >
                <FaWhatsapp className="text-xl mr-2" />
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLink;
