import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-gray-100 h-full m-8 my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              Get to Know Us
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Welcome to our group project! We are a team of motivated individuals who have come together to 
              create a semester-long project that showcases our skills and creativity. Our goal is to design 
              and develop a unique solution to a real-world problem. Throughout this journey, we will be 
              collaborating closely with each other, sharing ideas and supporting one another to ensure the 
              success of our project. We are excited to take on this challenge and can't wait to see where this 
              project takes us!
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Our Story
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>
                    Embarking on a semester-long group project can be an exciting but daunting task. We know 
                    from experience that it takes dedication, communication, and creativity to bring a project 
                    to fruition. That's why we're passionate about helping groups like yours succeed. 
                    Our team has the skills and expertise to guide you through the process, from planning 
                    to execution. Let us help you turn your project into a success story!
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Our Mission
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>
                    <div>
                        - To create a collaborative and inclusive environment for students to work on a semester-long group project.
                    </div>
                    <div>
                        - To provide resources and support for students to develop their project management, communication, and technical skills.
                    </div>
                    <div>
                        - To foster a sense of community and teamwork among project members.
                    </div>
                    <div>
                        - To encourage creativity and innovation in project design and development.
                    </div>
                    <div>
                        - To prepare us for success in our future careers through hands-on, real-world experience.
                    </div>
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Our Team
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>
                    We are a dedicated group of students who have come together to collaborate on a semester-long project. With diverse backgrounds and skill sets, we each bring unique perspectives and expertise to the table. Together, we are committed to working collaboratively to achieve our project goals and deliver outstanding results. Get to know our team members below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs