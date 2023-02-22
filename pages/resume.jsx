import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Eric | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Eric Vara</h2>
          <div className='flex'>
            <a
              href='http://www.linkedin.com/in/ericIvara'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/vara78'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>RESTAPI
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Revature
            </span>
            <span className='px-2'>|</span>Plano, TX
          </p>
          <p className='py-1 italic'>Software Engineer (Mar 2022 - Jan 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Designed, developed, and maintained software applications using a variety of programming languages and frameworks, including HTML, CSS, Tailwind, Sass, JavaScript, React, Express, Node, Java, Spring, SQL, Bootstrap, and more. Successfully delivered high-quality solutions on-time and on-budget.</li>
            <li>Collaborated with AT&T customers to gather and understand their technical requirements for API usage, providing guidance and support as needed to ensure successful integration with their systems. Maintained strong relationships with customers, acting as a liaison between technical and non-technical teams.</li>
            <li>Worked closely with cross-functional teams, including development, testing, and deployment, to ensure seamless integration and delivery of APIs. Facilitated communication and coordination among team members, ensuring timely resolution of issues and alignment on project milestones.</li>
            <li>Monitored API performance and usage metrics, identifying areas for improvement and optimization, and provided recommendations to both internal and external stakeholders. Leveraged data and analytics to continuously improve system reliability and scalability.</li>
            <li>Participated in code reviews, providing constructive feedback to team members to ensure adherence to best practices and maintain code quality. Actively sought opportunities to improve development processes and standards.</li>
            <li>Demonstrated strong problem-solving and critical thinking skills, identifying root causes of issues and developing effective solutions. Maintained a customer-focused mindset, prioritizing solutions that met both technical and business needs.</li>
            <li>Actively engaged in professional development opportunities, staying up-to-date with the latest technologies and industry trends. Participated in training programs and knowledge-sharing sessions to continually improve skills and capabilities.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Networking Communications Services</span>
            <span className='px-2'>|</span>Houston, TX
          </p>
          <p className='py-1 italic'>Technician Level I (June 2021 – Mar 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Installed and terminated copper and fiber optic cabling, including Cat5e, Cat6, and single-mode and multi-mode fiber, in accordance with industry standards and best practices.</li>
            <li>Mounted and secured network equipment, such as switches, routers, and servers, on racks and cabinets in IDF rooms and data centers.</li>
            <li>Configured and tested network equipment and cabling to ensure proper connectivity and functionality.</li>
            <li>Assisted with the design and layout of network infrastructure, including creating detailed diagrams and floor plans.</li>
            <li>Worked closely with project managers and other team members to ensure projects were completed on time and within budget.</li>
            <li>Troubleshot and resolved issues with network connectivity and equipment malfunctions.</li>
            <li>Maintained accurate records of all equipment, cabling, and installation activities, including cable labeling and documentation.</li>
            <li>Complied with all safety and security protocols, including using proper personal protective equipment and following established security procedures.</li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              US ARMY
            </span>
            <span className='px-2'>|</span>Fort Bragg, NC
          </p>
          <p className='py-1 italic'>Diesel Mechanic, 82nd Airborne Division (Nov 2014 - May 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Developed expertise in maintaining and repairing a variety of military vehicles, from heavy tanks to lighter transport vehicles. Proficient in troubleshooting and resolving complex issues to ensure optimal vehicle performance.</li>
            <li>Graduated from airborne school with flying colors, and subsequently took part in several successful airborne operations. Experienced in all aspects of airborne missions, from planning and preparation to execution and debriefing.</li>
            <li>Proven ability to lead and work effectively in team environments, consistently achieving mission objectives. Adept at identifying and utilizing team members' strengths to maximize group performance. Able to remain calm and focused under pressure, using problem-solving and critical thinking skills to make sound decisions.</li>
            <li>Gained experience working collaboratively with individuals from diverse backgrounds, fostering an environment of mutual respect and cooperation. Committed to promoting teamwork and developing positive relationships to achieve shared goals.</li>
            <li>Participated in numerous airborne operations, deploying alongside combat units and providing critical security support. Demonstrated a commitment to mission success and a willingness to take on challenging assignments in high-stress situations.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
