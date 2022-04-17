import { useRef } from 'react';
import { List } from '../../models/Types'; 

import { Form, Button } from 'react-bootstrap';

const NewAnimeForm: React.FC<{onAddAnime:any}> = (props)=> {
  const titleInputRef: any = useRef();
  const imageInputRef: any = useRef();
  const genreInputRef: any = useRef();
  const descriptionInputRef: any = useRef();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredGenre = genreInputRef.current.value;
   // const enteredDescription = descriptionInputRef.current.value;

    const animeData = {
      title: enteredTitle,
      image: enteredImage,
      genre: enteredGenre,
     //description: enteredDescription,
    };

    props.onAddAnime(animeData);
 }

  return (

      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId='title'>
          <Form.Label>Anime Title</Form.Label>
          <Form.Control type='text' required id='title' ref={titleInputRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId='image'>
          <Form.Label>Image URL</Form.Label>
          <Form.Control type='url' required id='image' ref={imageInputRef} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='genre'>
          <Form.Label>Anime Genre</Form.Label>
          <Form.Control type="text" required id='title' ref={genreInputRef} />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label htmlFor='description'>Description</Form.Label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </Form.Group> */}
        <div className="mb-3">
            <Button variant="dark" type="submit">
              Add
            </Button>
        </div>
      </Form>
    
  );
}

export default NewAnimeForm;