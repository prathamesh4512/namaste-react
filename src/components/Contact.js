const Contact = () => {
  return (
    <div className="m-8">
      <h1 className="font-bold text-xl mb-4">Contact Us Page</h1>
      <input
        type="text"
        placeholder="Enter name"
        className="border border-black p-2 m-2 ml-0"
      />
      <input
        type="text"
        placeholder="Enter age"
        className="border border-black p-2 m-2"
      />
      <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">
        Submit
      </button>
    </div>
  );
};
export default Contact;
