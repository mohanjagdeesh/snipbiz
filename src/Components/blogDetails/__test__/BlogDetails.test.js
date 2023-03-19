import { render, screen } from '@testing-library/react';
import BlogDetails from '../BlogDetails';

describe('BlogDetails', () => {
  
  it('renders blog title', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-title')).toBeInTheDocument();
  });

  it('renders blog image 1', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-image1')).toBeInTheDocument();
  });

  it('renders blog date', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-date')).toBeInTheDocument();
  });

  it('renders blog heading 1', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-heading1')).toBeInTheDocument();
  });

  it('renders blog paragraph 1', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-paragraph1')).toBeInTheDocument();
  });

  it('renders blog paragraph 2', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-paragraph2')).toBeInTheDocument();
  });

  it('renders blog paragraph 3', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-paragraph3')).toBeInTheDocument();
  });

  it('renders blog paragraph 4', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-paragraph4')).toBeInTheDocument();
  });

  it('renders blog image 2', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-image2')).toBeInTheDocument();
  });

  it('renders blog heading 2', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-heading2')).toBeInTheDocument();
  });

  it('renders blog paragraph 5', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-paragraph5')).toBeInTheDocument();
  });

  it('renders blog paragraph 6', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-paragraph6')).toBeInTheDocument();
  });

  it('renders share section', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-share')).toBeInTheDocument();
  });

  it('renders facebook icon', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-facebook-icon')).toBeInTheDocument();
  });

  it('renders twitter icon', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-twitter-icon')).toBeInTheDocument();
  });

  it('renders youtube icon', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-youtube-icon')).toBeInTheDocument();
  });

  it('renders blog data', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-data')).toBeInTheDocument();
  });

  it('renders blog data right', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-data-right')).toBeInTheDocument();
  });

  it('renders recent post section', () => {
    render(<BlogDetails />);
    expect(screen.getByText('Recent Posts')).toBeInTheDocument();
  });

  it('renders recent post title', () => {
    render(<BlogDetails />);
    expect(screen.getAllByTestId('recent-post-title').length).toBe(4);
  });

  it('renders view more button', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('view-more-button')).toBeInTheDocument();
  });

  it('renders blog categories', () => {
    render(<BlogDetails />);
    expect(screen.getByTestId('blog-categories')).toBeInTheDocument();
});
});