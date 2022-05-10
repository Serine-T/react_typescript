import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC =()=> {
  const history = useHistory()
  return (
    <div>
      <h3>AboutPage</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ad. Fugiat, sint, aut expedita impedit molestiae delectus odio culpa ipsa, unde maiores nulla amet illo praesentium. Officiis ut eaque consequuntur non architecto hic, atque corrupti autem nihil deserunt eligendi delectus saepe velit necessitatibus blanditiis maxime aperiam vero praesentium! Maxime quaerat est quam vitae rerum harum in numquam velit et totam doloribus omnis eius, optio ab saepe obcaecati error hic eveniet unde. Ratione similique id assumenda, ea explicabo inventore impedit possimus!</p>
      <button className='btn' onClick={()=>history.push('/')}>Home page</button>
    </div>
  )
}

export default AboutPage;