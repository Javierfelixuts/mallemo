import video1 from '~/assets/videos/working_house.mp4';
import video2 from '~/assets/videos/working_house_2.mp4';
import video3 from '~/assets/videos/working_house_3.mp4';
import './sectionVideoRemodeling.css'

const SectionVideoRemodeling = () => {
 
  return (
    <>
      <div className="m-6 py-12 md:py-20 lg:py-0 lg:flex lg:items-start lg:h-screen lg:gap-8 ">
        <div className="basis-1/3 text-center lg:text-left pb-10 md:pb-16 mx-auto" data-astro-source-file="C:/projects/mallemo/mallemo/src/components/widgets/Hero2.astro" data-astro-source-loc="32:78"> <p className="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase" data-astro-source-file="C:/projects/mallemo/mallemo/src/components/widgets/Hero2.astro" data-astro-source-loc="35:14">In progress house remodeling</p> <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200" data-astro-source-file="C:/projects/mallemo/mallemo/src/components/widgets/Hero2.astro" data-astro-source-loc="43:14">
          Modern and Functional Remodeling
        </h1> <div className="max-w-3xl mx-auto lg:max-w-none text-justify"> 
          <p className="text-xl text-muted mb-6 dark:text-slate-300"> <span className="sm:inline text-justify" data-astro-source-file="C:/projects/mallemo/mallemo/src/pages/index.astro" data-astro-source-loc="121:51">
          Explore how this remodeling project transformed a <span className="font-semibold" data-astro-source-file="C:/projects/mallemo/mallemo/src/pages/index.astro" >traditional house into a modern, functional, and stylish home.</span> With careful attention to detail, we redesigned every corner to enhance the aesthetics and maximize space efficiency. From a contemporary kitchen redesign to the renovation of bathrooms and living areas, each element was thoughtfully crafted to provide comfort and beauty. ¡watch the full transformation process and the stunning final results in this video!
        </span>
        </p>
          </div>
        </div>
        <div className="basis-2/3">
        
            <div className="flex flex-wrap justify-center relative m-auto max-w-5xl">
              <video controls width='200px' height='400px' className=" aspect-ratio mt-5" src={video1}></video>
              <video controls width='200' height='400px' className=" aspect-ratio mt-5" src={video2}></video>
              <video controls width='200' height='400px' className=" aspect-ratio mt-5" src={video3}></video>
            </div>
      </div>
        
      </div>
    </>
  )
}

export default SectionVideoRemodeling