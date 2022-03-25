import Input from "./../components/Input";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-primary flex flex-col items-center justify-center text-white">
      <div className="max-w-md w-full flex flex-col gap-6  px-5 sm:px-0">
        <Input
          id="fullName"
          label="Your given full name:"
          placeholder="John Doe"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-5/12">
            <Input
              type="date"
              id="fullName"
              label="Date of birth:"
              placeholder="John Doe"
            />
          </div>
          <div className="w-full sm:w-7/12">
            <Input
              id="school"
              label="Country of residence or citizenship:"
              placeholder="Country"
            />
          </div>
        </div>

        <Input
          id="school"
          label="What school do you plan to attend?"
          placeholder="Your School"
        />

        <Input
          id="areaOfStudy"
          type="textarea"
          label="Please take a moment to describe your intended area of study:"
          placeholder="Enter details here"
        />
      </div>
    </div>
  );
};

export default Home;
