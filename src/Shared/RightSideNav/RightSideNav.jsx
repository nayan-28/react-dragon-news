import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-2 mb-6">
        <h2 className="text-2xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          GitHub
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-2xl mb-4">Find Us</h2>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>
    </div>
  );
};

export default RightSideNav;
