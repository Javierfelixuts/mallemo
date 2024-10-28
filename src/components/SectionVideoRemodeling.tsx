import { useState } from 'react';
import video1 from '~/assets/videos/working_house.mp4';
import video2 from '~/assets/videos/working_house_2.mp4';
import video3 from '~/assets/videos/working_house_3.mp4';
import './sectionVideoRemodeling.css'

const SectionVideoRemodeling = () => {
  const [activeTab, setActiveTab] = useState(video1);
  const [activeClass, setActiveClass] = useState(1);

  function handleTab(tabIndex: string, index: number) {
    window.console.log("ok");
    setActiveTab(tabIndex);
    setActiveClass(index);
  }

  return (
    <>
      <div className="m-6 py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8 ">
        <div className="basis-1/3 text-center lg:text-left pb-10 md:pb-16 mx-auto" data-astro-source-file="C:/projects/mallemo/mallemo/src/components/widgets/Hero2.astro" data-astro-source-loc="32:78"> <p className="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase" data-astro-source-file="C:/projects/mallemo/mallemo/src/components/widgets/Hero2.astro" data-astro-source-loc="35:14">In progress house remodeling</p> <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200" data-astro-source-file="C:/projects/mallemo/mallemo/src/components/widgets/Hero2.astro" data-astro-source-loc="43:14">
          Modern and Functional Remodeling
        </h1> <div className="max-w-3xl mx-auto lg:max-w-none text-justify"> 
          <p className="text-xl text-muted mb-6 dark:text-slate-300"> <span className="sm:inline text-justify" data-astro-source-file="C:/projects/mallemo/mallemo/src/pages/index.astro" data-astro-source-loc="121:51">
          Explore how this remodeling project transformed a <span className="font-semibold" data-astro-source-file="C:/projects/mallemo/mallemo/src/pages/index.astro" >traditional house into a modern, functional, and stylish home.</span> With careful attention to detail, we redesigned every corner to enhance the aesthetics and maximize space efficiency. From a contemporary kitchen redesign to the renovation of bathrooms and living areas, each element was thoughtfully crafted to provide comfort and beauty. Watch the full transformation process and the stunning final results in this video!
        </span>
        </p>
          </div>
        </div>
        <div className="basis-2/3">
        <div className="md:hidden tabs mb-9" >
          <ul>
            <li onClick={() => handleTab(video1, 1)}><a className={`tab ${activeClass === 1 ? 'active' : ''}`}>STEP 1</a></li>
            <li onClick={() => handleTab(video2, 2)}><a className={`tab ${activeClass === 2 ? 'active' : ''}`} >STEP 2</a></li>
            <li onClick={() => handleTab(video3, 3)}><a className={`tab ${activeClass === 3 ? 'active' : ''}`} >STEP 3</a></li>
          </ul>
      </div>
            <div className="relative m-auto max-w-5xl">
              <video controls width='90%' height='400px' className="basis-2/3 aspect-ratio mt-5" src={activeTab}></video>
            </div>
      </div>
        
      </div>
    </>
  )
}

export default SectionVideoRemodeling