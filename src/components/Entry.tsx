import { Formik, Form,  Field } from "formik";
import { useCallback } from "react";
import { AiOutlineInfo } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { setUsers, startGame } from "src/store/gameSlice";
import Input from "./Input";
import ColorSelector from "./ColorSelector";
import { usersSchema } from "src/validation/users-schema";
import classNames from "classnames";

export interface UsersData {
  name_1: string;
  name_2: string;
  sign_1: string;
  sign_2: string;
  color_1: string;
  color_2: string;
}

const Entry = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback((values: UsersData) => {
    const { name_1, name_2, sign_1, sign_2, color_1, color_2 }: UsersData =
      values;

    const user_1: User = {
      id: 1,
      name: name_1,
      sign: sign_1,
      color: color_1,
    };
    const user_2: User = {
      id: 2,
      name: name_2,
      sign: sign_2,
      color: color_2,
    };

    dispatch(setUsers({ user_1, user_2 }));
    dispatch(startGame());
  }, []);
  return (
    <section className=" w-1/2 bg-white  rounded-xl p-12 flex flex-col">
      <div className="flex flex-col gap-y-4 items-center ">
        <h1 className="text-6xl tracking-wider font-bold text-slate-600 ">
          TIC TAC TOE
        </h1>
        <h3 className="font-medium text-slate-700 text-xl">By Murad Masimli</h3>
      </div>

      {/* USERS FORM */}

      <div className="flex items-center gap-x-4">
        <Formik
          onSubmit={handleSubmit}
          validationSchema={usersSchema}
          initialValues={{
            name_1: "murad",
            name_2: "masimli",
            sign_1: "a",
            sign_2: "z",
            color_1: "#01CC00",
            color_2: "#CC0001",
          }}
        >
          {({ setFieldValue, isSubmitting, isValid, dirty }) => (
            <Form className="flex flex-col w-full">
              {/* FIRST USER */}
              <div className="flex gap-x-3 w-full my-5">
                <div className="basis-1/2 space-y-3">
                  <p className="text-slate-700 font-semibold text-xl">User 1</p>
                  <Input label="Name" name="name_1" />
                  <Input label="Sign" name="sign_1" />
                  {/* COLOR */}
                  <Field name="color_1">
                    {({ field }: any) => (
                      <ColorSelector
                        field={field}
                        changeColor={(colorId: string) =>
                          setFieldValue("color_1", colorId)
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="basis-1/2 space-y-3">
                  <p className="text-slate-700 font-semibold text-xl">User 2</p>

                  <Input label="Name" name="name_2" />
                  <Input label="Sign" name="sign_2" />
                  {/* COLOR */}
                  <Field name="color_2">
                    {({ field }: any) => (
                      <ColorSelector
                        field={field}
                        changeColor={(colorId: string) =>
                          setFieldValue("color_2", colorId)
                        }
                      />
                    )}
                  </Field>
                  <p className="text-black">{isValid}</p>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-x-6 justify-end">
                <button
                  disabled={isSubmitting || !isValid }
                  type="submit"
                  className={classNames(
                    "border border-slate-800  rounded-md w-60 py-2 text-lg  transition duration-300",
                    {
                      "hover:bg-slate-800 hover:text-white cursor-pointer":
                        dirty && isValid,
                    }
                  )}
                >
                  Start Game
                </button>

                <span
                  className="border border-slate-800 
        rounded-md h-11 w-11 grid place-items-center bg-slate-800 text-white 
        hover:bg-white hover:text-slate-800 transition cursor-pointer"
                >
                  <AiOutlineInfo size={26} />
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Entry;
