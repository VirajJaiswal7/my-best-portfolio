import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    try {
      setLoading(true);
      const res = await axios.post(
        `${BACKEND_URL}/api/contact`,
        { name, email, location, description },
        { withCredentials: true }
      );

      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setName("");
        setEmail("");
        setLocation("");
        setDescription("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};
