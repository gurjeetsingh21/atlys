import Avatar from "./assets/images/Ellipse 2.png";
import Eye from "./assets/images/eye.png";

export const postConfig = [
  {
    id: 1,
    mood: "💬",
    body: "How are you feeling today?",
    btnText: "Post",
  },
  {
    id: 2,
    postedBy: "Theresa Webb",
    createdAt: "2024-07-20T17:11:32.988Z",
    isEdited: false,
    image: Avatar,
    mood: "👋",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentCnt: 24,
  },
  {
    id: 3,
    postedBy: "Theresa Webb",
    createdAt: "2024-07-21T09:09:52.407Z",
    isEdited: false,
    image: Avatar,
    mood: "👋",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentCnt: 24,
  },
];

export const loginFormConfig = [
  {
    name: "email",
    type: "email",
    label: "Email or Username",
    placeholder: "Enter your email or username",
  },
  {
    name: "password",
    type: "input",
    label: (
      <div className="flex justify-between w-[100%]">
        <div>Password</div>
        <div>Forgot password?</div>
      </div>
    ),
    placeholder: "Enter your password",
    endEndorement: <img src={Eye} />,
  },
];

export const signupFormConfig = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "Choose a preferred username",
  },
  {
    name: "password",
    type: "text",
    label: "Password",
    placeholder: "Choose a strong password",
    endEndorement: <img src={Eye} />,
  },
];
