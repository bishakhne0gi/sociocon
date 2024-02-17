import { useRegister } from "@/hooks/useAuth";
import { RegisterFormData } from "@/models/auth.model";
import { useState } from "react";


const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    password: '',
    fullname: '',
    email: '',
    avatar: null,
    coverImage: null,
  });

  const { register, error } = useRegister();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register(formData);
    }
    catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div></div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor='fullname'>Full Name</label>
        <input
          type='text'
          id='fullname'
          value={formData.fullname}
          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
        />
        <label htmlFor='avatar'>Avatar</label>
        <input
          type='file'
          id='avatar'
          accept="image/*"
          onChange={(e) => {
            if (!e.target.files) return
            setFormData({ ...formData, avatar: e.target.files[0] })
          }}
        />
        <label htmlFor='coverImage'>Cover Image</label>
        <input
          type='file'
          id='coverImage'
          accept="image/*"
          onChange={(e) => {
            if (!e.target.files) return
            setFormData({ ...formData, coverImage: e.target.files[0] })
          }}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type='submit'>Register</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default Register;
