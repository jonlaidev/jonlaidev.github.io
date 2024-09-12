import StripesContenContainer from './StripesContentContainer'

const ContentContainer = () => {

  return (
    <div className="border-l-gray">
      <div className="mx-8">
        <h1 className="text-4xl py-8">Profile</h1>
        <blockquote className="relative">
          <p>"Developing software isn't just about writing code. It's about creating solutions that make people's lives easier, more efficient, and more enjoyable."</p>
          <p className="font-extrabold">- Joni Laine</p>
          <span className="entypo-quote"></span>
        </blockquote>
      </div>
<StripesContenContainer />
      <div className="text-center p-8">
        <h2 className="text-3xl">A few words about me</h2>
        <p>
          I am a dedicated Software Development student with a passion for learning and innovation. With a unique background as a former truck and excavator driver, I bring a strong work ethic, problem-solving skills, and a practical mindset to my programming journey. Currently honing my skills in Python, Javascript, Typescript, Tailwind, React, Vite, API, Node.js, etc.
        </p>
      </div>
      <div className="flex flex-col m-8">
        <h2 className="text-3xl">Philosophy</h2>
        <div className="relative">
          <p className="">My philosophy as a software developer revolves around continuous learning, sustainable practices and building trust through a strong work ethic. I am passionate about writing clean, optimized, and green code that not only solves complex problems but also minimizes environmental impact. 
            Committed to creating user-friendly applications, I strive to contribute to projects that promote sustainability and make a meaningful impact in the tech landscape.</p>
        </div>
      </div>
<StripesContenContainer />
      <div className="text-center m-8">
        <h2 className="text-3xl">Interests & Hobbies</h2>
        <p>
          In my leisure time, I immerse myself in a diverse array of interests and hobbies. Whether it's delving into the virtual worlds of gaming or honing my coding skills through personal projects. 
          Beyond these, I have a penchant for exploring the intricacies of economy and finance, indulging in the craftsmanship of cigars and mechanical watches, and admiring the engineering in cars and machines. Above all, I cherish the journey of continuous learning, as each new interest becomes an opportunity for personal growth and enrichment.
        </p>
      </div>

    </div>
  );
};

export default ContentContainer;