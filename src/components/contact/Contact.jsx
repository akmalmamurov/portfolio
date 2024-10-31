import { useForm } from "react-hook-form";
import Title from "../title/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const phone = watch("phone", "+998 "); 

  const formatPhone = (value) => {

    const numbers = value.replace(/\D/g, "").slice(0, 12);
    const formatted = numbers.replace(
      /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/,
      "+$1 $2 $3 $4 $5"
    );
    return formatted;
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    const formattedPhone = formatPhone(value);
    setValue("phone", formattedPhone); 
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full h-auto">
          <ContactLeft />
          <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="flex gap-10">
                <div className="flex flex-col w-full gap-4">
                  <label htmlFor="name" className="label">
                    Your Name
                  </label>
                  <input
                    autoComplete="off"
                    className="input"
                    {...register("name", { required: "Name is required" })}
                    id="name"
                    type="text"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col w-full gap-4">
                  <label htmlFor="phone" className="label">
                    Phone Number
                  </label>
                  <input
                    value={phone}
                    maxLength={17}
                    autoComplete="off"
                    className="input"
                    {...register("phone", {
                      required: "Phone number is required",
                      onChange: handlePhoneChange,
                      validate: (value) =>
                        value.length === 17 || "Phone number is incomplete",
                    })}
                    id="phone"
                    type="text"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
