const loginWithGithub = () => {
  window.location.href = "http://localhost:3000/auth/github";
};

export default function Login() {
  return <button onClick={loginWithGithub}>Sign in with GitHub</button>;
}
