import { render, screen } from '@testing-library/react';
import Blog from '../Blog';

describe('Blog', () => {
  beforeEach(() => {
    render(<Blog />);
  });

  it('should render the blog heading', () => {
    const headingElement = screen.getByTestId('blog-heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Blog Details');
  });

  it('should render the blog categories', () => {
    const categoriesElement = screen.getByTestId('blog-categories');
    expect(categoriesElement).toBeInTheDocument();
    expect(categoriesElement).toHaveTextContent('Logistics');
    expect(categoriesElement).toHaveTextContent('Shipping');
    expect(categoriesElement).toHaveTextContent('Business');
    expect(categoriesElement).toHaveTextContent('Discounts');
    expect(categoriesElement).toHaveTextContent('Global Growth');
    expect(categoriesElement).toHaveTextContent('Warehouses');
    expect(categoriesElement).toHaveTextContent('Orders');
  });

  it('should render the blog archives', () => {
    const archivesElement = screen.getByTestId('blog-archives');
    expect(archivesElement).toBeInTheDocument();
    expect(archivesElement).toHaveTextContent('2023');
    expect(archivesElement).toHaveTextContent('2022');
    expect(archivesElement).toHaveTextContent('2021');
    expect(archivesElement).toHaveTextContent('2020');
    expect(archivesElement).toHaveTextContent('2019');
    expect(archivesElement).toHaveTextContent('2018');
    expect(archivesElement).toHaveTextContent('2017');
  });

  it('should render the blog data', () => {
    const dataElement = screen.getByTestId('blog-data');
    expect(dataElement).toBeInTheDocument();
  });

  it('should render the blog image', () => {
    const imageElement = screen.getByTestId('blog-image');
    expect(imageElement).toBeInTheDocument();
  });

  it('should render the share buttons', () => {
    const shareElement = screen.getByTestId('social-media-icons');
    expect(shareElement).toBeInTheDocument();
    expect(shareElement).toHaveTextContent('SHARE');
    expect(shareElement).toContainElement(screen.getByTestId('BsFacebook'));
    expect(shareElement).toContainElement(screen.getByTestId('BsTwitter'));
    expect(shareElement).toContainElement(screen.getByTestId('BsInstagram'));
    expect(shareElement).toContainElement(screen.getByTestId('BsYoutube'));
  });
});