import React from 'react';
// Icon
import {BsArrowUpRight} from 'react-icons/bs'

// motion
import {motion} from 'framer-motion'

// Variants
import {fadeIn} from '../variants';

// services data
const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!',
    link: 'Learn more'
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!',
    link: 'Learn more'
  },
  {
    name: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!',
    link: 'Learn more'
  },
  {
    name: 'Product Branding',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!',
    link: 'Learn more'
  }
]

const Services = () => {
  return(
    <section className='section lg:mb-24' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text & Image*/}
          <motion.div 
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Frontend Developer with over 5 years of experience.</h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div 
            className='flex-1 '
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
          >
            {/* services list */}
            <div className=''>
              {services.map((service, index) => {
                // Destructure
                const {name, link, description} = service;
                return(
                  <div className='border-b border-white/20 h-[146px] mb-[36px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a 
                        href="" 
                        className='btn w-9 h-9 mb-[24px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
