const ContactUs = () => {
  return (
    <div>
      <div id="contact" className="bg-white py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-600 mb-10">
          I'm always open to new opportunities and collaborations. Fill out the
          form below or reach me directly via email.
        </p>
        {/* Your Contact Form Here */}
        <div className="flex flex-col gap-2 text-center text-gray-700">
          <p>
            <strong>Location:</strong> Bhadohi, India
          </p>
          <p>
            <strong>Email:</strong> virajjaiswal1809@email.com
          </p>
          <p>
            <strong>Availability:</strong> Freelance | Remote | Full-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
