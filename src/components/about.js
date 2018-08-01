import React from 'react';
import Contact from './contact';

const about = ({ format }) => (
  <section id="about">
    <div className="about-container">
      <h1 className="section-header">About Me</h1>
      <div className="about-body">
        <p>
          I'm a javascript developer with experience across the full stack. <br /> 
          <br /> 
          For the Front End, I specialize in using ReactJS but have some experience with other frameworks such as AngularJS and Backbone along with Apollo and Redux for global state management. If you have a design in mind, I can turn that into a working product with a quick turnaround. <br /> 
          <br /> 
          For the Back End, I have most commonly used Express with the REST API, but I have also have used Prisma and GraphQL for making API calls. And for databases, I have a strong understanding of MongoDB and PostgreSQL but have also used MySQL. I have experience with working with Geo-Queries and am comfortable with a lot of Google's API's such Maps and Places. <br /> 
          <br /> 
          I also have experience with deployment of applications. I'm very familiar with deployment directly on AWS using services such as EC2 and RDS and a Load Balancer. I also have experience with using Docker for deployment. For testing, I use a combination of Jest, Enzyme, and Mocha. <br /> 
          <br /> 
          My passion lies in creating and building new applications from the ground up. Please feel free to contact me at 925-457-1925. I love meeting new people and I can't wait to start coding!
        </p>
      </div>
      <Contact format={format}/>
    </div>
  </section>
);

module.exports = about;