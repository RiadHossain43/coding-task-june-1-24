import { render, screen } from "@testing-library/react";
import Posts from "../Posts";
import { Post } from "../../../../types";
import { useTimeline } from "../../store";

const mockPosts = [
  { id: 1, title: "Post 1", body: "Content 1", userId: 1 },
  { id: 2, title: "Post 2", body: "Content 2", userId: 2 },
];
jest.mock("../../store");
jest.mock("@formkit/auto-animate/react", () => ({
  useAutoAnimate: () => [jest.fn()],
}));
jest.mock("../PostSkeleton", () => ({ id }: { id: number }) => (
  <div data-testid={"post-skeleton-" + id}>Post Loading...</div>
));
jest.mock("../Post", () => (props: Post) => (
  <div data-testid={"post-" + props.id}>Post {props.title}</div>
));

describe("Posts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("shoudld render posts if posts have been loaded", () => {
    (useTimeline as jest.Mock).mockReturnValue({
      postStoreUtils: {
        posts: mockPosts,
        isPostsLoading: false,
      },
    });
    render(<Posts />);
    mockPosts.forEach((mockPost) => {
      let post = screen.getByTestId("post-" + mockPost.id);
      expect(post).toBeInTheDocument();
    });
  });
  it("shoudld render 2 posts-skeletons if posts are loading", () => {
    (useTimeline as jest.Mock).mockReturnValue({
      postStoreUtils: {
        posts: mockPosts,
        isPostsLoading: true,
      },
    });
    render(<Posts />);
    [1, 2].forEach((id) => {
      let postSkeleton = screen.getByTestId("post-skeleton-" + id);
      expect(postSkeleton).toBeInTheDocument();
    });
  });
});
