import React, { Fragment, useState } from 'react';
import { convertAndSend } from '../../actions/convertAndSend';
import { Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const App = () => {
  const [formData, setFormData] = useState({
    url: '',
    email: '',
    name: '',
  });
  const { url, email, name } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log('Clicked');
    convertAndSend({
      url,
      email,
      name,
    });
  };

  return (
    <Fragment>
      <section className='container'>
        <div>
          <Header as='h1' color='green' textAlign='center'>
            <Icon.Group size='large'>
              <Icon name='mail' color='green' />
              <Icon corner name='file pdf outline' color='green' />
            </Icon.Group>
            pdfMailer
          </Header>
          <h1 className='text-dark'>
            Convert URL to PDF and send to your Email
          </h1>
          <hr className='text-primary' />
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
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => handleOnChange(e)}
                required
              />
              <input
                type='text'
                placeholder='Enter a name for the PDF'
                name='name'
                value={name}
                onChange={(e) => handleOnChange(e)}
                required
              />
            </div>
            <input type='submit' className='button' value='Convert and Send' />
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
