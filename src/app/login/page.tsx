import Link from "next/link";

const page = () => {
  return (
    <div className="mx-auto text-center">
      {" "}
      <h1 className="text-2xl font-bold">Bond Pet Care | Login Page</h1>
      <Link href="/register" className="btn">
        Not Registered yet ? | Register Now
      </Link>
    </div>
  );
};

export default page;
