import { useForm, SubmitHandler } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label>nickname</label>
      <input {...register("nickname", { requried: true, maxLength: 10 })} />
      {errors.name && errors.name.type === "required" && (
        <div>이름을 입력해 주세요!</div>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <div>이름은 최대 20자만 입력할 수 있습니다!</div>
      )}
      <label>email</label>
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        type="email"
      />
      <label>password</label>
      <input
        {...register("password", { required: true, minLength: 6 })}
        type="password"
      />
    </form>
  );
};
