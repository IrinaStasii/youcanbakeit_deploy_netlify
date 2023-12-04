import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './TopBanner.css';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import { useNavigate } from 'react-router-dom';

const TopBanner = () => {
  const [input, setInput] = useState('');
  const navigateTo = useNavigate();

  //search input on button click event
  const searchButtonClick = (event) => {
    event.preventDefault();
    const searchTerm = input.toLowerCase();
    navigateTo(`/search-results/${searchTerm}`);
    setInput('');
  };

  //search input on enter event
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchTerm = input.toLowerCase();
      navigateTo(`/search-results/${searchTerm}`);
      setInput('');
    }
  };
  return (
    <>
      {/* social media icons */}
      <ul className='icons'>
        <li>
          {' '}
          <a href='https://www.facebook.com/youcanbakeit'>
            <img src='/icons/fb_icon.png' alt='no_fb' />
          </a>
        </li>
        <li>
          {' '}
          <a href='https://www.linkedin.com/in/irina-stasii/'>
            <img src='/icons/in_icon.png' alt='no_in' />
          </a>
        </li>
        <li>
          {' '}
          <a href='https://www.instagram.com/irina_stasii/'>
            <img src='/icons/inst_icon.png' alt='no_inst' />
          </a>
        </li>
      </ul>

      {/* login and signup modals */}
      <div className='modals'>
        <LoginModal />
        <SignUpModal />
      </div>

      {/* search input */}
      <Form className='d-flex'>
        <Form.Control
          type='search'
          placeholder='Search on this website'
          className='me-2 shadow bg-white rounded'
          aria-label='Search'
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          value={input}
        />
        <Button
          disabled={!input}
          variant='outline-secondary'
          onClick={searchButtonClick}
        >
          Search
        </Button>
      </Form>
    </>
  );
};

export default TopBanner;
