import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function SearchForm() {
  return (
    <>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Button variant="primary">Search</Button>{' '}

    </>
  );
}

export default SearchForm;