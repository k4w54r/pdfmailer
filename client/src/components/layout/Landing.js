import React, { Fragment, useState } from 'react';
import { convertAndSend } from '../../actions/convertAndSend';

const App = () => {
  const [formData, setFormData] = useState({
    url: '',
    email: '',
  });
  const { url, email } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log('Clicked');
    convertAndSend({
      url,
      email,
    });
  };

  return (
    <Fragment>
      <section className='container'>
        <div>
          <h1 className='large text-primary text-center'>
            Convert URL to PDF and Send as Email
          </h1>
          <hr />
        </div>
        <div>
          <form className='form' onSubmit={(e) => handleOnSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='URL'
                name='url'
                value={url}
                onChange={(e) => handleOnChange(e)}
                required
              />
              <input
                type='text'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => handleOnChange(e)}
                required
              />
            </div>
            <input
              type='submit'
              className='btn btn-primary'
              value='Convert and Send'
            />
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
