import CustomLayout from "../customlayout/CustomLayout";

const About = () => {
  return (
    <CustomLayout>
      <div className="flex justify-center ">
        {/* <h1 className="text-4xl">Welcome to about page !!</h1> */}
        {/* <section id="blog" className=" text-white h-screen bg-purple-900 flex"> */}
        <h1 className="m-auto mt-2 font-waterfall text-7xl text-white font-bold">
          About Page
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      {/* </section> */}
      </div>
    </CustomLayout>
  );
};
export default About;
