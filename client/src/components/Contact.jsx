import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useContact } from "../hooks/useContact";

const Contact = () => {
  const {
    name,
    email,
    location,
    description,
    loading,
    setName,
    setEmail,
    setLocation,
    setDescription,
    setLoading,
    handleSubmit,
  } = useContact();
  return (
    <div id="contact" className="md:h-screen pt-20 max-w-7xl mx-auto space-y-8 md:space-y-16 pb-8 md:pb-0">
      <div className="space-y-4 md:space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-center">
          Contact Me
        </h1>
        <p className="text-center md:text-xl text-black">
          Contact Me for More Details
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto space-y-6">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          className="w-full outline-none ring-1 ring-gray-600 rounded-md py-1.5 px-4"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          className="w-full outline-none ring-1 ring-gray-600 rounded-md py-1.5 px-4"
        />
        <input
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          type="text"
          placeholder="Location"
          className="w-full outline-none ring-1 ring-gray-600 rounded-md py-1.5 px-4"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Description"
          className="w-full outline-none ring-1 ring-gray-600 rounded-md py-1.5 px-4"
          rows={5}
        />
        <div className="text-center">
          <button
            type="submit"
            className="w-1/2 border border-gray-700 py-2 rounded-full text-[18px] font-semibold"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
      <div className="md:-mt-10 flex justify-center lg:justify-end gap-4">
        <p className="flex items-center gap-2 text-[16px]">
          <MdOutlineMail />
          virajjaiswal1809@gmail.com
        </p>
        |
        <p className="flex items-center gap-2 text-[16px]">
          <MdOutlineLocalPhone />
          9235779585
        </p>
      </div>
    </div>
  );
};

export default Contact;
