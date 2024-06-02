import { render, screen } from "@testing-library/react";
import { Comment } from "../../../../types";
import PostUI from "../Post";
import { usePost } from "../store/post";
import { useUser } from "../store/user";

const mockPost = {
  id: 1,
  title: "Post 2",
  body: "Content comment 1",
  userId: 2,
};
const mockCommests = [
  {
    id: 2,
    name: "Post 2",
    email: "reyad@amil.com",
    body: "Content 2",
    postId: 2,
  },
];
const mockUser = {
  id: 1,
  name: "MD Reyad Hossain",
  username: "Riadhossain43",
  email: "reyad@amil.com",
};

jest.mock("../../store");
jest.mock("../store/user");
jest.mock("../store/post");
jest.mock("@formkit/auto-animate/react", () => ({
  useAutoAnimate: () => [jest.fn()],
}));
jest.mock("../CommentSkeleton", () => ({ id }: { id: number }) => (
  <div data-testid={"post-skeleton-" + id}>Post comments...</div>
));
jest.mock("../Comment", () => (props: Comment) => (
  <div data-testid={"comment"}>Comment {props.body}</div>
));

describe("Post", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("shoudld render posts title, username and body", () => {
    (useUser as jest.Mock).mockReturnValue({
      userUtils: {
        user: mockUser,
        isUserLoading: false,
        getUser: function () {},
      },
    });
    (usePost as jest.Mock).mockReturnValue({
      commentUtils: {
        comments: [],
        isCommentsLoading: false,
        listComments: function () {},
      },
    });
    render(<PostUI {...mockPost} />);
    let title = screen.getByTestId("post-title");
    let body = screen.getByTestId("post-body");
    let name = screen.getByTestId("post-user-name");
    expect(title).toHaveTextContent(mockPost.title);
    expect(body).toHaveTextContent(mockPost.body);
    expect(name).toHaveTextContent(mockUser.name);
  });
  it("shoudld render user skeleton if user is loading", () => {
    (useUser as jest.Mock).mockReturnValue({
      userUtils: {
        user: mockUser,
        isUserLoading: true,
        getUser: function () {},
      },
    });
    (usePost as jest.Mock).mockReturnValue({
      commentUtils: {
        comments: [],
        isCommentsLoading: false,
        listComments: function () {},
      },
    });
    render(<PostUI {...mockPost} />);
    let userSkeleton = screen.getByTestId("post-user-skeleton");
    expect(userSkeleton).toBeInTheDocument();
  });
  it("shoudld fire list comments", () => {
    (useUser as jest.Mock).mockReturnValue({
      userUtils: {
        user: mockUser,
        isUserLoading: true,
        getUser: function () {},
      },
    });
    (usePost as jest.Mock).mockReturnValue({
      commentUtils: {
        comments: mockCommests,
        isCommentsLoading: false,
        listComments: function () {},
      },
    });
    render(<PostUI {...mockPost} />);
    let comment = screen.getByTestId("comment");
    expect(comment).toBeInTheDocument();
  });
});
