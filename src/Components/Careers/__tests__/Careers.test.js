import { render, screen, fireEvent } from '@testing-library/react';
import Careers from '../Careers';

describe('Careers component', () => {
  it('renders the heading and paragraph', () => {
    render(<Careers />);
    const heading = screen.getByTestId('heading');
    const paragraph = screen.getByTestId('paragraph');
    expect(heading).toHaveTextContent('GREAT PEOPLE DESERVE GREAT BENEFITS');
    expect(paragraph).toHaveTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  });

//   it('renders the list of careers', () => {
//     render(<Careers />);
//     const careersList = screen.getByTestId('careers-list');
//     expect(careersList).toBeInTheDocument();
//     expect(careersList.children.length).toBe(9); // 9 is the number of careers in listOfCareers
//   });

//   it('renders the details of each career', () => {
//     render(<Careers />);
//     const careersList = screen.getByTestId('careers-list');
//     expect(careersList.children.length).toBe(9);
//     for (let i = 0; i < careersList.children.length; i++) {
//       const careerItem = careersList.children[i];
//       const jobType = screen.getByTestId(`career-job-type-${i}`);
//       const jobRole = screen.getByTestId(`career-job-role-${i}`);
//       const location = screen.getByTestId(`career-location-${i}`);
//       const applyButton = screen.getByTestId(`career-apply-button-${i}`);
//       expect(jobType).toHaveTextContent(/Full Time/);
//       expect(jobRole).toHaveTextContent(/Developer|Manager|Recruiter|Analyst/); // check for the job roles
//       expect(location).toHaveTextContent(/Visakhapatnam,Andhra Pradesh,India/);
//       expect(applyButton).toHaveTextContent(/Apply Now/);
//     }
//   });

//   it('opens the form when clicking on Apply Now button and sets the applyingJobFor value', () => {
//     render(<Careers />);
//     const careersList = screen.getByTestId('careers-list');
//     const applyButton = screen.getByTestId('career-apply-button-0');
//     fireEvent.click(applyButton);
//     expect(screen.getByLabelText(/First Name/)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Last Name/)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Mobile/)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument();
//     expect(screen.getByText(/Upload Resume/)).toBeInTheDocument();
//     expect(screen.getByText(/Apply Now/)).toBeInTheDocument();
//   });

//   it('validates the form and resets it after submission', async () => {
//     render(<Careers />);
//     const applyButton = screen.getByTestId('career-apply-button-0');
//     fireEvent.click(applyButton);
//     fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: '' } });
//     fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: '' } });
//     fireEvent.change(screen.getByLabelText(/Mobile/), { target: { value: '123' } });
//     fireEvent.change(screen.getByLabelText(/Email Address/), { target: { value: 'invalid-email'} });
//   });
});