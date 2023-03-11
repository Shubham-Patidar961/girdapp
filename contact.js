import { useFormik } from "formik";

const Contact = () => {
  const formic = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Phoneno: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("forms data", values);
      resetForm();
    },
  });
  return (
    <>
      <div className="about-img  bg-red-400 h-full w-full flex align-middle justify-center">
        <div className=" h-[500px] w-[400px] bg-red-500 top-10  relative border-r-stone-900  shadow-black ">
          <h1 className="  text-white text-center font-medium text-2xl p-5 ">
            Connect With US
          </h1>
          <form onSubmit={formic.handleSubmit} className=" p-3 text-center ">
            <label for="name" className="text-white">
              FirstName :{" "}
            </label>
            <input
              className="p-2 outline-none mt-2"
              type="name"
              name="FirstName"
              onChange={formic.handleChange}
              value={formic.values.FirstName}
            />
            <br />
            <br />
            <label for="name" className="text-white">
              LastName :{" "}
            </label>
            <input
              className="p-2 outline-none mt-2"
              type="name"
              name="LastName"
              onChange={formic.handleChange}
              value={formic.values.LastName}
            />
            <br />
            <br />
            <label for="name" className="text-white">
              E-mail :{" "}
            </label>
            <input
              className=" relative left-3 p-2 outline-none mt-2"
              type="name "
              name="Email"
              onChange={formic.handleChange}
              value={formic.values.Email}
            />
            <br />
            <br />
            <label for="name" className="text-white">
              PhoneNo:{" "}
            </label>
            <input
              className="p-2 outline-none mt-2"
              type="number"
              name="Phoneno"
              onChange={formic.handleChange}
              value={formic.values.Phoneno}
            />
            <br />
            <br />
            <button
              type="submit"
              className=" bg-white pl-6 pr-6 pt-3 pb-3 text-red-600 mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
