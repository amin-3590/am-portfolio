import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CgDanger } from "react-icons/cg";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    message: yup.string().required("Massage is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="mt-6">
      <form className="flex flex-col gap-4 lg:min-w-[40rem]" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className="block color-form p-3 text-gray-300 rounded-lg placeholder:text-gray-400"
        />
        {errors.name && (
          <p className="text-red-500 flex items-center gap-2">
            <CgDanger /> {errors.name.message}
          </p>
        )}
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="block color-form p-3 text-gray-300 rounded-lg placeholder:text-gray-400"
        />
        {errors.email && (
          <p className="text-red-500 flex items-center gap-2">
            <CgDanger /> {errors.email.message}
          </p>
        )}
        <textarea
          {...register("message")}
          placeholder="Message"
          className="block color-form p-3 rounded-lg text-gray-300 placeholder:text-gray-400"
          rows={9}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 flex items-center gap-2">
            <CgDanger /> {errors.message.message}
          </p>
        )}
        <button type="submit" className="block p-2 bg-cyan-400 rounded-lg text-white text-xl font-serif hover:bg-cyan-600 transition-all duration-500">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
