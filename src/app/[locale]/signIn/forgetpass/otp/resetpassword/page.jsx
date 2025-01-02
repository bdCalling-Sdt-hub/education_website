"use client";
import { Form, Input } from "antd";
import Image from "next/image";
import logo from "../../../../../../../public/navbar/logo.png";

const page = () => {
  const onFinish = async (values) => {
    console.log(values);

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="items-center px-4 justify-center flex min-h-screen bg-[#2F799E]">
        <div className="lg:grid grid-cols-2">
          <div className="bg-white md:w-[500px] md:px-16 px-5 py-16 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Set a new password
            </h2>
            <h3 className="text-[#333333] text-center mb-5">
              Create a new password. Ensure it differs from previous ones for
              security
            </h3>

            <Form
              name="reset-password"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please set your password!" },
                  {
                    min: 8,
                    max: 10,
                    message: "Password must be 8-10 characters long!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border  rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-2 border  rounded-md"
                />
              </Form.Item>

              <Form.Item>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#2F799E] text-white rounded-md"
                >
                  Reset
                </button>
              </Form.Item>
            </Form>
          </div>
          <div className="hidden lg:block">
          <div className="flex justify-start items-center mt-16">
            <div>
              <Image src={logo} width={300} height={200} alt="login" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
