import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

const Home = () => {

  return <div className="bg-primary/60 h-full">
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
               <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

                 <motion.h1 
                   variants={fadeIn('down',0.2)}
                   initial='hidden'
                   animate='show'
                   exit='hidden'
                   className="h1">Programador <br />
                   <span className="bg-gradient-to-r from-gradient-start">FullStack</span>
                 </motion.h1>


                 <motion.p
                    variants={fadeIn('right',0.3)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className="max-w-sm xl:max-w-xl max-auto xl:mx-0 mb-10 xl:mb-16">
                    Soy un apasionado desarrollador con una sólida base en programación y un compromiso constante con la excelencia técnica. Mi trayectoria abarca varios años en la industria tecnológica, donde he ocupado puestos full-stack en diferentes empresas, lo que me ha brindado una perspectiva amplia y profunda del ciclo de desarrollo de software e impulsar soluciones innovadoras.
                 </motion.p>
                 {/*  
                 <div className="flex justify-center relative xl:hidden">
                   <ProjectsBtn /> 
                 </div>
              <motion.div
                   variants={fadeIn('up',0.4)}
                   initial='hidden'
                   animate='show'
                   exit='hidden'
                   className='hidden xl:flex'
                >
                   <ProjectsBtn /> 
                </motion.div>   */}
               </div>
            </div>
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
               <div className="bg-none xl:bg-cover bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
              
               <ParticlesContainer />
               <motion.div 
                    variants={fadeIn('up',0.5)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    transition={{duration: 2, ease: 'easeInOut'}}
                    className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-40 lg:right-[8%] ">
                 <Avatar />
               </motion.div>

            </div>
         </div>;
};

export default Home;
